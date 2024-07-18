import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import meter1 from '../../images/meter1.svg'
import meter2 from '../../images/meter2.svg'
import meter3 from '../../images/meter3.svg'
import colorSharp from '../../images/color-sharp2.png'
import './Skills.css'

const Skills = () => {

const responsive = {
    superLargeDesktop: {
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 463},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
}

  return (
    <section className='skills' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className='skill-box'>
                    <h2>Skills</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis libero earum esse qui blanditiis vitae tenetur non commodi, aliquid voluptatibus corrupti necessitatibus. Ipsam sequi error blanditiis iste tenetur placeat sunt!</p>
                    <Carousel responsive={responsive} infinite={true} className='skills-slider'>
                        <div className='item'>
                            <img src={meter1} alt='image'/>
                            <h5>Web Development</h5>
                        </div>
                        
                        <div className='item'>
                            <img src={meter2} alt='image'/>
                            <h5>Web Development</h5>
                        </div>
                        
                        <div className='item'>
                            <img src={meter3} alt='image'/>
                            <h5>Web Development</h5>
                        </div>

                        <div className='item'>
                            <img src={meter1} alt='image'/>
                            <h5>Web Development</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img src={colorSharp} className='bg-image'/>
    </section>
  )
}

export default Skills
