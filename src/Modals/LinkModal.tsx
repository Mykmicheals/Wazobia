import React, { useState, ReactNode } from "react";
import ModalContainer from "./ModalContainer";

interface PictureModalProps {
  hideModal: () => void;
  handleInsertLink: () => void;
  setVideoUrl: any;
}

function LinkModal({
  hideModal,
  setVideoUrl,
  handleInsertLink,
}: PictureModalProps) {
  const videoLinkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(e.target.value);
  };

  const [switchOn, setSwitch] = useState(true);

  return (
    <ModalContainer handleInsert={handleInsertLink} hideModal={hideModal}>
      <p className="my-4">Social Media Platform</p>
      <select
        name=""
        id=""
        className="block pl-4 w-full border border-gray-300 py-1 mt-4"
      >
        <option value="">Facebook</option>
        <option value="">Twitter</option>
      </select>
      <p className="my-4">Url</p>
      <input
        className="block pl-4 w-full border border-gray-300 py-1 mt-4"
        type="text"
        onChange={videoLinkHandler}
      />
      <p className="mt-8">Code</p>
      <input
        className="block pl-4 w-full border border-gray-300 py-1 mt-4"
        type="text"
        onChange={videoLinkHandler}
      />
      <div className="flex gap-32 md:gap-80 my-5 relative">
        <p>Disable caption</p>
        {/* <Switch
          className="text-sm h-5 w-5 sm:left-24 md:left-48"
          onChange={() => setSwitch(!switchOn)}
          checked={switchOn}
        /> */}
      </div>
    </ModalContainer>
  );
}

export default LinkModal;
