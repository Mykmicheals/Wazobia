import { useState, useRef } from "react";
import { AiFillPicture, AiFillVideoCamera } from "react-icons/ai";
import { TiSocialFlickr } from "react-icons/ti";

import VideoModal from "../Modals/VideoModal";
import LinkModal from "../Modals/LinkModal";
import PictureModal from "../Modals/PictureModal";
import { handleImage, handleSaveVideoUrl } from "../utils/functionExports";
import {
  circleBtn,
  circlePlus,
  dropDown,
  editorConfig,
  editorInner,
  editorInput,
  editorTop,
  modal1,
} from "../utils/styles";
import EditorConfig from "./EditorConfig";

const Editor = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState({
    picture: false,
    video: false,
    link: false,
  });
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [videoLink, setVideoLink] = useState("");
  const [link, setLink] = useState("");
  const contentEditableRef = useRef<HTMLDivElement>(null);

  const handleInsertLink = () => {};

  return (
    <div className={editorTop}>
      <input
        className={editorInput}
        type="text"
        placeholder="Add a post title"
        autoFocus
      />
      <EditorConfig />
      <div className="pl-4 py-4 w-full">
        <div
          className={editorInner}
          placeholder="Add Content"
          ref={contentEditableRef}
          contentEditable
          id="editor"
        ></div>
        <div
          onClick={() => {
            setShowDropDown(!showDropdown);
          }}
          className={circleBtn}
        >
          <span className={circlePlus}>+</span>
        </div>
      </div>

      {showDropdown ? (
        <>
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
        </>
      ) : null}

      <div>
        {showModal.picture ? (
          <PictureModal
            setSelectedImage={setSelectedImage}
            handleInsertImage={() =>
              handleImage(contentEditableRef.current, selectedImage, () =>
                setSelectedImage("")
              )
            }
            hideModal={() => setShowModal({ ...showModal, picture: false })}
          />
        ) : null}
        {showModal.video ? (
          <VideoModal
            setVideoUrl={setVideoLink}
            handleInsertLink={() =>
              handleSaveVideoUrl(videoLink, () => setVideoLink(""))
            }
            hideModal={() => setShowModal({ ...showModal, video: false })}
          />
        ) : null}

        {showModal.link ? (
          <LinkModal
            setVideoUrl={setVideoLink}
            handleInsertLink={handleInsertLink}
            hideModal={() => setShowModal({ ...showModal, link: false })}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Editor;
