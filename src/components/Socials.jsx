import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import "./css/socials.css";

export const Socials = () => {
  return (
    <div name="socials" className="screen-container">
      <div className="component-container">
        <div className="flex mx-auto gap-3 md:gap-7 justify-center py-6 flex-wrap">
          <a
            href="http://www.github.com/batariloa"
            className="social-icon social-icon--github hover:scale-125 group relative"
          >
            <FaGithub />
            <span
              id="tooltip-light"
              className="absolute  top-full mt-2 whitespace-nowrap group-hover:opacity-100 opacity-0  px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm "
            >
              Check out my Github!
            </span>
          </a>

          <a
            href="https://twitter.com/BatariloAndrej"
            data-tooltip-target="tooltip-light"
            data-tooltip-style="light"
            type="button"
            className="social-icon social-icon--twitter hover:scale-125 group relative"
          >
            <FaTwitter />
            <span
              id="tooltip-light"
              className="absolute  top-full mt-2 whitespace-nowrap group-hover:opacity-100 opacity-0  px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm "
            >
              Reach out to @BatariloAndrej
            </span>
          </a>
          <a
            href="mailto:batariloa@icloud.com"
            target={"_top"}
            className="social-icon social-icon--email hover:scale-125 group relative"
          >
            <HiOutlineMail></HiOutlineMail>
            <span
              id="tooltip-light"
              className="absolute  top-full mt-2 whitespace-nowrap group-hover:opacity-100 opacity-0  px-3 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm "
            >
              batariloa@icloud.com
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
