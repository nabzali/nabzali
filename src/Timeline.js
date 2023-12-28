import React, { useState, useEffect } from "react";
import "./styles.css";
import Modal from "./Modal";

function Timeline() {
  const [timelineContentClicked, setTimelineContentClicked] = useState(false);
  const [modalSelection, setModalSelection] = useState("");

  function onClickTimeline(value) {
    setTimelineContentClicked(true);
    setModalSelection(value);
  }

  function onClickCloseModal() {
    setTimelineContentClicked(false);
  }

  return (
    <>
      <div class="timeline">
        <div class="timeline-empty"></div>
        <div class="timeline-middle">
          <div id="circle-top" class="timeline-circle"></div>
          <div class="timeline-circle"></div>
        </div>
        <a
          onClick={() => onClickTimeline("job2")}
          class="timeline-component timeline-content"
        >
          <span class="top-right-text">2023-Present</span>
          <h3>Software Developer / Technical Consultant</h3>
          <p>Reply</p>
        </a>
        <a
          onClick={() => onClickTimeline("job1")}
          class="timeline-component timeline-content"
        >
          <span class="top-right-text">2021-2023</span>
          <h3>Junior Software Developer</h3>
          <p>Mazepoint</p>
        </a>
        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class="timeline-empty"></div>
        <div class="timeline-empty"></div>
        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <a
          onClick={() => onClickTimeline("ibm")}
          class=" timeline-component timeline-content"
        >
          <span class="top-right-text">2019-2020</span>
          <h3>Year in Industry - Technology Rotation</h3>
          <p>IBM</p>
        </a>
        <a
          onClick={() => onClickTimeline("university")}
          class="timeline-component timeline-content"
        >
          <span class="top-right-text">2017-2021</span>
          <h3>BSc Computer Science</h3>
          <p>The University of Nottingham</p>
        </a>
        <div class="timeline-middle">
          <div class="timeline-circle"></div>
        </div>
        <div class="timeline-empty"></div>
        <div class="timeline-empty"></div>
        <div class="timeline"></div>
        <a
          onClick={() => onClickTimeline("alevels")}
          class=" timeline-component timeline-content"
        >
          <span class="top-right-text">2015-2017</span>
          <h3>A Levels</h3>
          <p>Beal Sixth Form</p>
        </a>
      </div>
      <>
        {timelineContentClicked ? (
          <Modal modalData={modalSelection} handleClose={onClickCloseModal} />
        ) : (
          ""
        )}
      </>
    </>
  );
}

export default Timeline;
