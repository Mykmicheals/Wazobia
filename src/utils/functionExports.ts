import { RefObject } from "react";
export const handleImage = (
  ref: any,
  selectedImage: string,
  setSelectedImage: (image: string) => void
) => {
  const contentEditable = ref;
  if (contentEditable) {
    const selection = window.getSelection();
    const range = document.createRange();
    range.setStart(contentEditable, contentEditable.childNodes.length);
    range.collapse(true);
    selection?.removeAllRanges();
    selection?.addRange(range);
    if (!selectedImage) {
      alert("Please select an image to insert");
      return;
    }
    const img = new Image();
    img.onerror = () => {
      alert("The selected file is not an image");
    };
    img.onload = () => {
      const imgHtml = `<img src="${selectedImage}" />`;
      document.execCommand("insertHTML", false, imgHtml);
      setSelectedImage("");
    };
    img.src = selectedImage;
  }
};

export const handleSaveVideoUrl = (
  videoLink: string,
  setVideoLink: (videoLink: string) => void
) => {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  if (urlRegex.test(videoLink.trim())) {
    const url = new URL(videoLink);
    const videoId = url.searchParams.get("v");
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    document?.getElementById("editor")?.appendChild(iframe);

    setVideoLink("");
  } else {
    alert("Invalid video url");
  }
};

export const handleBold = () => {
  document.execCommand("bold", false, undefined);
  console.log("working");
};

export const handleInsertBullet = (ref: any) => {
  const contentEditable = ref;
  if (contentEditable) {
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    const bullet = document.createElement("li");
    const textNode = document.createTextNode(" ");
    bullet.appendChild(textNode);
    range?.insertNode(bullet);
  }
};
