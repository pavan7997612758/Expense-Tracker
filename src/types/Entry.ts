export interface Entry {
    id: string;
    description: string;
    amount: number;
    type: "income" | "expense";
    date: string; // ISO string format
  }
  