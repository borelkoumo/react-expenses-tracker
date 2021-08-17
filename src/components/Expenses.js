import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
function Expenses(props) {
  const expenses = props.expenses;
  const expensesList = [];
  expenses.forEach((element) => {
    expensesList.push(<ExpenseItem data={element}></ExpenseItem>);
  });
  return <div className="expenses">{expensesList}</div>;
}

// return (
//   <div className="expenses">
//     {props.expenses.map((expense) => {
//       return (
//         <ExpenseItem
//           title={expense.title}
//           amount={expense.amount}
//           date={expense.date}
//           key={expense.id}
//         ></ExpenseItem>
//       );
//     })}
//   </div>
// );

export default Expenses;