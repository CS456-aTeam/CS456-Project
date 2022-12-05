import { React, useState } from 'react';
import { Link } from "react-router-dom";
import BarChart from "./BarChart.js";
import './Cards.css';
import LineChart from './LineChart.js';
import { InputTable } from './InputTable.js';
import ColorBar from './ColorBar.js';
import TabContainer from './TabContainer.js';
import palette from 'google-palette'

function counter() {
  return counter.count++;
}
counter.count = 0;


const Cards = () => {
  let [tableData, setTableData] = useState([{ key: counter(), x: '', y: '' }]);
  let [title, setTitle] = useState("");
  let [xAxisLabel, setXAxisLabel] = useState("");
  let [yAxisLabel, setYAxisLabel] = useState("");
  const [PaletteColors, setPaletteColors] = useState("cb-Spectral");

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

  const Update_Palette = event => {
    console.log(event.target.value);
    setPaletteColors(event.target.value);
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

      <div className="flexbox">
        <div style={{ display:"flex", flexDirection:"row", alignItems:"center"}}>
          <input type="radio" value="mpn65" 
                                checked = { PaletteColors === 'mpn65'} 
                                onChange = { Update_Palette }/>
          <ColorBar colors= {palette('mpn65', 4).map((s) => `#${s}`)}/>
        </div>
        <div style={{ display:"flex", flexDirection:"row", alignItems:"center"}}>
          <input type="radio" value="tol-rainbow"  
                                checked = { PaletteColors === 'tol-rainbow'} 
                                onChange = { Update_Palette }/>
          <ColorBar colors= {palette('tol-rainbow', 4).map((s) => `#${s}`)}/>
        </div>
        <div style={{ display:"flex", flexDirection:"row", alignItems:"center"}}>
          <input type="radio" value="cb-YlOrRd"   
                                checked = { PaletteColors === 'cb-YlOrRd'} 
                                onChange = { Update_Palette }/>
          <ColorBar colors= {palette('cb-YlOrRd', 4).map((s) => `#${s}`)}/>
        </div>
        <div style={{ display:"flex", flexDirection:"row", alignItems:"center"}}>
          <input type="radio" value="cb-Spectral"   
                                checked = { PaletteColors === 'cb-Spectral'} 
                                onChange = { Update_Palette }/>
          <ColorBar colors= {palette('cb-Spectral', 4).map((s) => `#${s}`)}/>
        </div>
        <div style={{ display:"flex", flexDirection:"row", alignItems:"center"}}>
          <input type="radio" value="cb-Set3"   
                                checked = { PaletteColors === 'cb-Set3'} 
                                onChange = { Update_Palette }/>
          <ColorBar colors= {palette('cb-Set3', 4).map((s) => `#${s}`)}/> 
        </div>
        <div style={{ display:"flex", flexDirection:"row", alignItems:"center"}}>
          <input type="radio" value="sol-base"   
                                checked = { PaletteColors === 'sol-base'} 
                                onChange = { Update_Palette }/>
          <ColorBar colors= {palette('sol-base', 4).map((s) => `#${s}`)}/>
        </div>
        <div style={{ display:"flex", flexDirection:"row", alignItems:"center"}}>
          <input type="radio" value="sol-accent"   
                                checked = { PaletteColors === 'sol-accent'} 
                                onChange = { Update_Palette }/>
          <ColorBar colors= {palette('sol-accent', 4).map((s) => `#${s}`)}/>  
        </div>     
      </div>

      <div className="div2">
        {/*<BarChart xyPairs={tableData} title={title} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} PaletteSelected={PaletteColors}/>*/}
        <TabContainer xyPairs={tableData} title={title} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} PaletteSelected={PaletteColors} />
      </div>
    </>
  )
}

export default Cards