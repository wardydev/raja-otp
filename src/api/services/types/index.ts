type LoginBody = {
  username: string;
  password: string;
};
type RegisterBody = {
  email: string;
  username: string;
  password: string;
  phone: number | string;
};

interface LoginResponse {
  success: boolean;
  messages: string;
  data: {
    token: string;
    user: {
      id: number;
      email: string;
      username: string;
      phone: string;
      balance: number;
      apikey: string;
      verified: string;
      regdate: number;
    };
  };
}

interface RegisterResponse {
  success: boolean;
  messages: string;
  data: {
    email: string;
    username: string;
    phone: string;
    apikey: string;
    regdate: number;
    id: number;
  };
}

interface UserResponse {
  success: boolean;
  messages: string;
  data: {
    id: number;
    email: string;
    username: string;
    phone: string;
    balance: number;
    apikey: string;
    verified: string;
    regdate: number;
  };
}
interface SettingResponse {
  success: boolean;
  messages: string;
  data: string;
}
interface SettingBody {
  old_password: string;
  new_password: string;
}

interface NewsResponse {
  success: boolean;
  messages: string;
  data: {
    current_page: number;
    data: {
      id: number;
      category: string;
      content: string;
      created_at: number;
    }[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
      url: null;
      label: string;
      active: boolean;
    }[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: null;
    to: number;
    total: number;
  };
}

interface CountryResponseItem {
  id: number;
  country_name: string;
}

interface CountryResponse {
  success: boolean;
  messages: string;
  data: CountryResponseItem[];
}

interface OperatorResponse {
  success: boolean;
  messages: string;
  data: [];
}

interface ServiceCountryItem {
  id: number;
  name: string;
  price: number;
  icon: string;
}

interface ServiceCountryResponse {
  success: boolean;
  messages: string;
  data: ServiceCountryItem[];
}
interface INewOrderResponse {
  success: boolean;
  messages: string;
  data: {
    id: number;
    number: string;
  };
}

interface INewOrderBody {
  service_id: number | undefined;
  operator: string | undefined;
}
export interface IOrderResponseItem {
  id: number;
  number: number;
  inbox: null | string;
  status: string;
  expired_at: number;
  sv_name: string;
}
interface IOrderResponse {
  success: boolean;
  messages: string;
  data: IOrderResponseItem[];
}
interface IOrderBody {
  id: number | undefined;
  number: string | undefined;
}
interface IHistoryDataItem {
  id: number;
  order_price: number;
  number: number;
  inbox: null | string;
  status: string;
  created_at: number;
  sv_name: string;
}
interface IHistoryResponse {
  success: boolean;
  messages: string;
  data: {
    current_page: number;
    data: IHistoryDataItem[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
      url: null | string;
      label: string;
      active: boolean;
    }[];
    next_page_url: string;
    path: string;
    per_page: number;
    prev_page_url: null | string;
    to: number;
    total: number;
  };
}
interface IHistoryDepositItem {
  id: number;
  amount: number;
  payment: string;
  status: string;
  created_at: number;
}
interface IHistoryDepositResponse {
  success: boolean;
  messages: string;
  data: {
    current_page: number;
    data: IHistoryDepositItem[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: {
      url: null | string;
      label: string;
      active: boolean;
    }[];
    next_page_url: null | string;
    path: string;
    per_page: number;
    prev_page_url: null | string;
    to: number;
    total: number;
  };
}

interface ItemGetPayment {
  pm_name: string;
  pm_key: string;
}

interface IGetPaymentResponse {
  success: boolean;
  messages: string;
  data: ItemGetPayment[];
}

interface IPostNewPaymentBody {
  pm_key: string | undefined;
  amount: number | undefined;
}
interface IPostNewPaymentResponse {
  success: boolean;
  messages: string;
  data: {
    de_amount2: number;
    id: number;
  };
}
export interface ItemDetailPayment {
  id: number;
  amount: number;
  amount2: number;
  payment: string;
  status: string;
  data: string;
  created_at: string;
  expired_at: string;
}
interface IGetDetailPayment {
  success: boolean;
  messages: string;
  data: ItemDetailPayment;
}
interface IGetCancel {
  success: boolean;
  messages: string;
  data: string;
}
interface IGetResend {
  success: boolean;
  messages: string;
  data: string;
}
interface IGetFinish {
  success: boolean;
  messages: string;
  data: string;
}

export type {
  LoginBody,
  LoginResponse,
  RegisterResponse,
  RegisterBody,
  UserResponse,
  NewsResponse,
  CountryResponse,
  OperatorResponse,
  ServiceCountryResponse,
  IOrderResponse,
  IOrderBody,
  INewOrderResponse,
  INewOrderBody,
  IHistoryResponse,
  IHistoryDataItem,
  IHistoryDepositResponse,
  IGetPaymentResponse,
  IPostNewPaymentBody,
  IPostNewPaymentResponse,
  IGetDetailPayment,
  IGetCancel,
  SettingResponse,
  SettingBody,
  IGetResend,
  IGetFinish,
};
