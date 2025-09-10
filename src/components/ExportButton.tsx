import React from "react";

interface ExportButtonProps {
  onExport: () => void;
}

export default function ExportButton({ onExport }: ExportButtonProps) {
  return <button onClick={onExport}>Export Video</button>;
}