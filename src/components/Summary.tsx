import React from "react";
import { Entry } from "../types/Entry";

interface SummaryProps {
  entries: Entry[];
}

const Summary: React.FC<SummaryProps> = ({ entries }) => {
  const income = entries
    .filter((entry) => entry.type === "income")
    .reduce((sum, entry) => sum + entry.amount, 0);

  const expenses = entries
    .filter((entry) => entry.type === "expense")
    .reduce((sum, entry) => sum + entry.amount, 0);

  return (
    <div>
      <h2>Summary</h2>
      <p>Total Income: ${income}</p>
      <p>Total Expenses: ${expenses}</p>
      <p>Balance: ${income - expenses}</p>
    </div>
  );
};

export default Summary;
