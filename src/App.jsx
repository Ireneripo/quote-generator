import React from "react";

export default function App() {
  const [quotes, setQuotes] = React.useState([]);
  const [quote, setQuote] = React.useState(null);

  React.useEffect(() => {
    fetch("/api/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setQuotes(data);
      });
  }, []);

  function getRandomQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
  }

  return (
    <>
      <h1 className="text-center text-4xl my-8 font-bold">
        Project 3: Quote Generator
      </h1>
      <section className="text-center bg-cyan-100 max-w-3xl h-80 m-auto shadow-2xl rounded-md p-10">
        <button
          className="bg-blue-500 px-3 py-2 m-10 rounded-md cursor-pointer text-white font-bold"
          onClick={getRandomQuote}
        >
          New quote
        </button>
        {quote && <p className="text-2xl">{`"${quote.q}"`}</p>}

        {quote && (
          <p className="text-xl font-bold italic">{`- ${quote.a} -`}</p>
        )}
      </section>
    </>
  );
}
