
const BodyQuote = ({ loader , quote }) => {
  return (
    <div>
      {loader ? (
        <div className="loader"></div>
      ) : (
        <div className="quote-container">
          <h3>{quote.content}</h3>
          <p> {quote.author} </p>
        </div>
      )}
      <button className="twt-btn ">
        <a
          href={`https://twitter.com/intent/tweet?text=${quote.content} - ${quote.author}`}
          target="_blank"
        >
          Tweet This Quote
        </a>
      </button>
    </div>
  )
}

export default BodyQuote
