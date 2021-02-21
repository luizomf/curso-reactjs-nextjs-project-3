import P from 'prop-types';
import * as Styled from './styles';

export const SectionContainer = ({ children }) => {
  return (
    <Styled.Container>
      <h1>{children}</h1>
    </Styled.Container>
  );
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
