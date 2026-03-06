export default function EQDisplay({ eq }) {
  if (!eq) return null;

  // Draw a simple EQ curve as SVG
  const W = 600, H = 200;
  const minFreq = 20, maxFreq = 20000;
  const minDb = -12, maxDb = 12;

  function freqToX(f) {
    return (Math.log10(f / minFreq) / Math.log10(maxFreq / minFreq)) * W;
  }
  function dbToY(db) {
    return H / 2 - (db / (maxDb - minDb)) * H;
  }

  // Generate grid lines
  const freqLines = [50, 100, 200, 500, 1000, 2000, 5000, 10000, 20000];
  const dbLines = [-9, -6, -3, 0, 3, 6, 9];

  // Build a rough EQ curve path
  const points = [];
  const numPts = 200;
  for (let i = 0; i <= numPts; i++) {
    const freq = minFreq * Math.pow(maxFreq / minFreq, i / numPts);
    let gain = 0;
    for (const band of eq.bands) {
      if (band.type === "HPF") {
        if (freq < band.freq) {
          const octaves = Math.log2(band.freq / freq);
          gain -= octaves * 12; // -12dB/oct
        }
      } else if (band.type === "HShelf") {
        const octaves = Math.log2(freq / band.freq);
        if (octaves > 0) gain += band.gain;
        else if (octaves > -1) gain += band.gain * (1 + octaves);
      } else {
        // Bell
        const octDist = Math.log2(freq / band.freq);
        const width = 1 / (band.q || 1);
        const factor = Math.exp(-0.5 * (octDist / width) ** 2);
        gain += band.gain * factor;
      }
    }
    gain = Math.max(minDb, Math.min(maxDb, gain));
    points.push(`${freqToX(freq).toFixed(1)},${dbToY(gain).toFixed(1)}`);
  }

  return (
    <div className="chain-block eq-block">
      <h3>1. EQ — {eq.label}</h3>
      <div className="eq-graph-wrap">
        <svg viewBox={`0 0 ${W} ${H}`} className="eq-graph">
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
          {/* Curve */}
          <polyline points={points.join(" ")} className="eq-curve" />
          {/* Band markers */}
          {eq.bands.map((b, i) => (
            <circle
              key={i}
              cx={freqToX(b.freq)}
              cy={dbToY(b.type === "HPF" ? 0 : b.gain)}
              r={6}
              className={`eq-dot ${b.gain > 0 ? "boost" : "cut"}`}
            />
          ))}
        </svg>
      </div>
      <table className="eq-table">
        <thead>
          <tr><th>Type</th><th>Freq</th><th>Gain</th><th>Q</th><th>Note</th></tr>
        </thead>
        <tbody>
          {eq.bands.map((b, i) => (
            <tr key={i}>
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
