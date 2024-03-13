import styled from 'styled-components';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-bottom: 80px;
  /* max-width: 280px;
  @media ${props => props.theme.media.tab} {
    max-width: 340px;
  } */
`;

export const StyledField = styled(Field)`
  height: ${props => props.h || 40}px;
  width: 394px;
  background-color: ${props => props.theme.colors.backgroundModal};
  border: ${props => props.theme.colors.inputOutline};
  border-bottom: ${props => props.theme.colors.inputBorder};
  color: ${props => props.theme.colors.primaryColor};
  font-size: ${props => props.theme.fontSizes.s};

  &:focus {
    background-color: ${props =>
      props.theme.colors.backgroundModal || 'transparent'};
    outline: 0;
    color: ${props => props.theme.colors.primaryColor};
  }

  &::placeholder {
    opacity: 1;
  }
`;

/* height: 42px;
  margin-bottom: 24px;
  border-radius: 4px;
  border: solid 1px grey;
  opacity: 0.7;

  width: calc(100vw - 40px);
  max-width: 280px;
  @media ${props => props.theme.media.tab} {
    max-width: 100%;
  } */

// import { setWidth } from 'utils/theme';

// export const Form = styled.form`
//   width: ${setWidth};
//   display: flex;
//   justify-content: center;
//   padding-bottom: 80px;
// `;

// height: ${props => props.h || 40}px;
// width: 394px;
// background-color: ${props => props.theme.colors.backgroundModal};
// border: ${props => props.theme.colors.inputOutline};
// border-bottom: ${props => props.theme.colors.inputBorder};
// color: ${props => props.theme.colors.primaryColor};
// font-size: ${props => props.theme.fontSizes.s};

// &:focus {
//   background-color: ${props => props.theme.colors.backgroundModal};
//   outline: 0;
//   color: ${props => props.theme.colors.primaryColor};
// }

// &::placeholder {
//   opacity: 1;
// }
