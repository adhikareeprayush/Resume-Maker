interface SectionHeaderProps {
  title: string; // The title of the section
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <>
      <h5 className="text-xl font-medium font-sans">{title}</h5>
      <hr className="h-[1px] w-full bg-slate-700 mb-1" />
    </>
  );
};

export default SectionHeader;
