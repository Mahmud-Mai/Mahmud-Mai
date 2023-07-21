import Heading from "../components/Heading.jsx";
import ResumeList from "../components/ResumeList.jsx";
import SkillsList from "../components/SkillsList.jsx";

const Experience = () => {
  return (
    <div className="my-28">
      <div className="mb-16">
        <Heading
          breadCrumbsText="Skills"
          headingText="Technology I Use"
        />
      </div>

      <div className="flex flex-col xl:flex-row xl:space-x-20 xl:justify-between">
        <SkillsList />
        <ResumeList />
      </div>
    </div>
  );
};

export default Experience;
