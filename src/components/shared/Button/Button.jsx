import css from './Button.module.css';
import icons from '../../../images/icons.svg';

export const Button = () => {
  return (
    <button type="submit" className={css.search_button}>
      <svg className={css.icon}>
        <use href={icons + '#icon-search'}></use>
      </svg>
    </button>
  );
};
