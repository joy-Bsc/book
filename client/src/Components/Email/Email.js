import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_15eh65u', 'template_vteadns', form.current, 'user_9Bd2QAgonb6gDRkHll4e9')
      .then((result) => {
          console.log(result.text);
          alert("send")
      }, (error) => {
          console.log(error.text);
          //alert("check gmail")
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input className="form-control" type="text" name="user_name" />
      <br/>
      <label>Email</label>
      <input className="form-control" type="email" name="user_email" />
      <br/>
      <label>Message</label>
      <textarea className="form-control" name="message" />
      <br/>
      <input className='form-control btn-btn-success' type="submit" value="Send" />
    </form>
  );
};