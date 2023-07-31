import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactusform.css';
import { Link } from 'react-router-dom';

export const EmailContactForm = () => {
  const form = useRef();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  

  const sendEmail = () => {
    emailjs.sendForm('gmail', 'template_omk9eqc', form.current, 'mxVHB9uChslZw29C8');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name === "") {
      alert("please enter a name or email")
    } else {
      sendEmail();
      setname(" ");
      setemail(" ");
      setmessage(" ");
  };
  }
    

  return (
    <>
    <div className='contact-div'>Contact Us!</div>
    <div className='form-container'>
      <form ref={form} onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" name="user_name" value={name} onChange={(e) => setname(e.target.value)}/>
      <label>Email</label>
      <input type="email" name="user_email" value={email} onChange={(e) => setemail(e.target.value)}/>
      <label>Message</label>
      <textarea name="message" value={message} onChange={(e) => setmessage(e.target.value)}/>
      <input type="submit" value="Send" className='submit-button'/>
    </form>
    </div>
    <footer>
            <div className='footer-top-container'>
                <div className='footer-div1'>
                    <div className='title-footer-div'>QUICK LINKS</div>
                    <ul className='footer-ul'>
                        <li><Link to={"/"} className='footer-li'>HOME</Link></li>
                        <li><Link to={"/about-us"} className='footer-li'>ABOUT US</Link></li>
                        <li><Link to={"/email-contactform"} className='footer-li'>CONTACT US</Link></li>
                    </ul>
                </div>
                <div className='footer-div1'>
                    <div className='title-footer-div'>MORE</div>
                    <ul className='footer-ul'>
                        <li><Link  className='footer-li' to={"/privacy-policy"}>PRIVACY POLICY</Link></li>
                    </ul>
                </div>
            </div>
            
        </footer>
    </>
    
    
  );
};