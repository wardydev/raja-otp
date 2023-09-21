import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  ForgetPasswordResponse,
  LoginBody,
  LoginResponse,
  RegisterBody,
  RegisterResponse,
} from "./types";

export const authApi = createApi({
  reducerPath: "authApi",
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
    postForgotPassword: builder.mutation<
      ForgetPasswordResponse,
      { email: string }
    >({
      query: (body) => ({
        url: "api/auth/forgot",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  usePostLoginMutation,
  usePostRegisterMutation,
  usePostForgotPasswordMutation,
} = authApi;
