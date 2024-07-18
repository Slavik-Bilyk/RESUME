import React from 'react';
import { Col } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ title, description, imgUrl, link }) => {
  const linkRef = React.useRef(null);

  return (
    <Col sm={6} md={4}>
      <div className='project-img'>
        <img src={imgUrl} alt={title} />
        <div className="project-text">
          <h4>{title}</h4>
          <span>{description}</span>
          <a href={link} target='_blank' rel='noopener noreferrer' ref={linkRef}>
            <FaArrowRight size={20}/>
          </a>
        </div>
      </div>
    </Col>
  );
}

export default ProjectCard;
