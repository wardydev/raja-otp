import { Link, useLocation } from "react-router-dom";

const tabitems = [
  {
    title: "Dashboard",
    path: "/",
    iconActive: "/icons/IDashboard.svg",
    icon: "/icons/IDashboardLight.svg",
  },
  {
    title: "Order Produk",
    path: "/order",
    iconActive: "/icons/IOrder.svg",
    icon: "/icons/IOrderLight.svg",
  },
  {
    title: "Riwayat Transaksi",
    path: "/history",
    iconActive: "/icons/IHistory.svg",
    icon: "/icons/IHistoryLight.svg",
  },
  {
    title: "Deposit Saldo",
    path: "/deposit",
    iconActive: "/icons/IDeposit.svg",
    icon: "/icons/IDepositLight.svg",
  },
  {
    title: "API Developer",
    path: "/api-developer",
    iconActive: "/icons/IApiDevs.svg",
    icon: "/icons/IApiDevsLight.svg",
  },
];

const Menus = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-800 text-white px-10 pt-4">
      <div className="flex items-center space-x-4">
        {tabitems.map((tabItem) => (
          <Link
            key={tabItem.path}
            to={tabItem.path}
            className={`menuItem flex items-center space-x-2 px-4 py-4 font-medium rounded-md ${
              location.pathname === tabItem.path
                ? "bg-[white] bg-opacity-30 hover:bg-opacity-40 text-[white] active"
                : "text-[#ffffffb7] hover:text-[white]"
            }`}
          >
            <img
              src={
                location.pathname === tabItem.path
                  ? tabItem.iconActive
                  : tabItem.icon
              }
              alt={tabItem.title}
              className="w-5 h-5"
            />
            <span>{tabItem.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menus;
