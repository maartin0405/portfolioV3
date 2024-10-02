import SectionHeading from "../SectionHeading";
import Section from "../Section";
import ProjectCard from "../card/ProjectCard";
import ButtonLink from "../ButtonLink";

const Projects = () => {
    return (
        <Section>
            <SectionHeading>projects</SectionHeading>
            <div className="w-full grid grid-cols-3 gap-4 mt-12">
                <ProjectCard
                    src="src\assets\hero.png"
                    cardTitle="Project 1"
                    cardDescription="Project 1"
                    technologies="React TypeScript TailwindCSS"
                    >
                        <ButtonLink to="hi">LIVE</ButtonLink>
                        <ButtonLink to="hi">LIVE</ButtonLink>
                        <ButtonLink to="hi">LIVE</ButtonLink>
                </ProjectCard>
                <ProjectCard
                    src="src\assets\hero.png"
                    cardTitle="Project 1"
                    cardDescription="Project 1"
                    technologies="React TypeScript TailwindCSS">
                        <ButtonLink to="hi">LIVE</ButtonLink>
                        <ButtonLink to="hi">LIVE</ButtonLink>
                        <ButtonLink to="hi">LIVE</ButtonLink>
                </ProjectCard>
                <ProjectCard
                    src="src\assets\hero.png"
                    cardTitle="Project 1"
                    cardDescription="Project 1"
                    technologies="React TypeScript TailwindCSS">
                        <ButtonLink to="hi">LIVEASDASDA</ButtonLink>
                        <ButtonLink to="hi">LIVE</ButtonLink>
                        <ButtonLink to="hi">LIVE</ButtonLink>
                </ProjectCard>
            </div>
        </Section>
    );
};

export default Projects;