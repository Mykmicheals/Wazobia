// export const handleImage = (ref, selectedImage) => {
//   const contentEditable = ref;
//   if (contentEditable) {
//     const selection = window.getSelection();
//     const range = document.createRange();
//     range.setStart(contentEditable, contentEditable.childNodes.length);
//     range.collapse(true);
//     selection?.removeAllRanges();
//     selection?.addRange(range);
//     console.log(selectedImage);
//     if (selectedImage === "") {
//       alert("image cannot be empty");
//     } else {
//       const imgHtml = `<img src="${selectedImage}" />`;
//       document.execCommand("insertHTML", false, imgHtml);
//     }
//   }
// };

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
