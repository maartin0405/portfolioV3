import Logo from '../Logo';
import Navbar from '../Navbar';
import HeaderLink from '../HeaderLink';
import MediaBar from '../MediaBar';


const Header = () => {
    return (
        <>
            <MediaBar/>
            <header className="fixed top-0 left-0 w-full bg-background z-40">
                <div className=' flex justify-between py-6 bg-transparent w-[1024px] mx-auto my-0'>
                    <Logo/>
                    <Navbar>
                        <HeaderLink to="/home"/>
                        <HeaderLink to="/about_me"/>
                    </Navbar>
                </div>
            </header>
        </>
    );
};

export default Header;