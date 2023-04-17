import { useState, useRef } from "react";
import { handleImage, handleSaveVideoUrl } from "../utils/functionExports";
import { editorTop } from "../utils/styles";
import EditorDropdown from "./EditorDropdown";
import EditorModals from "./EditorModals";
import {
  circleBtn,
  circlePlus,
  editorInner,
  editorInput,
} from "../utils/styles";
import EditorConfig from "./EditorConfig";
import BtnGreen from "./BtnGreen";

const Editor = () => {
  const [showDropdown, setShowDropDown] = useState(false);
  const [showModal, setShowModal] = useState({
    picture: false,
    video: false,
    link: false,
  });
  const [selectedImage, setSelectedImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [link, setLink] = useState("");

  const contentEditableRef = useRef<HTMLDivElement>(null);
  const handleInsertLink = () => {};

  return (
    <div>
      <div className={editorTop}>
        <div>
          <input
            className={editorInput}
            type="text"
            placeholder="Add a post title"
            autoFocus
          />
          <EditorConfig />
          <div className="pl-4 py-1 w-full">
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
        </div>

        {showDropdown ? (
          <EditorDropdown
            setShowModal={setShowModal}
            setShowDropDown={setShowDropDown}
            showModal={showModal}
          />
        ) : null}

        <EditorModals
          showModal={showModal}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          setShowModal={setShowModal}
          handleInsertLink={handleInsertLink}
          setVideoLink={setVideoLink}
          handleSaveVideoUrl={handleSaveVideoUrl}
          videoLink={videoLink}
          handleInsertImage={() =>
            handleImage(contentEditableRef.current, selectedImage, () =>
              setSelectedImage("")
            )
          }
        />
      </div>
    </div>
  );
};

export default Editor;
