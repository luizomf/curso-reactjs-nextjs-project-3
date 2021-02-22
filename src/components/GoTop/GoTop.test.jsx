import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GoTop } from '.';

describe('<GoTop />', () => {
  it('should render', () => {
    renderTheme(<GoTop>Children</GoTop>);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});
