import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import Watermark from "@/registry/default/ui/watermark";

const meta: Meta<typeof Watermark> = {
  title: "Components/Watermark",
  component: Watermark,
  argTypes: {
    content: {
      control: { type: "text" },
      description: "The text to display as a watermark.",
      defaultValue: "Watermark",
    },
    fontSize: {
      control: { type: "number" },
      description: "Font size of the watermark text.",
      defaultValue: 28,
    },
    opacity: {
      control: { type: "number", min: 0, max: 1, step: 0.1 },
      description: "Opacity of the watermark text.",
      defaultValue: 0.1,
    },
    count: {
      control: { type: "number" },
      description: "Number of watermarks to display.",
      defaultValue: 12,
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    content: "Watermark",
    fontSize: 28,
    opacity: 0.1,
    count: 12,
  },
  render: (args) => (
    <Watermark
      content={args.content}
      count={args.count}
      fontSize={args.fontSize}
      opacity={args.opacity}
    >
      <div style={{ height: "200px" }} />
    </Watermark>
  ),
};
