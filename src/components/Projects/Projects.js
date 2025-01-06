import React from 'react';
import video1 from '../../assets/videos/Video1.mp4';
import video2 from '../../assets/videos/Video2.mp4';
import video3 from '../../assets/videos/Video3.mp4';
import video4 from '../../assets/videos/Video4.mp4';
import video5 from '../../assets/videos/Video5.mp4';
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
            link: 'https://github.com/Slavik-Bilyk/goit-markup-hw-08',
        },
        {
            title: 'Game Store',
            description: 'React/CSS',
            videoUrl: video2, 
            link: 'https://github.com/Slavik-Bilyk/gamestore',
        },
        {
            title: 'MoviesAPI',
            description: 'Router/API',
            videoUrl: video3, 
            link: 'https://github.com/Slavik-Bilyk/MoviesAPI',
        },
        {
            title: 'My first Portfolio',
            description: 'HTML/CSS',
            videoUrl: video4,
            link: 'https://github.com/Slavik-Bilyk/Portfolio',
        },
        {
            title: 'Events',
            description: 'React/Node.js',
            videoUrl: video5, 
            link: 'https://github.com/Slavik-Bilyk/EventsRegistrationApp',
        },
       
    ];

    return (
        <section className="projects" id="projects">
            <Container>
                <h2>Projects</h2>
                <p>TThis section presents some of my projects that I wrote during my studies. Of course, this is not all, you can get acquainted with others on my Github</p>
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
