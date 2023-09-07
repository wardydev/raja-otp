import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./helper";
import {
  IHistoryResponse,
  INewOrderBody,
  INewOrderResponse,
  IOrderBody,
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
    getOrder: builder.query<IOrderResponse, IOrderBody>({
      query: (body) => ({
        url: "api/order",
        method: "GET",
        params: body,
      }),
    }),
    getHistory: builder.query<IHistoryResponse, number>({
      query: (page) => `api/order/history?page=${page}`,
    }),
  }),
});

export const { usePostNewOrderMutation, useGetOrderQuery, useGetHistoryQuery } =
  orderApi;
