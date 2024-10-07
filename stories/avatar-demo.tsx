import React from "react"
import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/default/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/registry/default/ui/dropdown-menu"

function AvatarDemo({ username, email, avatarSrc, size }) {
  const openGitHub = () => {
    window.open("https://github.com/Programming-is-like-breathing-air", "_blank");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div style={{ cursor: "pointer" }}>
          <Avatar style={{ width: `${size}px`, height: `${size}px` }}>
            <AvatarImage
              src={avatarSrc}
              alt={username}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72">
        <DropdownMenuLabel>
          {username}
          <br /> {email}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Billing</span>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={openGitHub}>
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem style={{ color: "#EF4444" }}>
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AvatarDemo;
