/* eslint-disable react/prop-types */
const ResumeListItem = ({
  companyName,
  companyLink,
  startYear,
  endYear,
  role,
}) => {
  return (
    <li className="flex flex-col items-start max-w-[500px] border rounded-lg border-gray-700 py-3 pl-8">
      <p className="">
        <span className="text-gray-300">
          <a
            className="hover:text-gray-400 underline hover:no-underline"
            href={companyLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {companyName}
          </a>
        </span>
        <span className=" ml-3 italic text-base">
          {startYear}—{endYear ? endYear : "Present"}
        </span>
      </p>
      <p>{role}</p>
    </li>
  );
};

export default ResumeListItem;
