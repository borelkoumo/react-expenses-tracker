import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      title: "Car",
      date: new Date(2021, 2, 28),
      amount: 5000,
    },
    {
      id: 2,
      title: "Toilet paper",
      date: new Date(2021, 2, 12),
      amount: 100,
    },
    {
      id: 3,
      title: "Repairing house",
      date: new Date(2021, 5, 5),
      amount: 150000,
    },
  ];

  return (
    <div>
      <h2>Monthly expenses</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
