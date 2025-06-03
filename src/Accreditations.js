import React from 'react';
import { Icon } from "@iconify/react";
import "./styles.css";

function Accreditations() {
  return (
    <div className="accreditations-container">
      <h1 className="blue-text glow-text">Accreditations</h1>
      <div className="wrapper-grid">
        <a
          href="https://www.credly.com/badges/f6610617-be51-411a-82b0-b5f24772daac"
          className="cert-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="cert-content">
            <Icon icon="simple-icons:amazonaws" className="cert-icon" />
            <h3>AWS Certified Cloud Practitioner</h3>
            <p>Amazon Web Services (AWS)</p>
            <p className="cert-date">Issued January 2024</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default Accreditations;
