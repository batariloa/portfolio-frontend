import React from "react";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsExclamationTriangleFill } from "react-icons/bs";

export const MobileMenu = ({ offline }) => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav((prev) => !prev);
    console.log("CLICKED!");
    console.log("NAV WAS PREV", nav);
  };

  useEffect(() => {
    console.log("Changed nav to ", nav);
  }, [nav]);
  return (
    <div className="">
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute  top-0 left-0 w-full h-screen z-0 bg-bg-color-1 flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
        <li className="py-6 text-2xl">
          <Link onClick={handleClick} to="socials" smooth={true} duration={500}>
            Socials
          </Link>
        </li>
      </ul>

      {/* Mobile menu */}

      {/* Offline mode warning for mobile */}
      {offline && (
        <span className="md:hidden flex border-2 text-white items-center p-2 text-center rounded-md mx-auto text-lg  ">
          Offline mode!
          <span className="">
            <BsExclamationTriangleFill className="ml-2  " />
          </span>
        </span>
      )}
      {/* Hamburger */}
      <div
        onClick={handleClick}
        className="md:hidden  flex items-center justify-center z-50"
      >
        <span>
          {!nav ? (
            <FaBars id="behe" size={30}></FaBars>
          ) : (
            <FaTimes id="hehe" size={30}></FaTimes>
          )}
        </span>
      </div>
    </div>
  );
};
