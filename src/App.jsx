import { Title } from "./components/Title.jsx";
import { Button } from "./components/Button.jsx";
import { useState } from "react";

function App() {
  const [joke, setJoke] = useState({ question: "", answer: "" });

  const fetchJoke = async () => {
    try {
      const response = await fetch("http://localhost:3000/v2/blagues/random");
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
      setJoke({ question: data.question, answer: data.answer });
    } catch (error) {
      console.error(error);
      setJoke({
        question: "Error",
        answer: "Can't get jokes",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <Title />
      <Button fetchJoke={fetchJoke} name="Générer une blague" />
      {joke.question && (
        <div className="text-center">
          <p className="mt-6 text-lg text-carambarP font-bold">
            {joke.question}
          </p>
          <p className="mt-2 text-lg text-carambarB italic">
            {joke.answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
