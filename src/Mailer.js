import React from "react";
import emailjs from "emailjs-com";

const Mail = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_7ct13vc",
        "template_5tukzqo",
        e.target,
        "user_BCNb712iegd5c87MvuhMf"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <h1>Contact Form</h1>
      <form onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" rows="4" />
        <input type="submit" value="send" />
      </form>
    </div>
  );
};

export default Mail;
