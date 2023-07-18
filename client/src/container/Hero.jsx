const Hero = () => {
  return (
    <div className="my-28 hero">
      <p className="breadcrumbs">
        <span className="breadcrumbs-text">Intro</span>
      </p>

      <p className="my-5 text-gray-400 text-xl lg:text-3xl">
        Available for hire/projects
      </p>
      {/* Some animation will be nice here*/}
      <h1 className="my-8">
        Hey 👋, I am Mahmud Mai. A passionate Web developer
      </h1>
      <p className="my-5">
        I am a JavaScript/React developer with a passion for building scalable
        web applications. I am proficient in the MERN stack and have experience
        building wordpress websites for clients. I am eager to take on new
        challenges and I am always looking for ways to improve my skills. I am a
        problem solver who is always willing to go the extra mile to ensure that
        I deliver clean and efficient code.
      </p>
      <div className="my-12 flex space-x-8">
        <a href="https://github.com/Mahmud-Mai">Github</a>
        <a href="https://linkedin.com/in/mahmud-mai">LinkedIn</a>
        <a href="twitter.com/mahmud_mai_">Twitter</a>
      </div>
    </div>
  );
};

export default Hero;
