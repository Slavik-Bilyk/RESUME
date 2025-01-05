import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../images/logo.svg';
import navIcon1 from '../../images/nav-icon1.svg';
import navIcon2 from '../../images/nav-icon2.svg';
import navIcon3 from '../../images/nav-icon3.svg';
import './NavBar.css';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <Container className='wrapper'>
     
          <img src={logo} alt="Logo" className='logo' />
      
         <div className='nav-elements'>
            <Nav>
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
          </div>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/vyacheslav-bilyk-08321a344/" target='_blank'><img src={navIcon1} alt="" /></a>
              <a href="https://www.facebook.com/djoni.djoni.58511/" target='_blank'><img src={navIcon2} alt="" /></a>
              <a href="https://www.instagram.com/vyach.ass.love/" target='_blank'><img src={navIcon3} alt="" /></a>
            </div>
            <HashLink to="#contact" className="btn"><span className='btn-text'>Let’s Connect</span></HashLink>
        
      </Container>
    </nav>
  );
};

export default NavigationBar;
