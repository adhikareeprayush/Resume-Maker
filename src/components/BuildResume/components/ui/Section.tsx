import React from 'react';
import { Plus, ArrowDown, ArrowUp } from 'lucide-react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  isCollapsed: boolean;
  onToggle: () => void;
  onAdd?: () => void;
}

export const Section: React.FC<SectionProps> = ({
  title,
  children,
  isCollapsed,
  onToggle,
  onAdd
}) => {
  return (
    <div className="border rounded-lg overflow-hidden">
      <div
        className="flex items-center justify-between p-4 bg-gray-50 cursor-pointer"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex items-center gap-2">
          {onAdd && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAdd();
              }}
              className="p-1 hover:bg-gray-200 rounded-full"
            >
              <Plus size={16} />
            </button>
          )}
          {isCollapsed ? <ArrowDown size={16} /> : <ArrowUp size={16} />}
        </div>
      </div>
      <div
        className={`transition-all duration-300 ${
          isCollapsed ? 'max-h-0' : 'max-h-[2000px]'
        } overflow-hidden`}
      >
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};