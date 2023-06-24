import "./App.css";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    // push modifies a piece of state!
    // animals.push(getRandomAnimal());
    const randomAnimal = getRandomAnimal();
    if (!animals.includes(randomAnimal)) {
      setAnimals([...animals, randomAnimal]);
    }
  };

  const renderedAnimals = animals.map((animal, i) => {
    return <AnimalShow type={animal} key={i} />;
  });

  return (
    <div className="app">
      <h1>Animal App</h1>
      <div className="container">
        <button type="button" name="addAnimalBtn" onClick={handleClick}>
          Add animal
        </button>
        <div>{renderedAnimals}</div>
      </div>
    </div>
  );
}

export default App;
