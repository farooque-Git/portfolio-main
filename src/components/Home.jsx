import about from "./image/about.jpeg";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col 
      items-center justify-center h-full px-4 md:flex-row"
      >
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-4xl sm:text-6xl font-bold text-white">
            Hi, I'm a Full Stack Developer
          </h1>
          <p className="text-gray-400 py-5">
            1.5+ years experienced React Developer building website and web
            application using React JS and modern JavaScript tools/framework
            with hands-on experience in identifying web based user interaction
            along with designing & implementing highly responsive user interface
            component by deploying React concept. Proficient in translating
            design & wireframe into high quality code and writing application
            interface code via JavaScript and ReactJS overflow. Adept at
            monitoring & maintain frontend performance and troubleshooting and
            debugging the same to boost the overall performance
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
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
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
