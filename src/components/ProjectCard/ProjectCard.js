import React from 'react';
import { Col } from 'react-bootstrap';
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ title, description, videoUrl, link }) => {
    return (
        <Col sm={6} md={4}>
            <div className='project-img'>
                <video 
                    src={videoUrl} 
                    autoPlay 
                    loop 
                    muted 
                    className="project-video"
                />
                <div className="project-text">
                    <h4>{title}</h4>
                    <span>{description}</span>
                    <a href={link} target='_blank' rel='noopener noreferrer'>
                        <FaArrowRight size={20} />
                    </a>
                </div>
            </div>
        </Col>
    );
};

export default ProjectCard;
