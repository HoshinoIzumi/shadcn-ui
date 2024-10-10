import type { Meta, StoryObj } from '@storybook/react';
import TableDemo from './table-demo';

const meta: Meta<typeof TableDemo> = {
  title: 'Components/TableDemo',
  component: TableDemo,
  argTypes: {
    enableBgAndHover: {
      control: { type: 'boolean' },
      description: 'Enable or disable background and hover effect on rows.',
    },
    tableShadow: {
      control: { type: 'select' },
      options: ['shadow-none', 'shadow-sm', 'shadow-lg', 'shadow-xl', 'shadow-2xl'],
      description: 'Sets the shadow size for the table container using TailwindCSS shadow classes.',
    },
    tableWidth: {
      control: { type: 'select' },
      options: [
        'w-full', 'w-[400px]', 'w-[600px]', 'w-[800px]', 'w-[1000px]', 'w-[1200px]',
      ],
      description: 'Sets the width of the table container using TailwindCSS width classes.',
    },
    tableCaption: {
      control: 'text',
      description: 'The caption for the table.',
    },
    invoices: {
      control: 'object',
      description: 'An array of invoice data to be displayed in the table.',
    },
    rowAlignment: {
      control: { type: 'select' },
      options: ['text-left', 'text-center', 'text-right'],
      description: 'Sets the text alignment for the table rows.',
      defaultValue: 'text-left',
    },
    fontSize: {
      control: { type: 'select' },
      options: ['text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl'],
      description: 'Sets the font size for the table text.',
      defaultValue: 'text-base',
    },
    borderStyle: {
      control: { type: 'select' },
      options: ['border-solid', 'border-dashed', 'border-dotted'],
      description: 'Sets the border style for the table.',
      defaultValue: 'border-solid',
    },
  },
  args: {
    enableBgAndHover: false,
    tableShadow: 'shadow-none',
    tableWidth: 'w-full',
    tableCaption: 'A list of your recent invoices.',
    invoices: [
      { invoice: 'INV001', paymentStatus: 'Paid', totalAmount: '$250.00', paymentMethod: 'Credit Card' },
      { invoice: 'INV002', paymentStatus: 'Pending', totalAmount: '$150.00', paymentMethod: 'PayPal' },
      { invoice: 'INV003', paymentStatus: 'Unpaid', totalAmount: '$350.00', paymentMethod: 'Bank Transfer' },
      { invoice: 'INV004', paymentStatus: 'Paid', totalAmount: '$450.00', paymentMethod: 'Credit Card' },
    ],
    rowAlignment: 'text-left',
    fontSize: 'text-base',
    borderStyle: 'border-solid',
  },
  parameters: {
    layout: 'centered',
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    enableBgAndHover: false,
    tableShadow: 'shadow-none',
    tableWidth: 'w-full',
    rowAlignment: 'text-left',
    fontSize: 'text-base',
    borderStyle: 'border-solid',
  },
};

export const BigTable: Story = {
  args: {
    enableBgAndHover: false,
    tableShadow: "shadow-none",
    tableWidth: "w-[1000px]",
    tableCaption: "A list of your recent invoices.",

    invoices: [{
      "invoice": "INV001",
      "paymentStatus": "Paid",
      "totalAmount": "$250.00",
      "paymentMethod": "Credit Card"
    }, {
      "invoice": "INV002",
      "paymentStatus": "Pending",
      "totalAmount": "$150.00",
      "paymentMethod": "PayPal"
    }, {
      "invoice": "INV003",
      "paymentStatus": "Unpaid",
      "totalAmount": "$350.00",
      "paymentMethod": "Bank Transfer"
    }, {
      "invoice": "INV004",
      "paymentStatus": "Paid",
      "totalAmount": "$450.00",
      "paymentMethod": "Credit Card"
    }],

    rowAlignment: "text-center",
    fontSize: "text-base",
    borderStyle: "border-solid"
  }
};

export const WithShadow: Story = {
  args: {
    enableBgAndHover: false,
    tableShadow: "shadow-2xl",
    tableWidth: "w-full",
    tableCaption: "A list of your recent invoices.",

    invoices: [{
      "invoice": "INV001",
      "paymentStatus": "Paid",
      "totalAmount": "$250.00",
      "paymentMethod": "Credit Card"
    }, {
      "invoice": "INV002",
      "paymentStatus": "Pending",
      "totalAmount": "$150.00",
      "paymentMethod": "PayPal"
    }, {
      "invoice": "INV003",
      "paymentStatus": "Unpaid",
      "totalAmount": "$350.00",
      "paymentMethod": "Bank Transfer"
    }, {
      "invoice": "INV004",
      "paymentStatus": "Paid",
      "totalAmount": "$450.00",
      "paymentMethod": "Credit Card"
    }],

    rowAlignment: "text-left",
    fontSize: "text-base",
    borderStyle: "border-solid"
  }
};


// Story with background and hover enabled
export const WithBackgroundAndHover: Story = {
  args: {
    enableBgAndHover: true,
    tableShadow: 'shadow-2xl',
    tableWidth: 'w-[800px]',
    rowAlignment: "text-left",
    fontSize: 'text-lg',
    borderStyle: "border-solid",
  },
};


export const BorderAndTextStyles: Story = {
  args: {
    enableBgAndHover: true,
    tableShadow: 'shadow-xl',
    tableWidth: 'w-[600px]',
    tableCaption: 'Custom Invoice List',
    invoices: [
      { invoice: 'INV100', paymentStatus: 'Pending', totalAmount: '$1000.00', paymentMethod: 'Credit Card' },
      { invoice: 'INV101', paymentStatus: 'Paid', totalAmount: '$750.00', paymentMethod: 'PayPal' },
    ],
    rowAlignment: 'text-right',
    fontSize: 'text-xl',
    borderStyle: "border-dashed",
  },
};

