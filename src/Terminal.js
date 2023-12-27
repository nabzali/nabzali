import React from "react";
import "./styles.css";
import Typed from "typed.js";

function Terminal() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "<b>Name:</b> Nabeel S. Ali\n<b>Occupation:</b> Full-Stack Software Developer, Technical Consultant\n<b>Qualification(s):</b> BSc Computer Science (with Year in Industry)\n<b>Alma Mater:</b> The University of Nottingham\n<b>Hometown:</b> London, United Kingdom\n<b>Origin:</b> Mixed (Pakistani/English)\n<b>Interests:</b> Football, Travelling, Gym, Praying, Books, Learning\n\nThat's some brief info on me. To continue, click inside here and hit enter, or simply scroll to the next section\n...",
      ],
      typeSpeed: 20,
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
        <div class="terminal-titlebar">Terminal — nabzali.github.io</div>
        <div class="terminal-body terminal-text">
          <b class="blue-text">user@nabzali.github.io:~$ </b>
          <span ref={el} id="tName" class="terminal-text"></span>
        </div>
      </div>
    </>
  );
}

export default Terminal;
