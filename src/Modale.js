import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';

function Modale() {
  const [rowData, setRowData] = useState([
        {NomduFichier: "ajustement 15", Pilier: "", price: "" ,Utilisateur: "",Date: ""},
        // {make: "Pilier", model: "Mondeo", price: 32000},
        // {make: "Statut", model: "Boxster", price: 72000},
        //   {make: "Utilisateur", model: "Boxster", price: 72000},
        //     {make: "Date", model: "Boxster", price: 72000}
    ]);
     const [columnDefs] = useState([
       { field: 'NomduFichier' },
       { field: 'Pilier' },
       { field: 'Statut' },
       { field: 'Utilisateur' },
       { field: 'Date' },
   ])


  return (
    <div className="App">
 <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> <br /><br />
          {/* <Table striped bordered hover size="sm" style={{border:'2px solid' }}>
      <thead>
        <tr>
          <th>Nom du Fichier</th>
          <th>Pilier</th>
          <th>statut</th>
          <th>utlisateur</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>ajustement</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>ajustement</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table> */}
 <div className="ag-theme-alpine" style={{height: 400, width: 700}}>
           <AgGridReact
              rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
    </div>
  );
}

export default Modale;