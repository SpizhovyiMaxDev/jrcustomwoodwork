
export const generateMedias = sizes => sizes.map(size => `(max-width:${size}px)`);

export function generateResponsiveSrcSets(project){
  return Array.from({ length: project.imgs.amount }, (_, i) => {
    const imageIndex = i + 1;
    return generateSrcSet(
      project.category,
      project.id,
      imageIndex,
      project.imgs.sizes
    );
  })
}

export function generateSrcSet(category="", projectId=null, imageIndex = 1, sizes="") {
  return sizes
    .map(size => `/imgs/projects/${category}/${projectId}/${size}/${projectId.replace(/[0-9]/g, imageIndex)}.webp`);
}
