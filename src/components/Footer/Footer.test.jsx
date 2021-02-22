import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    renderTheme(<Footer>Children</Footer>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
