import { Title } from "./components/Title.jsx";
import { Button } from "./components/Button.jsx";
import { useState } from "react";

function App() {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch(
        "https://carambar-api-mxil.onrender.com/v1/blagues/random"
      );
      if (!response.ok) {
        throw new Error("Error");
      }
      const data = await response.json();
      setJoke(data.content);
    } catch (error) {
      console.error(error);
      setJoke("Error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-4">
      <Title />
      <Button fetchJoke={fetchJoke} name="Générer une blague" />
      {joke && (
        <p className="mt-6 text-lg color-carambarB font-bold text-center">
          {joke}
        </p>
      )}
    </div>
  );
}

export default App;
