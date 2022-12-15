import React, { useState } from "react";
import "./ToDoForm.css";
function ToDoForm({
  AddTask,
  updatedTask,
  handleTask,
  submitUpdate,
  cancelUpdate,
}) {
  const [newTask, setNewTask] = useState("");

  function handleChange(e) {
    setNewTask(e.target.value);
  }
  function handleAdd(e) {
    if (newTask.trim()) {
      AddTask(newTask);
      setNewTask("");
    }
  }

  return (
    <div className="ToDoForm">
      {updatedTask ? (
        <div className="Update-task">
          <input
            type="text"
            value={updatedTask.title ? updatedTask.title : ""}
            onChange={handleTask}
          />
          <button onClick={submitUpdate}>Update</button>
          <button onClick={cancelUpdate}>Cancel</button>
        </div>
      ) : (
        <div className="add-task">
          <input type="text" value={newTask} onChange={handleChange} />
          <button onClick={handleAdd}>Add</button>
        </div>
      )}
    </div>
  );
}

export default ToDoForm;
