import about from "./image/about.jpeg";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen sm:pt-12 w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            Hi, <a className="text-yellow-500"> Farooque Ali</a> here & I'm a
            Full Stack Developer
          </h1>
          <p className="text-gray-400 py-5">
            3+ years experienced React building website and web application
            using React JS and modern JavaScript tools/framework with hands-on
            experience in identifying web based user interaction along with
            designing & implementing highly responsive user interface component
            by deploying React concept.
          </p>
          <div>
            <button
              onClick={() => window.open("/Farooque_Resume.pdf")}
              target="_blank"
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineDoubleArrow size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>
        <div>
          <img
            src={about}
            alt="my profile"
            className=" sm:mx-auto md:ml-8 mx-auto w-2/3 md:w-full mb-6 shadow-md shadow-slate-200"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
