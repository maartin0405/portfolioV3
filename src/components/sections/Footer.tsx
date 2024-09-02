import Logo from "../Logo";
import ContactLink from "../ContactLink";

const Footer = () => {
    return (
        <footer className="w-full">
            <div className="flex items-center justify-between py-6 w-[1024px] mx-auto my-0">
                <Logo/>
                <div>© Copyright 2023. Made by Martin</div>  
                <ContactLink link="hihihi" href="" src="src\assets\discord.svg"/>
            </div>
        </footer>
    );
};

export default Footer;