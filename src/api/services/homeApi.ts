import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./helper";
import { NewsResponse } from "./types";

export const homeApi = createApi({
  reducerPath: "homeApi",
  baseQuery,
  tagTypes: ["Home"],
  endpoints: (builder) => ({
    getNews: builder.query<NewsResponse, number>({
      query: (page) => `api/home/news?page=${page}`,
    }),
  }),
});

export const { useGetNewsQuery } = homeApi;
