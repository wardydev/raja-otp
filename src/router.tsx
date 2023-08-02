import { createBrowserRouter } from "react-router-dom";
import {
  ApiDeveloper,
  Dashboard,
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
    path: "/api-developer",
    element: <ApiDeveloper />,
  },
]);

export default router;
