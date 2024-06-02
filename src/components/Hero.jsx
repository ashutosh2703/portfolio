import React from 'react'
import './Hero.css';
import profie from './../assets/ashutosh.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
const Hero = () => {

  const handleDownload = () => {
    // Path to your PDF file
    const pdfPath = "./../assents/Ashutosh's_resume.pdf";
    
    // Create an anchor element and simulate a click to trigger the download
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id='home' className='hero'>
        <img src={profie} className='hero-img' alt="" />
        <h1>I'm <span>Ashutosh Sharma,</span>  software developer based in IN.</h1>
        <p>I am a MERN stack developer from Jaipur</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect With Me </AnchorLink></div>
            <div className="hero-resume" onClick={handleDownload}>My resume</div>
        </div>
    </div>
  )
}

export default Hero