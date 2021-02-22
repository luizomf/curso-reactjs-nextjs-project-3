import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridSection } from '.';

describe('<GridSection />', () => {
  it('should render', () => {
    renderTheme(<GridSection>Children</GridSection>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
