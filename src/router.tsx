import { createBrowserRouter } from "react-router-dom";
import {
  ApiDeveloper,
  Dashboard,
  DepositSaldo,
  OrderProduk,
  RiwayatTransaksi,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/order",
    element: <OrderProduk />,
  },
  {
    path: "/history",
    element: <RiwayatTransaksi />,
  },
  {
    path: "/deposit",
    element: <DepositSaldo />,
  },
  {
    path: "/api-developer",
    element: <ApiDeveloper />,
  },
]);

export default router;
