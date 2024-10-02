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
                    src="src\assets\soma.png"
                    cardTitle="SOMA Reservation Rooms"
                    cardDescription="A room reservation system for SOMA. The system allows users to book rooms, view room availability, and manage reservations."
                    technologies="Vite React ReactRouter Moment Emotion FullCalendar"
                    >
                </ProjectCard>
                <ProjectCard
                    src="src\assets\login.png"
                    cardTitle="Firebase Auth Project"
                    cardDescription="A small project of mine that uses Firebase Authentication to authenticate users. The project also uses Firebase Firestore to store user data."
                    technologies="React Firebase Emotion Gatsby i18"
                    >
                </ProjectCard>
            </div>
        </Section>
    );
};

export default Projects;