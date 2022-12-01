import { React, useState } from 'react';
import { Link } from "react-router-dom";
import BarChart from "./BarChart.js";
import './Cards.css';
import LineChart from './LineChart.js';
import { InputTable } from './InputTable.js'

function counter() {
  return counter.count++;
}
counter.count = 0;


const Cards = () => {
  let [tableData, setTableData] = useState([{ key: counter(), x: '', y: '' }]);
  let [title, setTitle] = useState("");
  let [xAxisLabel, setXAxisLabel] = useState("");
  let [yAxisLabel, setYAxisLabel] = useState("");

  function onRowChange(row_index, attr, value) {
    setTableData(tableData.map((row, r_index) => (r_index != row_index) ?
      row : { ...row, [attr]: value }
    ));
  }

  function onAddRow(index) {
    setTableData([...tableData.slice(0, index), { key: counter(), x: '', y: '' }, ...tableData.slice(index)]);
  }

  function onDeleteRow(index) {
    setTableData([...tableData.slice(0, index), ...tableData.slice(index + 1)]);
  }

  return (
    <>
      <InputTable
        rows={tableData}
        onRowChange={onRowChange}
        onAddRow={onAddRow}
        onDeleteRow={onDeleteRow}
        onTitleChange={(val) => { setTitle(val) }}
        onXAxisLabelChange={(val) => { setXAxisLabel(val) }}
        onYAxisLabelChange={(val) => { setYAxisLabel(val) }} />

      <div className="div3">
        <h2>Color profile</h2>
      </div>

      <div className="div2">
        <BarChart xyPairs={tableData} title={title} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} />
      </div>
    </>
  )
}

export default Cards