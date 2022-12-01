import { React, useState } from 'react';
import { Link } from "react-router-dom";
import BarChart from "./BarChart.js";
import './Cards.css';
import LineChart from './LineChart.js';
import { InputTable } from './InputTable.js';
import ColorBar from './ColorBar.js';

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

      <div className="div3">
        <h2>Color profile</h2>
        <ColorBar/>
      </div>

      <div className="div2">
        <BarChart xyPairs={tableData} />
      </div>
    </>
  )
}

export default Cards