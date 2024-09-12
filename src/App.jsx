import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import BodyQuote from "./Components/BodyQuote";

// api source
const apiUrl = "http://api.quotable.io/random";

function App() {
  const [quote, setQuote] = useState("");
  const [loader, setLoader] = useState(false);

  // fetch quote api
  const getQuote = async() => {
    try {
      setLoader(true);
      const getDataQuote = await fetch(apiUrl);
      const quoteData = await getDataQuote.json();
      setQuote(quoteData);
      setLoader(false);
    }catch(e) {
      console.error(e);
      setLoader(false);
      alert("An error occurred while fetching the quote. Please try again later.");
    }
  };

  const runQuote = () => {
    getQuote();
  };

  return (
    <div className="container">
      <Header onRunQuote={ runQuote }/>
      <BodyQuote quote={ quote } loader={ loader }/>
    </div>
  );
}
export default App;
