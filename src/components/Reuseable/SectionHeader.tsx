interface SectionHeaderProps {
  title: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <>
      <h5 className="text-xl font-semibold font-sans text-gray-800">{title}</h5>
      <div className="h-1 w-24 bg-gradient-to-r from-gray-800 to-gray-600 rounded-full mb-2"></div>
    </>
  );
};

export default SectionHeader;