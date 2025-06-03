import React from "react";
import "./styles.css";
import "animate.css";

const Modal = ({ modalData, handleClose }) => {
  const data = {
    university: [
      "Bsc Computer Science",
      "The University of Nottingham",
      "2:1, Computer Science with Year in Industry. AI, Databases, Networking, Algorithms, HCI, etc.",
    ],
    ibm: [
      "Year in Industry - Technology Rotation",
      "IBM",
      "C#, Python, Automated Testing, Hackathons, ML",
    ],
    alevels: [
      "A Levels",
      "Beal Sixth Form",
      "Mathematics: A, Economics: A, Computer Science: A",
    ],
    job2: [
      "Software Developer, Technical Consultant",
      "Reply",
      "AWS, React, Web Dev, Generative AI, Cloud Engineering, Consulting, Terraform, Agile Practices",
    ],
    job1: [
      "Junior Software Developer",
      "Mazepoint",
      "Web Dev, .NET, Powershell",
    ],
  };

  const textToDisplay = data[modalData];

  return (
    <>
      <div class="modal animate__animated animate__fadeIn">
        <h3 class="modal-heading blue-text">{textToDisplay[0]}</h3>
        <h4 class="modal-heading">{textToDisplay[1]}</h4>
        <p>{textToDisplay[2]}</p>
        <a class="btn-b btn-long btn-light" onClick={() => handleClose()}>
          Close
        </a>
      </div>
    </>
  );
};

export default Modal;
