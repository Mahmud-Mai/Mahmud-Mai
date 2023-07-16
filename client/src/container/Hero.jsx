const Hero = () => {
  return (
    <div className="my-28">
      <p className="breadcrumbs">
        <span className="breadcrumbs-text">Intro</span>
      </p>

      <p className="my-5 text-gray-400 text-xl lg:text-3xl">
        Available for hire/projects
      </p>
      {/* Some animation will be nice here*/}
      <h1 className="my-8">
        Hey 👋, I am Mahmud Mai. A fullstack Web developer
      </h1>
      <p className="my-5">
        I am a full-stack javascript developer with determination and passion
        for learning. My area of expertise is React, Express, Node, and Mongo
        DB. I am a skilled and reliable freelancer looking for opportunities to
        build on high-quality projects. I keep on challenging assignments,
        problem-solving, and custom projects. I write clean, modular,
        well-documented code with security and scalability in mind and help
        create simple, friendly, accessible user interfaces.
      </p>
      <div className="my-12 flex space-x-8">
        <button>Github</button>
        <button>LinkedIn</button>
        <button>Twitter</button>
      </div>
    </div>
  );
};

export default Hero;
