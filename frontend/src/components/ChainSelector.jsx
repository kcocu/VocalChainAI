import { GENRES, VOCAL_TYPES, MOODS } from "../data/chains";

export default function ChainSelector({ genre, vocalType, mood, onChange, onGenerate }) {
  return (
    <div className="chain-selector">
      <div className="selector-group">
        <label>Genre</label>
        <div className="selector-buttons">
          {GENRES.map((g) => (
            <button
              key={g.id}
              className={`sel-btn ${genre === g.id ? "active" : ""}`}
              onClick={() => onChange("genre", g.id)}
            >
              {g.label}
            </button>
          ))}
        </div>
      </div>

      <div className="selector-group">
        <label>Vocal Type</label>
        <div className="selector-buttons">
          {VOCAL_TYPES.map((v) => (
            <button
              key={v.id}
              className={`sel-btn ${vocalType === v.id ? "active" : ""}`}
              onClick={() => onChange("vocalType", v.id)}
            >
              {v.label}
            </button>
          ))}
        </div>
      </div>

      <div className="selector-group">
        <label>Mood</label>
        <div className="selector-buttons">
          {MOODS.map((m) => (
            <button
              key={m.id}
              className={`sel-btn ${mood === m.id ? "active" : ""}`}
              onClick={() => onChange("mood", m.id)}
            >
              {m.label}
            </button>
          ))}
        </div>
      </div>

      <button
        className="generate-btn"
        onClick={onGenerate}
        disabled={!genre || !vocalType || !mood}
      >
        Generate Chain
      </button>
    </div>
  );
}
