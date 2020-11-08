import { useEffect } from "react";

const { default: Projects } = require("../components/Projects");

const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Elissa Moss: Projects";
  });
  return (
    <>
      <Projects />
    </>
  );
};
export default ProjectsPage;
