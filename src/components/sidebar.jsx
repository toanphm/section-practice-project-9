import Button from "./button";

function Sidebar({
  onSelectProject,
  onCreateProjectClick,
  projects,
  selectedProjectId,
}) {
  return (
    <aside className="w-1/3 bg-stone-900 text-white">
      <h2 className="my-8 text-center text-xl font-bold uppercase">
        Your project
      </h2>
      <div className="flex justify-center">
        <Button onClick={onCreateProjectClick}>+ Add Project</Button>
      </div>
      <ul className="mt-12 ">
        {projects.map((project) => {
          let classes =
            "m-auto font-bold px-4 py-2 transition-transform duration-100 my-1 border-b-2 border-transparent hover:translate-x-2 hover:bg-stone-500";

          if (project.id === selectedProjectId) {
            classes += " bg-stone-400";
          } else {
            classes += "";
          }
          return (
            <li key={project.id} className="text-center">
              <button
                className={classes}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
