import { noImage } from '@assets/index';

function getImageUrl(imageObj, quality = 'medium') {
  return imageObj ? { uri: imageObj[quality] } : noImage;
}

export default getImageUrl;
