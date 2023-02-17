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
          I'm a software engineering student and junior developer skilled in
          building efficient web solutions. With experience in both backend and
          frontend development, I bring innovative ideas and collaborate well
          with others. I'm committed to continuous learning and staying
          up-to-date with the latest technologies to deliver high-quality work.
          Check out my portfolio for examples of my past work if you're seeking
          a dedicated developer to bring your web project to life.
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
