import React from 'react';

function About({
  aboutText,
  curriculum,
  skills,
}) {

  return (
    <section id="about" className="about sec-pad">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main">Sobre mim</span>
        </h2>
        <div className="about__content">
          <div className="about__content-main">
            <h3 className="about__content-title">Me conheça!</h3>
            <div className="about__content-details">
              <p className="about__content-details-para">
                { aboutText }
              </p>
            </div>
            <a href="#contact" className="btn btn--med btn--theme dynamicBgClr">Contato</a>
            <a
              href={ curriculum }
              target="_blank" 
              className="btn btn--med btn--theme dynamicBgClr btn--cv"
              rel="noreferrer"
            >
              Download CV
            </a>
          </div>
          <div className="about__content-skills">
            <h3 className="about__content-title">Minhas Skills</h3>
            <div className="skills">
              {
                skills.map((skill, index) => <div key={index} className="skills__skill">{skill.title}</div>)
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;