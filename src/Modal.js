import React from "react";
import "./styles.css";

const Modal = ({ modalData, handleClose }) => {
  const data = {
    university: [
      "Bsc Computer Science",
      "The University of Nottingham",
      "Voluptate velit velit officia ullamco magna.",
    ],
    ibm: [
      "Year in Industry - Technology Rotation",
      "IBM",
      "Culpa pariatur non consectetur est reprehenderit et reprehenderit elit adipisicing qui.",
    ],
    alevels: [
      "A Levels",
      "Beal Sixth Form",
      "Mathematics: A, Economics: A, Computer Science: A",
    ],
    job2: [
      "Software Developer, Technical Consultant",
      "Reply",
      "Et et esse adipisicing officia Lorem ad duis nulla officia est et eiusmod exercitation ipsum.",
    ],
    job1: [
      "Junior Software Developer",
      "Mazepoint",
      "Id anim ad adipisicing in pariatur commodo incididunt officia do ut dolore ipsum adipisicing ex.",
    ],
  };

  const textToDisplay = data[modalData];

  return (
    <>
      <div class="modal">
        <h3 class="modal-heading blue-text">{textToDisplay[0]}</h3>
        <h3 class="modal-heading">{textToDisplay[1]}</h3>
        <p>{textToDisplay[2]}</p>
        <a class="btn-b btn-long btn-light" onClick={() => handleClose()}>
          Close
        </a>
      </div>
    </>
  );
};

export default Modal;
