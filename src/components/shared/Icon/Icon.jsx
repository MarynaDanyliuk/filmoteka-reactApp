import PropTypes from 'prop-types';

import icons from '../../../images/icons.svg';
import { Svg } from '../Icon/Icon.styles';

const Icon = ({ id, ...props }) => {
  return (
    <Svg {...props}>
      <use href={`${icons}#${id}`}></use>
    </Svg>
  );
};

Icon.propTypes = {
  //   f: PropTypes.string,
  id: PropTypes.string.isRequired,
  //   s: PropTypes.string,
};

export default Icon;

// s={s} f={f}
//  (s = 'currentColor'), (f = 'none');
