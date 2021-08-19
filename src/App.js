import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import ToogleNewExpense from "./components/Expenses/NewExpense/ToogleNewExpense";
const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Car 2021",
    date: new Date(2021, 1, 28),
    amount: Number.parseFloat(500),
  },
  {
    id: 2,
    title: "Toilet paper 2019",
    date: new Date(2019, 2, 12),
    amount: Number.parseFloat(100),
  },
  {
    id: 3,
    title: "Toilet paper 2020",
    date: new Date(2020, 3, 12),
    amount: Number.parseFloat(100),
  },
  {
    id: 4,
    title: "Repairing house 2021",
    date: new Date(2021, 4, 5),
    amount: Number.parseFloat(150),
  },
];
const App = () => {
  const [appData, setAppData] = useState({
    expenses: DUMMY_EXPENSES,
    selectedYear: undefined,
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
      <ToogleNewExpense
        onNewExpenseHandler={_onNewExpenseHandler}
      ></ToogleNewExpense>
      <Expenses expenses={appData.expenses} />
    </div>
  );
};

export default App;
