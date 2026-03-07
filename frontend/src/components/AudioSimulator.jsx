import { useState, useRef, useCallback } from "react";

export default function AudioSimulator({ chain }) {
  const [file, setFile] = useState(null);
  const [playing, setPlaying] = useState(false);
  const [wet, setWet] = useState(false);
  const audioCtxRef = useRef(null);
  const sourceRef = useRef(null);
  const bufferRef = useRef(null);
  const filtersRef = useRef([]);
  const compressorRef = useRef(null);
  const gainRef = useRef(null);

  const handleFile = async (e) => {
    const f = e.target.files[0];
    if (!f) return;
    setFile(f);
    stop();

    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    audioCtxRef.current = ctx;

    const arrayBuf = await f.arrayBuffer();
    const audioBuf = await ctx.decodeAudioData(arrayBuf);
    bufferRef.current = audioBuf;
  };

  const buildFilters = useCallback((ctx) => {
    const filters = [];
    if (!chain?.eq?.bands) return filters;

    for (const band of chain.eq.bands) {
      const filter = ctx.createBiquadFilter();
      if (band.type === "HPF") {
        filter.type = "highpass";
        filter.frequency.value = band.freq;
        filter.Q.value = band.q || 0.7;
      } else if (band.type === "HShelf") {
        filter.type = "highshelf";
        filter.frequency.value = band.freq;
        filter.gain.value = band.gain;
      } else {
        filter.type = "peaking";
        filter.frequency.value = band.freq;
        filter.gain.value = band.gain;
        filter.Q.value = band.q || 1;
      }
      filters.push(filter);
    }
    return filters;
  }, [chain]);

  const buildCompressor = useCallback((ctx) => {
    if (!chain?.comp) return null;
    const comp = ctx.createDynamicsCompressor();

    const parseVal = (str) => {
      if (!str) return null;
      const m = String(str).match(/-?\d+\.?\d*/);
      return m ? parseFloat(m[0]) : null;
    };

    const threshold = parseVal(chain.comp.threshold);
    const ratio = parseVal(chain.comp.ratio);
    const attack = parseVal(chain.comp.attack);
    const release = parseVal(chain.comp.release);

    if (threshold != null) comp.threshold.value = Math.max(-100, Math.min(0, threshold));
    if (ratio != null) comp.ratio.value = Math.max(1, Math.min(20, ratio));
    if (attack != null) comp.attack.value = Math.max(0, Math.min(1, attack / 1000));
    if (release != null) comp.release.value = Math.max(0, Math.min(1, release / 1000));

    return comp;
  }, [chain]);

  const play = (useWet) => {
    if (!bufferRef.current || !audioCtxRef.current) return;
    stop();

    const ctx = audioCtxRef.current;
    if (ctx.state === "suspended") ctx.resume();

    const source = ctx.createBufferSource();
    source.buffer = bufferRef.current;
    sourceRef.current = source;

    if (useWet) {
      const filters = buildFilters(ctx);
      const compressor = buildCompressor(ctx);
      filtersRef.current = filters;
      compressorRef.current = compressor;

      let lastNode = source;
      for (const f of filters) {
        lastNode.connect(f);
        lastNode = f;
      }
      if (compressor) {
        lastNode.connect(compressor);
        lastNode = compressor;
      }
      lastNode.connect(ctx.destination);
    } else {
      source.connect(ctx.destination);
    }

    source.start(0);
    setPlaying(true);
    setWet(useWet);
    source.onended = () => setPlaying(false);
  };

  const stop = () => {
    if (sourceRef.current) {
      try { sourceRef.current.stop(); } catch {}
      sourceRef.current.disconnect();
      sourceRef.current = null;
    }
    filtersRef.current.forEach((f) => f.disconnect());
    filtersRef.current = [];
    if (compressorRef.current) {
      compressorRef.current.disconnect();
      compressorRef.current = null;
    }
    setPlaying(false);
  };

  if (!chain) return null;

  return (
    <div className="audio-simulator">
      <h3>Audio Preview (Experimental)</h3>
      <p className="audio-hint">
        Upload a vocal file to hear a rough EQ/Compressor simulation.
        This uses Web Audio API and is for reference only — actual plugins will sound different.
      </p>

      <div className="audio-controls">
        <label className="audio-upload">
          <input type="file" accept="audio/*" onChange={handleFile} />
          <span>{file ? file.name : "Choose audio file..."}</span>
        </label>

        {file && (
          <div className="audio-buttons">
            <button
              className={`audio-btn ${playing && !wet ? "active" : ""}`}
              onClick={() => play(false)}
              disabled={playing}
            >
              Dry (Original)
            </button>
            <button
              className={`audio-btn wet ${playing && wet ? "active" : ""}`}
              onClick={() => play(true)}
              disabled={playing}
            >
              Wet (Processed)
            </button>
            <button
              className="audio-btn stop"
              onClick={stop}
              disabled={!playing}
            >
              Stop
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
