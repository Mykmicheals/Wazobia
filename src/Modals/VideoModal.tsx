import React, { useState } from "react";
import ModalContainer from "./ModalContainer";

interface PictureModalProps {
  hideModal: () => void;
  handleInsertLink: () => void;
  setVideoUrl: any;
}



function VideoModal({
  hideModal,
  setVideoUrl,
  handleInsertLink,
}: PictureModalProps) {
  const videoLinkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    var videoUrl = e.target.value;
    setVideoUrl(videoUrl);
  };

  return (
    <ModalContainer handleInsert={handleInsertLink} hideModal={hideModal}>
      <p className="my-4">Video Provider</p>
      <select
        name=""
        id=""
        className="block pl-4 w-full pr-4 bg-gray-100 border border-gray-200 py-1 mt-4"
      >
        <option value="">Youtube</option>
        <option value="">google</option>
      </select>

      <p className="my-4">Url</p>
      <input
        className="block pl-4 w-full border bg-gray-100 border-gray-200 py-1 mt-4"
        type="text"
        onChange={videoLinkHandler}
      />
    </ModalContainer>
  );
}

export default VideoModal;
