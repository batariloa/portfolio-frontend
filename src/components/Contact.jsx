import React from "react";

export const Contact = () => {
  return (
    <div className="screen-container h-screen  ">
      <div className="component-container flex-col" name="contact">
        <div className="">
          <form
            action="https://getform.io/f/3bbcaa7f-1e9b-4e31-8472-875a60bebe28"
            method="POST"
            className="flex flex-col max-2-[600px] w-full  "
          >
            <div className="pb-8">
              <p className="component-title">Contact</p>
              <p className="py-4">
                Submit the form below or send me an email at:
                <a href="mailto:batariloa@icloud.com"> batariloa@icloud.com</a>
              </p>
            </div>

            <input
              className="my-4 p-2 bg-[#ccd6f6] text-black rounded-sm placeholder-gray-800 splaceholder:opacity-60"
              type="text"
              placeholder="Name"
              name="name"
            ></input>
            <input
              className="my-4 p-2 bg-[#ccd6f6] text-black rounded-sm placeholder-gray-800 splaceholder:opacity-60"
              type="email"
              placeholder="Email"
              name="email"
            ></input>
            <textarea
              className="my-4 p-2 bg-[#ccd6f6] text-black rounded-sm placeholder-gray-800 splaceholder:opacity-60"
              type="text"
              placeholder="Message..."
              name="message"
              rows={7}
            ></textarea>

            <button className="button-bordered  py-2 px-3 text-xl  mx-auto">
              Send message!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
