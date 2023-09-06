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
};
