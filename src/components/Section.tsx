const Section = ({ children } : {children: React.ReactNode}) => {
    return (
        <section className="w-[1024px] my-0">
            {children}
        </section>
    );
};

export default Section;