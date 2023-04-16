import React, { useRef } from "react";
import { circleBtn, circlePlus, editorInner, editorInput } from "../utils/styles";
import EditorConfig from "./EditorConfig";

function EditorContainer({setShowDropDown,showDropdown}:any) {
  const contentEditableRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <input
        className={editorInput}
        type="text"
        placeholder="Add a post title"
        autoFocus
      />
      <EditorConfig />
      <div className="pl-4 py-4 w-full">
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
  );
}

export default EditorContainer;
