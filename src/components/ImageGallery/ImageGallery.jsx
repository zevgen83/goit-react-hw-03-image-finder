import React from 'react';
import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import css from 'components/ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ photos, openModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {photos.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            src={largeImageURL}
            alt={tags}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  photos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  openModal: PropTypes.func.isRequired,
};
