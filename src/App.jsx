import React, { useState } from "react";
import "./styles.css";
import Typed from "typed.js";
import Terminal from "./Terminal";
import Timeline from "./Timeline";
import LaunchBtn from "./LaunchBtn";
import Navigation from "./Navigation";
import SocialMedia from "./SocialMedia";
import Accreditations from "./Accreditations";
import Skills from "./Skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faCircleRight } from "@fortawesome/free-solid-svg-icons";
import avatar from "./assets/hacker-avatar.jpg";
import "animate.css";
import Contact from "./Contact";

function App() {
  const el = React.useRef(null);

  const [launchTerminalClicked, setLaunchTerminalClicked] = useState(false);

  function onClickLaunchTerminal() {
    setLaunchTerminalClicked((prevState) => {
      // Scroll adjustment for both opening and closing
      setTimeout(() => {
        const aboutSection = document.getElementById('about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100); // Small delay to ensure component state is updated
      return !prevState;
    });
  }

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Software Developer",
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
        <div
          class="container animate__animated animate__fadeIn"
          id="nav-container"
        >
          <Navigation />
        </div>
      </header>

      <section id="home">
        <div class="container">
          <div class="wrapper-flex">
            <div class="home-content-left animate__animated animate__fadeInLeft">
              <h1>
                Hi, it's <span class="glow-text blue-text">Nabeel Ali</span>
              </h1>
              <h2>
                And I'm a{" "}
                <span ref={el} class="dynamic-text glow-text blue-text"></span>
              </h2>
              <h2>Welcome to my Personal Website...</h2>
              <div class="optionBtns">
                <a class="btn-b btn-long btn-light" id="download-cv" href="/CV.pdf" download>
                  Download CV
                  <FontAwesomeIcon icon={faDownload} />
                </a>
                <a class="btn-b btn-long btn-dark" id="next" href="#about">
                  Next Section
                  <FontAwesomeIcon icon={faCircleRight} />
                </a>
              </div>
              <SocialMedia></SocialMedia>
            </div>
            <div class="home-content-right wrapper-grid animate__animated animate__fadeInRight">
              <img class="avatar" src={avatar}></img>
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div class="container">
          <h1 class="about-text">
            {launchTerminalClicked ? (
              ""
            ) : (
              <>
                To find out <span class="blue-text glow-text">About Me</span>,
                click the button below!
              </>
            )}
          </h1>
          {launchTerminalClicked ? (
            <Terminal handleClick={onClickLaunchTerminal} />
          ) : (
            <LaunchBtn handleClick={onClickLaunchTerminal} />
          )}
        </div>
      </section>

      <section id="timeline">
        <div class="container" id="timeline-container">
          <h1 class="blue-text glow-text">Timeline:</h1>
          <div class="wrapper-grid" id="timeline-wrapper">
            <Timeline />
          </div>
        </div>
      </section>
      <section id="skills">
        <div class="container">
          <Skills />
        </div>
      </section>

      <section id="accreditations">
        <div class="container wrapper-grid">
          <Accreditations />
        </div>
      </section>

      <section id="contact">
        <div class="container wrapper-grid">
          <Contact />
        </div>
      </section>

      <footer>
        <div class="container">
          <p>&copy; 2025 Nabeel Ali. All rights reserved.</p>
        </div>
      </footer>
      {/* <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
      <script src="./script.js"></script> */}
    </>
  );
}

export default App;
