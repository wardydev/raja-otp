import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./helper";
import {
  CountryResponse,
  OperatorResponse,
  ServiceCountryResponse,
} from "./types";

export const serviceApi = createApi({
  reducerPath: "serviceApi",
  baseQuery,
  tagTypes: ["Service"],
  endpoints: (builder) => ({
    getCountry: builder.query<CountryResponse, undefined>({
      query: () => "api/service/country",
    }),
    getOperator: builder.query<OperatorResponse, number>({
      query: (countryId) => `api/service/operator/${countryId}`,
    }),
    getServiceCountryId: builder.query<ServiceCountryResponse, number>({
      query: (countryId) => `api/service/get/${countryId}`,
    }),
  }),
});

export const {
  useGetCountryQuery,
  useGetOperatorQuery,
  useGetServiceCountryIdQuery,
} = serviceApi;
