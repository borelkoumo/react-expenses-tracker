import React from "react";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
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

  return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Monthly expenses"),
    React.createElement(Expenses, { expenses: expenses }, null)
  );
  // return (
  //   <div>
  //     <h2>Monthly expenses</h2>
  //     <Expenses expenses={expenses} />
  //   </div>
  // );
};

export default App;
