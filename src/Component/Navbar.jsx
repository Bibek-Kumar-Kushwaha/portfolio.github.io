import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const data = [
    {
      navName: 'Home',
      link: '/',
    },
    {
      navName: 'About',
      link: '/About',
    },
    {
      navName: 'Project',
      link: '/Project',
    },
    {
      navName: 'Contact',
      link: '/Contact',
    },
  ];

  const renderNavLinks = () => {
    return data.map((item, index) => (
      <li key={index} className="my-5 md:my-0">
        <Link to={item.link} onClick={handleToggle}>
          {item.navName}
        </Link>
      </li>
    ));
  };

  return (
    <>
      <nav className="bg-[#43766C] sticky top-0 ">
        <div className="flex justify-between items-center m-auto w-[90%] h-12">
          <div className="w-[30%] font-bold text-2xl text-[#F8FAE5]">
            BIBEK
          </div>

          {toggle ? (
            <AiOutlineClose
              aria-label="Close Menu"
              className="text-[#fff] text-2xl md:hidden block cursor-pointer"
              onClick={handleToggle}
            />
          ) : (
            <AiOutlineMenu
              aria-label="Open Menu"
              className="text-[#fff] text-2xl md:hidden block cursor-pointer"
              onClick={handleToggle}
            />
          )}

          <div className={` ${toggle ? 'block' : 'hidden'} fixed md:static md:block top-[48px] bg-slate-800 md:bg-[#43766C] h-1/2 w-[100%] left-0`}>
            <ul className="md:flex justify-evenly font-bold text-xl text-[#ffffff] text-center w-[80%] m-auto">
              {renderNavLinks()}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
