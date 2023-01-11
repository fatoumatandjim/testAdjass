
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { BsFillFunnelFill  } from "react-icons/bs";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Modale from './Modale';
import './Recherche.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Tableau from './Tableau';
function Recherche() {
 const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (

    <div className="App">
       <Modal   size="lg" show={show} onHide={handleClose} className="modal"  >
        <Modal.Header closeButton>
        <Modal.Title>Ajustement fichier</Modal.Title>
        </Modal.Header>
        <Modal.Body ><Modale/></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand onClick={handleShow}>Recherche Par Fichier</Navbar.Brand>
         <Navbar.Brand  style={{marginRight:'200px'}}>Recherche Par axe</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      </Container>
    </Navbar><br />
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand style={{marginRight:'1000px'}}>   <BsFillFunnelFill/>Ajustement 15 ,rt,done,vincent quercy 2022-01-06</Navbar.Brand>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      </Container>
    </Navbar><br />
    <Navbar bg="white" expand="lg"style={{border:'solid 3px'}}>
      <Container>
        {/* <Navbar.Brand>Recherche Par Fichier</Navbar.Brand> */}
       <Table  >

      <thead>
        <tr>
          <th>Pilier:Retail</th>
          <th>periode 2022/12</th>
          <th>conversation :ytd</th>
          <th>Source de donnee</th>
        </tr>
          <tr>
          <th>Phase :Realiser</th>
          <th>Type de cumul :ytd</th>
          <th>Type de donnee :ajust_CRM</th>
          <th></th>
        </tr>
      </thead>
  
    </Table>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      </Container>
    </Navbar><br /><br />
    <Tableau/>
   
  <div></div>
     
    </div>
  );
}

export default Recherche;
