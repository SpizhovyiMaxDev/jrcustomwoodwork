export function generateSrcSet(category, projectId, imageIndex, sizes) {
    return sizes
      .map(size => `/imgs/projects/${category}/${projectId}/${size}/${projectId.replace(/[0-9]/g, imageIndex)}.webp`);
}

export const generateMedias = sizes => sizes.map(size => `(max-width:${size}px)`);



