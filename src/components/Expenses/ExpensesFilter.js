import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const { years, onSelectChangeHandler } = props;
  let options = [];
  years.forEach((year) => {
    options.push(<option value={year}>{year}</option>);
  });
  const _selectChangeHandler = (e) => {
    onSelectChangeHandler(e.target.value);
  };
  //debugger;
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={_selectChangeHandler}>{options}</select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
