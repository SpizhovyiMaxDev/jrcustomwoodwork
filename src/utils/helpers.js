
export function createMediaQueries(sizes) {
  if(!sizes) return [];
  return sizes.map(size => `(max-width: ${size}px)`);
}

export function generateImgsSrcSet(category = "", projectId = null, amountOfImages = 0, imgSizes = []){
  if(!projectId) return [];
  return Array.from({ length: amountOfImages }, (_, i) => {
    const imageIndex = i + 1;
    return imgSizes.map(size => `/imgs/projects/${category}/${projectId}/${size}/${projectId.replace(/[0-9]/g, imageIndex)}.webp`);
  })
}

export function generateSrcSet(category="", projectId=null, imageIndex = 1, sizes=[]) {
  if(!projectId) return [];
  return sizes
    .map(size => `/imgs/projects/${category}/${projectId}/${size}/${projectId.replace(/[0-9]/g, imageIndex)}.webp`);
}


export function capitalizeFirstLetter(str){
  return str[0].toUpperCase() + str.slice(1);
}