import React from 'react';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("");
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-top:10%;
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  background-color: #dcb478;
`;

const Title = styled.h1`
  margin-left: 5%;
  margin-right: 5%;
  font-weight: 200;
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const Input = styled.input`
  margin-left: 5%;
  margin-right: 5%;
  padding: 10px; /* Keep the padding size */
  background-color: lightgray;
  border: none;
  border-radius: 30px;
`;

const TextArea = styled.textarea`
  margin-left: 5%;
  margin-right: 5%;
  padding: 5px; /* Keep the padding size */
  border: none;
  border-radius: 2;
  background-color: lightgray;
`;

const Button = styled.button`
  background-color: #2C2C67;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  margin-left: 30%;
  margin-right: 30%;
  margin-bottom: 10%;
  border-radius: 3vw;
  padding: 10px; /* Adjust padding to center the button */
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_cypv47r',
        'template_99b4cgd',
        ref.current,
        'gco3Yp0dpLMP0rXSl'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  const Footer = styled.div`
    width:100%;
  `;

  return (
    <Section>
      <Container>
        <Form ref={ref} onSubmit={handleSubmit} style={{marginTop:'-5%'}}>
          <Title>Contact Us</Title>
          <Input placeholder="Name" name="name" />
          <Input placeholder="Email" />
          <TextArea placeholder="Write your message" name="message" rows={10} />
          <Button type="submit">Send</Button>
          {success && (
            <p style={{textAlign:'center', marginTop:'-5%', marginBottom:'3%'}}>Your message has been sent. We'll get back to you soon.</p>
          )}
        </Form>
        <Footer>
        <img src="./img/flowerhand.jpeg" style={{width:'100%'}}></img>
        </Footer>
      </Container>
    
    </Section>
  );
};

export default Contact;
