import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const ToogleNewExpense = (props) => {
  const { onNewExpenseHandler } = props;
  const [isAdding, setIsAdding] = useState(false);
  const _onCancelNewExpenseHandler = () => {
    setIsAdding(false);
  };
  const _onAddExpenseClick = (e) => {
    e.preventDefault();
    setIsAdding(true);
  };

  const _onNewExpenseHandler = (data) => {
    setIsAdding(false);
    onNewExpenseHandler(data);
  };

  if (!isAdding) {
    return (
      <div className="new-expense">
        <form>
          <button onClick={_onAddExpenseClick}>Add Expense</button>
        </form>
      </div>
    );
  } else {
    //debugger;
    return (
      <div className="new-expense">
        <ExpenseForm
          onNewExpenseHandler={_onNewExpenseHandler}
          onCancelNewExpenseHandler={_onCancelNewExpenseHandler}
        />
      </div>
    );
  }
};

export default ToogleNewExpense;
