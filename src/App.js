import "./App.css";
import Product from "./Components/product";
import Statistics from "./Components/Statistics";
import BarChartGraph from "./Components/BarChartGraph";

function App() {
  return (
    <>
      <div className="body">
        <Product />
        <Statistics />
        <BarChartGraph />
      </div>
    </>
  );
}

export default App;
