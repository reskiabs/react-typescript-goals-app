import { useState } from "react";
import goalsImge from "./assets/react.svg";
import Header from "./components/Header";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals();
  }
  return (
    <main>
      <Header image={{ src: goalsImge, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <CourseGoal title="Learn React + Typescript">
        <p>Learn Typescript and React at Academind</p>
      </CourseGoal>
    </main>
  );
}

export default App;
