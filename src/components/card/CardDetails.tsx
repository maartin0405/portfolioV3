const CardDetails = ({cardTitle, cardDescription, children} : {cardTitle: string, cardDescription: string, children: React.ReactNode}) => {
    return (
        <div className="p-4 flex flex-wrap flex-col items-start">
            <h1 className="font-medium text-2xl">{cardTitle}</h1>
            <div className="my-4 mx-0 text-secondary">{cardDescription}</div>
            <div className="flex flex-wrap gap-2">
            {children}
            </div>
        </div>
    );
}

export default CardDetails;