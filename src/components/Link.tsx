const Link = ({ children } : {children: React.ReactNode}) => {
    return (
         <a className="cursor-pointer text-secondary hover:text-white before:content-['#'] before:text-primary active:font-semibold">{children}</a>
    )
};

export default Link;    