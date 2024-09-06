import Paragraph from "../Paragraph";
import SectionHeading from "../SectionHeading";
import ButtonLink from "../ButtonLink";

const AboutMeSection = () => {
    return (
        <div className="flex items-center gap-8 ">
            <div className="flex-1 flex flex-col gap-8">
                <SectionHeading>about_me</SectionHeading>
                <Paragraph>
                    Lorem ipsum blalbalblablablalbalbalbalblablablalbalbalblablablablalbalb
                    <br/><br/>
                    Lorem ipsum blalbalblablablalbalbalbalblablablalbalbalblablablablalbalb
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