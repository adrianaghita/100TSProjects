import { useState } from "react";
import styles from "./Todo.module.scss";

const Todo = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() !== "") {
      setTasks([...tasks, taskInput]);
      setTaskInput("");
    }
  };

  const removeTask = (task: string) => {
    setTasks((prevList) => prevList.filter((item) => item !== task));
  };

  return (
    <>
      <h2>1. To Do List</h2>
      <div className={styles[`todo-list`]}>
        <div>
          <input
            placeholder="Add a task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className={styles[`task-input`]}
          />
          <button onClick={addTask} className={styles.button}>
            Add
          </button>
        </div>
        <ul className={styles[`task-list`]}>
          {tasks.map((task, index) => (
            <li key={index}>
              <input type="checkbox" />
              {task}
              <button
                onClick={() => removeTask(task)}
                className={styles.button}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Todo;
