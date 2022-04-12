import React, {useState} from "react";
import Container from "./components/Container";
import QuoteText from "./components/QuoteText";
import QuoteAuthor from "./components/QuoteAuthor";
import NewQuote from "./components/NewQuote";
import TwitterButton from "./components/TwitterButton";
import quotes from "./quotes";

function App() {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random()*quotes.length)]);

  function getNewQuote() {
    setQuote(quotes[Math.floor(Math.random()*quotes.length)]);
  }

  

  return <>
  <Container>
      <QuoteText text={quote.quote} />
      <QuoteAuthor text={quote.author} />
      <br />
      <div align='center' id='button-container'>
        <TwitterButton />
        <NewQuote onClick={getNewQuote} />
      </div>
  </Container>
  </>
}

export default App;
