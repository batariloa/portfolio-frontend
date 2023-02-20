import React from "react";
import { Link } from "react-scroll";
import { BsExclamationTriangleFill } from "react-icons/bs";

export const DesktopMenu = ({ offline }) => {
  return (
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
        {offline && (
          <li className="flex border-2  text-white items-center  rounded-md ml-4">
            Offline mode!
            <span className="">
              <BsExclamationTriangleFill className="ml-2 " />
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};
