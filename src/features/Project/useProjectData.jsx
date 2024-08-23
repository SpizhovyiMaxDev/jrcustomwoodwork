import { useParams } from "react-router";
import { projects } from "../../data/projects";
import { generateMedias, generateSrcSet } from "../../utils/helpers";

function useProjectData() {
  const { categoryType, projectId } = useParams();
  const categoryExists = Boolean(projects[categoryType]);
  const project = projects[categoryType]?.find(
    (project) => project.id === projectId
  );

  const sizes = project ? generateMedias(project.imgs.sizes) : [];
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

  return {
    categoryExists,
    project,
    sizes,
    imgsSrcSets,
    projectId,
    categoryType,
  };
}

export default useProjectData;
