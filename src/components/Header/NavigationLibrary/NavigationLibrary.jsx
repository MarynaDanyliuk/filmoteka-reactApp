import { NavLibrary, NavLinkBtn } from './NavigationLibrary.styles';

// const getClassName = ({ isActive }) => {
//   const className = isActive ? `${css.link} ${css.active}` : css.link;
//   return className;
// };

const NavigationLibrary = () => {
  return (
    <NavLibrary>
      <NavLinkBtn name="headerNav" to="/library/watched" w="148">
        Watched
      </NavLinkBtn>
      <NavLinkBtn to="/library/queue" w="148" h="44">
        Queue
      </NavLinkBtn>
    </NavLibrary>
  );
};

export default NavigationLibrary;
