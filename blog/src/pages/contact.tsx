import axios from 'axios';
import Template from 'components/Common/Template'
import React, { useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const headers = {
    'Content-Type' : 'application/json',
  }
  const emailHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const element = e.currentTarget as HTMLInputElement
    setEmail(element.value)

  }
  
  const nameHandler = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const element = e.currentTarget as HTMLInputElement
    setName(element.value)
  }

  const messageHandler = (e: React.FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    const element = e.currentTarget as HTMLTextAreaElement
    setMessage(element.value)
  }

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, name, message);
    await axios.post('https://bloghosanback.herokuapp.com/contact', {
      email : email,
      name : name,
      message : message,
    }, {
      headers:headers // headers에 headers 객체 전달
  })
  };

  return (
    <Template title= "Contact"
    description= "Contact Me"
    url= ""
    image= "">
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" onChange={(e) => nameHandler(e)} />
      <label>Email</label>
      <input type="email" name="user_email" onChange={(e) => emailHandler(e)} />
      <label>Message</label>
      <textarea name="message" onChange={(e) => messageHandler(e)} />
      <input type="submit" value="Send" />
    </form>
    </Template>
  );
};

export default ContactForm;