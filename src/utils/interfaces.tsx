interface IDropdownItem {
  label: string;
  value: string;
}

interface IDropdown {
  label: string;
  options: IDropdownItem[];
  defaultValue: string;
}

export type { IDropdownItem, IDropdown };
