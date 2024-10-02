import Card from "./Card";

const SkillsCard = ({ skills, cardTitle} : {skills: string, cardTitle: string}) => {
    return (
        <div>
            <Card>
                <div className="font-semibold p-2">{cardTitle}</div>
                <ul className="flex flex-wrap gap-[8px_16px] p-2 text-secondary">{skills}</ul>
            </Card>
        </div>
    );
};

export default SkillsCard;