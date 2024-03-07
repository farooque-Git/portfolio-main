import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [bar, setBar] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "Project",
    },
    {
      id: 3,
      link: "Skills",
    },
    {
      id: 4,
      link: "Contact",
    },
  ];

  return (
    <div className="flex bg-black justify-between w-full h-auto fixed">
      <div>
        <h1 className="text-slate-400 hover:text-sky-400 font-bold ml-10 p-2 text-xl">
          Portfolio
        </h1>
      </div>

      <ul className="hidden md:flex ">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-1 mt-2 mr-8 cursor-pointer capitalize font-medium text-gray-500 hover:text-cyan-400 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setBar(!bar)}
        className="cursor-pointer pr-4 z-10 text-gray-500 mt-3 md:hidden "
      >
        {bar ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>

      {/* fobar click event */}

      {bar && (
        <ul className="flex flex-col justify-center items-center absolute top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-4 text-2xl"
            >
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Header;
