import CardHeading from "./CardHeading";
import CardList from "./CardList";
import Card from "./Card";

const SkillsCard = ({ skills, cardTitle} : {skills: string[], cardTitle: string}) => {
    return (
        <div>
            <Card>
                <CardHeading>{cardTitle}</CardHeading>
                <CardList list={skills}/>
            </Card>
        </div>
    );
};

export default SkillsCard;