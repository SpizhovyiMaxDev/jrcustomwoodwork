import styles from "./Project.module.css";

import { projects } from "../../data/projects";
import { useParams } from "react-router";
import { createMediaQueries, generateImgsSrcSet } from "../../utils/helpers";

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

  const mediaQueries = createMediaQueries(project.imgs.sizes);
  const imgsSrcSet = generateImgsSrcSet(
    project.category,
    project.id,
    project.imgs.amount,
    project.imgs.sizes
  );

  return (
    <div className={styles.project}>
      <div className="container">
        <Breadcrumbs category={project.category} />

        <Presentation
          wrapperStyles={`${styles.aspectRatio} mb-3`}
          imgsSrcSet={imgsSrcSet}
          mediaQueries={mediaQueries}
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
