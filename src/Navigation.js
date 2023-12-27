import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faTimeline,
  faHouse,
  faWaveSquare,
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
            <a href="#timeline">
              <FontAwesomeIcon icon={faWaveSquare} />
              Timeline
            </a>
          </li>
          <li>
            <a href="#skills">
              <FontAwesomeIcon icon={faCode} />
              Skills
            </a>
          </li>
          <li>
            <a href="#accreditations">
              <FontAwesomeIcon icon={faAddressCard} />
              Accreditations
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
