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
          frontend development, I'm passionate about delivering innovative
          solutions and take pride in delivering high-quality work. If you are
          looking for a developer to help bring your web project to life, I
          would be thrilled to have the opportunity to discuss your needs with
          you. Please take a look around and don't hesitate to reach out to me.
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
