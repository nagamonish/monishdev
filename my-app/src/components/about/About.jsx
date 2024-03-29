import React from 'react'; 
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';
import myResume from '../resume_pdf/Naga_Monish_Munagala_Resume.pdf'

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid"> 
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Naga Monish Munagala, computer programmer from Cary, North Carolina. I have extensive knowledge in website development and computer programming</p>
            <a href={myResume} rel="noreferrer" target="_blank" className="btn">View my Resume</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Computer Programming</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage programming"></span>
              </div>
            </div>


            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>


            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">75%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About