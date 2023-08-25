import logo from "./logo.svg";
import "./App.css";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement
);

function App() {
  return (
    <div className="App">
      <div>
        <h1>Bar Chart Example</h1>
        <BarChart />
      </div>
      <div>
        <h1>Line Chart Example</h1>
        <LineChart />
      </div>
    </div>
  );
}

export default App;
