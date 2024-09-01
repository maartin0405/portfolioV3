import React from "react";
import Card from "./Card";
import CardList from "./CardList";
import CardDetails from "./CardDetails";

interface ProjectCardProps {
    cardTitle: string;
    cardDescription: string;
    src: string;
    technologies: string[];
    children: React.ReactNode;
}

const ProjectCard = ({ cardTitle, cardDescription, src, technologies, children}: ProjectCardProps) => {
    return (
        <Card>
            <img src={src} className="aspect-video"/>
            <CardList list={technologies}/>
            <CardDetails cardTitle={cardTitle} cardDescription={cardDescription}>{children}</CardDetails>
        </Card>
    );
};

export default ProjectCard;