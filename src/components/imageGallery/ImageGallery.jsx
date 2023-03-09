import PropTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import Button from '../button';
import Loader from '../loader';

function ImageGallery(props) {
  const { handleLoadMore, isLoading, photos, totalHits } = props;

  return (
    <>
      {isLoading && <Loader />}
      <Gallery>
        {photos.map(photo => (
          <ImageGalleryItem
            id={photo.id}
            key={photo.id}
            url={photo.url}
            webUrl={photo.webUrl}
            tags={photo.tags}
          />
        ))}
      </Gallery>
      {!!photos?.length && photos?.length < +totalHits && (
        <Button handleLoadMore={handleLoadMore} />
      )}
    </>
  );
}

ImageGallery.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  handleLoadMore: PropTypes.func.isRequired,
};

export default ImageGallery;
