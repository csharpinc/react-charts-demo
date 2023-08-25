import React from "react";
import { Bar } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May"];

const BarChart = () => {
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [100, 200, 150, 300, 250],
        backgroundColor: "rgba(234, 114, 126, 0.8)",
      },
      {
        label: "Dataset 2",
        data: [100, 200, 150, 300, 250],
        backgroundColor: "rgba(48, 192, 140, 0.8)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  };

  return (
    <div>
      <Bar options={options} data={data} />
    </div>
  );
};

export default BarChart;
