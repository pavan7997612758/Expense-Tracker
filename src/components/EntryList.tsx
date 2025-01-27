import React from "react";
import { Entry } from "../types/Entry";

interface EntryListProps {
  entries: Entry[];
  onDelete: (id: string) => void;
}

const EntryList: React.FC<EntryListProps> = ({ entries, onDelete }) => {
  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry.id}>
          <span>{entry.description}</span>
          <span>{entry.amount}</span>
          <span>{entry.type}</span>
          <button onClick={() => onDelete(entry.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default EntryList;
