import type { Meta, StoryObj } from '@storybook/react';
import LinksDemo from './links-demo';
import { ArrowUpIcon, ArrowDownIcon, ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';

const arrows = {
  ArrowUp: <ArrowUpIcon />,
  ArrowDown: <ArrowDownIcon />,
  ArrowLeft: <ArrowLeftIcon />,
  ArrowRight: <ArrowRightIcon />,
};

const meta: Meta<typeof LinksDemo> = {
  title: 'Components/Links',
  component: LinksDemo,
  argTypes: {
    icon: {
      options: Object.keys(arrows),
      mapping: arrows,
      control: {
        type: 'select',
        labels: {
          ArrowUp: 'Up',
          ArrowDown: 'Down',
          ArrowLeft: 'Left',
          ArrowRight: 'Right',
        },
      }, 
      description: 'Change icon arrow direction',
    },
    size: {
      options: [
        'w-2/12', 'w-3/12', 'w-4/12', 'w-5/12', 'w-6/12',
        'w-7/12', 'w-8/12', 'w-9/12', 'w-10/12', 'w-11/12', 'w-full',
        'w-1/8', 'w-3/8', 'w-5/8', 'w-7/8',
        'w-1/4', 'w-1/3', 'w-1/2', 'w-2/3', 'w-3/4', 'w-full'
      ],
      control: { type: 'select' },
      description: 'Controls the width of the component (e.g., w-1/4 is 25% of width)',
    },
    backgroundColor: {
      control: 'color',  
      description: 'Modify background colour',
    },
    textColor: {
      control: 'color',  
      description: 'Modify font colour',
    },
  },
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
} satisfies Meta<typeof LinksDemo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: "ArrowRight",
    backgroundColor: "#ffffff",
    textColor: "#000000",
    size: "w-1/8"
  },
};

export const Colorful: Story = {
  args: {
    icon: "ArrowRight",
    backgroundColor: "#ff8412",
    textColor: "#fffcfc",
    size: "w-2/12"
  }
};
