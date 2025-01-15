interface SectionHeaderProps {
  title: string; // The title of the section
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <>
      <h5 className="text-xl font-semibold font-sans text-gray-800">{title}</h5>
      <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-3"></div>
    </>
  );
};

export default SectionHeader;
