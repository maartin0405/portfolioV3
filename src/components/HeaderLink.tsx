const Link = ({ href, children } : {children: React.ReactNode, href: string}) => {
    return (
         <a href={href} className="cursor-pointer text-secondary hover:text-white before:content-['#'] before:text-primary active:font-semibold">{children}</a>
    )
};

export default Link;    