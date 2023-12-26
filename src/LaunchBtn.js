import "./styles.css";
import React, { useState } from "react";
import { Icon } from "@iconify/react";

const LaunchBtn = (props) => {
  return (
    <>
      <div class="btn-launch-terminal">
        <a class="" onClick={props.handleClick}>
          <h1>
            <Icon
              icon="material-symbols:terminal"
              width="100px"
              height="100px"
            />
          </h1>
          <h2>{"Launch Terminal"}</h2>
        </a>
      </div>
    </>
  );
};

export default LaunchBtn;
