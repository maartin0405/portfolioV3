import Quote from "../components/sections/Quote";
import Content from "../components/Content";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import ContactMe from "../components/sections/ContactMe";
import AboutMeSection from "../components/sections/AboutSection";
import FormSection from "../components/sections/FormSection";

const Home = () => {
    return (
        <>
            <Content>
                <ContactMe/>
                <Quote/>
                <Projects/>
                <Skills/>
                <AboutMeSection/>
                <FormSection/>
            </Content>
        </>
    );
};

export default Home;