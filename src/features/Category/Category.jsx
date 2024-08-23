import styles from "./Category.module.css";

import { useParams } from "react-router";
import { projects } from "../../data/projects";

import ErrorMessage from "../../ui/ErrorMessage/ErrorMessage";
import ProjectsItem from "./CategoryItem";

function Category() {
  const { categoryType } = useParams();
  const projectsList = projects[categoryType];

  if (!projectsList) {
    return (
      <ErrorMessage
        message={`Oops! It looks like the category "${categoryType}" doesn't exist.`}
        path="/categories/all"
      />
    );
  }

  if (!projectsList.length) {
    return (
      <ErrorMessage
        message="Projects in this section are coming soon. Stay tuned for updates!"
        path="/categories/all"
      />
    );
  }

  return (
    <ul className={styles.projects}>
      {projectsList.map((project) => (
        <ProjectsItem key={project.id} project={project} />
      ))}
    </ul>
  );
}

export default Category;
