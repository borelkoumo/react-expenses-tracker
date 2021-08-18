import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  // debugger;
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpenseHandler={props.onNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
