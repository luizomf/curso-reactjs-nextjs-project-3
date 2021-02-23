import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';

describe('<Menu />', () => {
  it('should render', () => {
    renderTheme(<Menu>Children</Menu>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
