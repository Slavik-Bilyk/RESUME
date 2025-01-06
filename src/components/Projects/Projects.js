import React from 'react';
import video1 from '../../assets/videos/Video1.mp4';
import video2 from '../../assets/videos/Video2.mp4';
import colorSharp2 from '../../images/color-sharp2.png';
import { Col, Container, Tab, Nav, NavLink, Row, TabContainer, TabContent } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import { GiClick } from 'react-icons/gi';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'WebStudio',
            description: 'HTML/CSS',
            videoUrl: video1,
            link: 'https://slavik-bilyk.github.io/goit-markup-hw-08/',
        },
        {
            title: 'House Staff',
            description: 'React/styled-components',
            videoUrl: video2, 
            link: 'https://slavik-bilyk.github.io/goit-markup-hw-08/',
        },
        {
            title: 'MoviesAPI',
            description: 'Router/API',
            videoUrl: video1, 
            link: 'https://slavik-bilyk.github.io/goit-markup-hw-08/',
        },
        {
            title: 'WebStudio',
            description: 'HTML/CSS',
            videoUrl: video1,
            link: 'https://slavik-bilyk.github.io/goit-markup-hw-08/',
        },
        {
            title: 'House Staff',
            description: 'React/styled-components',
            videoUrl: video1, 
            link: 'https://slavik-bilyk.github.io/goit-markup-hw-08/',
        },
        {
            title: 'MoviesAPI',
            description: 'Router/API',
            videoUrl: video1, 
            link: 'https://slavik-bilyk.github.io/goit-markup-hw-08/',
        },
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <h2>Projects</h2>
                <p>This section presents all my significant works from the entire time I've been programming</p>
                <TabContainer id="projects-tabs" defaultActiveKey="first">
                    <Nav className="nav-pills">
                        <Nav.Item>
                            <NavLink eventKey="first">Projects</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink eventKey="two">Github</NavLink>
                        </Nav.Item>
                        <Nav.Item>
                            <NavLink eventKey="three">...</NavLink>
                        </Nav.Item>
                    </Nav>
                    <TabContent className="card">
                        <Tab.Pane eventKey="first">
                            <Row>
                                {projects.map((project, index) => (
                                    <ProjectCard key={index} {...project} />
                                ))}
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="two">
                            <p>
                                <a href="https://github.com/Slavik-Bilyk" target="_blank" rel="noopener noreferrer">
                                    Go to my GitHub <GiClick />
                                </a>
                            </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="three">
                            <p>If you liked this site, leave a request below so we can talk</p>
                        </Tab.Pane>
                    </TabContent>
                </TabContainer>
            </Container>
            <img src={colorSharp2} className="bg-image" alt="Background" />
        </section>
    );
};

export default Projects;
