import React from "react";
import Logo from "../assets/ab_logo.png";
import { FaBars, FaTimes, FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { useState, useEffect } from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { Link } from "react-scroll";
export function Navbar() {
  const [nav, setNav] = useState(false);
  const [offline, setOffline] = useState(false);
  useEffect(() => {
    if (!navigator.onLine) setOffline(true);
  }, []);

  const handleClick = () => setNav((prev) => !prev);

  useEffect(() => {
    if (nav) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [nav]);

  return (
    <div className="fixed w-full px-3 h-[80px] flex justify-between items-center  bg-bg-color-1 text-gray-300 z-50">
      <div>
        <img src={Logo} alt="logo" style={{ width: "60px" }}></img>
      </div>
      {/* Menu */}
      <div className="hidden md:flex text-xl">
        <ul className="hidden md:flex ">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="socials" smooth={true} duration={500}>
              Socials
            </Link>
          </li>

          {/* Offline mode warning for desktop */}
          {!offline && (
            <li className="flex border-2  text-white items-center  rounded-md ml-4">
              Offline mode!
              <span className="">
                <BsExclamationTriangleFill className="ml-2 " />
              </span>
            </li>
          )}
        </ul>
      </div>{" "}
      {/* Mobile menu */}
      <div>
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute  top-0 left-0 w-full h-screen bg-bg-color-1 flex flex-col justify-center items-center z-10"
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
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-2xl">
            <Link onClick={handleClick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-2xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <li className="py-6 text-2xl">
            <Link
              onClick={handleClick}
              to="socials"
              smooth={true}
              duration={500}
            >
              Socials
            </Link>
          </li>
        </ul>
      </div>
      {/* Offline mode warning for mobile */}
      {!offline && (
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
        className="md:hidden z-10 flex items-center justify-center"
      >
        <span>
          {!nav ? <FaBars size={30}></FaBars> : <FaTimes size={30}></FaTimes>}
        </span>
      </div>
      {/*Social icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-700">
            <a
              href="https://www.github.com/batariloa"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-gray-700 ">
            <a
              href="/"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Twitter <FaTwitter size={30} />
            </a>
          </li>
          <li
            className="w-[160px] h-[60px] flex justify-between items-center 
          ml-[-100px] hover:ml-[-10px] duration-300  bg-gray-700 "
          >
            <a
              href="mailto:batariloa@icloud.com"
              target="_top"
              className="flex justify-between items-center w-full text-gray-300"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
