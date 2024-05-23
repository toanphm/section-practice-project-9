import { useState, useRef } from "react";
import Button from "../components/button";
import Modal from "../components/modal";

export default function Tasks({ tasks, onSave, onDetele }) {
  const [taskName, setTaskName] = useState("");
  const modalRef = useRef();
  function handleOnChange(e) {
    console.log(e.target.value);
    setTaskName(e.target.value);
  }
  function handleAddNewTask() {
    if (taskName.trim() === "") {
      modalRef.current.open();
      return;
    }
    onSave({ text: taskName });
  }

  return (
    <>
      <Modal ref={modalRef}>Task name is invalid, try again!</Modal>
      <div>
        <h2 className="text-stone-800 font-bold">Tasks</h2>
        <div className="flex">
          <input
            type="text"
            value={taskName}
            onChange={(e) => handleOnChange(e)}
          />
          <Button className="ml-3" onClick={handleAddNewTask}>
            Add
          </Button>
        </div>
        {tasks && tasks.length > 0 ? (
          <ul className="mt-3">
            {tasks.map((task) => {
              return (
                <li key={task.taskId} className="flex justify-between">
                  <p>{task.text}</p>
                  <button
                    onClick={() => onDetele(task.taskId)}
                    className="hover:text-red-800 font-bold"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>No task</p>
        )}
      </div>
    </>
  );
}
