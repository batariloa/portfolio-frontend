import React from "react";
import Logo from "../assets/ab_logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { BsExclamationTriangleFill } from "react-icons/bs";
import { Link } from "react-scroll";
import { SocialBar } from "./SocialBar";
import { DesktopMenu } from "./DesktopMenu";
export function Navbar() {
  const [nav, setNav] = useState(false);
  const [offline, setOffline] = useState(false);

  //on reload
  useEffect(() => {
    if (!navigator.onLine) setOffline(true);
  }, []);

  const handleClick = () => setNav((prev) => !prev);

  return (
    <div className="fixed w-full px-3 h-[80px] flex justify-between items-center  bg-bg-color-1 text-gray-300 z-50">
      <div>
        <img src={Logo} alt="logo" style={{ width: "60px" }}></img>
      </div>
      {/* Menu */}

      <DesktopMenu offline={offline}></DesktopMenu>
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
        className="md:hidden z-10 flex items-center justify-center"
      >
        <span>
          {!nav ? <FaBars size={30}></FaBars> : <FaTimes size={30}></FaTimes>}
        </span>
      </div>
      {/*Social icons */}
      <SocialBar></SocialBar>
    </div>
  );
}
