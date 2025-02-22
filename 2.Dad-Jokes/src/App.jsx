import { useState } from 'react'

function App() {
  const [joke, setJoke] = useState("Press the button, start the laughter train.");
  const getJokeBtn = document.getElementById("getJokeBtn");

  // Function to gfet the joke from icanhazdadjoke url
  const getJoke = async () => {
    getJokeBtn.setAttribute("disabled", "disabled");
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      setJoke("Well that didn't work. Try Again.");
    } finally {
      getJokeBtn.removeAttribute("disabled");
    }
  };

  return (
    <>
      <section id="jokeWrapper">
        <div className="jokeContainer container">
          <h1 className="jokeHead">Greatest Jokes Ever</h1>
          <p className="joke">{joke}</p>
          <button type="button" onClick={getJoke} id="getJokeBtn" className="btn btn-primary">Generate</button>
        </div>
      </section>
    </>
  )
}

export default App
