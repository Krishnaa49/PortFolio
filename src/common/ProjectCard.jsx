import React from "react";

function ProjectCard({src , link, name}) {
  return (
    <a href={link} target="_blank">
      <img className="hover" src={src} alt="Viberr logo" />
      <h3>{name}</h3>
      <p>Streaming App</p>
    </a>
  );
}

export default ProjectCard;
