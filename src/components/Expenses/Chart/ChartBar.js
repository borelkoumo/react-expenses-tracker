import "./ChartBar.css";

const ChartBar = (props) => {
  const { value, max, label } = props;
  let barFillHeigth = "0%";
  if (max > 0) {
    barFillHeigth = Math.round((value / max) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeigth }}
        ></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  );
};

export default ChartBar;
