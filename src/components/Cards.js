import { React, useState } from 'react';
import { Link } from "react-router-dom";
import BarChart from "./BarChart.js";
import './Cards.css';
import LineChart from './LineChart.js';


const Cards = () => {
  let [array, setArray] = useState([])
  let [inputdata, setInputdata] = useState({ valX: "", valY: "" })
  let [label, setLabel] = useState({ labx: "", laby: "" })
  let [namechart, setNameChart] = useState({ anamechart: "" })
  let [index, setIndex] = useState()
  let [Is_update, setIs_update] = useState(false)
  let { valX, valY } = inputdata;

  function data(e) {
    setInputdata({ ...inputdata, [e.target.name]: e.target.value })
    setLabel({ ...label, [e.target.name]: e.target.value })
    setNameChart({ ...namechart, [e.target.name]: e.target.value })
  }

  //add data
  function Add_data() {

    if (valX === "" || valY === "") {
      alert("Please enter values for required fields.")
    } else if (array.includes({ valX, valY }) === true) {
      alert("Please enter values for required fields.")
    } else {
      setArray([...array, { valX, valY }])
      setInputdata({ valX: "", valY: "" })
    }
  }

  //delete data
  function Delete_data(index) {
    let total = [...array]
    total.splice(index, 1)
    setArray(total)
  }

  //edit data
  function Edit_data(index) {
    let { valX, valY } = array[index]
    setInputdata({ valX, valY })
    setIs_update(true)
    setIndex(index)
  }

  //updating data after editing
  function Update_info() {
    let total = [...array]
    total.splice(index, 1, { valX, valY })
    setArray(total)
    setIs_update(false)
    setInputdata({ valX: "", valY: "" })
  }

  return (
    <>
      <div className="cards">

        <h1>Enter Value to Create a Chart</h1><br />
        <h2>Enter the name for your chart</h2>

        <div className="input">
          <input type="text" style={{ width: "535px" }} autoComplete='off' name='anamechart' value={namechart.anamechart} onChange={data} placeholder="Choose a Name For Your Chart..." />
        </div>

        {/* Ask the label */}
        <h2>Enter the label</h2>
        <div className="input">
          <input type="text" autoComplete='off' name='labx' value={label.labx} onChange={data} required="required" placeholder="Label x..." />
          <input type="text" autoComplete='off' name='laby' value={label.laby} onChange={data} required="required" placeholder="Label y..." />
          <br />
        </div>

        {/* Ask the value */}
        <h2>Enter the value</h2>
        <div className="input">
          <input type="text" autoComplete='off' name='valX' value={inputdata.valX} onChange={data} placeholder="Enter x..." />
          <input type="number" autoComplete='off' name='valY' value={inputdata.valY} onChange={data} placeholder="Enter y..." />
          <br />

          {/* Add and Edit handler */}
          <button onClick={!Is_update ? Add_data : Update_info}> {!Is_update ? `Add Value` : `Edit`} </button>

          <br /><br />

          {/* create the input table */}
          <table border={3} width="90%" cellPadding={10}>
            <tbody>

              {/* table head (label) */}
              <tr>
                <th class="block" width="30%">{label.labx || "..."}</th>
                <th class="block" width="30%">{label.laby || "..."}</th>
                <th width="40%" bolder="10" colSpan={2}>Action</th>
              </tr>

              {/* input rows and columns */}
              {
                array && array.map(
                  (info, index) => {
                    return (
                      <tr key={index}>
                        <td>{info.valX}</td>
                        <td>{info.valY}</td>
                        <td><button onClick={() => Edit_data(index)}>
                          Edit
                        </button></td>

                        <td><button onClick={() => Delete_data(index)}>
                          Delete
                        </button></td>

                      </tr>
                    )
                  })}
            </tbody>
          </table>
        </div>
      </div>


      <div className="div3">
        <h2>Color profile</h2>

      </div>

      <div className="div2">
        <h1>{namechart.anamechart || "Choose a Name For Your Chart"}</h1>
        <h2>For chart team: Start from line 138 in the file "Cards.js"</h2>
        <BarChart xyPairs={array} />
      </div>
    </>
  )
}

export default Cards