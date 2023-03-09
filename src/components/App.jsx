import { useState, useEffect } from 'react';
import Searchbar from './searchbar';
import ImageGallery from './imageGallery';
import fetchSearchImages from '../actions/action';

function App() {
  const [searchText, setSearchText] = useState('');
  const [imageName, setImageName] = useState('');
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const name = event.target.search.value;
    setImageName(name);
  };

  useEffect(() => {
    setPage(1);
    setPhotos([]);
    setSearchText(imageName);
  }, [imageName]);

  useEffect(() => {
    if (searchText) {
      setIsLoading(true);
      fetchSearchImages({
        imageName: searchText,
        page,
      })
        .then(response => {
          const totalHits = response?.data?.totalHits;
          const hits = response?.data?.hits;
          const myHits = (hits || []).map(hit => ({
            id: hit.id,
            tags: hit.tags,
            url: hit.largeImageURL,
            webUrl: hit.webformatURL,
          }));
          setPhotos([...photos, ...myHits]);
          setTotalHits(totalHits);
        })
        .finally(() => setIsLoading(false));
    }
  }, [searchText, page]);

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Searchbar handleSubmit={event => handleSubmit(event)} />
      <ImageGallery
        isLoading={isLoading}
        handleLoadMore={() => setPage(page + 1)}
        photos={photos}
        totalHits={totalHits}
      />
    </div>
  );
}

export default App;
