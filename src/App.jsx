import styled from "styled-components"
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Intro from "./Components/Intro"
import Works from "./Components/Works"
import Contact from "./Components/Contact";
import Employment from './Components/Employment'
import Education from './Components/Education'

const Container = styled.div`
  height: 370vh;
  scroll-behavior: smooth;
  overflow-y: auto;
  color: white;
  &::-webkit-scrollbar{
   display: none;
  }
`

const Homepage = () => {
  return (
    <div>
      <Intro />
      <Works />
      <Contact />
    </div>
  );
};

function App() {

  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/employment" element={<Employment/>}/>
          <Route path="/education" element={<Education/>}/>
        </Routes>
      </Router>
    </Container>
  )
}

export default App
