import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;

  /* overflow-y: auto;
  overflow-x: hidden; */

  transition: all cubic-bezier(0.86, 0, 0.07, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalBody = styled.div`
  position: relative;
  border-radius: 8px;
  /* padding: 24px 16px; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: calc(100% - 40px); */
  /* max-width: 280px; */
  background-color: #fff;
  /* @media (min-width: 768px) {
    max-width: 704px;
  }

  @media (min-width: 1280px) {
    max-width: 806px;
  } */
`;

export const ModalContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  /* max-width: 280px; */
  /* width: 100%; */
  /* height: fit-content; */
  @media ${props => props.theme.media.tab} {
    /* height: fit-content; */
  }
  /* position: relative;
  border-radius: 8px; */
  /* padding: 40px 20px; */

  /* background-color: #fff; */
  /* width: 100%; */
  /* max-width: 280px; */

  /* @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: fit-content;
    max-width: 704px;
  }

  @media (min-width: 1280px) {
    max-width: 806px;
  } */
`;

export const ModalClose = styled.button`
  position: absolute;
  padding: 18px;
  right: 0;
  top: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
