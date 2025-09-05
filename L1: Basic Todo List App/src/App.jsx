import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState(["Buy milk", "Study React"]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const clearAll = () => setTasks([]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Basic Todo List App</h1>

      <div>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter new task"
        />
        <button onClick={addTask}>Add Task</button>
        <button onClick={clearAll}>Clear All</button>
      </div>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
