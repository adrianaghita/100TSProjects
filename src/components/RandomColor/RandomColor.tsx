import { useState } from "react";
import styles from "./RandomColor.module.scss";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#455d7a");
  const randomColorUtility = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  const handleCreateRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  const handleCreateHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  const handleGenerateRandomColor = () => {
    typeOfColor === "hex" ? handleCreateHexColor() : handleCreateRgbColor();
  };

  return (
    <div>
      <h2>4. Random Color Generator</h2>
      <section className={styles.buttons}>
        <button
          className={`${styles.button} ${
            typeOfColor === "hex" ? styles.selected : ""
          }`}
          onClick={() => {
            setTypeOfColor("hex");
          }}
        >
          Create HEX Color
        </button>
        <button
          className={`${styles.button} ${
            typeOfColor === "rgb" ? styles.selected : ""
          }`}
          onClick={() => {
            setTypeOfColor("rgb");
          }}
        >
          Create RGB Color
        </button>
        <button className={styles.selected} onClick={handleGenerateRandomColor}>
          Generate Random Color
        </button>
      </section>
      <div className={styles[`color-box`]} style={{ background: color }}></div>
      <p className={styles[`color-name`]}>{color}</p>
    </div>
  );
};

export default RandomColor;
