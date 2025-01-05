import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from '../../images/meter1.svg';
import meter2 from '../../images/meter2.svg';
import meter3 from '../../images/meter3.svg';
import colorSharp from '../../images/color-sharp2.png';
import './Skills.css';

const Skills = () => {
  const [language, setLanguage] = useState('en');

  const texts = {
    en: {
      skills: 'Skills',
      skillList: [
        '<strong>JavaScript (ES6+):</strong> A solid understanding of syntax, functional programming, working with arrays, objects, and APIs.',
        '<strong>React:</strong> Experience in creating components, managing application state, and optimizing performance.',
        '<strong>HTML/CSS:</strong> Confident in designing responsive and cross-browser interfaces.',
        '<strong>Node.js:</strong> REST API development, database integration (MongoDB/Mongoose), work with authorization.',
        '<strong>Development tools:</strong> Webpack, Babel, Git, npm/yarn.',
        '<strong>Other libraries/technologies:</strong> Axios, TailwindCSS, Bootstrap, React Query, Formik.',
        '<strong>Experience with UI/UX:</strong> Ability to integrate design from Figma into real projects.',
        '<strong>Methodologies:</strong> Scrum, clean code, DRY, KISS, SOLID principles.',
        '<strong>I speak English at a level sufficient for work.',
      ],
      carouselItems: ['JavaScript', 'Other', 'React', 'CSS'],
    },
    uk: {
      skills: 'Навички',
      skillList: [
        '<strong>JavaScript (ES6+):</strong> Глибоке розуміння синтаксису, функціонального програмування, роботи з масивами, об’єктами та API.',
        '<strong>React:</strong> Досвід створення компонентів, управління станом застосунку та оптимізації продуктивності.',
        '<strong>HTML/CSS:</strong> Впевненість у створенні адаптивних і кросбраузерних інтерфейсів.',
        '<strong>Node.js:</strong> Розробка REST API, інтеграція баз даних (MongoDB/Mongoose), робота з авторизацією.',
        '<strong>Інструменти розробки:</strong> Webpack, Babel, Git, npm/yarn.',
        '<strong>Інші бібліотеки/технології:</strong> Axios, TailwindCSS, Bootstrap, React Query, Formik.',
        '<strong>Досвід роботи з UI/UX:</strong> Інтеграція дизайну з Figma у реальні проєкти.',
        '<strong>Методології:</strong> Scrum, чистий код, принципи DRY, KISS, SOLID.',
        '<strong>Володію англійською на рівні достатньої для роботи ',
      ],
      carouselItems: ['JavaScript', 'Інше', 'React', 'CSS'],
    },
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 463 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <div className="language-switcher">
                <button onClick={() => setLanguage('en')}>EN</button>
                <button onClick={() => setLanguage('uk')}>УКР</button>
              </div>
              <h2><strong>{texts[language].skills}</strong></h2>
              <ul className="skills-list">
                {texts[language].skillList.map((skill, index) => (
                  <li key={index} dangerouslySetInnerHTML={{ __html: skill }} />
                ))}
              </ul>
              <Carousel responsive={responsive} infinite={true} className="skills-slider">
                {texts[language].carouselItems.map((item, index) => (
                  <div className="item" key={index}>
                    <img src={index % 2 === 0 ? meter1 : meter2} alt={item} />
                    <h5>{item}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} className="bg-image" alt="background" />
    </section>
  );
};

export default Skills;
