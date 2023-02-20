import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const SocialBar = () => {
  return (
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
  );
};
