import { screen, waitFor } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
import userEvent from '@testing-library/user-event';

import linksMock from '../NavLinks/mock';
const logoData = {
  text: 'Logo',
  srcImg: 'image.jpg',
  link: '#target',
};

const resizeWindow = (width = 1024, height = 900) => {
  return new Promise((resolve) => {
    window.innerWidth = width;
    window.innerHeight = height;
    window.dispatchEvent(new Event('load'));
    window.dispatchEvent(new Event('resize'));
    resolve();
  });
};

describe('<Menu />', () => {
  it('should render menu on desktop', () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Open/Close Menu')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
    expect(container).toMatchSnapshot();
  });

  it('should render open/close menu button and menu mobile', async () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );

    const button = screen.getByLabelText('Open/Close Menu');
    expect(button).toHaveAttribute('aria-hidden', 'true');

    await waitFor(async () => {
      await resizeWindow(640);
    });

    expect(button).toHaveAttribute('aria-hidden', 'false');
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();

    userEvent.click(button);

    expect(button).toHaveAttribute('aria-hidden', 'false');
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Open menu')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();

    userEvent.click(screen.getByRole('navigation', { name: 'Main menu' }));

    expect(button).toHaveAttribute('aria-hidden', 'false');
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
    expect(screen.queryByLabelText('Close menu')).not.toBeInTheDocument();
    expect(
      screen.queryByRole('heading', { name: 'Logo' }),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole('navigation', { name: 'Main menu' }),
    ).not.toBeInTheDocument();

    await waitFor(async () => {
      await resizeWindow(800);
    });

    expect(screen.getByRole('heading', { name: 'Logo' })).toBeInTheDocument();
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Open/Close Menu')).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });

  it('should not render links', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    expect(
      screen.getByRole('navigation', { name: 'Main menu' }).firstChild,
    ).not.toBeInTheDocument();
  });

  it('should match snapshot on mobile', async () => {
    const { container } = renderTheme(
      <Menu links={linksMock} logoData={logoData} />,
    );

    await waitFor(async () => {
      await resizeWindow(640);
    });

    expect(container).toMatchSnapshot();
  });
});
