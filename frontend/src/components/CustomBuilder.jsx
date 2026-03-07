import { useState } from "react";
import { EQ_PRESETS, COMP_PRESETS, DELAY_PRESETS, REVERB_PRESETS } from "../data/chains";
import { DEESSER_PRESETS, SATURATION_PRESETS, PITCH_PRESETS, DOUBLING_PRESETS } from "../data/chains";

const CATEGORIES = [
  { key: "eq", label: "EQ", presets: EQ_PRESETS, required: true },
  { key: "comp", label: "Compressor", presets: COMP_PRESETS, required: true },
  { key: "deesser", label: "De-Esser", presets: DEESSER_PRESETS, required: true },
  { key: "pitch", label: "Pitch Correction", presets: PITCH_PRESETS, required: false },
  { key: "saturation", label: "Saturation", presets: SATURATION_PRESETS, required: false },
  { key: "doubling", label: "Vocal Doubling", presets: DOUBLING_PRESETS, required: false },
  { key: "delay", label: "Delay", presets: DELAY_PRESETS, required: true },
  { key: "reverb", label: "Reverb", presets: REVERB_PRESETS, required: true },
];

export default function CustomBuilder({ onApply }) {
  const [open, setOpen] = useState(false);
  const [selections, setSelections] = useState({
    eq: "", comp: "", deesser: "", delay: "", reverb: "",
    pitch: "", saturation: "", doubling: "",
  });

  const handleChange = (key, value) => {
    setSelections((prev) => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    const chain = {};
    for (const cat of CATEGORIES) {
      const id = selections[cat.key];
      if (id && cat.presets[id]) {
        chain[cat.key] = cat.presets[id];
      } else if (!cat.required) {
        chain[cat.key] = null;
      } else {
        return; // required field missing
      }
    }
    onApply(chain);
  };

  const requiredFilled = CATEGORIES
    .filter((c) => c.required)
    .every((c) => selections[c.key] && c.presets[selections[c.key]]);

  if (!open) {
    return (
      <div className="custom-builder-toggle">
        <button className="custom-toggle-btn" onClick={() => setOpen(true)}>
          Custom Chain Builder
        </button>
      </div>
    );
  }

  return (
    <div className="custom-builder">
      <div className="custom-builder-header">
        <h3>Custom Chain Builder</h3>
        <button className="custom-close-btn" onClick={() => setOpen(false)}>Close</button>
      </div>
      <p className="custom-hint">Select a preset for each processing stage to build your own chain.</p>

      <div className="custom-categories">
        {CATEGORIES.map((cat) => (
          <div key={cat.key} className="custom-category">
            <label>
              {cat.label}
              {cat.required && <span className="required">*</span>}
            </label>
            <select
              value={selections[cat.key]}
              onChange={(e) => handleChange(cat.key, e.target.value)}
            >
              <option value="">{cat.required ? "Select..." : "None (skip)"}</option>
              {Object.entries(cat.presets).map(([id, preset]) => (
                <option key={id} value={id}>
                  {preset.label}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>

      <button
        className="generate-btn"
        onClick={handleApply}
        disabled={!requiredFilled}
      >
        Build Custom Chain
      </button>
    </div>
  );
}
