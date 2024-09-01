const IconLink = ({ src } : {src: string}) => {
    return (
        <a className="w-8">
            <img className="cursor-pointer aspect-square w-full hover:brightness-0 hover:invert" src={src}/>
        </a>
    )
};

export default IconLink;