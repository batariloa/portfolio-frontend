import React, { useEffect } from "react";
import Spring from "../assets/spring.png";
import Node from "../assets/node.png";
import REACT_IMG from "../assets/react.png";
import Docker from "../assets/docker.png";
import Github from "../assets/github.png";
import MongoDB from "../assets/mongo.png";
import Postgres from "../assets/postgres.png";
import DockerCompose from "../assets/docker-compose.png";

import "./css/skills.css";

const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-show");
          }
        });
      },
      { threshold: 0.3 }
    );
    const hiddenElements = document.querySelectorAll(".scroll-hide");

    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className="bg-bg-color-1 text-gray-300 min-h-screen flex">
      <div className="component-container" name="skills">
        <div>
          <p className="component-title">Experience</p>
          <p className="py-6">
            These are the tools I have hands-on experience with.
          </p>
        </div>
        {/* Experience Grid */}
        <div className="grid   w-full grid-cols-2 sm:grid-cols-4 gap-7 text-center py-8 my-6">
          <div className="skill-container scroll-hide">
            <img alt="" className="skill-container-image" src={Node}></img>
            <p className="my-4">Node.js</p>
          </div>

          <div className="skill-container scroll-hide">
            <img alt="" className="skill-container-image" src={REACT_IMG}></img>
            <p className="my-4">React.js</p>
          </div>

          <div className="skill-container scroll-hide">
            <img alt="" className="skill-container-image" src={Spring}></img>
            <p className="my-4">Spring</p>
          </div>

          <div className="skill-container scroll-hide">
            <img alt="" className="skill-container-image" src={Docker}></img>
            <p className="my-4">Docker</p>
          </div>

          <div className="skill-container scroll-hide">
            <img
              alt=""
              className="skill-container-image "
              src={DockerCompose}
            ></img>
            <p className="my-4">Docker Compose</p>
          </div>
          <div className="skill-container scroll-hide">
            <img alt="" className="skill-container-image" src={Github}></img>
            <p className="my-4">Github</p>
          </div>
          <div className="skill-container scroll-hide">
            <img alt="" className="skill-container-image" src={MongoDB}></img>
            <p className="my-4">MongoDB</p>
          </div>
          <div className="skill-container scroll-hide">
            <img alt="" className="skill-container-image" src={Postgres}></img>
            <p className="my-4">PostgresSQL</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
