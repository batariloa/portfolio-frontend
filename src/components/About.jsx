import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-bg-color-1 text-gray-300">
      <div className="component-container">
        {/*This is the grid */}
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          {/*This is row 1 col 1 */}
          <div className="text-left  sm:text-right  pb-4 sm:pl-4">
            <p className="component-title ">About</p>
          </div>
          {/*This is row 1 col 2 */}
          <div></div>
        </div>
        <div className="sm:text-right  max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap- sm:gap-8">
          {/*This is row 2 col 1 */}
          <div className="sm:text-right sm:text-4xl text-2xl font-bold">
            <p>Hello there, nice to meet you!</p>
          </div>
          {/*This is row 2 col 2 */}
          <div>
            <p className="my-3">
              As a full-stack developer, I am committed to delivering practical
              and efficient web solutions. I take pride in my work and strive to
              deliver high-quality solutions with attention to detail. I enjoy
              exploring new programming languages and frameworks to keep myself
              updated with the latest developments in the industry. This enables
              me to provide the most effective solutions for each unique
              project.
            </p>
            <p className="my-3">
              My love for programming began early on, and I have since dedicated
              myself to honing my skills and keeping up with the latest industry
              advancements. My portfolio showcases some of the solutions I've
              developed, and I'm always excited to collaborate with others and
              take on new challenges. If you have any questions or are
              interested in working together, please don't hesitate to contact
              me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
