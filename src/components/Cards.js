import {React, useState} from 'react';
import CardItem from './CardItem';
import './Cards.css'

function Cards() {
  

  const [inputarr, setInputarr] = useState([])
  const [inputdata, setInputdata] = useState({name : "", rollno: ""})
  const [label, setLabel] = useState({labx : "", laby: ""})
  function changehandle(e){
    setInputdata({...inputdata,[ e.target.name]: e.target.value})
    setLabel({...label,[ e.target.name]: e.target.value})

  }
  let {name,rollno}=inputdata;
  function changhandle(){
    setInputarr([...inputarr, {name, rollno}])
    
    console.log(inputdata, "enter")
    setInputdata({name:"", rollno: ""})
  }
  // function changehandle2(){
  //   console.log( "store", inputarr)
  // }
  return (
    <div className = "cards">
        <h1>Enter Value to Create a Chart</h1><br/>
        <h2>Enter the label</h2>
        <div className = "input">
        <input type = "text" autoComplete='off' name = 'labx' value = {label.labx} onChange = {changehandle} placeholder = "Label x" /> 
        <input type = "text" autoComplete='off' name = 'laby' value = {label.laby} onChange = {changehandle} placeholder = "Label y" /> <br/>
        
        </div>
        <h2>Enter the value</h2>
        <div className = "input">
          <input type = "text" autoComplete='off' name = 'name' value = {inputdata.name} onChange = {changehandle} placeholder = "Enter x" /> 
          <input type = "text" autoComplete='off' name = 'rollno' value = {inputdata.rollno} onChange = {changehandle} placeholder = "Enter y" /> <br/>
          <button onClick={changhandle}> Add Value </button> <br/><br/>
          {/* <button onClick={changehandle2}> Check Array </button> <br/><br/> */}


          <table border={1} width= "25%" cellPadding={10}>
            <tbody>
            <tr>
              <td>{label.labx}</td>
              <td>{label.laby}</td>
            </tr>
            {
              inputarr.map (
                (info, ind) =>{
                  return(
                    <tr key = {ind}>
                      <td>{info.name}</td>
                      <td>{info.rollno}</td>
                    </tr>
                  )
                }
              )
            }
            </tbody>



          </table>
        </div>
        
    </div>
  )
}

export default Cards