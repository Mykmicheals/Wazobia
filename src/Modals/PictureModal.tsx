import React, { useState } from "react";
import ModalContainer from "./ModalContainer";

interface PictureModalProps {
  hideModal: () => void;
  handleInsertImage: ()=>void;
  setSelectedImage: any;
}

function PictureModal({
  hideModal,
  setSelectedImage,
  handleInsertImage,
}: PictureModalProps) {
  const [fileName, setFile] = useState("");

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files != null && e.target.files.length > 0) {
      var fileName = e.target.files[0];
      setFile(fileName.name);
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <ModalContainer handleInsert={handleInsertImage} hideModal={hideModal}>
      <p className="my-4">Upload image</p>
      <p className="my-8 text-sm">File upload</p>
      <div className="border-dashed border-2 border-green-500 w-full">
        <div className="text-center py-5 md:py-10">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            id="files"
            onChange={handleImageSelect}
          />

          <label
            htmlFor="files"
            className="text-sm  border-2 border-green-500 p-2"
          >
            {fileName
              ? `Selected image: ${fileName.slice(0, 8)}`
              : "Import image from device"}
          </label>
        </div>
      </div>
    </ModalContainer>
  );
}

export default PictureModal;

//8073738551
