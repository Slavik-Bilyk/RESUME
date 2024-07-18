import React, { useState } from 'react'
import './News.css'
import { Container } from 'react-bootstrap'

const News = () => {

    const [email, setEmail] = useState('')
    const [animating, setAnimating] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        
     if(email != '') {
      setAnimating(true)
      setTimeout(() => {
        setAnimating(false)
        setEmail('')
      }, 2000)
     }

     return 

    }

  return (
   <Container>
     <div className='news'>
     <div className='bg'>
     <h3>Subscribe to our Newsletter<br/>& Never miss latest updates</h3>
      <form onSubmit={handleSubmit}>
        <div className='email'>
            <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} className={animating ? 'hidden' : ''} />
            <button type='submit' className={animating ? 'slide': ''}>Submit</button>
        </div>
      </form>
     </div>
    </div>
   </Container>
  )
}

export default News
