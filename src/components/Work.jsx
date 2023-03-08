import React from "react";
import { useGithubRepositories } from "../hooks/useGithubRepositories";
import { FaGithub } from "react-icons/fa";
import { BsEyeFill } from "react-icons/bs";
import { nanoid } from "nanoid";
export const Work = () => {
  const { repositories, loading, error, cached } =
    useGithubRepositories("batariloa");

  return (
    <div
      name="work"
      className=" bg-bg-color-1 text-gray-300 min-h-screen flex z-0"
    >
      {/* If loading show loading spinner animation */}
      {loading && (
        <div className="component-container">
          <div role="status" className="flex  justify-center mt-10">
            <svg
              aria-hidden="true"
              className="w-[4rem] h-[4rem] mr-2 text-gray-200 animate-spin  fill-accent-color-1"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
          </div>
          <div className="flex justify-center mt-3">
            <p>Loading Github...</p>
          </div>
        </div>
      )}

      {/* If data received OR offline show repos */}
      {((!loading && error === null) || cached) && (
        <div className="component-container ">
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

                    <div className="ml-2 px-5 mt-5 h-[100px] sm:h-[110px] group-hover:opacity-0 duration-200   ">
                      <p className="text-sm sm:text-base white max-h-full overflow-hidden ">
                        {repo.description
                          ? repo.description
                          : "No description."}
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
      )}

      {/*if error is not null, display it*/}
      {error !== null && (
        <div className="component-container">
          <p className="text-center">
            Sorry, there was an error loading my repos!
          </p>
        </div>
      )}
    </div>
  );
};
