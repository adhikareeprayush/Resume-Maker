import React from 'react';
import { Undo, Redo } from 'lucide-react';

interface HistoryControlsProps {
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
}

const HistoryControls: React.FC<HistoryControlsProps> = ({
  canUndo,
  canRedo,
  onUndo,
  onRedo,
}) => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex gap-2 bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-lg">
      <button
        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-gray-100"
        onClick={onUndo}
        disabled={!canUndo}
        title="Undo"
      >
        <Undo size={20} />
      </button>
      <button
        className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-gray-100"
        onClick={onRedo}
        disabled={!canRedo}
        title="Redo"
      >
        <Redo size={20} />
      </button>
    </div>
  );
};

export default HistoryControls;