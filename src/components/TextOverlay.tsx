import React, { useState } from "react";

interface TextOverlayProps {
  onApply: (text: string) => void;
}

export default function TextOverlay({ onApply }: TextOverlayProps) {
  const [text, setText] = useState("");

  const handleApply = () => {
    onApply(text);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter text to overlay"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button onClick={handleApply}>Apply Text Overlay</button>
    </div>
  );
}