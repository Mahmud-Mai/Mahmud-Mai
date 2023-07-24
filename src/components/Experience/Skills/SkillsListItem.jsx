/* eslint-disable react/prop-types */
const SkillsListItem = ({ imgSrc, skillName }) => {
  return (
    <div className="skill_container">
      <div className="skill_container-circle">
        <img
          src={imgSrc}
          alt={`${skillName} icon`}
        />
      </div>
      <p>{skillName}</p>
    </div>
  );
};

export default SkillsListItem;
