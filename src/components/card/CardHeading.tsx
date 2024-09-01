const CardHeading = ({ children } : {children: React.ReactNode}) => {
    return (
        <div className="font-semibold p-2">
            {children}
        </div>
    );
};

export default CardHeading;