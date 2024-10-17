import React, { useState } from 'react';
import { 
  ContextMenu, 
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/registry/default/ui/context-menu";

export default function ContextMenuDemo({
  menuItems = [],
}) {
  const [bookmarksBar, setBookmarksBar] = useState(true);
  const [fullUrls, setFullUrls] = useState(false);
  const [person, setPerson] = useState('Pedro Duarte');

  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        Right click here
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        {menuItems.map((item, index) => {
          switch (item.type) {
            case 'item':
              return (
                <ContextMenuItem key={index} inset disabled={item.disabled}>
                  {item.label}
                  {item.shortcut && <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>}
                </ContextMenuItem>
              );
            case 'checkbox':
              return (
                <ContextMenuCheckboxItem 
                  key={index} 
                  checked={item.label === 'Show Bookmarks Bar' ? bookmarksBar : fullUrls} 
                  onCheckedChange={item.label === 'Show Bookmarks Bar' ? setBookmarksBar : setFullUrls}
                  className="pl-2"
                >
                  {item.label}
                  {item.shortcut && <ContextMenuShortcut>{item.shortcut}</ContextMenuShortcut>}
                </ContextMenuCheckboxItem>
              );
            case 'radio':
              return (
                <ContextMenuRadioItem key={index} value={item.value} onSelect={() => setPerson(item.value)}>
                  {item.label}
                </ContextMenuRadioItem>
              );
            case 'sub':
              return (
                <ContextMenuSub key={index}>
                  <ContextMenuSubTrigger inset>{item.label}</ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-48">
                    {item.subItems.map((subItem, subIndex) => (
                      <ContextMenuItem key={subIndex}>
                        {subItem.label}
                        {subItem.shortcut && <ContextMenuShortcut>{subItem.shortcut}</ContextMenuShortcut>}
                      </ContextMenuItem>
                    ))}
                  </ContextMenuSubContent>
                </ContextMenuSub>
              );
            case 'separator':
              return <ContextMenuSeparator key={index} />;
            default:
              return null;
          }
        })}
      </ContextMenuContent>
    </ContextMenu>
  );
}
