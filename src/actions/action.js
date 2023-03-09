import axios from 'axios';
const serchApiKey = '32843171-ff9144c309aed6563146cfd43';
const BASE_URL = 'https://pixabay.com/api/';

export default   async function fetchSearchImages({ imageName, page }) {
  const searchImageName = imageName.replaceAll(' ', '+');
  const URL = `${BASE_URL}?key=${serchApiKey}&q=${searchImageName}&page=${page}&per_page=12
    &image_type=photo&orientation=horizontal&safesearch=true&webformatHeight=150`;
  try {
    return await axios.get(URL);
  } catch (error) {
    throw new Error();
  }
}
