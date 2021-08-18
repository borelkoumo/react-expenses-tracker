import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/Expenses/NewExpense/NewExpense";

const App = () => {
  const [appData, setAppData] = useState({
    expenses: [
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
    ],
  });

  const _onNewExpenseHandler = (data) => {
    setAppData((previousState) => {
      data.id = Math.random().toString();
      appData.expenses.push(data);
      return { ...previousState, expenses: appData.expenses };
    });
  };

  // debugger;
  return (
    <div>
      <NewExpense onNewExpenseHandler={_onNewExpenseHandler}></NewExpense>
      <Expenses expenses={appData.expenses} />
    </div>
  );
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Monthly expenses"),
  //   React.createElement(Expenses, { expenses: expenses }, null)
  // );
};

export default App;
