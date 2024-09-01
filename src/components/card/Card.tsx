const Card = ({ children } : {children: React.ReactNode}) => {
    return (
        <div className="border border-secondary h-min divide-y divide- divide-secondary">
            {children}
        </div>
    );
};

export default Card;