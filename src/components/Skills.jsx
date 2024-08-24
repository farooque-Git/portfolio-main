import { React } from "react";
import htmlicon from "./image/htmlicon.png";
import cssicon from "./image/cssicon.png";
import jsicon from "./image/jsicon.webp";
import reacticon from "./image/reacticon.png";
import tailwindicon from "./image/tailicon.png";
import giticon from "./image/github-icon-9.png";
import redux from "./image/redux.webp";
import mui from "./image/mui.png";
import webpack from "./image/webpack.webp";
import nextjs from "./image/nextjs.png";
import firebase from "./image/firebase.png";
import mongoDB from "./image/mongodb.png";
import nodejs from "./image/nodejs.png";
import expressjs from "./image/expressjs.png";

const Skills = () => {
  const icons = [
    {
      id: 1,
      src: htmlicon,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: cssicon,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: jsicon,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reacticon,
      title: "ReactJs",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: nextjs,
      title: "NextJs",
      style: "shadow-white",
    },
    {
      id: 6,
      src: tailwindicon,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: giticon,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 8,
      src: redux,
      title: "Redux",
      style: "shadow-purple-400",
    },
    {
      id: 9,
      src: mui,
      title: "Material UI",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: webpack,
      title: "Webpack",
      style: "shadow-blue-300",
    },
    {
      id: 11,
      src: firebase,
      title: "Firebase",
      style: "shadow-orange-400",
    },
    {
      id: 12,
      src: mongoDB,
      title: "MongoDB",
      style: "shadow-green-600",
    },
    {
      id: 13,
      src: nodejs,
      title: "Nodejs",
      style: "shadow-green-800",
    },
    {
      id: 14,
      src: expressjs,
      title: "ExpressJS",
      style: "shadow-yellow-500",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-full"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="">
          <p className="text-4xl  font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="pt-4">
            There is the technologies which I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {icons.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
