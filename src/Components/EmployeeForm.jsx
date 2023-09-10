import React from 'react';
import styled from 'styled-components';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Section = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #876E49;
  border-radius: 3vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  height: 100%;
  width: 100%;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px; /* Keep the padding size */
  margin-left: 0; /* Center-align the input */
  background-color: lightgray;
  border: none;
  border-radius: 3vh;
`;

const TextArea = styled.textarea`
  padding: 12px; /* Keep the padding size */
  margin-left: 0; /* Center-align the textarea */
  border: none;
  border-radius: 3vh;
  background-color: lightgray;
`;

const Button = styled.button`
  background-color: #F9DB99;
  color: #876e49;
  border: none;
  margin-left: 0; /* Center-align the button */
  font-weight: bold;
  cursor: pointer;
  border-radius: 3vh;
  padding: 10px 20px; /* Adjust padding to center the button */
`;

const Model = styled.img`
  width: 50%;
  max-width: 100%;
  height: auto;
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

  return (
    <Section>
      <Container>
        <Title>Contact Us</Title>
        <Form ref={ref} onSubmit={handleSubmit}>
          <Input placeholder="Name" name="name" />
          <Input placeholder="Email" />
          <TextArea
            placeholder="Write your availability, your interests, and preferred student proficiency"
            name="message"
            rows={10}
          />
          <Button type="submit">Send</Button>
          {success && (
            <p>
              Your message has been sent. We'll match you with a student as
              soon as possible!
            </p>
          )}
        </Form>

      </Container>
    </Section>
  );
};

export default Contact;