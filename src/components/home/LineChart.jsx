import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses", "Profit"],
  ["Mon", 1000, 400, 200],
  ["Tue", 1170, 460, 250],
  ["Wen", 660, 1120, 300],
  ["Thr", 1030, 540, 350],
  ["Fri", 660, 1120, 300],
  ["Sat", 1030, 540, 350],
  ["Sun", 660, 1120, 300],
];

export const options = {
  chart: {
    title: "Company Performance",
    subtitle: "Sales, Expenses, and Profit: 2014-2017",
  },
  series: {
    0: { color: "#7CC5F3" }, // Color for the "Sales" series
    1: { color: "#B1DAF3" }, // Color for the "Expenses" series
    2: { color: "#D1E6F3" }, // Color for the "Profit" series
  },
  legend: { position: "none" },
};

export function LineChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="430px"
      data={data}
      options={options}
    />
  );
}
