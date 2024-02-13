import { StyledContainer } from '../Container/Container.styles';


export const Container = ({ children, ...props }) => {
  return (
    <StyledContainer {...props}>
      {children}
    </StyledContainer>
  );
};
