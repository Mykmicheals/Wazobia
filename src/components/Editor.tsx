import { useState, useRef } from "react";
import VideoModal from "../Modals/VideoModal";
import LinkModal from "../Modals/LinkModal";
import PictureModal from "../Modals/PictureModal";
import { handleImage, handleSaveVideoUrl } from "../utils/functionExports";
import { editorTop } from "../utils/styles";
import EditorDropdown from "./EditorDropdown";
import EditorContainer from "./EditorContainer";

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
      <EditorContainer
        setShowDropDown={setShowDropDown}
        showDropdown={showDropdown}
      />

      {showDropdown ? (
        <EditorDropdown
          setShowModal={setShowModal}
          setShowDropDown={setShowDropDown}
          showModal={showModal}
        />
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
