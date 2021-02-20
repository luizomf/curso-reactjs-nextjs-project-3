import { Menu } from '.';

import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#home',
    },
  },
  argTypes: {
    links: { type: '' },
    logoData: { type: '' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '200vh' }}>
      <Menu {...args} />
    </div>
  );
};
