import Paragraph from "../Paragraph";
import ButtonLink from "../ButtonLink";

const AboutMe = () => {
    return (
            <div className="flex flex-row gap-8 justify-between items-center">
                <div className="flex flex-wrap flex-1 content-start gap-8">
                    <h1 className="min-w-80 font-semibold text-[32px]">
                        Martin is a 
                        <span className="text-primary"> front-end developer </span> 
                        with
                        <span className="text-primary"> love </span>
                        for details  
                        </h1>
                    <Paragraph>I craft responsive websites where technologies meet creativity</Paragraph>
                    <ButtonLink href="">Contact ME ={'>'}</ButtonLink>
                </div>
                <div className="flex flex-col flex-1 relative">
                    <img className="absolute w-[30vmin] top-[10%] z-[1] aspect-square" src="src\assets\logo-outline.svg"/>
                    <img className="relative border-b border-primary max-w-full z-[2]" src="src\assets\hero.png"/>
                    <img className="absolute top-[40%] w-[12vmin] left-[70%] z-[3]" src="src\assets\circles.svg"/>
                    <div className="p-2 border-secondary text-secondary my-0 mx-auto inline-flex justify-center items-center relative top-[-1px] z-[4] gap-2 font-medium
                    before:content-[''] before:inline-block before:aspect-[1] before:w-4 before:bg-primary before:bg-opacity-10 border before:border before:border-primary">
                        Open for new opportunities
                    </div>
                </div>
            </div>
    );
    
};

export default AboutMe;