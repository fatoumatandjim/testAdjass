/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavBar.css';
import {FormattedMessage} from 'react-intl';
import messages_en from "./en.json";
import messages_fr from "./fr.json";
import {IntlProvider} from "react-intl";
const language = "en";
const messages = {
    'en': messages_en,
    'fr': messages_fr
};
function NavBar() {
    return (
      <div className="App">
         <IntlProvider locale={language} messages={messages[language]}></IntlProvider>
       <Navbar collapseOnSelect expand="lg"className="nave">
      <Container >
      <Navbar.Brand href="#home">
            <img
              src="/logosg.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
          </Navbar.Brand>
          <Nav.Link href="#features" className="text">
          <FormattedMessage id="home-text"
                                      defaultMessage="home"
                                      description="Welcome header on app main page"
                                     
                    /></Nav.Link>
       
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="text">
              <FormattedMessage id="Crm"
                                      defaultMessage="CRM"
                                      description="Welcome header on app main page"
                                     
                    />
              </Nav.Link>
            <Nav.Link href="#pricing"className="text">REO</Nav.Link>
            <Nav.Link href="#pricing" className="text">
            <FormattedMessage id="Parametrage-text"
                                      defaultMessage="Parametrage"
                                      description="Welcome header on app main page"
                                     
                    />
            
              </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets"  className="text" style={{ marginRight:'400px' }}><h3> <FormattedMessage id="Production-text"
                                      defaultMessage="Production"
                                      description="Welcome header on app main page"
                                     
                    /> </h3>
           
            
            </Nav.Link>
            <Navbar.Brand href="#home">
            <img
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top text"
              alt="fatoumata ndjim"
            />
          </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    );
  }
  export default NavBar