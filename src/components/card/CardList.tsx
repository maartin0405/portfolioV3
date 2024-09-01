const CardList = ({ list } : {list: string[]}) => {
    return (
        <ul className="flex flex-wrap gap-[8px_16px] p-2 text-secondary">
        {list.map((list, index) => (
            <li key={index}>{list}</li>
        ))}
    </ul>
    );
};

export default CardList;