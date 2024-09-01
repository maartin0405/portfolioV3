const Paragraph = ({children} : {children: React.ReactNode}) => {
    return (
        <p className="text-secondary">{children}</p>
    )
};

export default Paragraph;