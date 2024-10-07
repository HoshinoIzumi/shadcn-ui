import React from "react";
import { Meta, Story } from "@storybook/react";
import AvatarDemo from "./avatar-demo";

// Storybook: Meta configuration for AvatarDemo
export default {
  title: "Components/Avatar",
  component: AvatarDemo,
  argTypes: {
    size: {
      control: { type: 'range', min: 40, max: 100, step: 5 },
      defaultValue: 50,
      description: "The size of the avatar in pixels.",
    },
    username: {
      control: { type: "text" },
      defaultValue: "Mariana Castilho",
      description: "The name to be displayed in the dropdown menu.",
    },
    email: {
      control: { type: "text" },
      defaultValue: "notmyreal@email.com",
      description: "The email to be displayed in the dropdown menu.",
    },
    avatarSrc: {
      control: { type: "text" },
      defaultValue: "https://github.com/shadcn.png",
      description: "The URL of the avatar image.",
    },
  },
} as Meta;

// Template for the AvatarDemo component
const Template: Story = (args) => (
  <AvatarDemo
    username={args.username}
    email={args.email}
    avatarSrc={args.avatarSrc}
    size={args.size}
  />
);

// Default AvatarDemo story
export const Default = Template.bind({});
Default.args = {
  size: 50,
  username: "Mariana Castilho",
  email: "notmyreal@email.com",
  avatarSrc: "https://github.com/shadcn.png",
};
