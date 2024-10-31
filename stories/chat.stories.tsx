import { Meta, Story } from '@storybook/react';
import NormalChat from './chat-demo';
import { useState } from 'react';

export default {
  title: 'Components/Chat',
  component: NormalChat,
  argTypes: {
    bgColor: {
      control: 'color',
      description: 'Sets the background color for sent messages',
      name: 'Sent Message Background',
    },
    fontColor: {
      control: 'color',
      description: 'Sets the font color for sent messages',
      name: 'Sent Message Font Color',
    },
    receivedBgColor: {
      control: 'color',
      description: 'Sets the background color for received messages',
      name: 'Received Message Background',
    },
    receivedFontColor: {
      control: 'color',
      description: 'Sets the font color for received messages',
      name: 'Received Message Font Color',
    },
    borderColor: {
      control: 'color',
      description: 'Sets the border color for the focus ring',
      name: 'Focus Border Color',
    },
  },
} as Meta;

const Template: Story = (args) => {
  const [messages, setMessages] = useState([
    { text: "Hi, how can I help you today?", type: "received" },
    { text: "Hey, I'm having trouble with my account.", type: "sent" },
  ]);

  const sendMessage = (message: string) => {
    if (message.trim()) {
      setMessages([...messages, { text: message, type: 'sent' }]);
    }
  };

  return <NormalChat {...args} messages={messages} sendMessage={sendMessage} />;
};

export const Default = Template.bind({});
Default.args = {
  bgColor: '#1A1A1A',
  fontColor: '#FFFFFF',
  receivedBgColor: '#E4E4E7',
  receivedFontColor: '#111827',
  borderColor: '#0000FF',
};
