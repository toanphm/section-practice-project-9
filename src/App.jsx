import { useState } from "react";
import NewProject from "./pages/newProject";
import NoProject from "./pages/noProject";
import Sidebar from "./components/sidebar";
import SelectedProject from "./pages/selectedProject";
import Content from "./components/content";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleAddingProjectState() {
    if (projectState.selectedProjectId !== null) {
      setProjectState((prev) => {
        return {
          ...prev,
          selectedProjectId: null,
        };
      });
    }
  }

  function handleSaveProjectState(projectData) {
    const newProject = { ...projectData, id: Math.random() };
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: [...prev.projects, newProject],
      };
    });
  }

  function handleCancelAction() {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
      };
    });
  }

  function handleOnSelectProject(id) {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prev) => {
      return {
        ...prev,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProjectId,
        ),
        selectedProjectId: undefined,
      };
    });
  }

  function handleSaveTask(taskData) {
    const newTask = {
      ...taskData,
      taskId: Math.random(),
      projectId: projectState.selectedProjectId,
    };
    console.log(newTask);

    setProjectState((prev) => {
      return {
        ...prev,
        tasks: [...prev.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(taskId) {
    console.log(taskId);
    setProjectState((prev) => {
      return {
        ...prev,
        tasks: prev.tasks.filter((task) => task.taskId !== taskId),
      };
    });
  }

  // update UI conditionally based on project id
  let content = (
    <SelectedProject
      onDelete={handleDeleteProject}
      selectedProject={projectState.projects.find(
        (project) => project.id === projectState.selectedProjectId,
      )}
      tasks={projectState.tasks.filter(
        (task) => task.projectId === projectState.selectedProjectId,
      )}
      onSaveTask={handleSaveTask}
      onDeleteTask={handleDeleteTask}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onSave={handleSaveProjectState}
        onCancel={handleCancelAction}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProject onCreateProjectClick={handleAddingProjectState} />;
  }

  return (
    <main className="h-screen bg-stone-400 flex text-stone-400">
      <div className="h-[80%] w-full max-w-[1024px] m-auto flex bg-stone-100 rounded-xl overflow-hidden shadow-lg">
        <Sidebar
          onCreateProjectClick={handleAddingProjectState}
          projects={projectState.projects}
          selectedProjectId={projectState.selectedProjectId}
          onSelectProject={handleOnSelectProject}
        />
        <Content>{content}</Content>
      </div>
    </main>
  );
}

export default App;
