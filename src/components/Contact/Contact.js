import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactImg from '../../images/contact-img.svg'
import './Contact.css'
import News from '../News/News'

const Contact = () => {

const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
}

const [formDetails, setFormDetails] = useState(formInitialDetails)
const [buttonText, setButtonText] = useState('Send')
const [status, setStatus] = useState({})

const onFormUpdate = (category, value) => {
    setFormDetails({
        ...formDetails,
        [category]: value
    })
    setStatus({})
}

const handleSubmit = (e) => {
    e.preventDefault()

    if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.phone || !formDetails.message) {
        setStatus({ success: false, message: 'Please fill in all fields.' });
        return;
    }

    setButtonText('Sending')

    setTimeout(() => {
        setFormDetails(formInitialDetails)
        setButtonText('Send')
        setStatus({success: true, message: 'Message send successfilly!'})
    }, 2000)
}



  return (
    <section className='contact' id='contact'>
        <Container>
            <Row>
                <Col md={6}>
                    <img src={contactImg}/>
                </Col>
                <Col md={6}>
                    <h2>Get in Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6}>
                                <input type='text' value={formDetails.firstName} placeholder='FirstName' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                            </Col>
                            <Col sm={6}>
                            <input type='text' value={formDetails.lastName} placeholder='LastName' onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                            </Col>
                            <Col sm={6}>
                            <input type='email' value={formDetails.email} placeholder='Email adress' onChange={(e) => onFormUpdate('email', e.target.value)} />
                            </Col>
                            <Col sm={6}>
                            <input type='phone' value={formDetails.phone} placeholder='Phone' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                            </Col>
                            <Col>
                                <textarea row={6} value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value) } ></textarea>
                                <button type='submit'>{buttonText}</button>
                            </Col>

                            {
                                status.message && 
                                <Col>
                                    <p className={status.success === false ? 'danger' : 'success'}>{status.message}</p>
                                </Col>
                            }

                        </Row>
                    </form>
                </Col>
            </Row>
           
        </Container>
    </section>
  )
}

export default Contact
