import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
const Expenses = (props) => {
  const expenses = props.expenses;
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return <ExpenseItem key={expense.id} data={expense} />;
      })}
    </Card>
  );
};

export default Expenses;
