import Header from "../components/sections/Header";
import AboutMe from "../components/sections/AboutMe";
import Quote from "../components/sections/Quote";
import Content from "../components/Content";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import Footer from "../components/sections/Footer";

const Home = () => {
    return (
        <>
            <Header/>
            <Content>
                <AboutMe/>
                <Quote/>
                <Projects/>
                <Skills/>
            </Content>
            <Footer/>
        </>
    );
};

export default Home;