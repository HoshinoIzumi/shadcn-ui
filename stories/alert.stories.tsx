import * as React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AlertAnimation from "./alert-animation";

export default {
  title: "Components/Alert",
  component: AlertAnimation,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["w-1/4", "w-1/2", "w-5/6"],
    },
    colorDepth: {
      control: { type: "select" },
      options: ['50', '100', '300', '400', '500', '600', '700', '800', '900'],
    },
    textColor: {
      control: { type: "select" },
      options: ["text-blue-800", "text-green-800", "text-red-800", "text-yellow-800", "text-blue-700"],
    },
    borderRadius: {
      control: { type: "select" },
      options: ['xl' ,'lg' , 'md' ,'sm'],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "destructive", "information", "warning", "success"],
    },
  },
}; 

export const Animation: StoryObj<typeof AlertAnimation> = {
  args: {
    size: "w-1/2",
    colorDepth:"primary",
    textColor: "text-blue-800",
    borderRadius: "md",
    variant: "default",
  },
  render: (args) => <AlertAnimation {...args} />,
};
