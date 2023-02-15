import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-bg-color-1 text-gray-300">
      <div className="component-container">
        {/*This is the grid */}
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          {/*This is row 1 col 1 */}
          <div className="text-left  sm:text-right  pb-8 sm:pl-4">
            <p className="text-4xl inline font-bold border-b-4 border-accent-color-1">
              About
            </p>
          </div>
          {/*This is row 1 col 2 */}
          <div></div>
        </div>
        <div className="sm:text-right  max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
          {/*This is row 2 col 1 */}
          <div className="sm:text-right text-4xl font-bold">
            <p>Hello there, nice to meet you!</p>
          </div>
          {/*This is row 2 col 2 */}
          <div>
            <p>
              As a full-stack developer, I'm enthusiastic about using my skills
              and knowledge to turn innovative ideas into reality. Technology is
              my passion, and I enjoy exploring new frameworks and programming
              languages to discover the best solutions for each project. I take
              pride in delivering high-quality work and paying close attention
              to every detail. You can check out my portfolio to see some of the
              projects I've worked on. If you have any questions or would like
              to explore the possibility of collaborating, please don't hesitate
              to reach out.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
