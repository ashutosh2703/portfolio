import React from 'react'
import './About.css';
import profie from './../assets/ashutosh.jpg'
import theme_pattern from './../assets/theme_pattern.svg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={profie} alt="" />
            </div>
            <div className="about-right">
                <div className="about-pera">
                    <p>I am an experienced MERN Developer,currently studying at IIIT Bhagalpur (CSE) </p>
                    <p>I made several project which is deployed at github.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>ReactJS</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>C++ Programing(DSA)</p> <hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Express Js & Node</p> <hr style={{width:"65%"}} /></div>
                    <div className="about-skill"><p>Java Script</p> <hr style={{width:"68%"}} /></div>
                    <div className="about-skill"><p>Mongodb</p> <hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Mysql</p> <hr style={{width:"50%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>3+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>20+</h1>
                <p>PROJECTS COMPLETED</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>300+</h1>
                <p> Coding Questions Solved</p>
            </div>
        </div>
    </div>
  )
}

export default About