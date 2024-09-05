import { Link } from "react-router-dom";

const ButtonLink = ({ children, to } : {children: React.ReactNode, to: string}) => {
    return (
        <Link to={to} className="block px-4 py-2 border border-primary border-solid font-medium hover:bg-primary hover:bg-opacity-10 w-max">
                {children}
        </Link>    
    );
};

export default ButtonLink;