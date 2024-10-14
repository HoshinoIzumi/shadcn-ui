import { Meta, StoryObj } from "@storybook/react";
import AlertAnimation from "./alert-animation";

const meta: Meta<typeof AlertAnimation> = {
  title: "Components/Alert",
  component: AlertAnimation,
  argTypes: {
    AnimationType: {
      options: ['default', 'destructive', 'information', 'warning', 'success'],
      control: { type: 'select' },
    },
    size: {
      options: [
        'w-1/12', 'w-2/12', 'w-3/12', 'w-4/12', 'w-5/12', 'w-6/12',
        'w-7/12', 'w-8/12', 'w-9/12', 'w-10/12', 'w-11/12', 'w-full',
        'w-1/8', 'w-3/8', 'w-5/8', 'w-7/8',
        'w-1/4', 'w-1/3', 'w-1/2', 'w-2/3', 'w-3/4', 'w-full'
      ],
      control: { type: 'select' },
    },
    colorDepth: {
      options: ['bg-blue-100', 'bg-blue-500', 'bg-green-100', 'bg-green-500', 'bg-red-100', 'bg-red-500','bg-yellow-100', 'bg-yellow-500'],
      control: { type: 'select' },
    },
    textColor: {
      control: 'color',  
      description: 'Modify font colour',
    },
    borderRadius: {
      options: ['xl', 'lg', 'md', 'sm'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Animation: Story = {
  args: {
    AnimationType: 'default',
    size: "w-1/12",
    colorDepth: 'bg-blue-100',
    textColor: 'text-blue-800',
    borderRadius: 'md',
  },
  render: (args) => <AlertAnimation {...args} />,
};

export const Infomation: Story = {
  args: {
    AnimationType: "information",
    size: "w-2/12",
    colorDepth: "bg-blue-500",
    textColor: "#ffffff",
    borderRadius: "xl"
  },

  render: args => <AlertAnimation {...args} />
};

export const Success: Story = {
  args: {
    AnimationType: "success",
    size: "w-2/12",
    colorDepth: "bg-green-500",
    textColor: "#ffffff",
    borderRadius: "xl"
  },

  render: args => <AlertAnimation {...args} />
};

export const Error: Story = {
  args: {
    AnimationType: "destructive",
    size: "w-2/12",
    colorDepth: "bg-red-500",
    textColor: "#ffffff",
    borderRadius: "xl"
  },

  render: args => <AlertAnimation {...args} />
};

export const Warning: Story = {
  args: {
    AnimationType: "warning",
    size: "w-2/12",
    colorDepth: "bg-yellow-500",
    textColor: "#ffffff",
    borderRadius: "xl"
  },

  render: args => <AlertAnimation {...args} />
};
