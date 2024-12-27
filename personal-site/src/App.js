// import "./styles.css";
// import "./script.js";

function App() {
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
                  <i class="fa-solid fa-house"></i>Home
                </a>
              </li>
              <li>
                <a href="#about">
                  <i class="fa-solid fa-user-graduate"></i>About
                </a>
              </li>
              <li>
                <a href="#history">
                  <i class="fa-solid fa-business-time"></i>History
                </a>
              </li>
              <li>
                <a href="#skills">
                  <i class="fa-solid fa-code"></i>Skills
                </a>
              </li>
              <li>
                <a href="#credentials">
                  <i class="fa-solid fa-id-card"></i>Credentials
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i class="fa-solid fa-message"></i>Contact
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
                And I'm a <span class="dynamic-text glow-text blue-text"></span>
              </h2>
              <h2>Welcome to my Personal Website...</h2>
              <div class="optionBtns">
                <a class="btn btnLong" id="download-cv" href="#">
                  Download CV<i id="download" class="fa-solid fa-download"></i>
                </a>
              </div>
              <div class="social-media">
                <a
                  class="btn btnIcon"
                  data-tooltip="LinkedIn"
                  href="https://linkedin.com/in/nabeel-s-ali"
                >
                  <iconify-icon class="icon" icon="mdi:linkedin"></iconify-icon>
                </a>
                <a
                  class="btn btnIcon"
                  data-tooltip="Instagram"
                  href="https://www.instagram.com/nabz.ali_"
                >
                  <iconify-icon
                    class="icon"
                    icon="ri:instagram-fill"
                  ></iconify-icon>
                </a>
                <a
                  class="btn btnIcon"
                  data-tooltip="Pinterest"
                  href="https://www.pinterest.co.uk/L99B4N/"
                >
                  <iconify-icon
                    class="icon"
                    icon="jam:pinterest"
                  ></iconify-icon>
                </a>
                <a
                  class="btn btnIcon"
                  data-tooltip="GitHub"
                  href="https://github.com/nabzali"
                >
                  <iconify-icon class="icon" icon="mdi:github"></iconify-icon>
                </a>
                <a
                  class="btn btnIcon"
                  data-tooltip="Leetcode"
                  href="https://leetcode.com/nabz99/"
                >
                  <iconify-icon
                    class="icon"
                    icon="simple-icons:leetcode"
                  ></iconify-icon>
                </a>
              </div>
            </div>
            <div class="home-content-right">
              <img src="./assets/developerGIF.gif" />
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div class="container">
          <div class="terminal">
            <div class="terminal-titlebar">Terminal — nabzali.github.io</div>
            <div class="terminal-body terminal-text">
              <b class="blue-text">&nbsp;admin@github.io:~$ </b>
              <span id="tName" class="terminal-text"></span>
            </div>
          </div>
        </div>
      </section>

      <section id="history">
        <div class="container" id="timeline-container">
          <div class="timeline">
            <div class="timeline-empty"></div>
            <div class="timeline-middle">
              <div id="circle-top" class="timeline-circle"></div>
              <div class="timeline-circle"></div>
            </div>
            <a
              href="javascript:launchModal();"
              class="timeline-component timeline-content"
            >
              <span class="top-right-text">2023-Present</span>
              <h3>Software Developer / Technical Consultant</h3>
              <p>Reply</p>
            </a>
            <a
              href="javascript:launchModal();"
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
              href="javascript:launchModal();"
              class=" timeline-component timeline-content"
            >
              <span class="top-right-text">2019-2020</span>
              <h3>Year in Industry - Technology Rotation</h3>
              <p>IBM</p>
            </a>
            <a
              href="javascript:launchModal();"
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
              href="javascript:launchModal();"
              class=" timeline-component timeline-content"
            >
              <span class="top-right-text">2015-2017</span>
              <h3>A Levels</h3>
              <p>Beal Sixth Form</p>
            </a>
          </div>
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
      <script src="https://cdn.jsdelivr.net/npm/typed.js@2.0.12"></script>
      <script src="./script.js"></script>
    </>
  );
}

export default App;
