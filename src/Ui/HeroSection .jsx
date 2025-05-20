const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-16 bg-white relative overflow-hidden">
      {/* Left Text Block */}
      <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 z-10">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
          Where your{" "}
          <span className="text-blue-600">
            partne
            <span className="border-r-2 border-gray-400 animate-pulse" />
          </span>
          <br />
          learn. How your <br />
          business gets results.
        </h1>
        <p className="text-gray-600 mt-4 text-lg max-w-lg mx-auto lg:mx-0">
          Give your teams the tools to deliver engaging learning experiences
          that impact what matters – performance, retention, and growth – with
          LearnUpon.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition">
          Book a Demo
        </button>
      </div>

      {/* Right Image Collage */}
      <div className="relative lg:w-1/2 flex justify-center z-10">
        {/* Main Woman Image */}
        <img
          src="https://b2662075.smushcdn.com/2662075/wp-content/uploads/@2x-hero-graphic-person.jpg?lossy=0&strip=1&webp=1"
          alt="Woman holding laptop"
          className="z-10 w-full h-full relative"
        />

        {/* <img
          src={dashboardImage}
          alt="Dashboard"
          className="absolute top-6 left-[-60px] w-32 rounded-lg border z-20 shadow-lg hidden lg:block"
        /> */}

        {/* Floating Graph Image */}
        {/* <img
          src={graphImage}
          alt="Graph"
          className="absolute top-0 right-0 w-24 rounded-lg border z-20 shadow-md hidden lg:block"
        /> */}

        {/* Avatar 1 */}
        {/* <img
          src={avatar1}
          alt="Avatar"
          className="absolute top-[-10px] left-[10px] w-10 h-10 rounded-full border-2 border-white shadow-md hidden lg:block"
        /> */}

        {/* Avatar 2 */}
        {/* <img
          src={avatar2}
          alt="Avatar"
          className="absolute bottom-[-10px] right-[10px] w-10 h-10 rounded-full border-2 border-white shadow-md hidden lg:block"
        /> */}
      </div>
    </div>
  );
};

export default HeroSection;
