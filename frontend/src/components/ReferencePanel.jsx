import { REFERENCES } from "../data/references";

export default function ReferencePanel({ genre, vocalType, mood }) {
  if (!genre || !vocalType || !mood) return null;
  const tracks = REFERENCES[genre]?.[vocalType]?.[mood];
  if (!tracks || tracks.length === 0) return null;

  return (
    <div className="reference-panel">
      <h3>Reference Tracks</h3>
      <p className="reference-hint">Mix your vocal aiming for a similar tone to these references.</p>
      <div className="reference-list">
        {tracks.map((t, i) => (
          <div key={i} className="reference-card">
            <div className="reference-main">
              <span className="reference-artist">{t.artist}</span>
              <span className="reference-track">{t.track}</span>
            </div>
            <p className="reference-note">{t.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
