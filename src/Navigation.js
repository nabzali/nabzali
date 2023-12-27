import React from "react";
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
import "./styles.css";

function Navigation() {
  return (
    <>
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
    </>
  );
}

export default Navigation;
