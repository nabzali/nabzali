import React from 'react';
import { Icon } from "@iconify/react";
import "./styles.css";

function Skills() {
  const skills = [
    {
      name: "React",
      icon: "logos:react",
      description: "Frontend Development"
    },
    {
      name: "Node.js",
      icon: "logos:nodejs",
      description: "Backend Development"
    },
    {
      name: "AWS",
      icon: "logos:aws",
      description: "Cloud Infrastructure"
    },
    {
      name: "Terraform",
      icon: "logos:terraform-icon",
      description: "Infrastructure as Code"
    },
    {
      name: "Artificial Intelligence",
      icon: "carbon:machine-learning",
      description: "AI/ML Solutions"
    },
    {
      name: "Consulting",
      icon: "carbon:data-vis-4",
      description: "Technical Advisory"
    }
  ];

  return (
    <div className="skills-container">
      <h1 className="blue-text glow-text">Key Skills</h1>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <Icon icon={skill.icon} className="skill-icon" />
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
