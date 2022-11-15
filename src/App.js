import './App.css';
import Box from '@mui/material/Box'
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import BarChart from './components/BarChart';

function App() {
  return (
    <div className="App">
    <h1>Line Chart Here</h1>
    <LineChart />
    <Box m={15}>
    <h1>Pie Chart Here</h1>
    <PieChart />
    </Box>
    <Box m={15}>
    <h1>Bar Chart Here</h1>
    <BarChart />
    </Box>
    </div>
  );
}

export default App;
