import EQDisplay from "./EQDisplay";

function PluginCard({ step, title, data, color }) {
  if (!data) return null;
  const skipKeys = new Set(["label", "note", "plugin", "plugins", "eqTip"]);
  const entries = Object.entries(data).filter(([k]) => !skipKeys.has(k));

  return (
    <div className={`chain-block plugin-card ${color || ""}`}>
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

export default function ChainResult({ chain }) {
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

  // Signal flow items
  const flowItems = [
    { label: "Input", send: false },
    { label: "EQ", send: false },
    { label: "Comp", send: false },
    { label: "De-Ess", send: false },
  ];
  if (chain.pitch) flowItems.push({ label: "Pitch", send: false });
  if (chain.saturation) flowItems.push({ label: "Sat", send: false });
  if (chain.doubling) flowItems.push({ label: "Double", send: false });
  flowItems.push({ label: "Delay (Send)", send: true });
  flowItems.push({ label: "Reverb (Send)", send: true });
  flowItems.push({ label: "Output", send: false });

  return (
    <div className="chain-result">
      <h2>Signal Chain</h2>
      <div className="chain-flow">
        {flowItems.map((item, i) => (
          <span key={i}>
            {i > 0 && <span className="flow-arrow">&rarr;</span>}
            <span className={`flow-item${item.send ? " send" : ""}`}>{item.label}</span>
          </span>
        ))}
      </div>

      <EQDisplay eq={chain.eq} />

      {steps.slice(1).map((s) => (
        <PluginCard key={s.key} step={s.n} title={s.title} data={chain[s.key]} color={s.color} />
      ))}
    </div>
  );
}
