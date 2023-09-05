import { createApi } from "@reduxjs/toolkit/query/react";
import { UserResponse } from "./types";
import { baseQuery } from "./helper";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query<UserResponse, undefined>({
      query: () => `api/user/me`,
    }),
  }),
});

export const { useGetMeQuery } = userApi;
