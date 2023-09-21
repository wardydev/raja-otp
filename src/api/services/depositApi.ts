import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./helper";
import {
  IGetCancel,
  IGetDetailPayment,
  IGetPaymentResponse,
  IHistoryDepositResponse,
  IPostNewPaymentBody,
  IPostNewPaymentResponse,
} from "./types";

export const depositApi = createApi({
  reducerPath: "depositApi",
  baseQuery,
  tagTypes: ["Deposit"],
  endpoints: (builder) => ({
    getHistory: builder.query<IHistoryDepositResponse, number>({
      query: (page) => `api/deposit/history?page=${page}`,
    }),
    getPayment: builder.query<IGetPaymentResponse, undefined>({
      query: () => "api/deposit/payment",
    }),
    postNewPayment: builder.mutation<
      IPostNewPaymentResponse,
      IPostNewPaymentBody
    >({
      query: (body) => ({
        url: "api/deposit/new",
        method: "POST",
        body,
      }),
    }),
    getDetailPayment: builder.query<IGetDetailPayment, number | null>({
      query: (id) => `api/deposit/detail/${id}`,
    }),
    getCancel: builder.query<IGetCancel, number | null | undefined>({
      query: (id) => `api/deposit/cancel/${id}`,
    }),
  }),
});

export const {
  useGetHistoryQuery,
  useGetPaymentQuery,
  usePostNewPaymentMutation,
  useGetDetailPaymentQuery,
  useGetCancelQuery,
  useLazyGetCancelQuery,
  useLazyGetDetailPaymentQuery,
} = depositApi;
