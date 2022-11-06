import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Line from './components/pages/Line';
import Bar from './components/pages/Bar';
import Pie from './components/pages/Pie';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lines" element={<Line />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
        </Routes>
      </Router>
    </>
      
 
  );
}

export default App;
