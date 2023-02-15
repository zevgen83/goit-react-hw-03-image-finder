import css from 'components/Button/Button.module.css';
import PropTypes from 'prop-types';

export function Button({ clickHandler, text }) {
  return (
    <button className={css.LoadMore} type="button" onClick={clickHandler}>
      {text}
    </button>
  );
}

Button.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
