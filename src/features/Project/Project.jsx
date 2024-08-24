import styles from "./Project.module.css";

import { useParams } from "react-router";
import { projects } from "../../data/projects";
import { generateMedias, generateSrcSet } from "../../utils/helpers";

import Heading from "../../ui/Heading/Heading";
import Breadcrumbs from "./Breadcrumbs";
import ErrorMessage from "../../ui/ErrorMessage/ErrorMessage";
import Description from "./Description";
import Presentation from "../../ui/Presentation/Presentation";

function Project() {
  const { categoryType, projectId } = useParams();
  const categoryExists = Boolean(projects[categoryType]);
  const project = projects[categoryType]?.find(
    (project) => project.id === projectId
  );
  const mediaSizes = project ? generateMedias(project.imgs.sizes) : [];
  const imgsSrcSets = project
    ? Array.from({ length: project.imgs.amount }, (_, i) => {
        const imageIndex = i + 1;
        return generateSrcSet(
          project.category,
          project.id,
          imageIndex,
          project.imgs.sizes
        );
      })
    : [];

  if (!categoryExists || !project) {
    const errorMessage = !categoryExists
      ? `Oops! It looks like the category "${categoryType}" doesn't exist.`
      : `Project called "${projectId}", doesn't exist`;

    return (
      <div className={styles.project}>
        <div className="container">
          <ErrorMessage message={errorMessage} path="/categories/all" />
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
          mediaSizes={mediaSizes}
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
