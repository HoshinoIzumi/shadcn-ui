import type { Meta, StoryObj } from '@storybook/react';
import TabsDemo from './tabs-demo';

const meta: Meta<typeof TabsDemo> = {
  title: 'Components/TabsDemo',
  component: TabsDemo,
  argTypes: {
    width: {
      control: { type: 'select'}, options: ['w-[400px]', 'w-[500px]', 'w-[600px]', 'w-[700px]'] ,
      description: 'Select the width for the tabs container using TailwindCSS classes',
    },
    height: {
      control: { type: 'select'}, options: ['h-[400px]', 'h-[500px]', 'h-[600px]', 'h-[700px]'] ,
      description: 'Select the height for the tabs container using TailwindCSS classes',
    },
    tabTitles: {
      control: 'object',
      description: 'Custom titles for the tabs (Recent, Popular, Trending)',
    },
    cardContent: {
      control: 'object',
      description: 'Custom content for the cards displayed in tabs',
    },
    activeBgColor: {
      control: { type: 'boolean' },
      description: 'Enable or disable the orange background color for active tabs',
    },
    activeTextColor: {
      control: { type: 'select'}, options: ['text-white', 'text-black', ] ,
      description: 'Set the text color for active tabs using TailwindCSS classes',
    },
  },
  args: {
    defaultTab: 'recent',
    width: 'w-[400px]',
    height: 'h-[500px]',
    tabTitles: { recent: 'Recent', popular: 'Popular', trending: 'Trending' },
    cardContent: [
      { title: 'Lorem ipsum dolor sit amet', footer: '1h ago - 2 comments - 1 shares' },
      { title: 'Suspendisse eget ante viverra', footer: '1h ago - 3 comments - 2 shares' },
    ],
    activeBgColor: false,
    activeTextColor: 'text-black',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    height: "h-[500px]",
    defaultTab: "recent",
    activeBgColor: false,
    activeTextColor: "text-black"
  }
};

// Story with larger width and height
export const LargeTabs: Story = {
  args: {
    width: 'w-[600px]',
    height: 'h-[600px]',
    activeBgColor: false,
    activeTextColor: "text-black",
  },
};


export const WithHover: Story = {
  args: {
    activeBgColor: true,
    activeTextColor: "text-white",
  },
};
