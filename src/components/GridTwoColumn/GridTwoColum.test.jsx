import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridTwoColum } from '.';

describe('<GridTwoColum />', () => {
  it('should render', () => {
    renderTheme(<GridTwoColum>Children</GridTwoColum>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
