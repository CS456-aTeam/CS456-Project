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
    labels.push(pair.valX);
    quantities.push(pair.valY);
  }
  //const colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#2f27f8'];
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