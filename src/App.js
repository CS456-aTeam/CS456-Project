import {React} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom';
import Cards from './components/Cards';

function App() {  
  return (
    <> <Router> <Navbar/> <Cards/> </Router> </>
  );}

export default App;
