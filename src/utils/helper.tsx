const itemsTabbar = [
  {
    title: "FAQ OTP",
    content: [
      <li className="text-dark mb-1">
        Anda dapat order banyak nomor sekaligus cukup dengan klik tombol Order
        Nomor beberapa kali.
      </li>,
      <li className="text-dark mb-1">
        Jika Anda membutuhkan 2 SMS atau lebih, Anda bisa menekan tombol Resend
        saat SMS pertama sudah diterima.
      </li>,
      <li className="text-dark mb-1">
        Apabila menurut Anda SMS yang diterima terlalu lama, Anda dapat
        membatalkan orderan tersebut.
      </li>,
      <li className="text-dark mb-1">
        Saldo Anda akan Dikembalikan apabila nomor telah dibatalkan (manual atau
        otomatis dari sistem).
      </li>,
      <li className="text-dark mb-1">
        Masa berlaku / aktif nomor yang dipesan hanya berlaku selama 20 menit.
      </li>,
    ],
  },
  {
    title: "Tutorial Cara Order OTP",
    content: [
      <li className="text-dark mb-1">
        Pilih menu Order Produk terlebih dahulu.
      </li>,
      <li className="text-dark mb-1">
        Pilih Operator serta Layanan Aplikasi yang ingin digunakan.
      </li>,
      <li className="text-dark mb-1">
        Selanjutnya pastikan bahwa Saldo anda mencukupi sesuai dengan harga
        layanan.
      </li>,
      <li className="text-dark mb-1">
        Apabila sudah merasa benar, maka klik tombol Order Nomor.
      </li>,
      <li className="text-dark mb-1">
        Tunggu beberapa saat dan nomor akan muncul pada tabel dibawah form.
      </li>,
    ],
  },
  {
    title: "Tutorial Akses Laporan Transaksi",
    content: [
      <li className="text-dark mb-1">
        Klik tombol "Download Transaksi" terlebih dahulu.
      </li>,
      <li className="text-dark mb-1">
        Pilih Tanggal Periode dan Jenis Data yang akan di download
      </li>,
      <li className="text-dark mb-1">
        Klik tombol "Cari Data" untuk memulai mencari transaksi.
      </li>,
      <li className="text-dark mb-1">
        Tunggu beberapa saat dan nanti akan muncul popup untuk mengunduh data.
      </li>,
    ],
  },
  {
    title: "Official Group Chat",
    content: (
      <a href="https://t.me/infosiotpid" target="_blank" className="">
        <div className="w-full lg:w-1/5 px-0 lg:px-6 py-4 bg-gradient-to-tr from-[#30ADEC] to-[#088CCE] hover:from-[#3091ec] hover:to-[#086ece] rounded-xl text-light font-medium transition-all flex items-center justify-center">
          Join Grup Telegram
        </div>
      </a>
    ),
  },
];

const itemsTutorialQris = {
  heading: <h3>Tutorial Penggunaan QRIS</h3>,
  content: [
    <li className="text-dark mb-1">
      Buka aplikasi e-payment kamu, terserah bisa OVO, ShopeePay, DANA, Dll.
    </li>,
    <li className="text-dark mb-1">
      Pilih metode pembayaran scan by QRIS dan klik “Bayar sekarang”.
    </li>,
    <li className="text-dark mb-1">
      Selanjutnya kamu akan diarahkan ke halaman konfirmasi nominal transaksi.
    </li>,
    <li className="text-dark mb-1">
      Cek kembali nominal transaksi kamu, pastikan sudah sesuai seperti
      diaplikasi.
    </li>,
    <li className="text-dark mb-1">
      Masukan PIN untuk melanjutkan transaksi.
    </li>,
    <li className="text-dark mb-1">Pembayaran berhasil dilakukan.</li>,
    <li className="text-dark mb-1">
      Permintaan akan divalidasi oleh sistem kami maksimal 30 menit.
    </li>,
  ],
};

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
    title: "Order Nomor",
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
];
const menuNavItemsUnprotectRoutes = [
  {
    title: "Home",
    path: "/landing-page",
    iconActive: "/icons/IDashboard.svg",
    icon: "/icons/IDashboardLight.svg",
  },
  {
    title: "Ketentuan Layanan",
    path: "/terms-codition",
    iconActive: "/icons/IOrder.svg",
    icon: "/icons/IOrderLight.svg",
  },
  {
    title: "API Developer",
    path: "/api-developer",
    iconActive: "/icons/IHistory.svg",
    icon: "/icons/IHistoryLight.svg",
  },
  {
    title: "Login",
    path: "/login",
    iconActive: "/icons/IHistory.svg",
    icon: "/icons/IHistoryLight.svg",
  },
  {
    title: "Daftar",
    path: "/register",
    iconActive: "/icons/IHistory.svg",
    icon: "/icons/IHistoryLight.svg",
  },
];

