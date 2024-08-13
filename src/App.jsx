import { useState } from "react";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";

function App() {
  const [calValue, setCalValue] = useState("");

  const handleButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalValue("")
    } else if (buttonText === "=") {
      const result = eval(calValue)
      setCalValue(result)
    } else {
      let newText = calValue + buttonText;
      setCalValue(newText);
    }
  };

  return (
    <center>
      <div className={styles.calculator}>
        <Display displayValue={calValue} />
        <ButtonsContainer handleButtonClick={handleButtonClick} />
      </div>
    </center>
  );
}

export default App;
