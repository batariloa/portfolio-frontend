import React from "react";
import { useGithubRepositories } from "../hooks/useGithubRepositories";
import { FaGithub } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { nanoid } from "nanoid";
export const Work = () => {
  const { repositories } = useGithubRepositories("batariloa");

  return (
    <div
      name="work"
      className=" bg-bg-color-1 text-gray-300 min-h-screen flex z-0"
    >
      <div className="component-container">
        <div className="">
          <p className="component-title">Work</p>
          <p className="py-6">Check out some of my recent work</p>

          <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-5 text-center py-8 ">
            {repositories &&
              repositories.map((repo) => (
                <div
                  key={nanoid()}
                  className="frid grid-cols-1 group bg-black p-5 rounded-lge rounded-lg "
                >
                  <div className="flex">
                    <div>
                      <FaGithub size={50} />
                    </div>
                    <div className="ml-3 overflow-ellipsis flex items-center  truncate ">
                      <p className="font-bold  text-sm sm:text-base ">
                        {repo.name}
                      </p>
                    </div>
                  </div>

                  <div className="ml-2 p-5 h-[100px] sm:h-[110px] group-hover:opacity-0 duration-200   ">
                    <p className="text-sm sm:text-base white max-h-full overflow-hidden ">
                      {repo.description ? repo.description : "No description."}
                    </p>
                  </div>
                  <div className="flex mt-[-10px] justify-center opacity-0 group-hover:opacity-90 duration-300 -z-10  ">
                    <a
                      href={repo.html_url}
                      className="flex text-sm justify-center text-white border-2 px-4 py-2 my-2 items-center"
                    >
                      View repo
                      <span>
                        <BsEyeFill
                          className="ml-3 group-hover:animate-spin duration-300"
                          size={20}
                        ></BsEyeFill>
                      </span>
                    </a>
                  </div>
                </div>
              ))}
          </div>
          <ul></ul>
        </div>
      </div>
    </div>
  );
};
