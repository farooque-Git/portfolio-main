import digitalclock from "./image/digitalclock.png";
import moviesearch from "./image/moviesearch.png";
import fooddelievery from "./image/fooddelievery.png";
import finclvr from "./image/finclvr.png";
import youtubeclone from "./image/youtubeclone.png";
import portfolio from "./image/portfolio.png";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: portfolio,
      deployurl: "https://portfolio-main-virid-six.vercel.app/",
    },
    {
      id: 2,
      src: moviesearch,
      deployurl: "https://farooque-git.github.io/movie-detail/",
      codeurl: "https://github.com/farooque-Git/movie-detail",
    },
    {
      id: 3,
      src: finclvr,
      deployurl: "https://farooque-git.github.io/Finclvr/",
      codeurl: "https://github.com/farooque-Git/Finclvr",
    },
    {
      id: 4,
      src: fooddelievery,
      deployurl: "https://farooque-git.github.io/food-delivery/",
      codeurl: "https://github.com/farooque-Git/food-delivery",
    },
    {
      id: 5,
      src: digitalclock,
      deployurl: "https://farooque-git.github.io/digital_clock/",
      codeurl: "https://github.com/farooque-Git/digital_clock",
    },
    {
      id: 6,
      src: youtubeclone,
      deployurl: "https://farooque-git.github.io/Youtube-clone/",
      codeurl: "https://github.com/farooque-Git/Youtube-clone",
    },
  ];

  const handleCodeClick = (codeurl) => {
    window.open(codeurl, "_blank");
  };
  const handleVisitClick = (deployurl) => {
    window.open(deployurl, "_blank");
  };

  // md:h-screen
  return (
    <div
      name="project"
      className="bg-gradient-to-b from-black to-gray-800 w-full
     text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, deployurl, codeurl }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleVisitClick(deployurl)}
                >
                  Visit
                </button>
                <button
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                  onClick={() => handleCodeClick(codeurl)}
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
