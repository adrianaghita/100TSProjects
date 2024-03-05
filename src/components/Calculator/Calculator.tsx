import { useState } from "react";
import styles from "./Calculator.module.scss";

const Calculator = () => {
  const [total, setTotal] = useState("");
  const [currentInput, setCurrentInput] = useState("");

  const calculatorButtons = [
    7,
    8,
    9,
    "/",
    4,
    5,
    6,
    "*",
    1,
    2,
    3,
    "-",
    0,
    ".",
    "+",
    "=",
  ];

  const handleCalculation = (value: string | number) => {
    if (typeof value === "number" || value === ".") {
      setCurrentInput((prevInput) => prevInput + value.toString());
    } else if (value === "=") {
      const newTotal = eval(currentInput);
      setTotal(newTotal.toString());
      setCurrentInput("");
    } else {
      setCurrentInput((prevInput) => prevInput + value);
    }
  };

  const clearInput = () => {
    setCurrentInput("");
    setTotal("");
  };

  return (
    <div>
      <h2>6. Calculator</h2>
      <section className={styles.calculator}>
        <p className={styles[`calculator-total`]}>
          {total ? total : currentInput}
        </p>
        <article className={styles[`calculator-buttons`]}>
          {calculatorButtons.map((button, index) => (
            <button
              className={styles.button}
              key={index}
              onClick={() => {
                handleCalculation(button);
              }}
            >
              {button}
            </button>
          ))}
        </article>
        <button className={styles.button} onClick={clearInput}>
          {" "}
          C
        </button>
      </section>
    </div>
  );
};

export default Calculator;
