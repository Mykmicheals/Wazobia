import { useRef } from "react";
import LinkModal from "../Modals/LinkModal";
import PictureModal from "../Modals/PictureModal";
import VideoModal from "../Modals/VideoModal";
import { EditorModalsProps } from "../types/ProjectTypes";

const EditorModals = ({
  showModal,
  setSelectedImage,
  selectedImage,
  setShowModal,
  handleInsertLink,
  setVideoLink,
  handleSaveVideoUrl,
  videoLink,
  handleInsertImage,
}: EditorModalsProps) => {

  return (
    <div>
      {showModal.picture ? (
        <PictureModal
          setSelectedImage={setSelectedImage}
          handleInsertImage={handleInsertImage}
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
  );
};

export default EditorModals;
