
const SectionHeader = ({subHeader, header, description}) => {
    return (
        <div>
            <h3 className="text-xl font-bold text-[#FF3811] ">{subHeader}</h3>
            <h1 className="text-[#151515] font-bold text-4xl mt-3 mb-4">{header}</h1>
            <p>{description}</p>
        </div>
    );
};

export default SectionHeader;