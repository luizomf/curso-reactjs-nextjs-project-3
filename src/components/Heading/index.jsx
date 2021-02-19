import P from 'prop-types';
import * as Styled from './styles';

export const Heading = ({ children }) => {
  return <Styled.Title>{children}</Styled.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
};
