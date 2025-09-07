import React, { useCallback, useEffect, useState } from "react";

const App = () => {
  const [TaskInput, setTaskInput] = useState("");
  const [AllTasks, setAllTasks] = useState([]);

  useEffect(() => {
    let LocalSTtasks = JSON.parse(localStorage.getItem("tasks"));
    if (LocalSTtasks) {
      setAllTasks(LocalSTtasks);
    }
  }, []);

  const addTaskToLocal = () => {
    if (!TaskInput.trim()) {
      return;
    }

    let storage = JSON.parse(localStorage.getItem("tasks")) || [];
    storage.push(TaskInput);
    setAllTasks(storage);
    localStorage.setItem("tasks", JSON.stringify(storage));

    setTaskInput("");
  };

  const deleteTask = () => {};

  return (
    <div>
      <input
        className="bg-gray-900 border-2 border-white"
        type="text"
        value={TaskInput}
        onChange={(e) => setTaskInput(e.target.value)}
      />

      <br />

      <button
        onClick={() => addTaskToLocal()}
        className="border-2 border-white rounded-3xl p-2"
        type="submit"
      >
        add Task
      </button>

      {AllTasks.map((e, i) => {
        return (
          <div key={i} className="text-white">
            {e}
          </div>
        );
      })}
    </div>
  );
};

export default App;
