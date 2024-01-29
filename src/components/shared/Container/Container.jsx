import { StyledContainer } from '../Container/Container.styles';

const Container = ({ children, ...props }) => {
  return <StyledContainer {...props}>{children}</StyledContainer>;
};

export default Container;
