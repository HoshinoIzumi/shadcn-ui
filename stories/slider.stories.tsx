import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import SliderDemo from './slider-demo';

export default {
  title: 'Components/SliderDemo',
  component: SliderDemo,
  argTypes: {
    defaultValue: { control: 'array', description: 'Default slider value' },
    max: { control: 'number', description: 'Maximum value of the slider' },
    step: { control: 'number', description: 'Step interval for the slider' },
    className: { control: 'text', description: 'Custom class name for slider' },
    backgroundColor: {
      control: { type: 'select', options: ['bg-gray-200', 'bg-gray-400', 'bg-green-300', 'bg-red-200'] },
      description: 'Background color for the slider',
    },
    trackColor: {
      control: { type: 'select', options: ['bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-pink-500'] },
      description: 'Track color of the slider',
    },
    thumbColor: {
      control: { type: 'select', options: ['bg-red-500', 'bg-yellow-400', 'bg-blue-700', 'bg-purple-500'] },
      description: 'Thumb color for the slider',
    },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
      description: 'Slider size (height and thumb size)',
    },
  },
  parameters: {
    actions: {
      handles: ['onChange', 'onValueChange'],
    },
  },
} as ComponentMeta<typeof SliderDemo>;

// Define the default template for the slider
const Template: ComponentStory<typeof SliderDemo> = (args) => <SliderDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultValue: [50],
  max: 100,
  step: 1,
  className: 'w-[60%]',
  backgroundColor: 'bg-gray-200',
  trackColor: 'bg-blue-500',
  thumbColor: 'bg-red-500',
  size: 'medium',
};


