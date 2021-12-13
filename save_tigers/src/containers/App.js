import React from "react";
import { createGlobalStyle } from "styled-components";
import { Switch, Route, Redirect} from "react-router-dom";
import styled from "styled-components";
import NavBar from "../components/NavBar";
import Home from "./Home";
import Donate from "./Donate";
import ContactUs from "./ContactUs";

const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

h1,h2,h3,h4,h5,h6,a,p,textarea,input{
  font-family: "Roboto";
  padding: 0;
}
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

function App() {

  return (
    <Container>
      <GlobalStyle />
      <NavBar />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/donate">
          <Donate />
        </Route>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route exact path='/'>
          <Redirect to='/home' />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
