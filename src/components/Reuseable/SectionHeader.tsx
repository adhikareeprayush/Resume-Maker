interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="mb-3">
      <h5 className="text-base font-semibold text-gray-900">{title}</h5>
      <div className="h-[2px] w-full bg-gray-200 mt-1.5"></div>
    </div>
  );
};

export default SectionHeader;