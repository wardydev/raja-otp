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
  defaultValueTrigger: boolean;
}
interface ISidebarDrawer {
  isOpen: boolean;
  handleDrawer: () => void;
  openModal?: () => void;
}
interface ILayout {
  children: ReactNode;
}
interface IHeader {
  handleDrawer: () => void;
  onCloseModal: () => void;
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
  options: string[];
  defaultValue?: string | undefined;
  defaultValueTrigger: boolean;
}
interface IDropdownCountry {
  label: string;
  optionChange: (option: CountryResponseItem) => void;
  options: CountryResponseItem[];
  defaultValue: string | undefined;
  defaultValueTrigger: boolean;
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
  itemId: number;
  onChange: () => void;
}
interface ITableHistory {
  data: IHistoryDataItem[] | undefined;
}
interface Package {
  name: string;
  price: number;
  description: string;
  isSpecial: boolean;
}

interface PricingProps {
  packages: Package[];
}
interface ITableDeposit {
  setIsPending: React.Dispatch<React.SetStateAction<boolean>>;
  setDepositId: React.Dispatch<React.SetStateAction<number | undefined>>;
  depositId: number | undefined;
}
interface ItemPayment {
  amount: number;
  created_at: number;
  id: number;
  payment: string;
  status: string;
}
interface IRenderDetailAction {
  item: ItemPayment;
  depositId: number | undefined | null;
  page: number;
}
interface IPaymentProceed {
  setDeposit: React.Dispatch<React.SetStateAction<number | null>>;
}
interface ICardDataTable {
  data: IOrderResponseItem[] | undefined;
  onChange: () => void;
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
  PricingProps,
  ITableDeposit,
  IRenderDetailAction,
  IPaymentProceed,
  ICardDataTable,
};
