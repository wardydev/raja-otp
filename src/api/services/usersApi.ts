import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { UserData } from "./types";

export const usersApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserData, undefined>({
      query: () => "users",
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
