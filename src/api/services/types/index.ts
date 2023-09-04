type GeoLocation = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoLocation;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type UserData = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

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

export type {
  UserData,
  LoginBody,
  LoginResponse,
  RegisterResponse,
  RegisterBody,
};
