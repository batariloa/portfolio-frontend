import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export function Home() {
  return (
    <div name="home" className="w-full h-screen bg-bg-color-1">
      {/* Container */}
      <div className="component-container ">
        <p className="text-accent-color-1 text-lg ">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-gray-400">
          Andrej Batarilo
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-gray-500 ">
          I'm a Full Stack Developer.
        </h2>
        <p className="text-gray-300 max-w-[700px] mt-3 mb-3">
          I'm a full-stack developer who is passionate about using technology to
          turn ideas into reality. I thrive on taking on new challenges and
          strive to do my best work on every project. If you're interested in
          learning more about my journey in the tech industry, please take a
          look at my portfolio.
        </p>
        <div>
          <Link to="work" offset={50} smooth={true} duration={600}>
            <button className="button-bordered group ">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
