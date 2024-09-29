import React from 'react';
import { Button } from '@/registry/default/ui/button';
import { Toaster } from "@/registry/default/ui/toaster";
import { Loader2, Mail } from 'lucide-react';
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: { type: 'select', options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link', 'customize'] },
    },
    color: { // New color control
      control: { type: 'color' },
      defaultValue: '#000000', // Default to black
    },
    size: {
      control: { type: 'select', options: ['sm', 'default', 'lg', 'icon'] },
    },
    asChild: {
      table: { disable: true }, 
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Common centering style
const CenteredContainer = ({ children }) => (
  <div className="flex justify-center items-center h-full">{children}</div>
);

// Default button
export const Default: Story = {
  args: {
    children: 'Default Button',
    variant: 'default',
    color: '#000000', // Default color can be set here
  },
  render: (args) => (
    <CenteredContainer>
      <Button {...args} style={{ backgroundColor: args.color }}>
        {args.children}
      </Button>
    </CenteredContainer>
  ),
};

// Primary button
export const Primary: Story = {
  args: {
    variant: 'default',
    children: 'Primary Button',
    color: '',
  },
  render: (args) => (
    <CenteredContainer>
      <Button {...args} style={{ backgroundColor: args.color }}>
        {args.children}
      </Button>
    </CenteredContainer>
  ),
};

// Secondary button
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary Button',
    color: '',
  },
  render: (args) => (
    <CenteredContainer>
      <Button {...args} style={{ backgroundColor: args.color }}>
        {args.children}
      </Button>
    </CenteredContainer>
  ),
};

// Destructive button
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive Button',
    color: '#e74c3c',
  },
  render: (args) => (
    <CenteredContainer>
      <Button {...args} style={{ backgroundColor: args.color }}>
        {args.children}
      </Button>
    </CenteredContainer>
  ),
};

// Outline button
export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
    color: '',
  },
  render: (args) => (
    <CenteredContainer>
      <Button {...args} style={{ borderColor: args.color, color: args.color }}>
        {args.children}
      </Button>
    </CenteredContainer>
  ),
};

// Ghost button
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost Button',
    color: '',
  },
  render: (args) => (
    <CenteredContainer>
      <Button {...args} style={{ backgroundColor: 'transparent', color: args.color }}>
        {args.children}
      </Button>
    </CenteredContainer>
  ),
};

// Link button
export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
    color: '',
  },
  render: (args) => (
    <CenteredContainer>
      <Button {...args} style={{ backgroundColor: 'transparent', color: args.color }}>
        {args.children}
      </Button>
    </CenteredContainer>
  ),
};

// Button with icon
export const Icon: Story = () => (
  <CenteredContainer>
    <Button>
      <Mail className="mr-2 h-4 w-4" /> Icon Button
    </Button>
  </CenteredContainer>
);

// Loading button
export const Loading: Story = () => (
  <CenteredContainer>
    <Button disabled>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>
  </CenteredContainer>
);

// Button as child component example
export const AsChild: Story = () => (
  <CenteredContainer>
    <Button asChild>
      <a href="/login">Login</a>
    </Button>
  </CenteredContainer>
);

// Button with icon example
export const WithIcon: Story = () => (
  <CenteredContainer>
    <Button>
      <Mail className="mr-2 h-4 w-4" /> Login with Email
    </Button>
  </CenteredContainer>
);

// Button demo
export const ButtonDemo = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <CenteredContainer>
      <Toaster />
      <Button variant="outline" onClick={handleClick}>
        Button
      </Button>
    </CenteredContainer>
  );
};
