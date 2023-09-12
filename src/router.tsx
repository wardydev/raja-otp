import { createBrowserRouter } from "react-router-dom";
import {
  ApiDeveloper,
  Dashboard,
  DepositSaldo,
  DetailPayment,
  DetailPaymentById,
  Login,
  OrderProduk,
  Register,
  RiwayatTransaksi,
  TermCondition,
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
    path: "/deposit/detail",
    element: (
      <ProtectedRoute>
        <DetailPayment />
      </ProtectedRoute>
    ),
  },
  {
    path: "/deposit/detail/:id",
    element: (
      <ProtectedRoute>
        <DetailPaymentById />
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
  {
    path: "/terms-codition",
    element: (
      <ProtectedRoute>
        <TermCondition />
      </ProtectedRoute>
    ),
  },
]);

export default router;
