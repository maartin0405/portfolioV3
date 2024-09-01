import Logo from "../Logo";
import ContactLink from "../ContactLink";

const Footer = () => {
    return (
        <footer className="border-t border-secondary w-full pb-4">
            <div className="flex justify-between py-6 w-[1024px] mx-auto my-0">
                <Logo/>
                <ContactLink/>
            </div>
            <div className="text-center text-secondary">
            © Copyright 2023. Made by Martin    
            </div>
        </footer>
    );
};

export default Footer;