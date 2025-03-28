import { useState } from "react";

const App = () => {
  // Input states
  const [result, setResult] = useState("");
  const [inputOperand1, setInputOperand1] = useState(0);
  const [inputOperand2, setInputOperand2] = useState(0);
  const [inputOperator, setInputOperator] = useState("null");

  // Reset Form
  const resetForm = () => {
    document.getElementById("form").reset();
    setResult("");
    setInputOperand1(0);
    setInputOperand2(0);
    setInputOperator("null");
  }

  // Calculator function
  const handleCalculate = (event) => {
    if (inputOperand1 !== NaN && inputOperand2 !== NaN && inputOperator !== "null") {
      switch (inputOperator) {
        case "+": setResult(inputOperand1 + inputOperand2);
                  break;
        case "-": setResult(inputOperand1 - inputOperand2);
                  break;
        case "*": setResult(inputOperand1 * inputOperand2);
                  break;
        case "/": setResult(inputOperand1 / inputOperand2);
                  break;
      }
    }
  }

  return (
    <>
      <main className="mainContainer">
        <h2>Result : <strong id="result">{result}</strong></h2>
        <form className="form" id="form">
          <div className="formControl">
            <label htmlFor="operand1" className="formLabel">Number 1</label>
            <input type="number" name="operand1" id="operand1" className="formInput" value={inputOperand1} onChange={(event) => setInputOperand1(event.target.valueAsNumber)} />
          </div>
          <div className="formControl">
            <label htmlFor="operand2" className="formLabel">Number 2</label>
            <input type="number" name="operand2" id="operand2" className="formInput" value={inputOperand2} onChange={(event) => setInputOperand2(event.target.valueAsNumber)} />
          </div>
          <div className="formControl">
            <label htmlFor="operator" className="formLabel">Operator</label>
            <select name="operator" id="operator" value={inputOperator} onChange={(event) => setInputOperator(event.target.value)} className="formInput">
              <option value="null" disabled>Choose one</option>
              <option value="+">+</option>
              <option value="-">-</option>
              <option value="*">*</option>
              <option value="/">/</option>
            </select>
          </div>
        </form>
        <button type="submit" className="btn btn-calculate" onClick={handleCalculate}>Calculate</button>
        <button type="reset" className="btn btn-reset" onClick={resetForm}>Reset</button>
      </main>
    </>
  )
}

export default App