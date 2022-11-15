import {React, useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Line from './components/pages/Line';
import Bar from './components/pages/Bar';
import Pie from './components/pages/Pie';
import Cards from './components/Cards';
function App() {  
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>

      </Router>
      

    </>
      
 
  );
}

export default App;
