import React from 'react';
import styled from 'styled-components';

const data = ["Clean Water", "Food Security", "Shelter", "Education"];

const Section = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  scroll-snap-align: center;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background-color: #F89590;
`;

const Container = styled.div`
  width: 100%;
  scroll-snap-align: center;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  display: flex;
  justify-content: space-between;
  height: 500px;
  margin-left: 5%;
  
`;

const List = styled.ul`
  margin-top: 15%;
  list-style: none;
  margin-right: 5%;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  gap: 30px;
`;

const ListItem = styled.li`
  font-size: 75px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  transition: color .3s ease-in-out, box-shadow .3s ease-in-out;

  &:hover {
    color: white;
    }

  `;

  const Model = styled.img`
  width: 35%;
  height: 35%;
  padding: 10%;
  border: 3px;
  text-align: center;
`;

const Left = styled.div`
  height: 50hv;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Works = () => {
  return (
    <Section>
      <Container>
        <Left>
        <List>
            {data.map((item) => (<ListItem key={item} text={item} >{item}</ListItem>))}
          </List>
        </Left>
        <Right>
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
