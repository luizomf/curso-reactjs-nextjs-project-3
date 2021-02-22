import { GridSection } from '.';

export default {
  title: 'GridSection',
  component: GridSection,
  args: {
    children: 'GridSection',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridSection {...args} />
    </div>
  );
};
