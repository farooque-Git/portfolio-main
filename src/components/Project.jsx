import moviesearch from "./image/moviesearch.png";
import fooddelievery from "./image/fooddelievery.png";
import finclvr from "./image/finclvr.png";
import bookstore from "./image/bookstore.png";
import OnlineShopping from "./image/online-shopping.jpg";
import youtube from "./image/youtube.jpg";
import tradeye from "./image/tradeye.jpg";
import compiler from "./image/code-compiler.jpg";
import gameapp from "./image/gameapp.jpg";
import tradeglobal from "./image/tradeglobal.jpg";
import meetup from "./image/meetup.jpg";
import hospitalapp from "./image/hospitalapp.jpg";
import hotelapp from "./image/hotelapp.jpg";

import { FaEye, FaCode } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      id: 0,
      src: movieapp,
      name: "Optimum Cinema",
      description: " ReactJs, Vite, Tailwind CSS",
      deployurl: "https://movie-app-beta-umber.vercel.app/",
      codeurl: "https://github.com/farooque-Git/movie-app",
    },
    {
      id: 1,
      src: gameapp,
      name: "Arcade-Game",
      description: " ReactJs, Vite, Tailwind CSS",
      deployurl: "https://arcade-game-ten.vercel.app/",
      codeurl: "https://github.com/farooque-Git/arcade-game",
    },
    {
      id: 2,
      src: meetup,
      name: "MeetUp-Like Zoom",
      description: " NextJs, socket.io, Tailwind CSS",
      deployurl: "https://meet-up-theta.vercel.app/",
      codeurl: "https://github.com/farooque-Git/meet-up",
    },
    {
      id: 4,
      src: tradeglobal,
      name: "CentrioGlobal",
      description: " ReactJs, Webpack, Tailwind CSS, Firebase for Auth",
      deployurl: "https://tradeglobal.vercel.app/",
      codeurl: "https://github.com/farooque-Git/tradeglobal",
    },
    {
      id: 5,
      src: hospitalapp,
      name: "Hope Hospital",
      description: " React, TypeScript,  Vite, Tailwind CSS",
      deployurl: "https://hospital-app-mu.vercel.app/",
      codeurl: "https://github.com/farooque-Git/hospital-app",
    },

    {
      id: 5,
      src: hotelapp,
      name: "The Continental",
      description: " ReactJs, Vite, CSS",
      deployurl: "https://hotel-app-eight-omega.vercel.app/",
      codeurl: "https://github.com/farooque-Git/hotel-app",
    },
    {
      id: 6,
      src: tradeye,
      name: "TradEye -(Underway)",
      description: "MERN, firebase, , Redux, RTK, Webpack, Tailwind CSS",
      deployurl: "",
      codeurl: "",
    },
    {
      id: 7,
      src: OnlineShopping,
      name: "E-commerce",
      description: "MERN Stack, Redux, RTK, Parcel, MUI",
      deployurl: "https://online-shopping-frontend.vercel.app/",
      codeurl: "https://github.com/farooque-Git/online-shopping",
    },
    {
      id: 8,
      src: youtube,
      name: "Youtube",
      description: "Reactjs, RTK, Webpack, Tailwind CSS, Google Api",
      deployurl: "https://youtube-pearl-delta.vercel.app/",
      codeurl: "https://github.com/farooque-Git/youtube",
    },
    {
      id: 9,
      src: compiler,
      name: "Code-Compiler & DSA",
      description: "Reactjs, RTK, Webpack, Firebase for auth, CSS3",
      deployurl: "https://codecompiler-dsa.vercel.app/",
      codeurl: "https://github.com/farooque-Git/codecompiler-DSA",
    },

    {
      id: 12,
      src: bookstore,
      name: "Book Store",
      description: "JavaScript, HTML, scss, Google API",
      deployurl: "https://book-store-chi-two.vercel.app/",
      codeurl: "https://github.com/farooque-Git/book-store",
    },
    {
      id: 13,
      src: moviesearch,
      name: "Search Movie ",
      description: "JavaScript, HTML, css, Google API",
      deployurl: "https://farooque-git.github.io/movie-detail/",
      codeurl: "https://github.com/farooque-Git/movie-detail",
    },
    {
      id: 14,
      src: finclvr,
      name: "Fin Clvr",
      description: "JavaScript, scss",
      deployurl: "https://farooque-git.github.io/Finclvr/",
      codeurl: "https://github.com/farooque-Git/Finclvr",
    },
    {
      id: 15,
      src: fooddelievery,
      name: "Food Delivery",
      description: "JavaScript, scss",
      deployurl: "https://farooque-git.github.io/food-delivery/",
      codeurl: "https://github.com/farooque-Git/food-delivery",
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
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-6">
        <div className="pb-8 mt-10">
          <p className="text-4xl font-bold inline border-b-2 border-yellow-500">
            My Masterpiece Collections
          </p>
          <p className="py-6">
            I specialize in developing custom web and mobile applications that
            cater to diverse business needs, from e-commerce platforms to data
            visualization dashboards, using the latest technologies and agile
            methodologies to deliver exceptional user experiences and measurable
            business outcomes.
          </p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(
            ({ id, src, deployurl, codeurl, name, description }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-110"
                />
                <div className="mt-3 pr-2">
                  <p className="px-10 text-blue-300 text-base font-semibold ">
                    - {name} -
                  </p>

                  <p className="pl-5 ">
                    <span className="text-indigo-300 font-medium">
                      Tech use:{" "}
                    </span>
                    <span className="font-thin">{description}</span>
                  </p>
                </div>
                <div className="flex items-center text-3xl  justify-center">
                  <button
                    className="w-1/2 px-16 text-3xl py-1 duration-200 text-yellow-500 hover:scale-150"
                    onClick={() => handleVisitClick(deployurl)}
                  >
                    <FaEye />
                  </button>
                  <button
                    className="w-1/2 px-10 py-3 m-2 duration-200 text-[#e7665a] hover:scale-150"
                    onClick={() => handleCodeClick(codeurl)}
                  >
                    <FaCode />
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
