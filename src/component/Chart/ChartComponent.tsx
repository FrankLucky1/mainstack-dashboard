import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register the components you need
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const ChartComponent = () => {
  const data = {
    datasets: [
      {
        label: "Revenue",
        data: [
          { x: "2022-04-01", y: 200 },
          { x: "2022-04-05", y: 500 },
          { x: "2022-04-10", y: 250 },
          { x: "2022-04-15", y: 600 },
          { x: "2022-04-20", y: 400 },
          { x: "2022-04-25", y: 550 },
          { x: "2022-04-30", y: 300 },
        ],
        borderColor: "#FF5403",
        backgroundColor: "rgba(79, 70, 229, 0.1)",
         borderWidth: 1,
        fill: true,
        tension: 0.5, 
        pointRadius: 0,
      },
    ],
  };

  interface ChartOptions {
    responsive: boolean;
    plugins: {
      legend: {
        display: boolean;
        position: 'top';
      };
      title: {
        display: boolean;
        text: string;
      };
    };
    scales: {
      x: {
        grid: { display: boolean };
        ticks: {
          callback: (value: string | number, index: number, ticks: { value: number }[]) => string;
        };
      };
      y: {
        display: boolean;
      };
    };
  }

  const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top" as const,
      },
      title: {
        display: false,
        text: "Monthly Revenue Trend",
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: {
          callback: function (value: string | number, index: number, ticks: { value: number }[]): string {
            if (index === 0) return "Apr 1, 2022";
            if (index === ticks.length - 1) return "Apr 30, 2022";
            return "";
          },
        },
      },
      y: {
        display: false,
      },
    },
  };

  return <Line data={data} options={options} width={765}/>;
};

export default ChartComponent;

