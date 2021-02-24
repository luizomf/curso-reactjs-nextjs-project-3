import P from 'prop-types';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { Link } from 'react-router-dom';

export const LogoLink = ({ text, srcImg = '', link }) => {
  const as = link.match(/^https?:\/\//gi) ? Link : 'a';
  const href = as === 'a' ? { href: link } : { to: link };

  //
  return (
    <Heading size="small" uppercase>
      <Styled.Container {...href} as={as}>
        {!!srcImg && <img src={srcImg} alt={text} />}
        {!srcImg && text}
      </Styled.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  srcImg: P.string,
  link: P.string.isRequired,
};
