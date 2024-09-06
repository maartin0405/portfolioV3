import Paragraph from "../Paragraph";
import SectionHeading from "../SectionHeading";
import ButtonLink from "../ButtonLink";

const AboutMeSection = () => {
    return (
        <div className="flex items-center gap-8 ">
            <div className="flex-1 flex flex-col gap-8">
                <SectionHeading>about_me</SectionHeading>
                <Paragraph>
                    I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                    <br/><br/>
                    Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                </Paragraph>
                <ButtonLink to="/contacts">View ALL ={'>'}</ButtonLink>
            </div>
            <div>
                <img className="flex-1 max-w-[340px] border-b border-primary ]" src="src\assets\hero.png" alt="hero"/>
            </div>
        </div>
    );  
};

export default AboutMeSection;