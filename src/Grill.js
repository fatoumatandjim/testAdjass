import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { render } from 'react-dom';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-alpine.css'; // Optional theme CSS
import axios from "axios";
const Grill = () => {

//  const gridRef = useRef(); // Optional - for accessing Grid's API
 const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
useEffect(() => {
   axios.get('http://localhost:3002/ajustement')
   .then(result => result.json())
   .then(rowData => setRowData(rowData))
    console.log(rowData)
}, []);
const [columnDefs, setColumnDefs] = useState([
   {field: 'pilars', filter: true},
   {field: 'phase', filter: true},
   {field: 'year'},
      {field: 'month'},
         {field: 'cumul_type'},
            {field: 'data_source'},
               {field: 'entity'},
                  {field: 'indicator'},
                     {field: 'activity_center'},
                        {field: 'conversion'},
                           {field: 'amount'},
 {field: 'input_user'},
  {field: 'input_date'},
   {field: 'gop_rc_giz_pc'}, 
      {field: 'provider'}, 
         {field: 'rtb_ctb_cta_type'}, 
            {field: 'it_non_it'}, 
               {field: 'rubrique_fi'}, 
                  {field: 'activity'}, 
                     {field: 'activity_type'}, 
                        {field: 'client'}, 
                           {field: 'product'}, 
                              {field: 'tbs_activity'}, 

                                 {field: 'id'}, 


]);

 return (
   <div>
    <div className="ag-theme-alpine" style={{height: 400, width: 600}}>
           <AgGridReact
               rowData={rowData}
               columnDefs={columnDefs}>
           </AgGridReact>
       </div>
   
   </div>
 );
};

export default Grill;