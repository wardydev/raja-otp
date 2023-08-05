import { ReactNode } from "react";

interface IDropdownItem {
  label: string;
  value: string;
}
interface IDropdown {
  label: string;
  options: IDropdownItem[];
  defaultValue: string;
}
interface ISidebarDrawer {
  isOpen: boolean;
  handleDrawer: () => void;
}
interface ILayout {
  children: ReactNode;
}
interface IHeader {
  handleDrawer: () => void;
}

export type { IDropdownItem, IDropdown, ISidebarDrawer, ILayout, IHeader };
