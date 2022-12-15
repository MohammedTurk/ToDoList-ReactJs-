import { useState } from "react";

import "./App.css";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

function App() {
  const [toDoList, setToDoList] = useState([
    { id: 1, title: "Task1", completed: false },
    { id: 2, title: "Task2", completed: false },
  ]);
  const [updatedTask, setUpdatedTask] = useState("");

  // AddTask
  function AddTask(title) {
    let item = { id: "title_" + Date.now(), title, completed: false };
    setToDoList((prev) => [...prev, item]);
  }

  // DeleteTask
  function DeleteTask(id) {
    let newSet = toDoList.filter((task) => task.id !== id);
    setToDoList(newSet);
  }

  // CompleteTask
  function CompleteTask(index) {
    let clone = [...toDoList];
    clone[index].completed = !clone[index].completed;
    setToDoList(clone);
  }

  // changeUpdate
  function changeUpdate(task) {
    setUpdatedTask(task);
  }
  // handleTask
  function handleTask(e) {
    setUpdatedTask((prev) => {
      return {
        ...prev,
        title: e.target.value,
      };
    });
  }

  // submitUpdate
  function submitUpdate() {
    let newSet = toDoList.filter((item) => item.id !== updatedTask.id);
    setToDoList([...newSet, updatedTask]);
    setUpdatedTask("");
  }
  // cancelUpdate
  function cancelUpdate() {
    setUpdatedTask("");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="header">
          To Do List
          <ToDoForm
            AddTask={AddTask}
            updatedTask={updatedTask}
            submitUpdate={submitUpdate}
            handleTask={handleTask}
            cancelUpdate={cancelUpdate}
          />
          <ToDoList
            toDoList={toDoList}
            DeleteTask={DeleteTask}
            CompleteTask={CompleteTask}
            changeUpdate={changeUpdate}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
