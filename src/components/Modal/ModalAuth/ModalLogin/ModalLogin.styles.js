import styled from 'styled-components';

import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: aqua; */
  width: 100%;
  max-width: 280px;
  @media ${props => props.theme.media.tab} {
    max-width: 340px;
  }
`;

export const StyledField = styled(Field)`
  height: 42px;
  margin-bottom: 24px;
  border-radius: 4px;
  border: solid 1px grey;
  opacity: 0.7;

  width: calc(100vw - 40px);
  max-width: 280px;
  @media ${props => props.theme.media.tab} {
    max-width: 100%;
  }
`;
