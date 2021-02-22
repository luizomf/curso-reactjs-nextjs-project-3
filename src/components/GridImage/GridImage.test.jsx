import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridImage } from '.';

describe('<GridImage />', () => {
  it('should render', () => {
    renderTheme(<GridImage>Children</GridImage>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
