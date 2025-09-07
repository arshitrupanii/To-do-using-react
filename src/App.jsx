import { useEffect, useState } from "react";

const App = () => {
  const [TaskInput, setTaskInput] = useState("");
  const [AllTasks, setAllTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // NEW

  useEffect(() => {
    let LocalSTtasks = JSON.parse(localStorage.getItem("tasks"));
    if (LocalSTtasks) {
      setAllTasks(LocalSTtasks);
    }
  }, []);

  const addOrUpdateTask = () => {
    if (!TaskInput.trim()) return;

    let storage = JSON.parse(localStorage.getItem("tasks")) || [];

    if (editIndex !== null) {
      storage[editIndex].text = TaskInput;
      setEditIndex(null);
    } else {
      let newTask = {
        text: TaskInput,
        iscompleted: false,
      };
      storage.push(newTask);
    }

    setAllTasks(storage);

    localStorage.setItem("tasks", JSON.stringify(storage));

    setTaskInput("");
  };

  const editTask = (index) => {
    let storage = JSON.parse(localStorage.getItem("tasks"));
    let task_name = storage[index].text;

    setTaskInput(task_name);
    setEditIndex(index);
  };

  const deleteTask = (index) => {
    let storage = JSON.parse(localStorage.getItem("tasks"));

    let newArr = storage.filter((_, i) => i !== index); // index index hatao
    setAllTasks(newArr);

    localStorage.setItem("tasks", JSON.stringify(newArr));
  };

  const CheckisCompleted = (index) => {
    let storage = JSON.parse(localStorage.getItem("tasks"));

    storage[index].iscompleted = !storage[index].iscompleted; // toggle

    console.log(storage);

    setAllTasks(storage);
    localStorage.setItem("tasks", JSON.stringify(storage));
  };

  return (
    <div className="min-h-screen bg-gray-900 flex justify-center items-center p-6">
      {/* Card Container */}
      <div className="w-full max-w-md bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-lg">
        {/* Title */}
        <h1 className="text-2xl font-bold text-white mb-6 tracking-wide text-center">
          ✅ My To-Do List
        </h1>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row gap-3 w-full mb-6">
          <input
            className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            value={TaskInput}
            placeholder="Enter your task..."
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addOrUpdateTask();
            }}
          />
          <button
            onClick={addOrUpdateTask}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition"
            type="submit"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        {/* Tasks List */}
        <ul className="space-y-3">
          {AllTasks.length ? (
            AllTasks.map((e, i) => (
              <li
                key={i}
                className="flex flex-col sm:flex-row sm:items-center justify-between bg-gray-700 text-white px-4 py-3 rounded-lg shadow hover:shadow-lg transition gap-2 sm:gap-0"
              >
                {/* Left: Checkbox + Task Text */}
                <div className="flex items-center gap-2 flex-1">
                  <input
                    type="checkbox"
                    onChange={() => CheckisCompleted(i)}
                    checked={e.iscompleted}
                    className="w-5 h-5 accent-green-500 cursor-pointer"
                  />
                  <span
                    className={`truncate overflow-hidden ${
                      e.iscompleted ? "line-through text-gray-400" : ""
                    }`}
                  >
                    {e.text}
                  </span>
                </div>

                {/* Right: Buttons */}
                <div className="flex gap-2 mt-2 sm:mt-0">
                  <button
                    onClick={() => editTask(i)}
                    className="px-3 py-1 text-sm border border-blue-400 text-blue-400 rounded-lg hover:bg-blue-400 hover:text-white transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTask(i)}
                    className="px-3 py-1 text-sm border border-red-400 text-red-400 rounded-lg hover:bg-red-400 hover:text-white transition"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))
          ) : (
            <div className="flex justify-center text-gray-400">No tasks</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default App;
