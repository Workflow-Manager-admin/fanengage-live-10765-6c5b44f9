import React from "react";
import "./PopupQuestion.css";

/**
 * PUBLIC_INTERFACE
 * Renders a modal popup for yes/no questions, collects user response and triggers a callback.
 * @param {string} question - The question to display.
 * @param {function} onAnswer - Callback when user answers (value: "yes"|"no").
 * @param {boolean} visible - Controls whether the popup is shown.
 * @param {function} onClose - Closes the popup (optional; can be null).
 */
function PopupQuestion({ question, onAnswer, visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-question-card">
        <div className="popup-question-text">{question}</div>
        <div className="popup-btns">
          <button className="btn-yes" onClick={() => onAnswer("yes")}>Yes</button>
          <button className="btn-no" onClick={() => onAnswer("no")}>No</button>
        </div>
        {onClose && (
          <button className="popup-close" aria-label="Close" onClick={onClose}>
            ×
          </button>
        )}
      </div>
    </div>
  );
}

export default PopupQuestion;
