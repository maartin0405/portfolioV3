

const Navbar = ({children} : {children: React.ReactNode}) => {
    return (
        <nav className="flex gap-8 items-center">
            {children}
        </nav>
    )
};

export default Navbar;