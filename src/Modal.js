import React from "react";
import "./styles.css";

const Modal = (props) => {
  const data = {
    university: "hello world sample text",
    ibm: "sample text",
    alevels: "sample a levels",
    job2: "sample text job2",
    job1: "sample text job1",
  };

  const textToDisplay = data[props.modalData];

  return (
    <>
      <div class="modal">
        <h1>{textToDisplay}</h1>
      </div>
    </>
  );
};

export default Modal;
