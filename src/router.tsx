import { createBrowserRouter } from "react-router-dom";
import {
  ApiDeveloper,
  Dashboard,
  DepositSaldo,
  Login,
  OrderProduk,
  Register,
  RiwayatTransaksi,
} from "./pages";
import ProtectedRoute from "./utils/protectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/order",
    element: (
      <ProtectedRoute>
        <OrderProduk />
      </ProtectedRoute>
    ),
  },
  {
    path: "/history",
    element: (
      <ProtectedRoute>
        <RiwayatTransaksi />
      </ProtectedRoute>
    ),
  },
  {
    path: "/deposit",
    element: (
      <ProtectedRoute>
        <DepositSaldo />
      </ProtectedRoute>
    ),
  },
  {
    path: "/api-developer",
    element: <ApiDeveloper />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
