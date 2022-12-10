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
  for (const pair of [...props.xyPairs].sort((a, b) => a.x > b.x)) {
    labels.push(pair.x);
    quantities.push(pair.y);
  }
  
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: props.title,
      },
    },
  };

  const data = {
    labels,
    datasets: [{
      label: props.yAxisLabel,
      data: quantities,
      borderColor: 'rgb(0, 0, 0)',
      backgroundColor: '#dddddd',
      fill: true,
    }],
  };

  return <Line options={options} data={data} />;
}

export default LineChart;