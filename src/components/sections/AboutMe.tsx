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
                    I'm a front-end developer based in Chomutov Czechia. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. I’m always excited to take on new challenges and expand my portfolio.
                    <br/><br/>
                    I strive for perfection in every project I work on, paying attention to the smallest details. Working with others motivates me even more, as working with people brings fresh challenges that push me to deliver the best results possible.
                    <br/><br/>
                    I always strive to learn about the newest technologies and frameworks.
                    </Paragraph>
                </div>
        </Section>
    );
};

export default AboutMe;