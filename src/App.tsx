import React, { useState } from "react";
import AddEntryForm from "./components/AddEntryForm";
import EntryList from "./components/EntryList";
import Summary from "./components/Summary";
import ExpenseChart from "./components/ExpenseChart";
import { Entry } from "./types/Entry";

const App: React.FC = () => {
  const [entries, setEntries] = useState<Entry[]>([]);

  const addEntry = (entry: Entry) => {
    setEntries([...entries, entry]);
  };

  const deleteEntry = (id: string) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div>
      <h1>Expense Tracker</h1>
      <AddEntryForm onAddEntry={addEntry} />
      <Summary entries={entries} />
      <ExpenseChart entries={entries} />
      <EntryList entries={entries} onDelete={deleteEntry} />
    </div>
  );
};

export default App;
