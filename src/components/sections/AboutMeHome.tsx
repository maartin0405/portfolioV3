import Paragraph from "../Paragraph";
import SectionHeading from "../SectionHeading";
import ButtonLink from "../ButtonLink";

const AboutMeHome = () => {
    return (
        <div className="flex items-center gap-8 ">
            <div className="flex-1 flex flex-col gap-8">
                <SectionHeading>about_me</SectionHeading>
                <Paragraph>
                    I'm a front-end developer based in Chomutov Czechia. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. I’m always excited to take on new challenges and expand my portfolio.
                    <br/><br/>
                    I strive for perfection in every project I work on, paying attention to the smallest details. Working with others motivates me even more, as working with people brings fresh challenges that push me to deliver the best results possible.
                </Paragraph>
                <ButtonLink to="/contacts">View ALL ={'>'}</ButtonLink>
            </div>
            <div>
                <img className="flex-1 max-w-[340px] border-b border-primary ]" src="src\assets\hero.png" alt="hero"/>
            </div>
        </div>
    );  
};

export default AboutMeHome;