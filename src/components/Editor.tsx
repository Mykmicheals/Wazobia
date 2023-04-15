import React, { useState, useEffect, useRef } from "react";
import { AiFillPicture, AiFillVideoCamera } from "react-icons/ai";
import { TiSocialFlickr } from "react-icons/ti";

function Editor() {
  const [showDropdown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState({
    picture: false,
    video: false,
    link: false,
  });

  return (
    <div className="border h-screen overflow-hidden overflow-y-scroll border-gray-300 mx-10 lg:mx-80 md:mx-20 my-20">
      <input
        className=" w-full px-4 py-2 text-gray-700 text-2xl font-bold placeholder-gray-600"
        type="text"
        placeholder="Add a post title"
        autoFocus
      />
      <div className="cursor-text pl-4 py-4 w-full">
        <div className="" placeholder="Add Content" contentEditable></div>
        <div
          onClick={() => {
            setShowDropDown(!showDropdown);
          }}
          className="cursor-pointer bg-gray-300 rounded-full w-8 h-8 flex my-6 justify-center items-center mt-5"
        >
          <span className="text-gray-700 align-center">+</span>
        </div>
      </div>

      {showDropdown ? (
        <>
          <div
            id="embeds"
            className="shadow-lg w-2/4 overflow md:w-1/4 px-2 py-4"
          >
            <h4>Embeds</h4>
            <div
              onClick={() => {
                setShowModal({ ...showModal, picture: true });
                setShowDropDown(false);
              }}
              className="cursor-pointer flex gap-3 mt-5"
            >
              <AiFillPicture className="my-1" />
              <div>
                <p>Picture</p>
                <small>.jpeg, .png</small>
              </div>
            </div>
            <div
              onClick={() => {
                setShowModal({ ...showModal, video: true });
                setShowDropDown(false);
              }}
              className="cursor-pointer flex gap-3 mt-5"
            >
              <AiFillVideoCamera className="my-1" />
              <div>
                <p>Video</p>
                <small>Embed a youtube video</small>
              </div>
            </div>

            <div
              onClick={() => setShowModal({ ...showModal, link: true })}
              className="cursor-pointer flex gap-3 mt-5"
            >
              <TiSocialFlickr className="my-1" />
              <div>
                <p>Social</p>
                <small>Embed a facebook link</small>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Editor;
