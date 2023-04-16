import React from "react";
import { dropDown, modal1 } from "../utils/styles";
import { AiFillPicture, AiFillVideoCamera } from "react-icons/ai";
import { TiSocialFlickr } from "react-icons/ti";

const EditorDropdown = ({ setShowModal, setShowDropDown, showModal  }: any) => {
  return (
    <div id="embeds" className={dropDown}>
      <h4>Embeds</h4>
      <div
        onClick={() => {
          setShowModal({ ...showModal, picture: true });
          setShowDropDown(false);
        }}
        className={modal1}
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
        className={modal1}
      >
        <AiFillVideoCamera className="my-1" />
        <div>
          <p>Video</p>
          <small>Embed a youtube video</small>
        </div>
      </div>

      <div
        onClick={() => setShowModal({ ...showModal, link: true })}
        className={modal1}
      >
        <TiSocialFlickr className="my-1" />
        <div>
          <p>Social</p>
          <small>Embed a facebook link</small>
        </div>
      </div>
    </div>
  );
};

export default EditorDropdown;
