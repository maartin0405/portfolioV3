import { Link, useLocation } from "react-router-dom";

const HeaderLink = ({ to }: { to: string }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link 
            to={to} 
            className={`cursor-pointer text-secondary hover:text-white before:content-['#'] before:text-primary ${isActive ? 'font-semibold text-white' : ''}`}>
            {to}
        </Link>
    );
};

export default HeaderLink;