import React, { Component } from 'react';
import css from 'components/Modal/Modal.module.css';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModal);
  }
  closeModal = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }

    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };
  render() {
    const { src, alt } = this.props.showModal;
    return (
      <div className={css.Backdrop} onClick={this.closeModal}>
        <div className={css.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  showModal: PropTypes.objectOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  closeModal: PropTypes.func.isRequired,
};
