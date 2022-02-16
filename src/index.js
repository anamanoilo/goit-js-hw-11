import { refs } from './js/services/getRefs';
import ApiService from './js/services/apiService';
import renderGalleryMarkup from './js/components/gallery';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

refs.searchForm.addEventListener('submit', handleSearchFormSubmit);

function handleSearchFormSubmit(e) {
  e.preventDefault();
  const inputValue = e.currentTarget.elements.searchQuery.value.trim().replace(' ', '+');
  const api = new ApiService({ inputValue });
  api.fetchPhotos().then(res => {
    if (!res.length) {
      Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      return;
    }
    renderGalleryMarkup(res);
  });
}
