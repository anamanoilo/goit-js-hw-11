import { refs } from '../services/getRefs';
import { createPhotoMarkup } from '../templates/photoCard';

function renderGalleryMarkup(res) {
  const markup = res
    .map(photo => {
      // const { webformatURL, largeImageURL, tags, likes, views, comments, downloads } = photo;
      return createPhotoMarkup(photo);
    })
    .join('');
  refs.galleryDiv.insertAdjacentHTML('beforeend', markup);
  //
}

export default renderGalleryMarkup;
