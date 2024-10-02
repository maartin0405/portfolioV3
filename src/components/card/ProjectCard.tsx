import React from "react";
import Card from "./Card";
import CardDetails from "./CardDetails";

interface ProjectCardProps {
    cardTitle: string;
    cardDescription: string;
    src: string;
    technologies: string;
    children?: React.ReactNode;
}

const ProjectCard = ({ cardTitle, cardDescription, src, technologies, children}: ProjectCardProps) => {
    return (
        <Card>
            <img src={src} className="aspect-video"/>
            <ul className="flex flex-wrap gap-[8px_16px] p-2 text-secondary">{technologies}</ul>
            <CardDetails cardTitle={cardTitle} cardDescription={cardDescription}>{children}</CardDetails>
        </Card>
    );
};

export default ProjectCard;