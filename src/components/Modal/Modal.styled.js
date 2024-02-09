import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: transparent;

  transition: all cubic-bezier(0.86, 0, 0.07, 1);
  overflow-y: auto;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
`;

export const ModalContent = styled.div`
  position: relative;
  padding: 30px 16px;
  background-color: #fff;
  border-radius: 10px;
`;

export const ModalClose = styled.button`
  position: absolute;
  padding: 12px;
  right: 0;
  top: 0;
  cursor: pointer;
  border: none;
  background-color: transparent;
`;

/* position: relative; */
/* border-radius: 8px; */
/* padding: 40px 20px; */

/* background-color: #fff; */

/* max-width: 280px; */

/* @media ${props => props.theme.media.tab} {
    display: flex;
    flex-direction: row;
    max-width: 704px;
  }
  @media ${props => props.theme.media.desk} {
    max-width: 806px;
  } */

/* position: relative;
  margin: 0 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  max-height: fit-content; */

/* min-height: fit-content; */
/* display: flex; */
/* align-items: center;
  justify-content: center; */
/* padding: 16px; */
/* background-color: #fff; */

/* align-items: ${props => props.align || 'center'}; */
/* @media ${props => props.theme.media.tab} {
    align-items: center;
  } */

/* align-items: ${props => {
    switch (props.name) {
      case 'modalDetails':
        return 'align-items: center';
      default:
        return props.theme.colors.primaryColor;
    }
  }}; */

/* ${props => props.align || 'center'}; */

/* align-items: center; */

/* min-height: 100%; */
/* z-index: 1; */

/* overflow: auto; */

/* overflow-x: hidden; */

/* max-height: calc(
    100vh - 60px
  );  */
/* Розрахунок максимальної висоти для прокрутки */
/* overflow-y: auto; */
/* overflow-y: auto; */
/* max-height: 95vh; */

/* 
  height: ${props => props.h || '95vh'};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${props => props.theme.media.tab} {
    height: fit-content;
  } */
