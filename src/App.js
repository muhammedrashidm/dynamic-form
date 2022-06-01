import Form from "./components/Form";
import "./styles.css";
import forms from "./jsons";
import { useState } from "react";
export default function App() {

  const [state, setstate] = useState(0);

  const selectOnChange = (e) => {
    setstate(e.target.value);
  }
  return (
    <div className="App">
      <div>
        <label htmlFor="select">Select Form to Render</label>
        <select style={{ margin: "10px", backgroundColor: "wheat" }} onChange={selectOnChange}>
          {forms.map((form, i) => <option key={i} value={`${i}`}>Form {i}</option>)}
        </select>
      </div>
      <Form schema={forms[state]} />
    </div>
  );
}
