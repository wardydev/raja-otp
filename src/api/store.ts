import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/authApi";
import { userApi } from "./services/userApi";
import { homeApi } from "./services/homeApi";
import { serviceApi } from "./services/serviceApi";
import { orderApi } from "./services/orderApi";
import { depositApi } from "./services/depositApi";
import { rtkQueryErrorLogger } from "./rtkQueryErrorLogger";
import { historyApi } from "./services/history";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [homeApi.reducerPath]: homeApi.reducer,
    [serviceApi.reducerPath]: serviceApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [depositApi.reducerPath]: depositApi.reducer,
    [historyApi.reducerPath]: historyApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(homeApi.middleware)
      .concat(serviceApi.middleware)
      .concat(orderApi.middleware)
      .concat(depositApi.middleware)
      .concat(historyApi.middleware)
      .concat(rtkQueryErrorLogger),
});
