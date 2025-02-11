import about from "./image/about.jpeg";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="min-h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 flex items-center"
    >
      <div className="max-w-screen-lg w-2/3 mx-auto flex flex-col pt-10 md:flex-row items-center justify-center h-full px-4 sm:px-6">
        {/* Left Content */}
        <div className="flex flex-col md:text-left sm:text-center h-full  pt-5">
          <h1 className="text-3xl sm:text-6xl font-bold text-white  ">
            Hi, <span className="text-yellow-600">Farooque Ali</span> here & I'm
            a Full Stack Developer
          </h1>
          <p className="text-gray-400 py-4 sm:py-5 text-sm sm:text-base ">
            3+ years experienced in building websites and web applications using
            React JS and modern JavaScript tools/frameworks. Hands-on experience
            in designing & implementing highly responsive UI components by
            deploying React concepts.
          </p>
          <div className="flex justify-center md:justify-start">
            <button
              onClick={() => window.open("/Farooque_Resume.pdf")}
              target="_blank"
              className="group text-white w-fit px-6 py-3 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineDoubleArrow size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center  md:ml-8 w-full pt-5">
          <img
            src={about}
            alt="my profile"
            className=" md:w-full max-w-xs md:max-w-sm  shadow-md shadow-slate-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
