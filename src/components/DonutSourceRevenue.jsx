import React from "react";
import { Bar } from "react-chartjs-2";
export default function DonutSourceRevenue() {
  const data = {
    // labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "1",
        data: [300, 50, 100],
        // backgroundColor: [
        //   "rgb(255, 99, 132)",
        //   "rgb(54, 162, 235)",
        //   "rgb(255, 205, 86)",
        // ],
        // hoverOffset: 4,
      },
      // ,
      // {
      //   label: "My second Dataset",
      //   data: [300, 50, 100],
      //   backgroundColor: [
      //     "rgb(255, 99, 132)",
      //     "rgb(54, 162, 235)",
      //     "rgb(255, 205, 86)",
      //   ],
      //   hoverOffset: 4,
      // },
    ],
  };

  return (
    <Bar
      data={{
        label: "abc",
        data: [100, 200],
      }}
      height={100}
      // options={{
      //   responsive: true,
      //   plugins: {
      //     legend: {
      //       position: "top",
      //     },
      //     title: {
      //       display: true,
      //       text: "Chart.js Doughnut Chart",
      //     },
      //   },
      // }}
    />
  );
}
