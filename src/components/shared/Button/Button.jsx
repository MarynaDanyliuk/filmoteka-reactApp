import PropTypes from 'prop-types';
import { Btn } from './Button.styles';

export const Button = ({ children, onClick, type = 'submit', ...props }) => {
  return (
    <Btn onClick={onClick} type={type} {...props}>
      <span>{children}</span>
    </Btn>
  );
};

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

// export default Button;

// import css from './Button.module.css';
// import icons from '../../../images/icons.svg';

// export const Button = () => {
//   return (
//     <button type="submit" className={css.search_button}>
//       <svg className={css.icon}>
//         <use href={icons + '#icon-search'}></use>
//       </svg>
//     </button>
//   );
// };