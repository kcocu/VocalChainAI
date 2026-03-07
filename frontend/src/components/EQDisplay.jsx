import { useState, useRef, useCallback } from "react";

export default function EQDisplay({ eq }) {
  if (!eq) return null;

  const W = 600, H = 200;
  const minFreq = 20, maxFreq = 20000;
  const minDb = -12, maxDb = 12;

  const [bands, setBands] = useState(() => eq.bands.map((b) => ({ ...b })));
  const [dragging, setDragging] = useState(null); // index of dragged band
  const svgRef = useRef(null);

  function freqToX(f) {
    return (Math.log10(f / minFreq) / Math.log10(maxFreq / minFreq)) * W;
  }
  function dbToY(db) {
    return H / 2 - (db / (maxDb - minDb)) * H;
  }
  function xToFreq(x) {
    return minFreq * Math.pow(maxFreq / minFreq, x / W);
  }
  function yToDb(y) {
    return -((y - H / 2) / H) * (maxDb - minDb);
  }

  function getSVGPoint(e) {
    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    const x = ((clientX - rect.left) / rect.width) * W;
    const y = ((clientY - rect.top) / rect.height) * H;
    return { x, y };
  }

  const handlePointerDown = useCallback((i) => (e) => {
    e.preventDefault();
    setDragging(i);
  }, []);

  const handlePointerMove = useCallback((e) => {
    if (dragging === null) return;
    e.preventDefault();
    const { x, y } = getSVGPoint(e);
    const freq = Math.round(Math.max(20, Math.min(20000, xToFreq(x))));
    const gain = Math.round(Math.max(-12, Math.min(12, yToDb(y))) * 10) / 10;

    setBands((prev) => {
      const next = [...prev];
      const band = { ...next[dragging] };
      band.freq = freq;
      if (band.type !== "HPF") band.gain = gain;
      next[dragging] = band;
      return next;
    });
  }, [dragging]);

  const handlePointerUp = useCallback(() => {
    setDragging(null);
  }, []);

  // Generate grid lines
  const freqLines = [50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000];
  const dbLines = [-9, -6, -3, 0, 3, 6, 9];

  // Build EQ curve path
  const points = [];
  const numPts = 200;
  for (let i = 0; i <= numPts; i++) {
    const freq = minFreq * Math.pow(maxFreq / minFreq, i / numPts);
    let gain = 0;
    for (const band of bands) {
      if (band.type === "HPF") {
        if (freq < band.freq) {
          const octaves = Math.log2(band.freq / freq);
          gain -= octaves * 12;
        }
      } else if (band.type === "HShelf") {
        const octaves = Math.log2(freq / band.freq);
        if (octaves > 0) gain += band.gain;
        else if (octaves > -1) gain += band.gain * (1 + octaves);
      } else {
        const octDist = Math.log2(freq / band.freq);
        const width = 1 / (band.q || 1);
        const factor = Math.exp(-0.5 * (octDist / width) ** 2);
        gain += band.gain * factor;
      }
    }
    gain = Math.max(minDb, Math.min(maxDb, gain));
    points.push(`${freqToX(freq).toFixed(1)},${dbToY(gain).toFixed(1)}`);
  }

  // Fill area under/over zero line
  const fillPoints = [
    `${freqToX(minFreq).toFixed(1)},${dbToY(0).toFixed(1)}`,
    ...points,
    `${freqToX(maxFreq).toFixed(1)},${dbToY(0).toFixed(1)}`,
  ].join(" ");

  const handleReset = () => {
    setBands(eq.bands.map((b) => ({ ...b })));
  };

  return (
    <div className="chain-block eq-block">
      <div className="eq-header">
        <h3>1. EQ — {eq.label}</h3>
        <button className="eq-reset-btn" onClick={handleReset} title="Reset to preset">Reset</button>
      </div>
      <p className="eq-drag-hint">Drag the dots to adjust frequency and gain</p>
      <div className="eq-graph-wrap">
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="eq-graph interactive"
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onMouseLeave={handlePointerUp}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
        >
          {/* Grid */}
          {freqLines.map((f) => (
            <g key={f}>
              <line x1={freqToX(f)} y1={0} x2={freqToX(f)} y2={H} className="grid-line" />
              <text x={freqToX(f)} y={H - 2} className="grid-label">
                {f >= 1000 ? `${f / 1000}k` : f}
              </text>
            </g>
          ))}
          {dbLines.map((db) => (
            <g key={db}>
              <line x1={0} y1={dbToY(db)} x2={W} y2={dbToY(db)} className={`grid-line ${db === 0 ? "zero" : ""}`} />
              <text x={4} y={dbToY(db) - 3} className="grid-label">{db > 0 ? "+" : ""}{db}</text>
            </g>
          ))}
          {/* Fill */}
          <polygon points={fillPoints} className="eq-fill" />
          {/* Curve */}
          <polyline points={points.join(" ")} className="eq-curve" />
          {/* Band markers */}
          {bands.map((b, i) => {
            const cx = freqToX(b.freq);
            const cy = dbToY(b.type === "HPF" ? 0 : b.gain);
            return (
              <g key={i}>
                {/* Larger invisible hit area */}
                <circle
                  cx={cx} cy={cy} r={16}
                  fill="transparent"
                  style={{ cursor: "grab" }}
                  onMouseDown={handlePointerDown(i)}
                  onTouchStart={handlePointerDown(i)}
                />
                <circle
                  cx={cx} cy={cy} r={7}
                  className={`eq-dot ${b.gain > 0 ? "boost" : "cut"} ${dragging === i ? "active" : ""}`}
                  style={{ cursor: "grab", pointerEvents: "none" }}
                />
                {/* Tooltip while dragging */}
                {dragging === i && (
                  <text
                    x={cx}
                    y={cy - 14}
                    className="eq-tooltip"
                    textAnchor="middle"
                  >
                    {b.freq >= 1000 ? `${(b.freq / 1000).toFixed(1)}k` : b.freq}Hz {b.type !== "HPF" ? `${b.gain > 0 ? "+" : ""}${b.gain}dB` : ""}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <table className="eq-table">
        <thead>
          <tr><th>Type</th><th>Freq</th><th>Gain</th><th>Q</th><th>Note</th></tr>
        </thead>
        <tbody>
          {bands.map((b, i) => (
            <tr key={i} className={dragging === i ? "highlight" : ""}>
              <td>{b.type}</td>
              <td>{b.freq >= 1000 ? `${(b.freq / 1000).toFixed(1)}kHz` : `${b.freq}Hz`}</td>
              <td className={b.gain > 0 ? "boost" : b.gain < 0 ? "cut" : ""}>{b.type === "HPF" ? "-" : `${b.gain > 0 ? "+" : ""}${b.gain}dB`}</td>
              <td>{b.q}</td>
              <td className="note">{b.note || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
