import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Intro from './Intro';
import Works from './Works';

const Section = styled.div`
    display: flex;
    justify-content: center;

`;

const Container = styled.div`
    width: 1400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:2%;
    padding-right: 5%;
    background-color: #FCF3EA;
`;

const Links = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    margin-right: 10%;
`;

const Logo = styled.img`
    height: 100px;
    width: 100px;
    display: flex;
    align-items: center;
`;

const List = styled.ul`
    display: flex;
    gap: 20px;
    list-style: none;
`;

const ListItem = styled.line`
    color: white;
    cursor: pointer;
`;

const Icons = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`;

const Icon = styled.img`
    width: 70px;
    cursor: pointer;

`;

const Button = styled.button`
    width: 100px;
    padding: 10px;
    background-color: #2C2C67;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    scroll-snap-align: center;
    
`;


const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src="./img/final.png"/>
            <List>
                <ListItem>
                    <Link to="/">
                        <Button>Home</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/employment">
                        <Button>Employment</Button>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to="/education">
                        <Button>Education</Button>
                    </Link>
                </ListItem>
            </List>
            </Links>
            <Icons>
                <Button>More Info</Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar