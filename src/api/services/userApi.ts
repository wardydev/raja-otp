import { createApi } from "@reduxjs/toolkit/query/react";
import { SettingBody, SettingResponse, UserResponse } from "./types";
import { baseQuery } from "./helper";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery,
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getMe: builder.query<UserResponse, undefined>({
      query: () => `api/user/me`,
    }),
    postSetting: builder.mutation<SettingResponse, SettingBody>({
      query: (body) => ({
        url: "api/user/setting",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useGetMeQuery, usePostSettingMutation } = userApi;
