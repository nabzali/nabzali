import React from "react";
import "./styles.css";
import Typed from "typed.js";
// import  from "./assets/circle.drawio.svg";
// import crossIcon from "./assets/cross.drawio.svg";

const Terminal = (props) => {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "About me...\n\n<b>Name:</b> Nabeel S. Ali\n<b>Occupation:</b> Full-Stack Software Developer, Technical Consultant\n<b>Qualification(s):</b> BSc Computer Science (with Year in Industry)\n<b>Alma Mater:</b> The University of Nottingham\n<b>Hometown:</b> London, United Kingdom\n<b>Origin:</b> Mixed (Pakistani/English)\n<b>Interests:</b> Football, Travelling, Gym, Praying, Books, Learning\n\nTo continue, click inside and hit enter, or simply scroll to the next section\n...",
      ],
      typeSpeed: 30,
      backSpeed: 100,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div class="terminal">
        <div class="terminal-titlebar">
          <div></div>
          <div class="text">Terminal — nabzali.github.io</div>
          <div class="terminal-window-btns">
            <li>
              <div class="btn-terminal" />
            </li>
            <li>
              <div class="btn-terminal" />
            </li>
            <li>
              <div class="btn-terminal cross" onClick={props.handleClick} />
            </li>
          </div>
        </div>
        <div class="terminal-body terminal-text">
          <b class="">user@nabzali.github.io:~$ </b>
          <span ref={el} id="tName" class="terminal-text"></span>
        </div>
      </div>
    </>
  );
};

export default Terminal;
