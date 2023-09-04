import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginBody,
  LoginResponse,
  RegisterBody,
  RegisterResponse,
} from "./types";

export const authApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => ({
    postLogin: builder.mutation<LoginResponse, LoginBody>({
      query: (body) => ({
        url: "api/auth/login",
        method: "POST",
        body,
      }),
    }),
    postRegister: builder.mutation<RegisterResponse, RegisterBody>({
      query: (body) => ({
        url: "api/auth/register",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { usePostLoginMutation, usePostRegisterMutation } = authApi;
