import React from 'react';
import { Plus, ArrowDown, ArrowUp } from 'lucide-react';

interface SectionProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  isCollapsed: boolean;
  onToggle: () => void;
  onAdd?: () => void;
}

export const Section: React.FC<SectionProps> = ({
  title,
  icon,
  children,
  isCollapsed,
  onToggle,
  onAdd,
}) => {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-200">
      <div
        className="flex items-center justify-between p-5 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors duration-200"
        onClick={onToggle}
      >
        <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-3">
          {icon && <span className="text-gray-500">{icon}</span>}
          {title}
        </h3>
        <div className="flex items-center gap-2">
          {onAdd && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAdd();
              }}
              className="p-1.5 hover:bg-gray-200 rounded-full transition-colors duration-200 group"
              title={`Add ${title}`}
            >
              <Plus size={18} className="text-gray-500 group-hover:text-gray-700 transition-colors duration-200" />
            </button>
          )}
          {isCollapsed ? (
            <ArrowDown size={18} className="text-gray-500 transition-transform duration-200" />
          ) : (
            <ArrowUp size={18} className="text-gray-500 transition-transform duration-200" />
          )}
        </div>
      </div>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isCollapsed ? 'max-h-0 opacity-0' : 'max-h-[5000px] opacity-100'
        } overflow-hidden`}
      >
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};