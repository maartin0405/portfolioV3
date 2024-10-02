

const ContactLink = ({src, href, link } : {src: string, href:string, link: string}) => {
    return(
        <a href={href} target="_blank" className="cursor-pointer flex items-center gap-1 hover:brightness-0 hover:invert text-secondary">
            <img className="w-8"src={src}/>
            <div>{link}</div>
        </a>
    );
};

export default ContactLink;

