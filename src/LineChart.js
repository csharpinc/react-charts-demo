import React from "react";
import { Line } from "react-chartjs-2";

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [100, 200, 150, 100, 250],
        borderColor: "rgba(234, 114, 126, 0.8)",
        borderWidth: 2,
        fill: false,
      },
      {
        label: "Sales",
        data: [150, 170, 100, 260, 150],
        borderColor: "rgba(48, 192, 140, 0.8)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
