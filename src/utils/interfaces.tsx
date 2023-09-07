/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from "react";
import { IHistoryDataItem, IOrderResponseItem } from "../api/services/types";

interface IDropdownItem {
  label: string;
  value: string;
}
interface IDropdown {
  label: string;
  optionChange: (option: any) => void;
  options: any;
  defaultValue: string | undefined;
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
interface IButton {
  title: string;
  handleButton: () => void;
  isDisabled?: boolean;
}
interface CountryResponseItem {
  id: number;
  country_name: string;
}
interface IOperatorResponseItem {
  data: [string];
}
interface IOperatorResponse {
  success: boolean;
  messages: string;
  data: IOperatorResponseItem;
}
interface ServiceByCountryResponse {
  id: number;
  name: string;
  price: number;
  icon: string;
}
interface IDropdownOperator {
  label: string;
  optionChange: (option: string) => void;
  options: [];
  defaultValue: string | undefined;
}
interface IDropdownCountry {
  label: string;
  optionChange: (option: CountryResponseItem) => void;
  options: CountryResponseItem[];
  defaultValue: string | undefined;
  setIsClearInput: React.Dispatch<React.SetStateAction<boolean>>;
}
interface ITableOrderProducts {
  data: IOrderResponseItem[];
  onChange: () => void;
}
interface IInboxColumn {
  status: string;
  inbox: string | null;
  onChange: () => void;
}
interface IActionColumn {
  status: string;
  inbox: string | null;
}
interface ITableHistory {
  data: IHistoryDataItem[] | undefined;
}

export type {
  IDropdownItem,
  IDropdown,
  ISidebarDrawer,
  ILayout,
  IHeader,
  IButton,
  CountryResponseItem,
  IOperatorResponse,
  ServiceByCountryResponse,
  IDropdownOperator,
  IDropdownCountry,
  ITableOrderProducts,
  IInboxColumn,
  IActionColumn,
  ITableHistory,
};
