import digitalclock from "./image/digitalclock.png";
import moviesearch from "./image/moviesearch.png";
import fooddelievery from "./image/fooddelievery.png";
import finclvr from "./image/finclvr.png";
import bookstore from "./image/bookstore.png";
import portfolio from "./image/portfolio.png";
import OnlineShopping from "./image/online-shopping.jpg";
import youtube from "./image/youtube.jpg";

const Project = () => {
  const projects = [
    {
      id: 1,
      src: OnlineShopping,
      name: "E-commerce",
      description: "MERN Stack with MUI",
      deployurl: "https://online-shopping-frontend.vercel.app/",
      codeurl: "https://github.com/farooque-Git/online-shopping",
    },
    {
      id: 2,
      src: youtube,
      name: "Youtube",
      description: "Reactjs, Tailwind CSS, Google Api",
      deployurl: "https://youtube-pearl-delta.vercel.app/",
      codeurl: "https://github.com/farooque-Git/youtube",
    },
    {
      id: 3,
      src: portfolio,
      name: "Portfolio",
      description: "Reactjs, Tailwind CSS",
      deployurl: "https://portfolio-main-virid-six.vercel.app/",
    },
    {
      id: 4,
      src: bookstore,
      name: "Book Store",
      description: "JavaScript, HTML, scss, Google API",
      deployurl: "https://book-store-chi-two.vercel.app/",
      codeurl: "https://github.com/farooque-Git/book-store",
    },
    {
      id: 5,
      src: moviesearch,
      name: "Search Movie ",
      description: "JavaScript, HTML, css, Google API",
      deployurl: "https://farooque-git.github.io/movie-detail/",
      codeurl: "https://github.com/farooque-Git/movie-detail",
    },
    {
      id: 6,
      src: finclvr,
      name: "Fin Clvr",
      description: "JavaScript, scss",
      deployurl: "https://farooque-git.github.io/Finclvr/",
      codeurl: "https://github.com/farooque-Git/Finclvr",
    },
    {
      id: 7,
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
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className=" grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(
            ({ id, src, deployurl, codeurl, name, description }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="mt-3">
                  <p className="pl-7 text-blue-300 text-xl font-semibold">
                    {name}
                  </p>

                  <p className="pl-5 ">Language use: {description}</p>
                </div>
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
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
