import ExpenseItem from "./components/ExpenseItem";

function App() {
  const root = document.getElementById("root");
  const para = document.createElement("p");
  para.textContent = "THis is me";
  root.append(para);
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
    </div>
  );
}

export default App;
