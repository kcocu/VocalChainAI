import EQDisplay from "./EQDisplay";

function PluginCard({ step, title, data, color }) {
  if (!data) return null;
  const entries = Object.entries(data).filter(([k]) => k !== "label" && k !== "note");

  return (
    <div className={`chain-block plugin-card ${color || ""}`}>
      <h3>{step}. {title} — {data.label || ""}</h3>
      {data.plugin && <div className="plugin-name">{data.plugin}</div>}
      <div className="plugin-params">
        {entries.map(([key, val]) => (
          key !== "plugin" && (
            <div key={key} className="param-row">
              <span className="param-key">{key}</span>
              <span className="param-val">{val}</span>
            </div>
          )
        ))}
      </div>
      {data.note && <p className="plugin-note">{data.note}</p>}
    </div>
  );
}

export default function ChainResult({ chain }) {
  if (!chain) return null;

  return (
    <div className="chain-result">
      <h2>Signal Chain</h2>
      <div className="chain-flow">
        <span className="flow-item">Input</span>
        <span className="flow-arrow">&rarr;</span>
        <span className="flow-item">EQ</span>
        <span className="flow-arrow">&rarr;</span>
        <span className="flow-item">Comp</span>
        <span className="flow-arrow">&rarr;</span>
        <span className="flow-item">De-Ess</span>
        {chain.saturation && <>
          <span className="flow-arrow">&rarr;</span>
          <span className="flow-item">Sat</span>
        </>}
        <span className="flow-arrow">&rarr;</span>
        <span className="flow-item send">Delay (Send)</span>
        <span className="flow-arrow">&rarr;</span>
        <span className="flow-item send">Reverb (Send)</span>
        <span className="flow-arrow">&rarr;</span>
        <span className="flow-item">Output</span>
      </div>

      <EQDisplay eq={chain.eq} />

      <PluginCard step={2} title="Compressor" data={chain.comp} />
      <PluginCard step={3} title="De-Esser" data={chain.deesser} />
      {chain.saturation && <PluginCard step={4} title="Saturation" data={chain.saturation} />}
      <PluginCard step={chain.saturation ? 5 : 4} title="Delay" data={chain.delay} color="delay" />
      <PluginCard step={chain.saturation ? 6 : 5} title="Reverb" data={chain.reverb} color="reverb" />
    </div>
  );
}
