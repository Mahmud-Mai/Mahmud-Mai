import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen flex flex-col justify-center"
    >
      <p className="breadcrumbs">
        <span className="breadcrumbs-text">Intro</span>
      </p>
      <p className="flex mt-10  text-gray-400 text-lg lg:text-2xl">
        <span className="relative flex top-[10px] h-3 w-3 mx-3 align-middle">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span>I&apos;m available for hire/projects</span>
      </p>

      <h1 className="my-10 tracking-wider capitalize">
        Hello <span className="animate-pulse">👋</span> , I am Mahmud Mai. A
        passionate software developer
      </h1>
      <p className="mb-12 text-lg lg:text-xl tracking-wide">
        I am a JavaScript/React developer with a passion for building scalable
        web applications. I am proficient in the MERN stack and have experience
        building wordpress websites for clients. I am eager to take on new
        challenges and I am always looking for ways to improve my skills. I am a
        problem solver who is always willing to go the extra mile to ensure that
        I deliver clean and efficient code.
      </p>
      <div className=" flex space-x-8 hero_box-links">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Mahmud-Mai"
        >
          <FaGithub />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://linkedin.com/in/mahmud-mai"
        >
          <FaLinkedin />{" "}
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://twitter.com/mahmud_mai_"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Hero;
