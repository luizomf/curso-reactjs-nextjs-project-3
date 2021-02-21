import { Menu } from '.';

import linkMocks from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linkMocks,
    logoData: {
      text: 'Logo',
      link: '#target',
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Template = (args) => {
  return (
    <div style={{ height: '300vh' }}>
      <Menu {...args} />
    </div>
  );
};
