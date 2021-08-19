import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car",
    date: new Date(2021, 2, 28),
    amount: 5000,
  },
  {
    id: 2,
    title: "Toilet paper",
    date: new Date(2021, 2, 12),
    amount: 100,
  },
  {
    id: 3,
    title: "Repairing house",
    date: new Date(2021, 5, 5),
    amount: 150000,
  },
];
const App = () => {
  const [appData, setAppData] = useState({
    expenses: DUMMY_EXPENSES,
    selectedYear : undefined
  });

  const _onNewExpenseHandler = (data) => {
    data.id = Math.random().toString();

    setAppData((previousState) => {
      const nextState = {
        ...previousState,
        expenses: [data, ...appData.expenses],
      };
      return nextState;
    });
  };


  return (
    <div>
      <NewExpense onNewExpenseHandler={_onNewExpenseHandler}></NewExpense>
      <ExpensesFilter years={ } onSelectChangeHandler={ }/>
      <Expenses expenses={appData.expenses} />
    </div>
  );
};

export default App;
