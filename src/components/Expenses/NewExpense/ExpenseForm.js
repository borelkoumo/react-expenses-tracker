import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const defaultDate = _getDefaultDate();
  const { onNewExpenseHandler, onCancelNewExpenseHandler } = props;

  const [formData, setFormData] = useState({
    title: "",
    amount: 0,
    date: defaultDate,
  });
  const _titleChangeHandler = (e) => {
    setFormData((previousState) => {
      return { ...previousState, title: e.target.value };
    });
  };
  const _amountChangeHandler = (e) => {
    setFormData((previousState) => {
      return { ...previousState, amount: e.target.value };
    });
  };
  const _dateChangeHandler = (e) => {
    setFormData((previousState) => {
      return { ...previousState, date: e.target.value };
    });
  };

  const _onSubmitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: formData.title,
      amount: Number.parseFloat(formData.amount),
      date: new Date(formData.date),
    };
    onNewExpenseHandler(expenseData);
  };

  const _onCancelNewExpenseHandler = (e) => {
    e.preventDefault();
    onCancelNewExpenseHandler();
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
    if (displayDate[1].length === 1) {
      displayDate[1] = "0" + displayDate[1];
    }
    displayDate = displayDate.join("-");
    return displayDate;
  }

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
        <button type="button" onClick={_onCancelNewExpenseHandler}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
