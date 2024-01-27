import PropTypes from 'prop-types';

import { InputSearch } from '../Input/Input.styles';

const Input = ({ type, autoComplete = 'on', placeholder, ...props }) => {
  return <InputSearch type={type} {...props} placeholder={placeholder} />;
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
