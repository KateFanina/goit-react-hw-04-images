import PropTypes from 'prop-types';
import { useState } from 'react';
import Modal from '../modal/Modal';
import { GalleryItem, ImgGallery } from './ImageGalleryItem.styled';

function ImageGalleryItem(props) {
  const { id, tags, url, webUrl } = props;
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  return (
    <>
      <GalleryItem key={id}>
        <ImgGallery src={webUrl} alt={tags} onClick={toggleModal} />
      </GalleryItem>
      {showModal && <Modal onClose={toggleModal} tags={tags} url={url} />}
    </>
  );
}
ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  tags: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  webUrl: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
