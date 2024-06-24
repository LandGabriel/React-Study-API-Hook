import { useReducer, useState } from "react";

const HookUserReducer = () => {
  // Redutor para gerenciar o número aleatório
  const numberReducer = (state, action) => {
    return Math.random();
  };

  const [number, dispatchNumber] = useReducer(numberReducer, Math.random());

  // Lista inicial de tarefas
  const initialTasks = [
    { id: 1, text: "Do something" },
    { id: 2, text: "Do another something" },
  ];

  // Redutor para gerenciar as tarefas
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: action.payload,
        };
        return [...state, newTask];
      case "DELETE":
        return state.filter((task) => task.id !== action.payload);
      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchTasks({ type: "ADD", payload: taskText });
    setTaskText("");
  };

  return (
    <div>
      <h2>UseReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatchNumber}>Change Number</button>
      <hr />
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}{" "}
            <button
              onClick={() =>
                dispatchTasks({ type: "DELETE", payload: task.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default HookUserReducer;
