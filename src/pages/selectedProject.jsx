import Button from "../components/button";
import Tasks from "./task";

function SelectedProject({
  selectedProject,
  onDelete,
  onSaveTask,
  onDeleteTask,
  tasks,
}) {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-xl font-bold text-stone-500 my-4">
          {selectedProject.title}
        </h2>
        <Button onClick={onDelete}>Delete</Button>
      </div>
      <p>{selectedProject.description}</p>
      <p>{selectedProject.dueDate}</p>
      <span className="w-3/4 h-[2px] bg-stone-800/90"></span>
      <Tasks tasks={tasks} onSave={onSaveTask} onDetele={onDeleteTask} />
    </>
  );
}

export default SelectedProject;
