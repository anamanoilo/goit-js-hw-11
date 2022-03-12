 # Task - image search.

* Build a front-end part of a keyword search and image viewer application. 
* Add some decoration to the
interface elements. The form is originally in the HTML document. The user will enter a search string
in the text field, and when submitting the form, an HTTP request must be made. Use the public API of
the **Pixabay** (https://pixabay.com/api/docs/ ) service as a back-end. 
* If the back-end returns an
empty array, then there are no matches. In this case, show a notification with the text "Sorry,
there are no images matching your search query. Please try again.". For notifications, use this
library: **notiflix**. (https://github.com/notiflix/Notiflix#readme ).

## Pagination.

* Pixabay API supports pagination and provides the page and per_page parameters. Make it so that each
response contains 40 objects. When searching with a new keyword, the value of page must be reset to
its initial value, since there will be pagination for a new collection of images.

* The HTML document already has the markup of the button used to execute the request for the next
group of images and add markup to the already existing gallery items. Initially, the button must be
hidden. After the first request, the button appears in the interface under the gallery. When
re-submitting the form, the button is first hidden and then displayed after the request. 
* If the user has reached the end of the collection, hide the button and display a notification with the text:
"We're sorry, but you've reached the end of search results.".

## Notification.

* After the first request, for each new search, display a notification with the number of images found
in total (totalHits property). Notification text: "Hooray! We found totalHits images."

## SimpleLightbox library.

* Add the display of large images with the **SimpleLightbox** (https://simplelightbox.com/ ) library
for a full gallery.

## Page scrolling.

* Make smooth page scrolling after the request and rendering each next group of images.
