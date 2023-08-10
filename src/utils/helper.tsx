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

const DummyDataInformation = [
  {
    date: "02 05 2023",
    message:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    status: true,
  },
  {
    date: "02 07 2023",
    message:
      "elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
    status: true,
  },
  {
    date: "24 05 2023",
    message:
      "veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia ",
    status: true,
  },
  {
    date: "12 05 2023",
    message:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising ",
    status: false,
  },
];

const DummyDataHistory = [
  {
    date: "02 05 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    nominal: "Rp 12.000.00",
  },
  {
    date: "24 05 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    nominal: "Rp 23.000.00",
  },
  {
    date: "12 05 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
    nominal: "Rp 23.000.00",
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
  DummyDataInformation,
  DummyDataHistory,
};
