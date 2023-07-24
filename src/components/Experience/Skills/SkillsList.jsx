import { skillData } from "../../../constants/constants";
import SkillsListItem from "./SkillsListItem";

const SkillsList = () => {
  return (
    <div className="grid grid-cols-3 gap-12 md:grid-cols-4 ">
      {skillData.map(({ index, imgSrc, skillName }) => (
        <SkillsListItem
          key={index}
          skillName={skillName}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
};

export default SkillsList;
