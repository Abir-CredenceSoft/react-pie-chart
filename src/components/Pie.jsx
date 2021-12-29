import { Pie } from "react-chartjs-2";

export default function ({ labels = [], values = [] }) {
  return (
    <Pie
      style={{ height: "500px", width: "500px" }}
      data={{
        labels: labels,
        datasets: [
          {
            label: "totalAmount",
            data: values,
            backgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(255, 100, 0, 0.8)",
            ],
          },
        ],
      }}
      options={{
        responsive: true,
        maintainAspectRatio: true,
        title: {
          display: true,
          text: "shit",
        },
      }}
      // height={100}
      // width={100}
    />
  );
}
