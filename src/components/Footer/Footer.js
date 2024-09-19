import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../../images/logo.svg'
import navIcon1 from '../../images/nav-icon1.svg'
import navIcon2 from '../../images/nav-icon2.svg'
import navIcon3 from '../../images/nav-icon3.svg'
import colorSharp from '../../images/color-sharp.png'
import colorSharp2 from '../../images/color-sharp2.png'
import './Footer.css'


const Footer = () => {
  return (
    <footer className="footer">
    <Container>
      <Row className="align-items-center">
        <Col size={12} sm={6}>
          <img className='footer-logo' src={logo} alt="Logo" />
        </Col>
        <Col size={12} sm={6} className="text-center text-sm-end">
          <div className="social-icon">
            <a href="#"><img src={navIcon1} alt="Icon" /></a>
            <a href="https://www.facebook.com/djoni.djoni.58511/" target='_blank'><img src={navIcon2} alt="" /></a>
            <a href="https://www.instagram.com/vyach.ass.love/" target='_blank'><img src={navIcon3} alt="" /></a>
          </div>
          <p>Copyright 2022. All Rights Reserved</p>
        </Col>
      </Row>
    </Container>
    <img src={colorSharp} className='footer-bg'/>
    <img src={colorSharp2} className='footer-bg2'/>
  </footer>
  )
}

export default Footer
