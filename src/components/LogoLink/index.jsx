import P from 'prop-types';
import * as Styled from './styles';

export const LogoLink = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

LogoLink.propTypes = {
  children: P.node.isRequired,
};
