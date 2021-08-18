import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import { useState } from "react";

const ExpenseItem = (props) => {
  const { date, amount } = props.data;
  const [title, setTitle] = useState(props.data.title);

  const clickHandler = () => {
    setTitle("New title"); // Give
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>Edit title</button>
    </Card>
  );
};
export default ExpenseItem;
