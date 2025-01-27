import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import { Pie, Bar } from "react-chartjs-2";
import { Entry } from "../types/Entry";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

interface ExpenseChartProps {
  entries: Entry[];
}

const ExpenseChart: React.FC<ExpenseChartProps> = ({ entries }) => {
  const incomeData = entries
    .filter((entry) => entry.type === "income")
    .map((entry) => entry.amount);

  const expenseData = entries
    .filter((entry) => entry.type === "expense")
    .map((entry) => entry.amount);

  const chartData = {
    labels: ["Income", "Expenses"],
    datasets: [
      {
        label: "Amount",
        data: [incomeData.reduce((sum, val) => sum + val, 0), expenseData.reduce((sum, val) => sum + val, 0)],
        backgroundColor: ["#4caf50", "#f44336"],
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default ExpenseChart;
