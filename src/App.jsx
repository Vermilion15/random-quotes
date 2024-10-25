import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import BodyQuote from "./Components/BodyQuote";
import quotes from "./Quotes/quotes.json";


function App() {
  const [quote, setQuote] = useState(quotes);
  const [loader, setLoader] = useState(false);

  // show random quote
  const showQuote = () => {
    setLoader(true);
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setQuote(quotes[randomIndex]);
      setLoader(false);
    }, 2000);
  };

  return (
    <div className="container">
      <Header showQuote={ showQuote }/>
      <BodyQuote quote={ quote } loader={ loader }/>
    </div>
  );
}
export default App;
