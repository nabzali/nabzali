import React from "react";
import "./styles.css";

function Timeline() {
  return (
    <>
      <div class="timeline">
        <div class="timeline-empty"></div>
        <div class="timeline-middle">
          <div id="circle-top" class="timeline-circle"></div>
          <div class="timeline-circle"></div>
        </div>
        <a href="#" class="timeline-component timeline-content">
          <span class="top-right-text">2023-Present</span>
          <h3>Software Developer / Technical Consultant</h3>
          <p>Reply</p>
        </a>
        <a href="#" class="timeline-component timeline-content">
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
        <a href="#" class=" timeline-component timeline-content">
          <span class="top-right-text">2019-2020</span>
          <h3>Year in Industry - Technology Rotation</h3>
          <p>IBM</p>
        </a>
        <a href="#" class="timeline-component timeline-content">
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
        <a href="#" class=" timeline-component timeline-content">
          <span class="top-right-text">2015-2017</span>
          <h3>A Levels</h3>
          <p>Beal Sixth Form</p>
        </a>
      </div>
    </>
  );
}

export default Timeline;
