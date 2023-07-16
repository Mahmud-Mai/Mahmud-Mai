import {
  css,
  git,
  html,
  javascript,
  mui,
  node,
  react,
  redux,
  sass,
} from "../assets/skills_images/index.js";

const Skills = () => {
  return (
    <div className="my-28">
      <p className="breadcrumbs">
        <span className="breadcrumbs-text">Skills</span>
      </p>

      <h2 className="my-8">Technologies I use</h2>

      {/* Skills Icons  */}
      <div className="flex ">
        {/* Skill  */}
        <div>
          <div>
            <img
              src={react}
              alt="skill icon"
            />
          </div>
          <p>React</p>
        </div>
        {/* Skill  */}
        <div>
          <div>
            <img
              src={node}
              alt="skill icon"
            />
          </div>
          <p>Node</p>
        </div>

        {/* Skill  */}
        <div>
          <div>
            <img
              src={html}
              alt="skill icon"
            />
          </div>
          <p>Html</p>
        </div>

        {/* Skill  */}
        <div>
          <div>
            <img
              src={css}
              alt="skill icon"
            />
          </div>
          <p>CSS</p>
        </div>

        {/* Skill  */}
        <div>
          <div>
            <img
              src={javascript}
              alt="skill icon"
            />
          </div>
          <p>Javascript</p>
        </div>

        {/* Skill  */}
        <div>
          <div>
            <img
              src={sass}
              alt="skill icon"
            />
          </div>
          <p>Sass</p>
        </div>
        {/* Skill  */}

        <div>
          <div>
            <img
              src={mui}
              alt="skill icon"
            />
          </div>
          <p>mui</p>
        </div>
        {/* Skill  */}

        <div>
          <div>
            <img
              src={git}
              alt="skill icon"
            />
          </div>
          <p>git</p>
        </div>
        {/* Skill  */}

        <div>
          <div>
            <img
              src={redux}
              alt="skill icon"
            />
          </div>
          <p>redux</p>
        </div>

        {/* Skill End */}
      </div>
    </div>
  );
};

export default Skills;
