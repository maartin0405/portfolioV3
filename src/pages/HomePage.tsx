import Quote from "../components/sections/Quote";
import Content from "../components/Content";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import ContactMe from "../components/sections/ContactMe";
import AboutMeHome from "../components/sections/AboutMeHome";
import FormSection from "../components/sections/FormSection";

const HomePage = () => {
    return (
        <>
            <Content>
                <ContactMe/>
                <Quote/>
                <Projects/>
                <Skills/>
                <AboutMeHome/>
                <FormSection/>
            </Content>
        </>
    );
};

export default HomePage;