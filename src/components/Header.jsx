import React from "react";
import {Fabars} from 'react-icons/fa'

const Header = () => {
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
    <div className="flex bg-black justify-between">
      <div>
        <h1 className="text-slate-400 hover:text-sky-400 font-bold ml-10 p-2 text-xl">
          Portfolio
        </h1>
      </div>


      <ul className="hidden md:flex ">  
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-3 mt-2 mr-3 cursor-pointer capitalize font-medium text-gray-500 hover:text-cyan-400 hover:scale-105 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>

      <div className="cursor-pointer"> 
<Fabars size={30}/>
      </div>
    </div>
  );
};

export default Header;
