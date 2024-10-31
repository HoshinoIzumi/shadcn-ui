import { Meta, StoryObj } from '@storybook/react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/registry/default/ui/accordion';
import { cn } from '@/lib/utils'; // TailwindCSS utility for className merging

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

// Default Accordion Story
export const Default: Story = {
  args: {
    type: 'single',
    density: 'spacious',
    size: 'M',
  },
  render: ({ density, size, ...args }) => (
    <Accordion {...args} className={getAccordionClasses(density, size)}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Item 1</AccordionTrigger>
        <AccordionContent>This is the content for Item 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Item 2</AccordionTrigger>
        <AccordionContent>This is the content for Item 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Colored Title Accordion Story
export const ColoredTitle: Story = {
  args: {
    type: 'single',
    bgColor: '#000000', // Default black
    fontColor: '#ffffff', // Default white
  },
  render: ({ bgColor, fontColor, ...args }) => (
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
          }}
        >
          Colored Title 1
        </AccordionTrigger>
        <AccordionContent>This is the content for Item 1.</AccordionContent>
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
          }}
        >
          Colored Title 2
        </AccordionTrigger>
        <AccordionContent>This is the content for Item 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Compact Density Accordion
export const Compact: Story = {
  args: {
    density: 'compact',
    size: 'M',
    type: 'multiple',
  },
  render: ({ density, size, ...args }) => (
    <Accordion {...args} className={getAccordionClasses(density, size)}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Compact Item 1</AccordionTrigger>
        <AccordionContent>This is content for Compact Item 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Compact Item 2</AccordionTrigger>
        <AccordionContent>This is content for Compact Item 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Spacious Density Accordion
export const Spacious: Story = {
  args: {
    density: 'spacious',
    size: 'L',
    type: 'multiple',
  },
  render: ({ density, size, ...args }) => (
    <Accordion {...args} className={getAccordionClasses(density, size)}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Spacious Item 1</AccordionTrigger>
        <AccordionContent>This is content for Spacious Item 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Spacious Item 2</AccordionTrigger>
        <AccordionContent>This is content for Spacious Item 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

// Accordion with Different Sizes
export const Sizes: Story = {
  render: (args) => (
    <div>
      {['S', 'M', 'L', 'XL'].map((size) => (
        <Accordion key={size} {...args} className={getAccordionClasses('spacious', size)}>
          <AccordionItem value={`item-${size}`}>
            <AccordionTrigger>{`Item ${size}`}</AccordionTrigger>
            <AccordionContent>{`This is content for ${size} size.`}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  ),
};

// Disabled Accordion
export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Disabled Item 1</AccordionTrigger>
        <AccordionContent>This item is disabled and not interactive.</AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
