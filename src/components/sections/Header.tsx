import Logo from '../Logo';
import Navbar from '../Navbar';
import Link from '../Link';
import MediaBar from '../MediaBar';

const Header = () => {
    return (
        <>
            <MediaBar/>
            <div className="fixed top-0 left-0 w-full bg-background z-40">
                <header className=' flex justify-between py-6 bg-transparent w-[1024px] mx-auto my-0'>
                    <Logo/>
                    <Navbar>
                        <Link>home</Link>
                        <Link>projects</Link>
                        <Link>about-me</Link>
                    </Navbar>
                </header>
            </div>
        </>
    );
};

export default Header;