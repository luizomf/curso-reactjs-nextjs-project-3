import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render', () => {
    renderTheme(<LogoLink>Children</LogoLink>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
