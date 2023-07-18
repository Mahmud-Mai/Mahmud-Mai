import Heading from "../components/Heading.jsx";
import SkillItem from "../components/SkillItem.jsx";
import { skillData } from "../constants/constants.jsx";

const Skills = () => {
  return (
    <div className="my-28">
      <Heading
        breadCrumbsText="Skills"
        headingText="Skills & Experience"
      />
      <div className="w-3/5 mx-auto">
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3">
          {/* Skill  */}

          {skillData.map(({ index, imgSrc, skillName }) => (
            <SkillItem
              key={index}
              skillName={skillName}
              imgSrc={imgSrc}
            />
          ))}
        </div>
        {/* <div className="w-2/5">
          <div className="grid grid-cols-2">
            <div>
              <p>Year</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
