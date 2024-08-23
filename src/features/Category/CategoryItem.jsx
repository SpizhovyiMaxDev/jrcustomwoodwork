import styles from "./CategoryItem.module.css";

import { generateSrcSet, generateMedias } from "../../utils/helpers";

import Heading from "../../ui/Heading/Heading";
import Picture from "../../ui/Picture/Picture";
import ButtonLink from "../../ui/ButtonLink/ButtonLink";

function ProjectsItem({ project }) {
  const path = `/categories/${project.category}/${project.id}`;
  const sizes = generateMedias(project.imgs.sizes);
  const imageIndex = 1;
  const srcSet = generateSrcSet(
    project.category,
    project.id,
    imageIndex,
    project.imgs.smallSizes
  );

  return (
    <li>
      <Picture
        srcSet={srcSet}
        mediaSizes={sizes}
        alt={`${project.id}/${project.heading.toLowerCase()}`}
        wrapperStyles={`${styles.aspectRatio} mb-2`}
      />

      <Heading type="tertiary" className="mb-1">
        {project.heading}
      </Heading>
      <ButtonLink path={path} type="primary">
        View Project
      </ButtonLink>
    </li>
  );
}

export default ProjectsItem;
