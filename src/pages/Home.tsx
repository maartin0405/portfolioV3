import Quote from "../components/sections/Quote";
import Content from "../components/Content";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import ContactMe from "../components/sections/ContactMe";
import AboutMeSection from "../components/sections/AboutSection";

const Home = () => {
    return (
        <>
            <Content>
                <ContactMe/>
                <Quote/>
                <Projects/>
                <Skills/>
                <AboutMeSection/>
            </Content>
        </>
    );
};

export default Home;