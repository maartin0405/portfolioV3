import SectionHeading from "../SectionHeading";
import Section from "../Section";
import SkillsCard from "../card/SkillsCard";

const Skills = () => {  
    return(
        <Section>
            <SectionHeading>skills</SectionHeading>
            <div className="flex gap-16 flex-row">
                <div className="relative min-w-[300px] min-h-[300px]">
                    <img className="w-[14vmin] top-[30%] absolute left-[70%]" src="src\assets\logo-outline.svg"/>
                    <img className="w-[10vmin] top-[20%] left-[30%] absolute" src="src\assets\circles.svg"/>
                    <img className="w-[16vmin] top-[70%] left-[10%] absolute" src="src\assets\circles.svg"/>
                </div>
                <div className="grid grid-cols-3 gap-4">
                    <SkillsCard cardTitle="Education" skills="React TypeScript TailwindCSS"/>
                    <SkillsCard cardTitle="Some Random Shit" skills="React TypeScript TailwindCSS"/>
                    <SkillsCard cardTitle="XDDDDDDDDDDDDDDDD" skills="React TypeScript TailwindCSS React TypeScript TailwindCSS"/>
                    <SkillsCard cardTitle="Lol" skills="React TypeScript TailwindCSS React TypeScript TailwindCSS"/>
                    <SkillsCard cardTitle="Lol" skills="React TypeScript TailwindCSS React TypeScript TailwindCSS"/>
                    <SkillsCard cardTitle="Lol" skills="React TypeScript TailwindCSS React TypeScript TailwindCSS"/>
                </div>
            </div>
        </Section>
    );
};  

export default Skills;
