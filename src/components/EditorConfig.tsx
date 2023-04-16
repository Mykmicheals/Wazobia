import React from "react";
import { editorConfig } from "../utils/styles";
import {
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineAlignCenter,
} from "react-icons/ai";
import {
  BsLink45Deg,
  BsFillImageFill,
  BsTypeBold,
  BsTypeItalic,
} from "react-icons/bs";
import { MdFormatListBulleted } from "react-icons/md";
import { RiArrowDropDownLine } from "react-icons/ri";

const EditorConfig = () => {
  return (
    <div className={editorConfig}>
      <p>Paragraph</p>
      <div className="mt-1 flex flex-row gap-6">
        <RiArrowDropDownLine />
        <BsFillImageFill />
        <BsLink45Deg />
        <BsTypeBold />
        <BsTypeItalic />
        <AiOutlineAlignLeft />
        <AiOutlineAlignCenter />
        <AiOutlineAlignRight />
        <MdFormatListBulleted />
      </div>
    </div>
  );
};

export default EditorConfig;
