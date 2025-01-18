interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="mb-2">
      <h5 className="text-base font-medium text-gray-900">{title}</h5>
      <div className="h-[1px] w-full bg-gray-200 mt-1"></div>
    </div>
  );
};

export default SectionHeader;