/* eslint-disable react/prop-types */
const ProjectCardItem = ({
  imgSrc,
  codeLink,
  siteLink,
  altText,
  heading,
  details,
  techUsed,
}) => {
  return (
    <div className="project_box">
      <div>
        <img
          src={imgSrc}
          alt={altText}
        />
        <h3>{heading}</h3>
        <p>{details}</p>
        <p className="my-2 italic text-gray-500">Tech used: {techUsed}</p>
      </div>
      <div className="project_box-links">
        {codeLink !== "#" && <a href={codeLink}>Github</a>}
        <a href={siteLink}>Visit site</a>
      </div>
    </div>
  );
};

export default ProjectCardItem;
