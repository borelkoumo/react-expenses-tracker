import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [title, setTitle] = useState("");
  // const [amount, setAmount] = useState(0);
  // const [date, setDate] = useState("");

  const defaultDate = _getDefaultDate();
  const onNewExpenseHandler = props.onNewExpenseHandler;

  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: defaultDate,
  });
  const _titleChangeHandler = (e) => {
    // setTitle(e.target.value);
    // setFormData({
    //   ...formData,
    //   title: e.target.value,
    // });
    setFormData((previousState) => {
      return { ...previousState, title: e.target.value };
    });
  };
  const _amountChangeHandler = (e) => {
    // setAmount(e.target.value)
    // setFormData({
    //   ...formData,
    //   amount: e.target.value,
    // });
    setFormData((previousState) => {
      return { ...previousState, amount: e.target.value };
    });
  };
  const _dateChangeHandler = (e) => {
    // setDate(e.target.value);
    // setFormData({
    //   ...formData,
    //   date: e.target.value,
    // });
    setFormData((previousState) => {
      return { ...previousState, date: e.target.value };
    });
  };

  const _onSubmitHandler = (e) => {
    // debugger;
    e.preventDefault();
    const expenseData = {
      title: formData.title,
      amount: formData.amount,
      date: new Date(formData.date),
    };
    onNewExpenseHandler(expenseData);
  };

  function _getDefaultDate() {
    const date = new Date();
    let displayDate = date
      .toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "numeric",
        day: "2-digit",
      })
      .split("/")
      .reverse();
    if (displayDate[1].length == 1) {
      displayDate[1] = "0" + displayDate[1];
    }
    displayDate = displayDate.join("-");
    return displayDate;
  }

  // debugger;
  return (
    <form onSubmit={_onSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={_titleChangeHandler}
            value={formData.title}
            autoFocus
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            onChange={_amountChangeHandler}
            value={formData.amount}
            min="1"
            // max="500000"
            step="1"
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            onChange={_dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
            // value="2021-8-18"
            value={formData.date}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
