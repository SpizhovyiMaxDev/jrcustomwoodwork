import styles from "./Project.module.css";
import Heading from "../../ui/Heading/Heading";
import Breadcrumbs from "./Breadcrumbs";
import ErrorMessage from "../../ui/ErrorMessage/ErrorMessage";
import Description from "./Description";
import Presentation from "../../ui/Presentation/Presentation";
import useProjectData from "./useProjectData";

function Project() {
  const {
    categoryExists,
    project,
    sizes,
    imgsSrcSets,
    projectId,
    categoryType,
  } = useProjectData();

  if (!categoryExists) {
    return (
      <div className={styles.project}>
        <div className="container">
          <ErrorMessage
            message={`Oops! It looks like the category "${categoryType}" doesn't exist.`}
            path="/categories/all"
          />
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className={styles.project}>
        <div className="container">
          <ErrorMessage
            message={`Project called "${projectId}", doesn't exist`}
            path="/categories/all"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.project}>
      <div className="container">
        <Breadcrumbs category={project.category} />

        <Presentation
          customStyles={`${styles.aspectRatio} mb-3`}
          imgsSrcSets={imgsSrcSets}
          mediaSizes={sizes}
        />

        <Heading type="secondary" className="mb-2">
          {project.heading}
        </Heading>

        <Description description={project.description} />
      </div>
    </div>
  );
}

export default Project;
