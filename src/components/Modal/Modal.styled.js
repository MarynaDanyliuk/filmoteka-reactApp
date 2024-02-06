import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;

  transition: all cubic-bezier(0.86, 0, 0.07, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalBody = styled.div`
  position: relative;
  margin: 0 15px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

export const ModalContent = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 95vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media ${props => props.theme.media.tab} {
    height: fit-content;
  }
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
