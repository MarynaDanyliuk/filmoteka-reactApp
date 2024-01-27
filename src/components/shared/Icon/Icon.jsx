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
  id: PropTypes.string.isRequired,
};

export default Icon;

// s={s} f={f}
//  (s = 'currentColor'), (f = 'none');
  //   s: PropTypes.string,
    //   f: PropTypes.string,
