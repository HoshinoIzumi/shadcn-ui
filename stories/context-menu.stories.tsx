import React from 'react';
import { Meta, Story } from '@storybook/react';
import ContextMenuDemo from './context-menu-demo'; 

export default {
  title: 'Components/ContextMenu',
  component: ContextMenuDemo,
  argTypes: {
    menuItems: {
      control: 'object',
      defaultValue: [
        { type: 'item', label: 'Back', shortcut: '⌘[', disabled: false },
        { type: 'item', label: 'Forward', shortcut: '⌘]', disabled: true },
        { type: 'separator' },
        { type: 'checkbox', label: 'Show Bookmarks Bar', checked: true, shortcut: '⌘⇧B' },
        { type: 'checkbox', label: 'Show Full URLs', checked: false },
        { type: 'separator' },
        { type: 'radio', label: 'Pedro Duarte', value: 'pedro' },
        { type: 'radio', label: 'Colm Tuite', value: 'colm' },
        {
          type: 'sub',
          label: 'More Tools',
          subItems: [
            { label: 'Save Page As...', shortcut: '⇧⌘S' },
            { label: 'Developer Tools' },
          ],
        },
      ],
    },
  },
} as Meta;

const Template: Story = (args) => <ContextMenuDemo {...args} />;

export const Default = Template.bind({});
Default.args = {
    menuItems: [
      { type: 'item', label: 'Back', shortcut: '⌘[', disabled: false },
      { type: 'item', label: 'Forward', shortcut: '⌘]', disabled: true },
      { type: 'separator' },
      { type: 'checkbox', label: 'Show Bookmarks Bar', checked: true, shortcut: '⌘⇧B' },
      { type: 'checkbox', label: 'Show Full URLs', checked: false },
      { type: 'separator' },
      { type: 'radio', label: 'Pedro Duarte', value: 'pedro' },
      { type: 'radio', label: 'Colm Tuite', value: 'colm' },
      {
        type: 'sub',
        label: 'More Tools',
        subItems: [
          { label: 'Save Page As...', shortcut: '⇧⌘S' },
          { label: 'Developer Tools' },
        ],
      },
    ],
  };
  
