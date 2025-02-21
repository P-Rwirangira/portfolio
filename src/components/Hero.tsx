const Hero = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-background to-highlight rounded-large mx-4 my-4 relative">

      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-4xl md:text-5xl text-primary font-medium mb-4">
          Hey I'm Patrick Rwirangira.
        </h1>
        <h2 className="text-3xl md:text-4xl text-primary font-medium mb-6">
          A Software Developer
        </h2>
        <p className="text-primary text-lg max-w-md mb-12">
          Designer, developer and architect of beautifully simple things with care.
        </p>

        <div className="w-32 h-32 rounded-full overflow-hidden mb-12 border-4 border-accent">
          <img
            src="/media/profile.jpeg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>

        <button className="btn-primary">
          CONTACT ME
        </button>
      </div>
    </div>
  );
};

export default Hero;
