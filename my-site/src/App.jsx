import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faCode,
  faHouse,
  faBusinessTime,
  faAddressCard,
  faUserGraduate,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import "./styles.css";
import { Icon } from "@iconify/react";
import Typed from "typed.js";
import Terminal from "./Terminal";
import Timeline from "./Timeline";
import LaunchBtn from "./LaunchBtn";

function App() {
  const el = React.useRef(null);

  const [launchTerminalClicked, setLaunchTerminalClicked] = useState(false);

  function onClickLaunchTerminal() {
    setLaunchTerminalClicked((prevState) => !prevState);
  }

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Front-end Developer",
        "Back-end Developer",
        "Technical Consultant",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 100,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <>
      <noscript>You need to enable JavaScript to run this app.</noscript>
      <header>
        <div class="container" id="nav-container">
          <span class="name blue-text">Portfolio.</span>
          <nav>
            <ul>
              <li>
                <a href="#home">
                  <FontAwesomeIcon icon={faHouse} />
                  Home
                </a>
              </li>
              <li>
                <a href="#about">
                  <FontAwesomeIcon icon={faUserGraduate} />
                  About
                </a>
              </li>
              <li>
                <a href="#history">
                  <FontAwesomeIcon icon={faBusinessTime} />
                  History
                </a>
              </li>
              <li>
                <a href="#skills">
                  <FontAwesomeIcon icon={faCode} />
                  Skills
                </a>
              </li>
              <li>
                <a href="#credentials">
                  <FontAwesomeIcon icon={faAddressCard} />
                  Credentials
                </a>
              </li>
              <li>
                <a href="#contact">
                  <FontAwesomeIcon icon={faMessage} />
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="home">
        <div class="container">
          <div class="content-wrapper">
            <div class="home-content-left">
              <h1>
                Hi, it's <span class="glow-text blue-text">Nabeel Ali</span>
              </h1>
              <h2>
                And I'm a{" "}
                <span ref={el} class="dynamic-text glow-text blue-text"></span>
              </h2>
              <h2>Welcome to my Personal Website...</h2>
              <div class="optionBtns">
                <a class="btn-b btn-long" id="download-cv" href="#">
                  Download CV
                  <FontAwesomeIcon icon={faDownload} />
                </a>
              </div>
              <div class="social-media">
                <a
                  class="btn-b btn-icon"
                  data-tooltip="LinkedIn"
                  href="https://linkedin.com/in/nabeel-s-ali"
                >
                  <Icon icon="mdi:linkedin" />
                </a>
                <a
                  class="btn-b btn-icon"
                  data-tooltip="Instagram"
                  href="https://www.instagram.com/nabz.ali_"
                >
                  <Icon icon="ri:instagram-fill" />
                </a>
                {/* <a
                  class="btn-b btn-icon"
                  data-tooltip="Pinterest"
                  href="https://www.pinterest.co.uk/L99B4N/"
                >
                  <iconify-icon
                    
                    icon="jam:pinterest"
                  ></iconify-icon>
                </a> */}
                <a
                  class="btn-b btn-icon"
                  data-tooltip="GitHub"
                  href="https://github.com/nabzali"
                >
                  <Icon icon="mdi:github" />
                </a>
                <a
                  class="btn-b btn-icon"
                  data-tooltip="Leetcode"
                  href="https://leetcode.com/nabz99/"
                >
                  <Icon icon="simple-icons:leetcode" />
                </a>
              </div>
            </div>
            <div class="home-content-right"></div>
          </div>
        </div>
      </section>

      <section id="about">
        <div class="container">
          {launchTerminalClicked ? (
            <Terminal />
          ) : (
            <LaunchBtn handleClick={onClickLaunchTerminal} />
          )}
        </div>
      </section>

      <section id="history">
        <div class="container" id="timeline-container">
          <Timeline />
        </div>
      </section>
      <section id="skills">
        <div class="container"></div>
      </section>

      <section id="credentials">
        <div class="container"></div>
      </section>

      <section id="contact">
        <div class="container"></div>
      </section>

      <footer>
        <div class="container">
          <p>&copy; 2024 Nabeel Ali. All rights reserved.</p>
        </div>
      </footer>
      {/* <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
      <script src="./script.js"></script> */}
    </>
  );
}

export default App;
