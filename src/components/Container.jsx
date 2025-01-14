import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Container = () => {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handleCheckbox = (id) => {
    settodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, iscompleted: !item.iscompleted } : item
      )
    );
  };

  const handleAdd = () => {
    if (todo.trim()) {
      settodos([...todos, { id: uuidv4(), todo, iscompleted: false }]);
      settodo("");
    }
  };

  const handleDelete = (id) => {
    settodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  };

  return (
    <div>
      <div className="w-[40%] h-[80vh] bg-indigo-100 rounded-xl m-auto mt-5 p-5">
        <p className="font-bold text-[30px] flex justify-center p-3">
          iTask - Manage your Task
        </p>

        <label
          className="font-bold text-[22px] flex justify-center"
          htmlFor="add"
        >
          Add a Todo
        </label>

        <div className="flex items-center justify-center">
          <input
            onChange={handleChange}
            value={todo}
            className="h-[30px] w-[75%] mt-3 rounded-3xl px-3"
            type="text"
            id="add"
          />
          <button
            onClick={handleAdd}
            disabled={!todo.trim()}
            className="bg-violet-800 mt-3 mx-2 rounded-full hover:bg-violet-950 disabled:bg-violet-500 p-4 py-2 text-sm font-bold text-white"
          >
            Add
          </button>
        </div>

        <div className="flex mb-5 gap-2 mt-5 justify-center items-center">
          <input type="checkbox" name="show_finished" id="show_finished" />
          <label htmlFor="show_finished">Show finished</label>
        </div>

        <div className="border m-auto border-gray-400 opacity-35 w-[90%]"></div>

        <div className="mt-3">
          <p className="text-[25px] font-bold flex justify-center">Your todos</p>

          {todos.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 mt-2 pl-2 justify-between items-center"
            >
              <div className="flex gap-4 items-center justify-center">
                <input
                  type="checkbox"
                  checked={item.iscompleted}
                  onChange={() => handleCheckbox(item.id)}
                  name={`task-${item.id}`}
                  id={`task-${item.id}`}
                />
                <p className={`${item.iscompleted ? "line-through" : ""}`}>
                  {item.todo}
                </p>
              </div>

              <div className="flex">
                <button
                  className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                  onClick={() => console.log("Edit functionality not yet implemented")}
                >
                  <img
                    className="w-[20px]"
                    src="https://img.icons8.com/?size=100&id=6697&format=png&color=FFFFFF"
                    alt="Edit"
                  />
                </button>

                <button
                  className="bg-violet-800 hover:bg-violet-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                  onClick={() => handleDelete(item.id)}
                >
                  <img
                    className="w-[20px]"
                    src="https://img.icons8.com/?size=100&id=67884&format=png&color=FFFFFF"
                    alt="Delete"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
