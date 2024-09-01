const LinkButton = ({ children, href } : {children: React.ReactNode, href: string}) => {
    return (
        <a href={href} className= "block px-4 py-2 border border-primary border-solid font-medium hover:bg-primary hover:bg-opacity-10">
                {children}
        </a>    
    );
};

export default LinkButton;