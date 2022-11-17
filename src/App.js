import {React} from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom';
import Cards from './components/Cards';
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
