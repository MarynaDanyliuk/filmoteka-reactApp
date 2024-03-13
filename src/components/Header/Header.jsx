import { useState } from 'react';
import { useSelector } from 'react-redux';

import Icon from '../shared/Icon/Icon';

import SearchForm from './SearchForm/SearchForm';
import NavigationLibrary from './NavigationLibrary/NavigationLibrary';
import Modal from '../Modal/Modal';
import ModalLogin from '../Modal/ModalAuth/ModalLogin/ModalLogin';
import { Container } from 'components/shared/Container/Container';
import {
  HeaderContainer,
  HeaderNav,
  HeaderList,
  StyledNavLink,
} from './Header.styles';

import { isUserLogin } from '../../redux/auth/authSelectors';

export const Header = () => {
  const isLogin = useSelector(isUserLogin);
  // const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HeaderContainer>
      <Container>
        <HeaderNav>
          <StyledNavLink to="/">
            <Icon id="icon-film" style={{ marginRight: '8px' }} />
            Filmoteka
          </StyledNavLink>
          <HeaderList>
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink
              to={isLogin ? '/library/watched' : '/'}
              onClick={() =>
                isLogin ? setIsModalOpen(false) : setIsModalOpen(true)
              }
            >
              My Library
            </StyledNavLink>
            {isModalOpen && (
              <Modal h="fit-content" close={() => setIsModalOpen(false)}>
                <ModalLogin close={() => setIsModalOpen(false)} />
              </Modal>
            )}
          </HeaderList>
        </HeaderNav>
        <SearchForm />
        <NavigationLibrary />
      </Container>
    </HeaderContainer>
  );
};

/* {isModalOpen && (
              <Modal h="fit-content" close={() => setIsModalOpen(false)}>
                <ModalLogin close={() => setIsModalOpen(false)} />
              </Modal>
            )} */

// approve={() => {
//   console.log('rere');
// }}

// const openModalLogin = () => {
//   return isLogin ? setIsModalOpen(false) : setIsModalOpen(true);
//   // if (!isLogin) {
//   //   setIsModalOpen(true);
//   // } else {
//   //   setIsModalOpen(false);
//   // }
// };

// export default Header;

// _________________________________
// style = 'mar gin-right: 8px';
// const getClassName = ({ isActive }) => {
//   const className = isActive ? `${css.link} ${css.active}` : css.link;
//   return className;
// };

/* <Icon width="16" height="16">
            <use href={icons + '#icon-film'}></use>
          </Icon> */
// className={css.nav_item}
