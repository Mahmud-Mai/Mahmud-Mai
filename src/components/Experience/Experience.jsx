import Heading from "../sharedComponents/Heading.jsx";
import ResumeList from "./Resume/ResumeList.jsx";
import SkillsList from "./Skills/SkillsList.jsx";

const Experience = () => {
  return (
    <div
      name="skills"
      className="min-h-screen flex flex-col justify-center"
    >
      <div className="mb-8">
        <Heading
          breadCrumbsText="Skills"
          headingText="Technologies I Use"
        />
      </div>

      <div className="flex flex-col space-y-8 xl:flex-row xl:space-x-20 xl:justify-between">
        <SkillsList />
        <ResumeList />
      </div>
    </div>
  );
};

export default Experience;
