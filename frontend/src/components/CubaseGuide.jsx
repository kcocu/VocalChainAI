import { useState } from "react";
import { CUBASE_GUIDE } from "../data/cubase-guide";

const SECTIONS = Object.keys(CUBASE_GUIDE);

export default function CubaseGuide() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  if (!open) {
    return (
      <div className="cubase-guide-toggle">
        <button className="custom-toggle-btn" onClick={() => setOpen(true)}>
          Cubase Setup Guide
        </button>
      </div>
    );
  }

  return (
    <div className="cubase-guide">
      <div className="custom-builder-header">
        <h3>Cubase Setup Guide</h3>
        <button className="custom-close-btn" onClick={() => setOpen(false)}>Close</button>
      </div>

      <div className="guide-tabs">
        {SECTIONS.map((key) => (
          <button
            key={key}
            className={`guide-tab ${activeSection === key ? "active" : ""}`}
            onClick={() => setActiveSection(activeSection === key ? null : key)}
          >
            {CUBASE_GUIDE[key].title}
          </button>
        ))}
      </div>

      {activeSection && (
        <div className="guide-content">
          <h4>{CUBASE_GUIDE[activeSection].title}</h4>
          <ol className="guide-steps">
            {CUBASE_GUIDE[activeSection].steps.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
          {CUBASE_GUIDE[activeSection].tips && (
            <div className="guide-tips">
              <h5>Tips</h5>
              <ul>
                {CUBASE_GUIDE[activeSection].tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
