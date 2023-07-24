import { resumeData } from "../../../constants/constants";
import ResumeListItem from "./ResumeListItem";

const ResumeList = () => {
  return (
    <div>
      <div className="my-20 xl:my-2 xl:mb-10 ">
        <h2 className="mb-4 text-xl lg:text-3xl">Resume</h2>
        <h4>A history of places I’ve worked and studied at.</h4>
      </div>
      <ul className="flex flex-col space-y-4">
        {resumeData.map(
          ({ index, companyName, companyLink, startYear, endYear, role }) => (
            <ResumeListItem
              key={index}
              companyName={companyName}
              companyLink={companyLink}
              startYear={startYear}
              endYear={endYear}
              role={role}
            />
          )
        )}
      </ul>
    </div>
  );
};

export default ResumeList;
