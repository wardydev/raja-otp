import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./helper";
import { IHistoryResponse, ISearchFilterByDateBody } from "./types";

export const historyApi = createApi({
  reducerPath: "historyApi",
  baseQuery,
  tagTypes: ["History"],
  endpoints: (builder) => ({
    getHistorySearchByName: builder.query<
      IHistoryResponse,
      { name: string; page: number }
    >({
      query: ({ name, page }) =>
        `api/order/history/search/${name}?page=${page}`,
    }),
    postHistoryByDate: builder.mutation<
      IHistoryResponse,
      ISearchFilterByDateBody
    >({
      query: ({ body, page }) => ({
        url: `api/order/history/filter?page=${page}`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetHistorySearchByNameQuery,
  usePostHistoryByDateMutation,
  useLazyGetHistorySearchByNameQuery,
} = historyApi;
