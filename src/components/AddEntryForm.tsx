import React, { useState } from "react";
import { Entry } from "../types/Entry";

interface AddEntryFormProps {
  onAddEntry: (entry: Entry) => void;
}

const AddEntryForm: React.FC<AddEntryFormProps> = ({ onAddEntry }) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState<number | "">("");
  const [type, setType] = useState<"income" | "expense">("income");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (description && amount) {
      onAddEntry({
        id: crypto.randomUUID(),
        description,
        amount: +amount,
        type,
        date: new Date().toISOString(),
      });
      setDescription("");
      setAmount("");
      setType("income");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        required
      />
      <select value={type} onChange={(e) => setType(e.target.value as any)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add Entry</button>
    </form>
  );
};

export default AddEntryForm;
