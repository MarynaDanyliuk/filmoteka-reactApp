import styled from 'styled-components';
import { setWidth } from 'utils/theme';

import { Formik, Form, Field, ErrorMessage } from 'formik';

// export const ContainerView = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;

//   padding: 60px 16px;
//   @media ${props => props.theme.media.tab} {
//     width: 608px;
//     height: 354px;
//   }
// `;

export const StyledFormik = styled(Formik)`
  display: flex;
  align-items: center;
`;

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 100%; */
  /* padding: 0 16px; */
  background-color: aqua;
  width: 100%;
  max-width: 280px;
  @media ${props => props.theme.media.phone} {
    width: 280px;
  }
  @media ${props => props.theme.media.tab} {
    width: 340px;
  }
`;

export const StyledField = styled(Field)`
  height: 42px;
  margin-bottom: 24px;
  border-radius: 4px;
  border: solid 1px grey;
  opacity: 0.7;

  width: 100%;

  @media ${props => props.theme.media.phone} {
    width: 240px;
    padding: 16px;
  }

  @media ${props => props.theme.media.tab} {
    width: 320px;
    padding: 16px;
  }
`;

/* justify-content: center;
  align-items: center; */
/* margin: 20px; */
/* padding: 20px; */
/* height: 50vh; */
//   overflow-y: auto;
//   overflow-x: hidden;
//   padding: 16px;
//   max-width: 280px;
//   @media ${props => props.theme.media.tab} {
//     display: flex;
//     max-width: 704px;
//   }
//   @media ${props => props.theme.media.desk} {
//     max-width: 806px;
//   }

//   display: flex;
//   flex-direction: column;
//   font-size: 14px;
//   align-items: center;
//   max-width: 100%;
//   padding: 20px;

//   @media (min-width: $widthMobile) {
//     width: 240px;
//   }

//   @media (min-width: $widthTablet) {
//     width: 320px;
//   }
