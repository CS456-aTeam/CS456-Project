import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';
import pattern from 'patternomaly'
import palette from 'google-palette'


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = (props) => {
  let labels = [];
  let quantities = [];
  for (const pair of props.xyPairs) {
    labels.push(pair.x);
    quantities.push(pair.y);
  }
  const colors = palette('cb-Spectral', labels.length).map((s) => `#${s}`);
  const patterns = pattern.generate(colors);

  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const data = {
    labels,
    datasets: [{
      label: 'Grade Distribution',
      data: quantities,
      backgroundColor: patterns,
    }],
  };

  return <Bar options={options} data={data} />;
}

export default BarChart;