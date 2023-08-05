const itemsTabbar = [
  {
    title: "FAQ OTP",
    content: "lorem ipsum FAQ",
  },
  {
    title: "Tutorial Cara Order OTP",
    content: "lorem ipsum Tutorial Cara Order OTP",
  },
  {
    title: "Tutorial Akses Laporan Transaksi",
    content: "1. lorem ipsum Tutorial Akses Laporan Transaksi 2. asdfjasdf",
  },
  {
    title: "Official Group Chat",
    content: "lorem ipsum Official Group Chat",
  },
];

const DummyDataTableOrder = [
  {
    virtualNumber: 6287615241625,
    message: "Ini adalah kode OTP anda Ini adalah kode OTP",
    otp: 237834,
    remainingTime: 19.7,
  },
  {
    virtualNumber: 6287629341610,
    message: "Ini adalah kode OTP anda Ini adalah kode OTP",
    otp: 67342,
    remainingTime: 19.7,
  },
];

const options = [
  { label: "XL Axiata", value: "Axiata" },
  { label: "Gojek", value: "Gojek" },
  { label: "Gocar", value: "Gocar" },
  { label: "Tokopedia", value: "tokopedia" },
];

function enterFullscreen() {
  const elem = document.documentElement;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  }
}

function exitFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}

const menuNavItems = [
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

export {
  itemsTabbar,
  DummyDataTableOrder,
  options,
  enterFullscreen,
  exitFullscreen,
  menuNavItems,
};
