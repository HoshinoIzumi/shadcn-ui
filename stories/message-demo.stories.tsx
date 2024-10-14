import type { Meta, StoryObj } from '@storybook/react';
import MessageNormal from './message-demo';

const meta: Meta<typeof MessageNormal> = {
  title: 'Components/Message',
  component: MessageNormal,
  argTypes: {
    iconType: {
      options: ['duration', 'error', 'success', 'warning'],
      control: { type: 'select' },
      description: 'Select the type of message (duration, error, success, warning)',
    },
    messageContent: {
      control: 'text',
      description: 'Edit the content of the message',
    },
    duration: {
      control: { type: 'number', min: 1000, max: 10000, step: 100 },
      description: 'Set the display duration of the message in milliseconds',
    },
    backgroundColor: {
      control: 'color',
      description: 'Modify background colour',
    },
    buttonTextColor: {
      control: 'color',
      description: 'Modify the font colour of the button',
    },
    messageTextColor: {
      control: 'color',
      description: 'Modify the font colour of the displayed message',
    },
    size: {
      options: [
        'w-1/8', 'w-1/4', 'w-1/3', 'w-1/2', 'w-2/3', 'w-3/4', 'w-full',
      ],
      control: { type: 'select' },
      description: 'Controls the width of the message component',
    },
  },
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
      },
    },
  },
} satisfies Meta<typeof MessageNormal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconType: "duration",
    messageContent: "This is a default message!",
    duration: 3000,
    backgroundColor: "#000000",
    buttonTextColor: "#ffffff", 
    messageTextColor: "#ff0000", 
    size: "w-1/2"
  },
};

export const Error: Story = {
  args: {
    iconType: "error",
    messageContent: "This is a error message!",
    duration: 3000,
    backgroundColor: "#f5680c",
    buttonTextColor: "#ffffff",
    messageTextColor: "#ff0101",
    size: "w-1/2"
  }
};

export const Success: Story = {
  args: {
    iconType: "success",
    messageContent: "This is a success message!",
    duration: 3000,
    backgroundColor: "#f5680c",
    buttonTextColor: "#ffffff",
    messageTextColor: "#ffffff",
    size: "w-1/2"
  }
};

export const Warning: Story = {
  args: {
    iconType: "warning",
    messageContent: "This is a warning message!",
    duration: 3000,
    backgroundColor: "#f5680c",
    buttonTextColor: "#ffffff",
    messageTextColor: "#ffffff",
    size: "w-1/2"
  }
};
