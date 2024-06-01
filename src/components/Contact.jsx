import React from 'react'
import './Contact.css';
import theme_pattern from './../assets/theme_pattern.svg'
import mail from './../assets/mail_icon.svg'
import location from './../assets/location_icon.svg'
import call from './../assets/call_icon.svg';

const Contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "f2bbe2ae-6c58-4bab-b7a5-4203a3d9fbc4");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
          alert(res.message);
        }
      };

  return (
    <div id='contact' className='contact'>
    <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
    </div>
    <div className="contact-section">
    <div className="contact-left">
        <h1>Let's talk</h1>
        <p>I'm currentaly available to take on new projects, so feel free to send me a message about anything that you wanton. you can contact anytime.</p>
        <div className="contact-details">
            <div className="contact-detail">
                <img src={mail} alt="" /> <p>ashutosh.0321sharma@gmail.com</p>
            </div>
            <div className="contact-detail">
                <img src={location} alt="" /> <p>Jaipur, Rajsthan, IN</p>
            </div>
            <div className="contact-detail">
                <img src={call} alt="" /> <p>+91 9694214669</p>
            </div>
        </div>
    </div>
    <form onSubmit={onSubmit} className="contact-right">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder='Enter your name' name='name'/>
        <label htmlFor="">Your Phone No.</label>
        <input type="text" placeholder='Enter your phone no.' name='phone'/>
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder='Enter your email' name='email'/>
        <label htmlFor="">Write your message here</label>
        <textarea name="message" rows="1" placeholder='Enter your text'></textarea>
        <button type='submit' className='contact-submit'>Submit now</button>
    </form>
    </div>
    </div>
  )
}

export default Contact