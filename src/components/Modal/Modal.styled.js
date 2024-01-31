import styled from 'styled-components';

export const StyledModal = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;

  overflow-y: auto;
  overflow-x: hidden;
  transition: all cubic-bezier(0.86, 0, 0.07, 1);
`;

export const ModalBody = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
`;

export const ModalContent = styled.div`
  position: relative;
  border-radius: 8px;
  padding: 40px 20px;

  background-color: #fff;
  width: 100%;
  max-width: 280px;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: fit-content;
    max-width: 704px;
  }

  @media (min-width: 1280px) {
    max-width: 806px;
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
