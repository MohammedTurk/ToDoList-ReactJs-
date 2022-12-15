import React from "react";
import "./ToDo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faTrash,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
function ToDo({
  task: { id, title, completed },
  index,
  DeleteTask,
  CompleteTask,
  changeUpdate,
}) {
  return (
    <div className="ToDo">
      <div className={completed ? "info-box done" : "info-box"}>
        <span className="ToDoNum">{index + 1}</span>
        <span className="ToDoTitle">{title}</span>
      </div>
      <div className="Tools-box">
        <FontAwesomeIcon
          icon={faCircleCheck}
          onClick={() => CompleteTask(index)}
        />
        <FontAwesomeIcon icon={faTrash} onClick={() => DeleteTask(id)} />

        {completed ? null : (
          <FontAwesomeIcon
            icon={faPenToSquare}
            onClick={() => changeUpdate({ title, id, completed })}
          />
        )}
      </div>
    </div>
  );
}

export default ToDo;
