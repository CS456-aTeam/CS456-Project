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

export const options = {
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

const labels = ['A', 'B', 'C', 'D', 'F'];
const qtys = [6, 11, 14, 9, 5];

//const colors = ['#1f77b4', '#ff7f0e', '#2ca02c', '#d62728', '#2f27f8'];
const colors = palette('cb-Spectral', labels.length).map((s) => `#${s}`);
const patterns = pattern.generate(colors);

export const data = {
  labels,
  datasets: [{
    label: 'Grade Distribution',
    data: qtys,
    backgroundColor: patterns,
  }],
};

const BarChart = () => {
    return <Bar options={options} data={data} />;
}

export default BarChart;