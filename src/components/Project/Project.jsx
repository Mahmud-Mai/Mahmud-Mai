import Heading from "../sharedComponents/Heading";
import ProjectCardItem from "./ProjectCardItem";
import { projectData } from "../../constants/constants";
const Project = () => {
  return (
    <div
      name="projects"
      className=" min-h-screen flex flex-col justify-center"
    >
      <div className="my-32">
        <Heading
          breadCrumbsText="Projects"
          headingText="Featured Projects"
        />

        {/* Project cards */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3  gap-8">
          {projectData.map(
            ({
              index,
              imgSrc,
              codeLink,
              siteLink,
              heading,
              altText,
              details,
              techUsed,
            }) => (
              <ProjectCardItem
                key={index}
                imgSrc={imgSrc}
                codeLink={codeLink}
                siteLink={siteLink}
                heading={heading}
                altText={altText}
                details={details}
                techUsed={techUsed}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
