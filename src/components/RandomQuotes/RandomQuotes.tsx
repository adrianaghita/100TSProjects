import { useState } from "react";
import styles from "./RandomQuotes.module.scss";

interface Quote {
  text: string;
  author: string;
}

const RandomQuotes = () => {
  const [quote, setQuote] = useState<Quote[]>([]);

  const handleClick = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    if (!response.ok) {
      throw new Error("Could not fetch your quote");
    }

    const quotes: Quote[] = await response.json();

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    setQuote([randomQuote]);
  };

  return (
    <div className={styles[`random-quote-section`]}>
      <h2>2. Random Quote Generator </h2>
      <button className={styles.button} onClick={handleClick}>
        Get a quote
      </button>
      {quote.map((quote) => (
        <div className={styles[`quote-box`]}>
          <q> {quote.text}</q>
          <p> {quote.author.replace(", type.fit", "")}</p>
        </div>
      ))}
    </div>
  );
};

export default RandomQuotes;
