import IconLink from "./IconLink";

const MediaBar = () => {
    return (
        <div className="fixed flex flex-col items-center justify-center left-4 gap-2 top-0 z-50">
            <span className="w-[1px] h-[33vh] bg-secondary block"></span>
            <div className="flex flex-col items-center justify-center">
                <IconLink src="src\assets\discord.svg"/>
                <IconLink src="src\assets\discord.svg"/>
                <IconLink src="src\assets\discord.svg"/>
            </div>
        </div>
    )
};

export default MediaBar;