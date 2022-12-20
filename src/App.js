import { useState } from "react";
import "./App.css";
import FetchFromFile from "./FetchFromField.js";
import FetchFromURL from "./FetchFromURL.js";

function App() {
  const [bool, setBool] = useState(true);
  const [btnTxt, setBtnTxt] = useState("Fetch Data From URL");
  function showFetchData() {
    setBool(!bool);
    if (bool === true) {
      setBtnTxt("Fetch Data From JSON File");
    } else {
      setBtnTxt("Fetch Data From URL");
    }
  }
  return (
    <div className="App">
      <button className="submit-btn" onClick={showFetchData}>
        {btnTxt}
      </button>
      {bool === true ? <FetchFromFile /> : <FetchFromURL />}
    </div>
  );
}

export default App;
