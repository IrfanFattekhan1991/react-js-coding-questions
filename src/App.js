import logo from "./logo.svg";
import "./App.css";
import Child from "./components/Child";
import { useState } from "react";
import InputBoxes from "./components/InputBoxes";

function App() {
  const [dataFromChild, setDataFromChild] = useState(null);

  const getDataFromChild = (data) => {
    setDataFromChild(data);
  };
  return (
    <div className="App">
      {/* <Child onData={getDataFromChild} />
      Parent Component-
      {dataFromChild} */}
      <InputBoxes />
    </div>
  );
}

export default App;
