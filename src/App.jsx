import { useState } from 'react';
import Navbar from './components/navbar';
import { v4 as uuidv4 } from 'uuid';
import { PlusIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';

function App() {
  const [todo, settodo] = useState("");
  const [todos, settodos] = useState([]);

  const handleAdd = () => {
    if (todo.trim() === "") return;
    settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    settodo("");
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    settodos(newTodos);
  };

  const handleEdit = (index) => {
    const newTask = prompt("Edit your todo", todos[index].todo);
    if (newTask !== null && newTask.trim() !== "") {
      const newTodos = [...todos];
      newTodos[index].todo = newTask;
      settodos(newTodos);
    }
  };

  const handleChange = (e) => {
    settodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const newTodos = [...todos];
    const idx = newTodos.findIndex(item => item.id === id);
    if (idx !== -1) {
      newTodos[idx].isCompleted = !newTodos[idx].isCompleted;
      settodos(newTodos);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-3xl mx-auto my-10 rounded-2xl bg-white shadow-xl p-8">
        <div className="addToDo mb-8">
          <h2 className="font-bold text-3xl text-gray-800 mb-4">Add a ToDo</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              onChange={handleChange}
              value={todo}
              type="text"
              className="border border-gray-300 p-3 rounded-md flex-1 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Write your task..."
            />
            <button
              onClick={handleAdd}
              className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-md transition flex items-center justify-center"
            >
              <PlusIcon className="h-5 w-5" />
            </button>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Your ToDos</h2>

        <div className="todos space-y-4">
          {todos.map((item, index) => (
            <div key={index} className="todo flex flex-col sm:flex-row items-start sm:items-center bg-slate-100 p-4 rounded-lg shadow">
              <input
                onChange={handleCheckbox}
                type="checkbox"
                name={item.id}
                checked={item.isCompleted}
                className="w-5 h-5 mr-4"
              />
              <div className={`text text-gray-700 flex-1 mb-2 sm:mb-0 ${item.isCompleted ? "line-through" : ""}`}>
                {item.todo}
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-md transition"
                >
                  <TrashIcon className="h-5 w-5" />
                </button>
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-md transition"
                >
                  <PencilSquareIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
