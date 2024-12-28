import React from 'react';
import { Icon } from "@iconify/react";
import "./styles.css";

function Accreditations() {
  return (
    <div className="accreditations-container">
      <h1 className="blue-text glow-text">Accreditations</h1>
      <div className="wrapper-grid">
        <a
          href="https://www.credly.com/badges/b9f12b2d-c4cc-4a4a-8c4c-c9c5f7d0d8f6/public_url"
          className="cert-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cert-content">
            <Icon icon="simple-icons:amazonaws" className="cert-icon" />
            <h3>AWS Certified Cloud Practitioner</h3>
            <p>Amazon Web Services (AWS)</p>
            <p className="cert-date">Issued Dec 2023</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Accreditations;
