import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Calculator, Calendar, Smile, User, CreditCard, Settings } from 'lucide-react';
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from '@/registry/default/ui/command'; // 你的Command组件路径

export default {
  title: 'Components/Command',
  component: CommandDialog,
  argTypes: {
    open: { control: 'boolean', defaultValue: false },
    placeholder: { control: 'text', defaultValue: 'Type a command or search...' },
    maxListHeight: { control: 'number', defaultValue: 300 },
    disableItem: { control: 'boolean', defaultValue: false },
    shortcuts: { control: 'object', defaultValue: { profile: '⌘P', billing: '⌘B', settings: '⌘S' } },
    commandItems: { control: 'object', defaultValue: ['Calendar', 'Search Emoji', 'Calculator'] },
    icons: { control: 'select', options: ['Calendar', 'Smile', 'Calculator', 'User', 'CreditCard', 'Settings'] },
  },
} as Meta;

const Template: Story = (args) => {
  const items = args.commandItems.map((item: string, index: number) => (
    <CommandItem key={item} disabled={args.disableItem && index === 2}>
      {args.icons === 'Calendar' ? <Calendar className="mr-2 h-4 w-4" /> : null}
      {args.icons === 'Smile' ? <Smile className="mr-2 h-4 w-4" /> : null}
      {args.icons === 'Calculator' ? <Calculator className="mr-2 h-4 w-4" /> : null}
      <span>{item}</span>
    </CommandItem>
  ));

  return (
    <CommandDialog open={args.open}>
      <CommandInput placeholder={args.placeholder} />
      <CommandList style={{ maxHeight: args.maxListHeight }}>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          {items}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>{args.shortcuts.profile}</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>{args.shortcuts.billing}</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>{args.shortcuts.settings}</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export const Command = Template.bind({});
CommandDialog.args = {
  open: false,
  placeholder: 'Type a command or search...',
  maxListHeight: 300,
  disableItem: false,
  shortcuts: { profile: '⌘P', billing: '⌘B', settings: '⌘S' },
  commandItems: ['Calendar', 'Search Emoji', 'Calculator'],
  icons: 'Calendar',
};
