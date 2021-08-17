import "./ExpenseDate.css";
function ExpenseDate(props) {
  //   const options = {
  //     month: "long",
  //     day: "2-digit",
  //     year: "numeric",
  //   };
  const year = props.date.toLocaleDateString("fr-FR", { year: "numeric" });
  const month = props.date.toLocaleDateString("fr-FR", { month: "long" });
  const day = props.date.toLocaleDateString("fr-FR", { day: "2-digit" });
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
