import React from 'react';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  content,
  onChange,
  placeholder,
}) => {
  return (
    <div className="relative border border-gray-200 rounded-lg hover:border-gray-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-blue-500 transition-all duration-200 bg-white">
      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full min-h-[12rem] p-4 rounded-lg focus:outline-none text-sm"
        style={{ resize: 'vertical' }}
      />
      <div className="absolute bottom-2 right-2 text-xs text-gray-400">
        {content.length} characters
      </div>
    </div>
  );
};