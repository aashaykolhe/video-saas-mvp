import React, { useState } from "react";

interface VideoTrimmerProps {
  videoUrl: string;
  onTrim: (start: number, end: number) => void;
}

export default function VideoTrimmer({ videoUrl, onTrim }: VideoTrimmerProps) {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  const handleTrim = () => {
    onTrim(start, end);
  };

  return (
    <div>
      <video src={videoUrl} controls width={400} />
      <div>
        <label>
          Start (seconds):
          <input type="number" value={start} onChange={e => setStart(Number(e.target.value))} />
        </label>
        <label>
          End (seconds):
          <input type="number" value={end} onChange={e => setEnd(Number(e.target.value))} />
        </label>
        <button onClick={handleTrim}>Trim Video</button>
      </div>
    </div>
  );
}