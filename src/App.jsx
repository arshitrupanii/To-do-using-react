import { useState, useEffect } from 'react';
import { FaTrash, FaEdit, FaCheck,  FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Navbar from '../components/Navbar';

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [showCompleted, setShowCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const completedTasks = todos.filter(todo => todo.completed);
  const incompleteTasks = todos.filter(todo => !todo.completed);

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const startEditing = (id, text) => {
    setEditingId(id);
    setInputValue(text);
  };

  const updateTodo = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setTodos(todos.map(todo =>
      todo.id === editingId ? { ...todo, text: inputValue } : todo
    ));
    setEditingId(null);
    setInputValue('');
  };

  const TodoItem = ({ todo }) => (
    <li className="flex items-center justify-between p-3 bg-gray-700 rounded">
      <div className="flex items-center gap-3">
        <button
          onClick={() => toggleTodo(todo.id)}
          className={`w-5 h-5 rounded border ${
            todo.completed ? 'bg-green-500 border-green-500' : 'border-gray-400'
          } flex items-center justify-center`}
        >
          {todo.completed && <FaCheck className="text-white text-xs" />}
        </button>
        <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-white'}`}>
          {todo.text}
        </span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => startEditing(todo.id, todo.text)}
          className="text-yellow-500 hover:text-yellow-600"
        >
          <FaEdit />
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-red-500 hover:text-red-600"
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );

  return (
    <div className="min-h-screen bg-gray-900">
     <Navbar/>

      {/* Main Content */}
      <div className="py-8">
        <div className="max-w-md mx-auto bg-gray-800 rounded-lg shadow-lg p-6">
          <h1 className="text-3xl font-bold text-center mb-8 text-white">Todo List</h1>
          
          <div className="flex justify-between mb-6 text-sm">
            <span className="text-green-400">Completed: {completedTasks.length}</span>
            <span className="text-red-400">Incomplete: {incompleteTasks.length}</span>
          </div>

          <form onSubmit={editingId ? updateTodo : addTodo} className="mb-6">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task..."
                className="flex-1 p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {editingId ? 'Update' : 'Add'}
              </button>
            </div>
          </form>

          <div className="space-y-6">
            {/* Active Tasks */}
            <div>
              <h2 className="text-xl font-semibold mb-3 text-white">Active Tasks</h2>
              <ul className="space-y-3">
                {incompleteTasks.map(todo => (
                  <TodoItem key={todo.id} todo={todo} />
                ))}
              </ul>
            </div>

            {/* Completed Tasks */}
            <div>
              <button
                onClick={() => setShowCompleted(!showCompleted)}
                className="flex items-center gap-2 text-xl font-semibold mb-3 text-white hover:text-gray-300"
              >
                <span>Completed Tasks ({completedTasks.length})</span>
                {showCompleted ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {showCompleted && (
                <ul className="space-y-3">
                  {completedTasks.map(todo => (
                    <TodoItem key={todo.id} todo={todo} />
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;