const itemPackage = [
  {
    name: "Paket Prajurit",
    price: 5000,
    description:
      "Prajurit gak pernah ragu membela rajanya. Masih Ragu? Coba aja dulu!😏",
    isSpecial: false,
  },
  {
    name: "Paket Panglima",
    price: 50000,
    description:
      "Jika menjadi panglima adalah pilihan terbaikmu. Coba paket ini!😉",
    isSpecial: false,
  },
  {
    name: "Paket Raja",
    price: 100000,
    description:
      "Congrats! Kamu berada di level yang tertinggi. Nikmatilah! 😊",
    isSpecial: true,
  },
];

const ApiMenus = [
  {
    id: 1,
    title: "Get Number",
  },
  {
    id: 2,
    title: "Get Otp / Cek Status",
  },
  {
    id: 3,
    title: "Change Status",
  },
  {
    id: 4,
    title: "Daftar Layanan",
  },
  {
    id: 5,
    title: "Daftar Negara Dan Operator",
  },
  {
    id: 6,
    title: "Get Price",
  },
];

const ApiMenusContent = [
  {
    id: 1,
    content: (
      <div>
        <h1 className="mb-6 text-2xl font-bold text-dark">Get Number</h1>
        <div className="mb-8">
          <h4 className="text-xl font-medium text-dark mb-4">URL</h4>
          <pre className="text-[#4690ff] bg-[white] shadow p-3 rounded">
            POST https://siotp.id/api/order
          </pre>
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-medium text-dark mb-4">Example</h4>
          <pre className="text-[#4690ff] bg-[white] shadow p-3 rounded">
            GET
            https://siotp.id/api/order?apikey=c6d522f62a87659cdcb73061fa6ae8cd&service=1&operator=any&country=1
          </pre>
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-medium text-dark mb-4">Parameter</h4>
          <table className="min-w-full">
            <thead className="shadow">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  PARAMETER
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  VALUE
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  VALUE
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  DESCRIPTION
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">apikey</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    c6d522f62a87659cdcb73061fa6ae8cd
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">Yes</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    API Key anda terletak pada bagian pengaturan akun atau klik
                    disini
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-medium text-dark mb-4">
            Response Sukses
          </h4>
          <pre className="text-[#4690ff] bg-[white] shadow p-3 rounded">
            {JSON.stringify(
              {
                status: "success",
                id: 0,
                number: "6281390023067",
              },
              null,
              2
            )}
          </pre>
        </div>
        <div className="mb-8">
          <h4 className="text-xl font-medium text-dark mb-4">Response Gagal</h4>
          <pre className="text-[#4690ff] bg-[white] shadow p-3 rounded">
            {JSON.stringify(
              {
                status: "error",
                message:
                  "Invalid API Key" ||
                  "Invalid Service ID" ||
                  "Insufficient Balance",
              },
              null,
              2
            )}
          </pre>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    content: <h1>content 2</h1>,
  },
  {
    id: 3,
    content: <h1>content 3</h1>,
  },
  {
    id: 4,
    content: <h1>content 4</h1>,
  },
  {
    id: 5,
    content: <h1>content 5</h1>,
  },
  {
    id: 6,
    content: <h1>content 6</h1>,
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
  itemsTutorialQris,
  itemPackage,
  menuNavItemsUnprotectRoutes,
  ApiMenus,
  ApiMenusContent,
};
