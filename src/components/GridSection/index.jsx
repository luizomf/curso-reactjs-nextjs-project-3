import P from 'prop-types';
import * as Styled from './styles';

export const GridSection = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

GridSection.propTypes = {
  children: P.node.isRequired,
};
