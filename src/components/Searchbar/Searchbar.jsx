import React, { Component } from 'react';
import css from 'components/Searchbar/Searchbar.module.css';
import PropTypes from 'prop-types';

export class SearchBar extends Component {
  state = {
    namePhoto: '',
  };

  handleNameChange = e => {
    this.setState({ namePhoto: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.namePhoto.trim() === '') {
      alert('Enter photo name!');
    }
    this.props.onSubmit(this.state.namePhoto);
    this.setState({ namePhoto: '' });
    e.target.reset();
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchFormButton}></button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.namePhoto}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
