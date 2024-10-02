import Paragraph from "../Paragraph";
import Section from "../Section";
import SectionHeading from "../SectionHeading";

const AboutMe = () => {

    return (
        <Section>
                <SectionHeading>about_me</SectionHeading>
                <div className="flex flex-row items-center gap-12 mt-12">
                    <img className="relative border-b border-primary z-[2]" src="src\assets\about-me.png"/>
                    <Paragraph>
                    I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                    <br/><br/>
                    Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online.
                    <br/><br/>
                    I always strive to learn about the newest technologies and frameworks.
                    </Paragraph>
                </div>
        </Section>
    );
};

export default AboutMe;