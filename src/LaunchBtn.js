import "./styles.css";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const LaunchBtn = (props) => {
  return (
    <>
      <div class="wrapper-grid">
        <a
          class="btn-b btn-dark btn-long btn-launch-terminal"
          onClick={props.handleClick}
        >
          Launch Terminal
          <Icon
            icon="material-symbols:terminal"
            width="0.8rem"
            height="0.8rem"
          />
        </a>
      </div>
    </>
  );
};

export default LaunchBtn;
