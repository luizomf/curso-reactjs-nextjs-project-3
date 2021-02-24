import P from 'prop-types';
import { Link } from 'react-router-dom';
import * as Styled from './styles';

export const MenuLink = ({ children, link, newTab = false }) => {
  const target = newTab ? '_blank' : '_self';
  const as = link.match(/^https?:\/\//gi) ? Link : 'a';
  const href = as === 'a' ? { href: link } : { to: link };

  //
  return (
    <Styled.Container {...href} target={target} as={as}>
      {children}
    </Styled.Container>
  );
};

MenuLink.propTypes = {
  children: P.node.isRequired,
  link: P.string.isRequired,
  newTab: P.bool,
};
