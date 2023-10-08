import { createApi } from "@reduxjs/toolkit/query/react";
import {
  LogoutResponse,
  SettingBody,
  SettingResponse,
  UserResponse,
} from "./types";
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
    getLogout: builder.query<LogoutResponse, undefined>({
      query: () => "api/auth/logout",
    }),
  }),
});

export const { useGetMeQuery, usePostSettingMutation, useLazyGetLogoutQuery } =
  userApi;
