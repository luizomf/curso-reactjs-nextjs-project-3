import P from 'prop-types';
import * as Styled from './styles';

export const Footer = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

Footer.propTypes = {
  children: P.node.isRequired,
};
