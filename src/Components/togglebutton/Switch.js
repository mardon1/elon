import React from 'react';
import './switch.css';

function Switch() {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default Switch;
