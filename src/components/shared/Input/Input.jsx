import PropTypes from 'prop-types';

import { StyledInput } from '../Input/Input.styles';

const Input = ({ type, autoComplete = 'on', placeholder, ...props }) => {
  return <StyledInput type={type} {...props} placeholder={placeholder} />;
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
