import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";
import BitcoinData from "./components/bitcoinData";
function App() {
  return (
    <div className="container px-lg-5 mt-5">
      <Counter />
      <BitcoinData />
    </div>
  );
}

export default App;
