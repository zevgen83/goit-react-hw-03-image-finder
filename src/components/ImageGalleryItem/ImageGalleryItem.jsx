import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL, src, alt, openModal }) => {
  return (
    <li className={css.galleryItem}>
      <img
        className={css.galleryItemImg}
        src={webformatURL}
        alt={alt}
        onClick={() => {
          openModal({ src: src, alt: alt });
        }}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
