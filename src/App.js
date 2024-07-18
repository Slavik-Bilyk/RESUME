import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import News from './components/News/News'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <Skills/>
      <Projects/>
      <Contact/>
      <News/>
      <Footer/>
    </div>
  ) 
}

export default App
