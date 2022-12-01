import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import palette from 'google-palette'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = (props) => {
  let labels = [];
  let quantities = [];
  for (const pair of props.xyPairs) {
    labels.push(pair.valX);
    quantities.push(pair.valY);
  }
  const colors = palette('cb-Spectral', labels.length).map((s) => `#${s}`);
  
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
      backgroundColor: colors,
    }],
  };

  return <Line options={options} data={data} />;
}

export default LineChart;