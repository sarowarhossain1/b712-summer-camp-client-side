

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center mt-8">
            <p className="border-b-4 text-yellow-500 mb-2">{subHeading}</p>
            <h3 className="uppercase font-medium pb-4  mb-12">{heading}</h3>
        </div>
    );
};

export default SectionTitle;