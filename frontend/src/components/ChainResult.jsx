import { useRef } from "react";
import EQDisplay from "./EQDisplay";

function PluginCard({ id, step, title, data, color }) {
  if (!data) return null;
  const skipKeys = new Set(["label", "note", "plugin", "plugins", "eqTip"]);
  const entries = Object.entries(data).filter(([k]) => !skipKeys.has(k));

  return (
    <div id={id} className={`chain-block plugin-card ${color || ""}`}>
      <h3>{step}. {title} — {data.label || ""}</h3>
      {data.plugin && <div className="plugin-name">{data.plugin}</div>}
      {data.plugins && (
        <div className="plugin-name">
          {data.plugins.join(" / ")}
        </div>
      )}
      <div className="plugin-params">
        {entries.map(([key, val]) => (
          <div key={key} className="param-row">
            <span className="param-key">{key}</span>
            <span className="param-val">{Array.isArray(val) ? val.join(", ") : val}</span>
          </div>
        ))}
      </div>
      {data.eqTip && <p className="plugin-note">{data.eqTip}</p>}
      {data.note && <p className="plugin-note">{data.note}</p>}
    </div>
  );
}

export default function ChainResult({ chain, isFavorite, onToggleFavorite }) {
  if (!chain) return null;

  // Build dynamic step numbering
  let step = 1;
  const steps = [];
  steps.push({ n: step++, title: "EQ", key: "eq" });
  steps.push({ n: step++, title: "Compressor", key: "comp" });
  steps.push({ n: step++, title: "De-Esser", key: "deesser" });
  if (chain.pitch) steps.push({ n: step++, title: "Pitch Correction", key: "pitch" });
  if (chain.saturation) steps.push({ n: step++, title: "Saturation", key: "saturation" });
  if (chain.doubling) steps.push({ n: step++, title: "Vocal Doubling", key: "doubling" });
  steps.push({ n: step++, title: "Delay", key: "delay", color: "delay" });
  steps.push({ n: step++, title: "Reverb", key: "reverb", color: "reverb" });

  // Signal flow: separate Insert and Send paths
  const insertItems = [
    { label: "Input", key: null },
    { label: "EQ", key: "eq" },
    { label: "Comp", key: "comp" },
    { label: "De-Ess", key: "deesser" },
  ];
  if (chain.pitch) insertItems.push({ label: "Pitch", key: "pitch" });
  if (chain.saturation) insertItems.push({ label: "Sat", key: "saturation" });
  if (chain.doubling) insertItems.push({ label: "Double", key: "doubling" });
  insertItems.push({ label: "Output", key: null });

  const sendItems = [
    { label: "Delay", key: "delay" },
    { label: "Reverb", key: "reverb" },
  ];

  const scrollTo = (key) => {
    if (!key) return;
    const el = document.getElementById(`chain-${key}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <div className="chain-result">
      <div className="chain-result-header">
        <h2>Signal Chain</h2>
        {onToggleFavorite && (
          <button
            className={`fav-btn ${isFavorite ? "active" : ""}`}
            onClick={onToggleFavorite}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? "\u2605" : "\u2606"}
          </button>
        )}
      </div>

      {/* Signal Flow Diagram — Insert vs Send */}
      <div className="signal-flow">
        <div className="flow-path insert-path">
          <span className="flow-path-label">INSERT</span>
          <div className="flow-nodes">
            {insertItems.map((item, i) => (
              <span key={i}>
                {i > 0 && <span className="flow-arrow">&rarr;</span>}
                <button
                  className="flow-node"
                  onClick={() => scrollTo(item.key)}
                  disabled={!item.key}
                >
                  {item.label}
                </button>
              </span>
            ))}
          </div>
        </div>
        <div className="flow-send-branch">
          <span className="flow-branch-line" />
          <span className="flow-branch-label">SEND (Post-Fader)</span>
        </div>
        <div className="flow-path send-path">
          <span className="flow-path-label">FX TRACK</span>
          <div className="flow-nodes">
            {sendItems.map((item, i) => (
              <span key={i}>
                {i > 0 && <span className="flow-arrow send-arrow">&rarr;</span>}
                <button
                  className="flow-node send"
                  onClick={() => scrollTo(item.key)}
                >
                  {item.label}
                </button>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div id="chain-eq">
        <EQDisplay eq={chain.eq} />
      </div>

      {steps.slice(1).map((s) => (
        <PluginCard
          key={s.key}
          id={`chain-${s.key}`}
          step={s.n}
          title={s.title}
          data={chain[s.key]}
          color={s.color}
        />
      ))}
    </div>
  );
}
