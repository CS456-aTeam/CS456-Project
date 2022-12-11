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
import pattern from 'patternomaly';
import palette from 'google-palette';


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


  const colors = palette(props.PaletteSelected, labels.length).map((s) => `#${s}`);
  const patterns = pattern.generate(colors);

  
  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
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
      backgroundColor: patterns,
    }],
  };

  return <Bar options={options} data={data} />;
}

export default BarChart;