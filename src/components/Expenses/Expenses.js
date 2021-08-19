import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./NewExpense/ExpensesChart";
const Expenses = (props) => {
  const { expenses } = props;
  const [selectedYear, setSelectedYear] = useState("All");

  const _getExpensesByYear = () => {
    switch (selectedYear) {
      case "All":
        return expenses;

      default:
        return expenses.filter((expense) => {
          if (expense.date.getFullYear().toString() === selectedYear) {
            return expense;
          } else {
            return null;
          }
        });
    }
  };

  const _getYearsList = () => {
    let r = expenses.map((e) => e.date.getFullYear().toString());

    r = ["All", "2015", ...new Set(r)];

    return r.sort(function (a, b) {
      return b - a;
    });
  };

  const _onSelectChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          years={_getYearsList()}
          selectedYear={selectedYear}
          onSelectChangeHandler={_onSelectChangeHandler}
        />
        <ExpensesChart expenses={_getExpensesByYear()} />
      </Card>
      <ExpensesList expenses={_getExpensesByYear()} />
    </div>
  );
};

export default Expenses;
