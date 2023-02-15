import React, { Component } from 'react';
import css from 'components/App.module.css';
import { Notify } from 'notiflix';
import { fetchApi } from 'fetchApi/fetchApi';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    isLoading: false,
    namePhoto: '',
    photos: [],
    page: 1,
    perPage: 12,
    totalPages: 0,
    isVisibleBtn: false,
    currentPhoto: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { page, perPage, namePhoto, totalPages } = this.state;

    if (prevState.namePhoto !== namePhoto || prevState.page !== page) {
      try {
        this.setState({ isLoading: true });
        const data = await fetchApi(namePhoto, page, perPage);

        const {
          data: { hits, totalHits },
        } = data;

        this.setState(({ photos }) => ({
          photos: [...photos, ...hits],
          isVisibleBtn: true,
          totalPages: Math.ceil(totalHits / perPage),
        }));
      } catch (error) {
        Notify.failure('Sorry, try again');
      } finally {
        this.setState({ isLoading: false });
      }

      if (totalPages === page) {
        Notify.info(`We're sorry, but you've reached the end of search`);
        this.setState({
          isVisibleBtn: false,
        });
      }
    }
  }

  handleFormSubmit = namePhoto => {
    if (namePhoto !== this.state.namePhoto) {
      this.setState({
        namePhoto: namePhoto,
        photos: [],
        isVisibleBtn: false,
        page: 1,
        totalPages: 0,
      });
    } else {
      Notify.info('The new search must be different from the current search');
    }
  };

  onloadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  onOpenModal = data => {
    this.setState({ currentPhoto: data });
  };

  onCloseModal = () => {
    this.setState({ currentPhoto: null });
  };

  render() {
    const { photos, isLoading, isVisibleBtn, currentPhoto } = this.state;
    return (
      <div className={css.App}>
        <SearchBar onSubmit={this.handleFormSubmit} />
        {isLoading && <Loader />}
        {photos.length !== 0 && (
          <>
            <ImageGallery photos={photos} openModal={this.onOpenModal} />
            {isVisibleBtn && (
              <Button text="load more" clickHandler={this.onloadMore} />
            )}
          </>
        )}
        {currentPhoto && (
          <Modal showModal={currentPhoto} closeModal={this.onCloseModal} />
        )}
      </div>
    );
  }
}
