import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'


const Section = styled.div`
  height: 130vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #606F8C;
`

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  max-width: 50%;
  flex: 2;
  display: flex;
  padding: 10%;
  flex-direction: column;
  justify-content: center;
  gap: 2%;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 2%;
`;

const Line = styled.img`
  height: 60px;
`;

const Subtitle = styled.h2`
  color: #2b2d42;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
`;

const Button = styled.button`
  margin-left: 90px;
  width: 100px;
  padding: 10px;
  background-color: #2C2C67;
  color: white;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;

`;

const Right = styled.div`
  max-width:50%;
  flex: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2%;
  position: relative;
`;

const Model = styled.img`
  width: 90%;
  align: right;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin-right: 2%;
  margin-top: auto;
  margin-bottom: auto;
  animation: animate 2s infinite ease alternate;

  @keyframes animate {
    to{
      transform: translateY(30px);
    }
  }


`;

const Intro = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
        <h1 style={{fontSize: '8vw', marginTop:'1vw'}}>Support. Protect. Give.</h1>
          <WhatWeDo>
            <Line src = "./img/line.png"/> /*https://www.freepnglogos.com/pics/line*/
            <h2 style={{fontSize:'3.5vw', color:'#FCF3EA'}}>What We Do</h2>
          </WhatWeDo>
          <h3 style={{fontSize:'2vw'}}>Supporting refugees through funding accessible resources, restoring environments, and saving lives</h3>
          <Button>Learn More</Button>
        </Left>
        <Right>
          <Model src="./img/help.webp"/> /*https://www.theguardian.com/society/2015/nov/30/life-as-a-red-cross-worker-on-the-refugee-frontline-we-lived-through-a-war-too*/
        </Right>
      </Container>
    </Section>
  )
}

export default Intro
