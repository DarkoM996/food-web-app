import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Link } from "react-router";
import {
  LayoutDashboard,
  Logs,
  Heart,
  CreditCard,
  Settings,
  User,
  Columns,
} from "lucide-react";

const SidebarMenu = () => {
  return (
    <Command className="bg-neutral-50">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <LayoutDashboard className="mr-2 h-4 w-4" />
            <Link to="/">Dashboard</Link>
          </CommandItem>
          <CommandItem>
            <Logs className="mr-2 h-4 w-4" />
            <Link to="/">Orders</Link>
          </CommandItem>
          <CommandItem>
            <Heart className="mr-2 h-4 w-4" />
            <Link to="/">Favorites</Link>
          </CommandItem>
          <CommandItem>
            <Columns className="mr-2 h-4 w-4" />
            <Link to="/">Menu Layouts</Link>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <Link to="/">Profile</Link>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <Link to="/">Booking</Link>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <Link to="/">Settings</Link>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default SidebarMenu;
