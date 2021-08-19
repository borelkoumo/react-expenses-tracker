import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
import Card from "../UI/Card";
const ExpensesList = (props) => {
  const { expenses } = props;

  //   debugger;
  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback"> No expenses found </h2>;
  }
  return (
    <div className="expenses-list">
      <Card className="expenses">
        {expenses.map((expense) => {
          return <ExpenseItem key={expense.id} data={expense} />;
        })}
      </Card>
    </div>
  );
};

export default ExpensesList;
