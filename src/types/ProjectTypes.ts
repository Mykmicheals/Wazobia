export interface EditorModalsProps {
  showModal: {
    picture: boolean;
    link: boolean;
    video: boolean;
  };
  setSelectedImage: React.Dispatch<React.SetStateAction<string>>;
  selectedImage: string;
  setShowModal: React.Dispatch<
    React.SetStateAction<{
      picture: boolean;
      link: boolean;
      video: boolean;
    }>
  >;
  handleInsertLink: () => void;
  setVideoLink: React.Dispatch<React.SetStateAction<string>>;
  handleSaveVideoUrl: (
    videoLink: string,
    setVideoLink: React.Dispatch<React.SetStateAction<string>>
  ) => void;
  videoLink: string;
  handleInsertImage: () => void;
}

export interface EditorContainer {}
