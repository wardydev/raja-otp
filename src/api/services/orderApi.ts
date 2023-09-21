import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./helper";
import {
  IGetCancel,
  IGetFinish,
  IGetResend,
  IHistoryResponse,
  INewOrderBody,
  INewOrderResponse,
  IOrderResponse,
} from "./types";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery,
  tagTypes: ["Order"],
  endpoints: (builder) => ({
    postNewOrder: builder.mutation<INewOrderResponse, INewOrderBody>({
      query: (body) => ({
        url: "api/order/new",
        method: "POST",
        body,
      }),
    }),
    getOrder: builder.query<IOrderResponse, undefined>({
      query: () => "api/order",
    }),
    getHistory: builder.query<IHistoryResponse, number>({
      query: (page) => `api/order/history?page=${page}`,
    }),
    getCancel: builder.query<IGetCancel, number>({
      query: (id) => `api/order/cancel/${id}`,
    }),
    getResend: builder.query<IGetResend, number>({
      query: (id) => `api/order/resend/${id}`,
    }),
    getFinish: builder.query<IGetFinish, number>({
      query: (id) => `api/order/finish/${id}`,
    }),
  }),
});

export const {
  usePostNewOrderMutation,
  useGetOrderQuery,
  useGetHistoryQuery,
  useLazyGetCancelQuery,
  useLazyGetResendQuery,
  useLazyGetFinishQuery,
} = orderApi;
