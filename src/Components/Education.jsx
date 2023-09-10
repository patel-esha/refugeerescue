import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'


const Section = styled.div`
  height: 900px;
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

const Footer = styled.div`
  
`

const Education = () => {
  return (
    <Section>
      <Navbar/>
      <Header>
        <h1 style={{fontSize:'8vw', textAlign: 'center'}}>Education</h1>
      </Header>
      <Middle1>
        <h2 style={{fontSize:'6vw', color:'#F89590', paddingBottom:'2%'}}>Course Content</h2>
        <h2 style={{fontSize:'2vw', color:'#c9716d', paddingBottom: '3.5%'}}>To better assist you on your e-learning experience, we have developed course materials in order to promote education during difficult times.</h2>
        <h2 style={{fontSize:'3vw', color:'#c9716d'}}></h2>
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQLDooYLiHUOQuKL17UAnZkKfoWkOyGHgT3m2nugITQwdok1yumHrxR_lz4J_wtDWKYt8rcTdBR4Mt4/embed?start=false&loop=false&delayms=30000" frameborder="0" width='90%' height="839" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </Middle1>
      <Footer>
        <emptyFooter>
          <background-color></background-color>
        </emptyFooter>
        <img src="./img/flowerhand.jpeg" style={{width:'100%'}}></img>
        <img src="./img/romance.png" style={{width:'100%'}}></img>
      </Footer>
    </Section>
  )
}

export default Education