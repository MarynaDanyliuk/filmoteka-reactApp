import { NavLibrary, NavLinkBtn } from './NavigationLibrary.styles';

// const getClassName = ({ isActive }) => {
//   const className = isActive ? `${css.link} ${css.active}` : css.link;
//   return className;
// };

const NavigationLibrary = () => {
  return (
    <NavLibrary>
      <NavLinkBtn id="watched" to="/library/watched" w="148">
        Watched
      </NavLinkBtn>
      <NavLinkBtn id="queue" to="/library/queue" w="148">
        Queue
      </NavLinkBtn>
    </NavLibrary>
  );
};

export default NavigationLibrary;
