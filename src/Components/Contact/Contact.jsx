import React, { useState, useRef, useContext } from "react";
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

const Contact = () => {

  const form = useRef();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const validationErrors = {};
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();
    
    // Check if name is empty
    if (!name) {
      validationErrors.name = "Name is required";
    }

    // Check if email is empty or invalid format
    if (!email) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      validationErrors.email = "Invalid email format";
    }

    // Check if message is empty
    if (!message) {
      validationErrors.message = "Message is required";
    }

    return validationErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if any validation fails
      return;
    }

    alert("Email Sent Successfully");

    emailjs.sendForm('service_9zmk06d', 'template_gdv75mi', form.current, 'KkVxvm6IJxPIiU6fw')
      .then((result) => {
          console.log(result.text);
          setDone(true);
          
          // Clear the form fields after submission
          nameRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";

          // Clear errors
          setErrors({});
      }, (error) => {
          console.log(error.text);
      });
  };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="contact-form" id="Contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="awesome">
          {/* darkMode */}
          <span style={{ color: darkMode ? 'white' : '' }}>Get in Touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input 
            type="text" 
            name="user_name" 
            className="user" 
            placeholder="Name" 
            ref={nameRef} // Reference to the name input
          />
          {errors.name && <span className="error">{errors.name}</span>}

          <input 
            type="email" 
            name="user_email" 
            className="user" 
            placeholder="Email" 
            ref={emailRef} // Reference to the email input
          />
          {errors.email && <span className="error">{errors.email}</span>}

          <textarea 
            name="message" 
            className="user" 
            placeholder="Message" 
            ref={messageRef} // Reference to the message textarea
          />
          {errors.message && <span className="error">{errors.message}</span>}

          <input type="submit" value="Send" className="button" />
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
