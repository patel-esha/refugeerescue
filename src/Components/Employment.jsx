import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import EmployeeForm from "./EmployeeForm"

const Section = styled.div`
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #606F8C;
`
const Header = styled.div`
    padding-top: 5%;
    padding-bottom: 5%;
`

const Middle1 = styled.div`
    padding-left:5%;
    padding-right:5%;
    padding-top: 5%;
    padding-bottom: 5%;
    background-color: #FCF3EA;

`

const Middle2 = styled.div`
    padding-left:5%;
    padding-right:5%;
    padding-top: 5%;
    padding-bottom: 5%;
    background-color: #A3C3C2;
`

const Form = styled.div`
    padding-left:5%;
    padding-right:5%;
    padding-top: 5%;
    padding-bottom: 5%;
    background-color: #F9DB99;
`

const Footer = styled.div`
  
`

const Employment = () => {
    return(
        <Section>
            <Navbar/>
            <Header>
                <h1 style={{fontSize:'8vw', textAlign: 'center'}}>Employment</h1>
            </Header>
            <Middle1>
                <h2 style={{fontSize:'6vw', color:'#F89590', paddingBottom:'2%'}}>Refugees to Rookies</h2>
                <h3 style={{fontSize:'4vw', color:'#FAAFA9', paddingBottom: '1%'}}>What Is It?</h3>
                <p style={{fontSize:'2vw', color:'#c9716d', paddingBottom: '3.5%'}}>Refugee to Rookies is a program which connects refugees who know foreign languages to language learners. Refugees entering a new country may have trouble finding jobs, and Refugee to Rookies offers the flexible employment that new refugees may need. Sign up to be paired with a student and get paid!</p>
                <h3 style={{fontSize:'4vw', color:'#FAAFA9', paddingBottom: '1%'}}>How Does It Work?</h3>
                <p style={{fontSize:'2vw', color:'#c9716d', paddingBottom: '2%'}}>You will be paired with a language-curious student for a minimum of 6 weeks based off of the student's goals. The student and speaker are expected to converse in the foreign language, based on the student's proficiency, for one hour per week.</p>
                
            </Middle1>
            <Middle2>
                <h2 style={{fontSize:'6vw', color:'#4b6b57', paddingBottom:'2%'}}>Q&A</h2>
                <h3 style={{fontSize:'4vw', color:'#72957F', paddingBottom: '1%'}}>What is the pay recieved for Refugees to Rookies?</h3>
                <p style={{fontSize:'2vw', color:'#39767c', paddingBottom: '3.5%'}}>The expected pay for 6 sessions across 6 weeks is between 100 and 120 USD. Each session will be 1 hour, with no transportation time as they are online.</p>
                <h3 style={{fontSize:'4vw', color:'#72957F', paddingBottom: '1%'}}> How are hours determined?</h3>
                <p style={{fontSize:'2vw', color:'#39767c', paddingBottom: '3.5%'}}>Your hours will be determined by you and your student! Thus, your schedule can be super flexible, with as many and as little shifts as you wish. We do require that you report these interactive hours on a bi-weekly basis. </p>
                <h3 style={{fontSize:'4vw', color:'#72957F', paddingBottom: '1%'}}> How are students-speaker pairings decided?</h3>
                <p style={{fontSize:'2vw', color:'#39767c', paddingBottom: '3.5%'}}>Based off of the student's language-learning goals, your availabilities, and your interests, you will be connected with a student! Additionally, the demand of different languages may cause fluctuations.</p>
            </Middle2>
            <Form>
                <h2 style={{fontSize:'6vw', color:'#876e49', paddingBottom:'2%'}}>Get Paired with A Student Today:</h2>
                <EmployeeForm/>
            </Form>
            <Footer>
                <img src="./img/flowerhand.jpeg" style={{width:'100%'}}></img>
            </Footer>
        </Section>
    );
};

export default Employment