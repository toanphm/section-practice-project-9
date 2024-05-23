import noPorjectImage from "../assets/no-projects.png";
import Button from "../components/button";

function NoProject({ onCreateProjectClick }) {
  return (
    <div className="m-auto text-center w-full">
      <img
        src={noPorjectImage}
        alt="No project"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4"></h2>
      <p>Select a project or get started with a new one</p>
      <p className="mt-8">
        <Button onClick={onCreateProjectClick}>Create new project</Button>
      </p>
    </div>
  );
}

export default NoProject;
