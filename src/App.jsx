import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import BodyQuote from "./Components/BodyQuote";
import quotes from "./Quotes/quotes.json";

// api source

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
    }, 1000);
  };

  // call the showQuote function when the component mounts
 


  // fetch quote apiq

  return (
    <div className="container">
      <Header showQuote={ showQuote }/>
      <BodyQuote quote={ quote } loader={ loader }/>
    </div>
  );
}
export default App;
