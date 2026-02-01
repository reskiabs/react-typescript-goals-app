import { useState } from "react";
import goalsImge from "./assets/react.svg";
import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);

  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "Learn React + Typescript",
        description: "Learn it in depth!",
      };
      return [...prevGoals, newGoal];
    });
  }
  return (
    <main>
      <Header image={{ src: goalsImge, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
