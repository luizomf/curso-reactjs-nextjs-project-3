import P from 'prop-types';
import * as Styled from './styles';
import { NavLinks } from '../NavLinks';
import { LogoLink } from '../LogoLink';

export const Menu = ({ logoData, links = [] }) => {
  return (
    <Styled.Wrapper>
      <Styled.Container>
        <LogoLink {...logoData} />
        <NavLinks links={links} />
      </Styled.Container>
    </Styled.Wrapper>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes),
};
