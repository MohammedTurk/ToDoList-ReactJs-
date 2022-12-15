import React from "react";
import ToDo from "./ToDo";
import "./ToDoList.css";

function ToDoList({ toDoList, DeleteTask, CompleteTask, changeUpdate }) {
  return (
    <div className="ToDoList">
      {toDoList.map((task, index) => (
        <ToDo
          key={task.id}
          task={task}
          index={index}
          DeleteTask={DeleteTask}
          CompleteTask={CompleteTask}
          changeUpdate={changeUpdate}
        />
      ))}
    </div>
  );
}

export default ToDoList;
