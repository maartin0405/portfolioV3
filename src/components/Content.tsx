const Content = ({children} : {children: React.ReactNode}) => {
    return (
        <div className="flex flex-col mx-auto mt-[112px] gap-[112px] w-[1024px] my-0 justify-center items-center">
            {children}
        </div>
    );
};

export default Content;