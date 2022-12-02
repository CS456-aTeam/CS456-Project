import { React, useState } from 'react';
import { Link } from "react-router-dom";
import BarChart from "./BarChart.js";
import './Cards.css';
import LineChart from './LineChart.js';
import { InputTable } from './InputTable.js';
import ColorBar from './ColorBar.js';
import palette from 'google-palette'

function counter() {
  return counter.count++;
}
counter.count = 0;


const Cards = () => {
  let [tableData, setTableData] = useState([{key: counter(), x: '', y: ''}]);

  function onRowChanged(row_index, attr, value) {
    setTableData(tableData.map((row, r_index) => (r_index != row_index) ?
      row : {...row, [attr]: value}
    ));
  }

  function onAddRow(index) {
    setTableData([...tableData.slice(0, index), {key: counter(), x: '', y: ''}, ...tableData.slice(index)]);
  }

  function onDeleteRow(index) {
    setTableData([...tableData.slice(0, index), ...tableData.slice(index + 1)]);
  }

  return (
    <>
    <InputTable rows={tableData} onRowChanged={onRowChanged} onAddRow={onAddRow} onDeleteRow={onDeleteRow} />

      <div className="flexbox">
        <ColorBar colors= {palette('mpn65', 4).map((s) => `#${s}`)}/>



        <ColorBar colors= {palette('tol-rainbow', 4).map((s) => `#${s}`)}/>


        <ColorBar colors= {palette('cb-YlOrRd', 4).map((s) => `#${s}`)}/>
        <ColorBar colors= {palette('cb-Spectral', 4).map((s) => `#${s}`)}/>
        <ColorBar colors= {palette('cb-Set3', 4).map((s) => `#${s}`)}/>
        {/* <ColorBar colors= {palette('Grayscale', 4).map((s) => `#${s}`)}/> */}
        <ColorBar colors= {palette('sol-base', 4).map((s) => `#${s}`)}/>
        <ColorBar colors= {palette('sol-accent', 4).map((s) => `#${s}`)}/>
        
      </div>

      <div className="div2">
        <BarChart xyPairs={tableData} />
      </div>
    </>
  )
}

export default Cards