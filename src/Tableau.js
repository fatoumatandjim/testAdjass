import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import { AgGridReact } from 'ag-grid-react';
import Navbar from 'react-bootstrap/Navbar';
function Tableau() {
   const [rowData, setRowData] = useState([
        {Entite: "S4639", Indicateur: "NRG144", ActivityCenter: "Partenaire_Nv" ,Provider: "RUN?Change_ND",Rtb_Ctb_Ctg: "Hors It",It_non_it: "FI_NV",Rubrique_n: "B000253",Activity: "NA",TypeActivite: "",Client: "Client_NV",Produit: "PR1999",Montant: "3900077789",Commmentaire: "Ajustement CRM"},
     {Entite: "S4639", Indicateur: "NRG144", ActivityCenter: "Partenaire_Nv" ,Provider: "RUN?Change_ND",Rtb_Ctb_Ctg: "Hors It",It_non_it: "FI_NV",Rubrique_n: "B000253",Activity: "NA",TypeActivite: "",Client: "Client_NV",Produit: "PR1999",Montant: "3900077789",Commmentaire: "Ajustement CRM"},
      {Entite: "S4639", Indicateur: "NRG144", ActivityCenter: "Partenaire_Nv" ,Provider: "RUN?Change_ND",Rtb_Ctb_Ctg: "Hors It",It_non_it: "FI_NV",Rubrique_n: "B000253",Activity: "NA",TypeActivite: "",Client: "Client_NV",Produit: "PR1999",Montant: "3900077789",Commmentaire: "Ajustement CRM"},
       {Entite: "S4639", Indicateur: "NRG144", ActivityCenter: "Partenaire_Nv" ,Provider: "RUN?Change_ND",Rtb_Ctb_Ctg: "Hors It",It_non_it: "FI_NV",Rubrique_n: "B000253",Activity: "NA",TypeActivite: "",Client: "Client_NV",Produit: "PR1999",Montant: "3900077789",Commmentaire: "Ajustement CRM"},
        {Entite: "S4639", Indicateur: "NRG144", ActivityCenter: "Partenaire_Nv" ,Provider: "RUN?Change_ND",Rtb_Ctb_Ctg: "Hors It",It_non_it: "FI_NV",Rubrique_n: "B000253",Activity: "NA",TypeActivite: "",Client: "Client_NV",Produit: "PR1999",Montant: "3900077789",Commmentaire: "Ajustement CRM"},
         {Entite: "S4639", Indicateur: "NRG144", ActivityCenter: "Partenaire_Nv" ,Provider: "RUN?Change_ND",Rtb_Ctb_Ctg: "Hors It",It_non_it: "FI_NV",Rubrique_n: "B000253",Activity: "NA",TypeActivite: "",Client: "Client_NV",Produit: "PR1999",Montant: "3900077789",Commmentaire: "Ajustement CRM"},
          {Entite: "S4639", Indicateur: "NRG144", ActivityCenter: "Partenaire_Nv" ,Provider: "RUN?Change_ND",Rtb_Ctb_Ctg: "Hors It",It_non_it: "FI_NV",Rubrique_n: "B000253",Activity: "NA",TypeActivite: "",Client: "Client_NV",Produit: "PR1999",Montant: "3900077789",Commmentaire: "Ajustement CRM"},
           {Entite: "S4639", Indicateur: "NRG144", ActivityCenter: "Partenaire_Nv" ,Provider: "RUN?Change_ND",Rtb_Ctb_Ctg: "Hors It",It_non_it: "FI_NV",Rubrique_n: "B000253",Activity: "NA",TypeActivite: "",Client: "Client_NV",Produit: "PR1999",Montant: "3900077789",Commmentaire: "Ajustement CRM"},
            {Entite: "S4639", Indicateur: "NRG144", ActivityCenter: "Partenaire_Nv" ,Provider: "RUN?Change_ND",Rtb_Ctb_Ctg: "Hors It",It_non_it: "FI_NV",Rubrique_n: "B000253",Activity: "NA",TypeActivite: "",Client: "Client_NV",Produit: "PR1999",Montant: "3900077789",Commmentaire: "Ajustement CRM"},
             {Entite: "S4639", Indicateur: "NRG144", ActivityCenter: "Partenaire_Nv" ,Provider: "RUN?Change_ND",Rtb_Ctb_Ctg: "Hors It",It_non_it: "FI_NV",Rubrique_n: "B000253",Activity: "NA",TypeActivite: "",Client: "Client_NV",Produit: "PR1999",Montant: "3900077789",Commmentaire: "Ajustement CRM"},
    ]);
     const [columnDefs] = useState([
       { field: 'Entite' },
       { field: 'Indicateur' },
       { field: 'ActivityCenter' },
       { field: 'Provider' },
       { field: 'Rtb_Ctb_Ctg' },
        { field: 'It_non_it' },
         { field: 'Rubrique_n' },
          { field: 'Activity' },
           { field: 'TypeActivite' },
            { field: 'Client' },
             { field: 'Produit' },
                 { field: 'Montant' },
                     { field: 'Commmentaire' },
   ])
  return (
    <div>
       <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>Tableau</Navbar.Brand>
         <Navbar.Brand  style={{marginRight:'200px'}}>Graphique</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      </Container>
    </Navbar><br />
    <div className="ag-theme-alpine" style={{height: 400, width: 2350}}>
           <AgGridReact
              rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
   
    </div>
  )
}

export default Tableau
