import { useRef } from "react";
import Button from "../components/button";
import Input from "../components/input";
import Modal from "../components/modal";

function NewProject({ onSave, onCancel }) {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  function handleSaveProject() {
    const title = titleRef.current.value;
    const description = "test description";
    const dueDate = dueDateRef.current.value;
    // validation here
    if (title.trim() === "" || description.trim() === "") {
      // Show modal messages
      modalRef.current.open();
      return;
    }
    onSave({ title, description, dueDate });
  }
  return (
    <>
      <Modal ref={modalRef}>
        <h2 className="font-bold text-left">Invalid Input</h2>
        <p>Oops... looks like you forgot enter a value.</p>
        <p>PLease make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="bg-slate-100 p-12 w-full">
        <menu className="flex justify-end">
          <li>
            <Button
              className="bg-slate-200 px-2 py-1 rounded font-semibold hover:bg-slate-300 ml-2"
              onClick={onCancel}
            >
              Cancel
            </Button>
          </li>
          <li>
            <Button
              onClick={handleSaveProject}
              className="bg-slate-900 px-2 py-1 rounded font-semibold hover:bg-slate-800 ml-2 text-white"
            >
              Save
            </Button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} label={"Title"} type="text" />
          <Input ref={descriptionRef} label={"Description"} textArea />
          <Input ref={dueDateRef} label={"Due Date"} type="date" />
        </div>
      </div>
    </>
  );
}

export default NewProject;
