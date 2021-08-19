import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  
  
  return (
    <div className="new-expense">
      <ExpenseForm onNewExpenseHandler={props.onNewExpenseHandler} />
    </div>
  );
};

export default NewExpense;
