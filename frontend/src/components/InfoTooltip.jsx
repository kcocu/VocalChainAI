import { useState } from "react";
import { EXPLANATIONS } from "../data/explanations";

export default function InfoTooltip({ category, param }) {
  const [show, setShow] = useState(false);
  const text = EXPLANATIONS[category]?.[param];
  if (!text) return null;

  return (
    <span className="info-tooltip-wrap">
      <button
        className="info-btn"
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setShow((s) => !s)}
        aria-label={`${param} 설명`}
      >
        ?
      </button>
      {show && (
        <span className="info-tooltip">{text}</span>
      )}
    </span>
  );
}
