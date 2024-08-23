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
  const project = projects[categoryType].find(
    (project) => project.id === projectId
  );

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

  const sizes = generateMedias(project.imgs.sizes);
  const imgsSrcSets = Array.from({ length: project.imgs.amount }, (_, i) => {
    const imageIndex = i + 1;
    return generateSrcSet(
      project.category,
      project.id,
      imageIndex,
      project.imgs.sizes
    );
  });

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
