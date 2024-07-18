import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import headerImg from '../../images/header-img.svg'
import './Banner.css'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.production'

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['web developer', 'web designer']
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
        tick()
    }, delta)

    return () => { clearInterval(ticker) }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <section className='banner' id='home'>
      <Container>
        <Row className='align-items-center'>
          <Col xs={12} md={6} xl={7}>
            <span className='tagline'>Welcome to my portfolio</span>
            <h1>My name is Viacheslav and l am: {text}</h1>
            <p>I am 23 years old and I started programming. 
I chose the FrondEnd direction and the JS programming language. Here you will see all my works and achievements.</p>
            <HashLink to="#contact" className="main-btn"><span>Let’s Connect</span></HashLink>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt='headerImg' />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Banner
