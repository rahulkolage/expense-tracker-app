import React, { useState } from "react";
// React is default import
// adding items in {} is named import

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const INITIAL_EXPENSES = [
  {
    id: "e1",
    title: "                                                                                                                                                                                                                                                                                                                     Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (expense) => {
    // console.log(expense);

    // update list dynamically using update state function
    setExpenses((previousExpenses) => {
      return [expense, ...previousExpenses];
    });
  };

  return (
    <div>
      {/* onAddExpense is pointer to output function addExpenseHandler */}
      {/* addExpenseHandler will get called inside NewExpense, accessed via Props in  NewExpense.js */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  // Old syntax
  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2',{},'Let\'s get started!'),
  //   React.createElement(expenses,{items: expenses})
  // );
};

export default App;
