const MediaLink = ({ src, href} : {href: string, src: string}) => {
    return (
        <a href={href} target="_blank" className="w-8">
            <img className="cursor-pointer aspect-square w-full hover:brightness-0 hover:invert" src={src}/>
        </a>
    )
};

export default MediaLink;