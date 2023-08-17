import { useState } from "react";
import Expense from "./Componente/Expenses/Expense";
import NewExpense from "./Componente/NewExpense/NewExpense";
import Footer from "./Componente/Footer/Footer";
import Header from "./Componente/Header/Header";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurence",
    amount: 100,
    date: new Date(2002, 5, 10),
  },
  {
    id: "e2",
    title: "Home Insurence",
    amount: 200,
    date: new Date(2022, 5, 10),
  },
  {
    id: "e3",
    title: "Nike Insurence",
    amount: 300,
    date: new Date(2020, 5, 10),
  },
  {
    id: "e4",
    title: "human Insurence",
    amount: 400,
    date: new Date(2202, 5, 10),
  },
  {
    id: "e5",
    title: "Dog Insurence",
    amount: 500,
    date: new Date(3002, 5, 10),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  

  return (
    <div>
      <div><Header /></div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />

      <div><Footer /> </div>
    </div>
    
  );
};

export default App;
