export const handleImage = (ref: any, selectedImage: string) => {
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
    };
    img.src = selectedImage;
  }
};

export const handleSaveVideoUrl = (videoLink: string) => {
  const urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
  if (urlRegex.test(videoLink.trim())) {
    const url = new URL(videoLink);
    const videoId = url.searchParams.get("v");
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    document?.getElementById("editor")?.appendChild(iframe);
  } else {
    alert("Invalid video url");
  }
};
