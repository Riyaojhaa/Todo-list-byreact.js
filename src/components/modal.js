
import React, { useState } from 'react';
import './modal.css'; // You can style your modal using this CSS file

export default function Modal({ show, onClose, text, onSave }) {
  const [inputText, setInputText] = useState(text);

  if (!show) {
    return null;
  }

  const handleSave = () => {
    onSave(inputText);
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}

