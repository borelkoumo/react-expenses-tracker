import ChartBar from "../Chart/ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const { dataPoints } = props;
  const allValues = dataPoints.map((v) => v.value);
  const max = Math.max(...allValues);
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            max={max}
            label={dataPoint.label}
          ></ChartBar>
        );
      })}
    </div>
  );
};

export default Chart;
