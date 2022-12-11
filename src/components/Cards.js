import { React, useState } from 'react';
import { Link } from "react-router-dom";
import BarChart from "./BarChart.js";
import './Cards.css';
import LineChart from './LineChart.js';
import { InputTable } from './InputTable.js';
import ColorBar from './ColorBar.js';
import TabContainer from './TabContainer.js';
import palette from 'google-palette'
import Grid from '@mui/material/Grid';
import Stack from "@mui/material/Stack";
import Box from '@mui/material/Box';

function counter() {
  return counter.count++;
}
counter.count = 0;


const Cards = () => {
  let [tableData, setTableData] = useState([{ key: counter(), x: '', y: '' }]);
  let [title, setTitle] = useState("");
  let [xAxisLabel, setXAxisLabel] = useState("");
  let [yAxisLabel, setYAxisLabel] = useState("");
  const [PaletteColors, setPaletteColors] = useState("tol-rainbow");

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

  const paletteNames = ['tol', 'tol-dv', 'tol-rainbow', 'cb-BrBG', 'cb-PRGn', 'cb-PiYG', 'cb-PuOr', 'cb-RdBu', 'cb-RdGy', 'cb-RdYlBu'];

  return (
    <>
      <Box
        sx={
          { m: 9 }
        }
      >
        <Grid container spacing={10}>
          <Grid item xs={5}>
            <InputTable
              rows={tableData}
              onRowChange={onRowChange}
              onAddRow={onAddRow}
              onDeleteRow={onDeleteRow}
              onTitleChange={(val) => { setTitle(val) }}
              onXAxisLabelChange={(val) => { setXAxisLabel(val) }}
              onYAxisLabelChange={(val) => { setYAxisLabel(val) }} />
          </Grid>
          <Grid item xs={7}>
            <Box
              sx={{ m: 3 }}>
              <TabContainer xyPairs={tableData} title={title} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} PaletteSelected={PaletteColors} />
            </Box>
            <Stack direction="row" spacing={2} display="flex" justifyContent="space-evenly">
            {paletteNames.map((name) =>
              <>
                <input type="radio" value={name}
                checked={PaletteColors === name}
                onChange={Update_Palette} />
                <ColorBar colors={palette(name, 4).map((s) => `#${s}`)} />
              </>
            )}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Cards