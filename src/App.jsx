import { useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [ loader , setLoader ] = useState(false)

  // fetch quote api
  const getQuote = () => {
    setLoader(true);
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((quote) => {
        setQuote(quote);
        setLoader(false);
      });
  };

  const runQuote = () => {
    getQuote();
  };

  return (
    <div className="container">
      <h1>Random Quote Generator</h1>
      <button className="btn" onClick={runQuote}>
        <svg
          height="24"
          width="24"
          fill="#FFFFFF"
          viewBox="0 0 24 24"
          data-name="Layer 1"
          id="Layer_1"
          className="sparkle"
        >
          <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
        </svg>
        <span className="text">Generate Quote </span>
      </button>
      { loader ? (
        <div className="loader"></div>
      ) : (
        <div className="quote-container">
        <h3> {quote.content} </h3>
        <p> {quote.author} </p>
      </div>
      )}
      <button className="twt-btn "><a  href={`https://twitter.com/intent/tweet?text=${ quote.content } - ${ quote.author }`} >Tweet This Quote</a></button>
    </div>
  );
}
export default App;
