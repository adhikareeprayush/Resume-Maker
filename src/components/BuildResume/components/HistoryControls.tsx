import React from 'react';
import { Undo, Redo, Save } from 'lucide-react';

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
    <div className="fixed bottom-6 right-6 z-50 flex gap-3 bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-gray-100">
      <button
        className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-gray-100 group"
        onClick={onUndo}
        disabled={!canUndo}
        title="Undo"
      >
        <Undo size={20} className="transform transition-transform group-hover:rotate-[-10deg]" />
      </button>
      <button
        className="p-2.5 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-900 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:bg-gray-100 group"
        onClick={onRedo}
        disabled={!canRedo}
        title="Redo"
      >
        <Redo size={20} className="transform transition-transform group-hover:rotate-[10deg]" />
      </button>
      <div className="w-px h-6 bg-gray-200 self-center"></div>
      <button
        className="p-2.5 rounded-lg bg-black text-white hover:bg-gray-800 transition-all duration-200 transform hover:scale-105 group"
        title="Save Resume"
      >
        <Save size={20} className="transform transition-transform group-hover:translate-y-[-2px]" />
      </button>
    </div>
  );
};

export default HistoryControls;