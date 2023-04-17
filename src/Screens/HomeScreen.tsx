import React, { useState } from "react";
import Editor from "../components/Editor";

const HomeScreen = () => {
  const btn = [
    {
      name: "button1",
      id: "1",
    },

    {
      name: "button2",
      id: "2",
    },

    {
      name: "button3",
      id: "3",
    },
  ];

  const para = [
    {
      name: "paragraph1",
      id: "1",
    },

    {
      name: "paragraph2",
      id: "2",
    },

    {
      name: "paragraph3",
      id: "3",
    },
  ];

  return (
    <>
      <Editor />
    </>
  );
};

export default HomeScreen;
