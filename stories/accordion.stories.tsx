import { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/registry/default/ui/accordion';
import { cn } from '@/lib/utils';

const meta: Meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['single', 'multiple'],
      description: 'Controls whether one or multiple items can be open at once',
    },
    density: {
      control: { type: 'select' },
      options: ['compact', 'spacious'],
      description: 'Defines the density of the accordion',
    },
    size: {
      control: { type: 'select' },
      options: ['S', 'M', 'L', 'XL'],
      description: 'Controls the size of the accordion',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the accordion',
    },
    bgColor: {
      control: 'color',
      description: 'Sets the background color of the accordion title',
      name: 'Title Background Color',
    },
    fontColor: {
      control: 'color',
      description: 'Sets the text color of the accordion title',
      name: 'Title Text Color',
    },
    borderColor: {
      control: 'color',
      description: 'Sets the border color when focused',
      name: 'Focus Border Color',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Accordion>;

// Helper function to generate classes for density and size
const getAccordionClasses = (density: string, size: string) => {
  const densityClass = density === 'compact' ? 'gap-2 py-2' : 'gap-4 py-4';
  const sizeClass = {
    S: 'text-sm',
    M: 'text-base',
    L: 'text-lg',
    XL: 'text-xl',
  }[size];
  return cn(densityClass, sizeClass);
};

// Default Accordion Story with padding adjustments
export const Default: Story = {
  args: {
    type: 'single',
    density: 'spacious',
    size: 'M',
    borderColor: null,
  },
  render: ({ density, size, borderColor, ...args }) => (
    <Accordion {...args} className={getAccordionClasses(density, size)}>
      <AccordionItem value="item-1">
        <AccordionTrigger
          className={`p-2 rounded-md ${
            borderColor ? 'focus:outline-none focus:ring-2' : ''
          } hover:bg-gray-100`}
          style={borderColor ? { '--tw-ring-color': borderColor } : undefined as React.CSSProperties}
        >
          Item 1
        </AccordionTrigger>
        <AccordionContent className="mt-2 ml-2">
          This is the content for Item 1.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          className={`p-2 rounded-md ${
            borderColor ? 'focus:outline-none focus:ring-2' : ''
          } hover:bg-gray-100`}
          style={borderColor ? { '--tw-ring-color': borderColor } : undefined as React.CSSProperties}
        >
          Item 2
        </AccordionTrigger>
        <AccordionContent className="mt-2 ml-2">
          This is the content for Item 2.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Colored Title Accordion Story with padding adjustments
export const ColoredTitle: Story = {
  args: {
    type: 'single',
    bgColor: '#000000',
    fontColor: '#ffffff',
    borderColor: '#ffffff', 
  },
  render: ({ bgColor, fontColor, borderColor, ...args }) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger
          style={{
            backgroundColor: bgColor,
            color: fontColor,
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: '500',
            ...(borderColor ? { '--tw-ring-color': borderColor } : {}),
          }}
          className={`focus:outline-none ${borderColor ? 'focus:ring-2' : ''} hover:bg-opacity-80`}
        >
          Colored Title 1
        </AccordionTrigger>
        <AccordionContent className="mt-3 ml-3">
          This is the content for Item 1.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger
          style={{
            backgroundColor: bgColor,
            color: fontColor,
            padding: '0.5rem 1rem',
            borderRadius: '0.375rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontWeight: '500',
            ...(borderColor ? { '--tw-ring-color': borderColor } : {}),
          }}
          className={`focus:outline-none ${borderColor ? 'focus:ring-2' : ''} hover:bg-opacity-80`}
        >
          Colored Title 2
        </AccordionTrigger>
        <AccordionContent className="mt-3 ml-3">
          This is the content for Item 2.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Compact Density Accordion with padding adjustments
export const Compact: Story = {
  args: {
    density: 'compact',
    size: 'M',
    type: 'multiple',
  },
  render: ({ density, size, ...args }) => (
    <Accordion {...args} className={getAccordionClasses(density, size)}>
      <AccordionItem value="item-1">
        <AccordionTrigger className="p-3 rounded-md focus:outline-none focus:ring-2 hover:bg-gray-100">
          Compact Item 1
        </AccordionTrigger>
        <AccordionContent className="mt-1 ml-2">
          This is content for Compact Item 1.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="p-3 rounded-md focus:outline-none focus:ring-2 hover:bg-gray-100">
          Compact Item 2
        </AccordionTrigger>
        <AccordionContent className="mt-1 ml-2">
          This is content for Compact Item 2.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Spacious Density Accordion with padding adjustments
export const Spacious: Story = {
  args: {
    density: 'spacious',
    size: 'L',
    type: 'multiple',
  },
  render: ({ density, size, ...args }) => (
    <Accordion {...args} className={getAccordionClasses(density, size)}>
      <AccordionItem value="item-1">
        <AccordionTrigger className="p-5 rounded-md focus:outline-none focus:ring-2 hover:bg-gray-100">
          Spacious Item 1
        </AccordionTrigger>
        <AccordionContent className="mt-4 ml-3">
          This is content for Spacious Item 1.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="p-5 rounded-md focus:outline-none focus:ring-2 hover:bg-gray-100">
          Spacious Item 2
        </AccordionTrigger>
        <AccordionContent className="mt-4 ml-3">
          This is content for Spacious Item 2.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Disabled Accordion with padding adjustments
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger className="p-4 rounded-md text-gray-500 cursor-not-allowed">
          Disabled Item 1
        </AccordionTrigger>
        <AccordionContent className="mt-2 ml-2">
          This item is disabled and not interactive.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
