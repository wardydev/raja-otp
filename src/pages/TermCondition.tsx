import React from "react";
import { Layout } from "../components";

const TermCondition = () => {
  return (
    <Layout>
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6">Ketentuan Layanan</h1>
        <h2 className="text-xl font-semibold mb-2">Syarat & Ketentuan</h2>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">1. Umum</h3>
          <ul className="list-disc ml-5">
            <li>
              <p className="mb-2">
                Dengan mendaftar dan menggunakan layanan RajaOTP, Anda secara
                otomatis menyetujui semua ketentuan layanan kami.
              </p>
            </li>
            <li>
              <p className="mb-2">
                Kami berhak mengubah ketentuan layanan tanpa pemberitahuan
                terlebih dahulu. Anda diharapkan membaca semua ketentuan layanan
                kami sebelum membuat pesanan.
              </p>
            </li>
            <li>
              <p className="mb-2">
                Penolakan: RajaOTP tidak akan bertanggung jawab jika Anda
                mengalami kerugian dalam bisnis Anda.
              </p>
            </li>
            <li>
              <p className="mb-2">
                Kewajiban: RajaOTP tidak bertanggung jawab jika Anda mengalami
                suspensi akun atau penghapusan kiriman yang dilakukan oleh
                Instagram, Twitter, Facebook, Youtube, dan lain-lain, karena OTP
                ini.
              </p>
            </li>
            <li>
              <p className="mb-2">
                Larangan: Nomor yang dibeli di RajaOTP tidak boleh digunakan
                untuk penipuan ataupun tindakan ilegal yang serupa.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            2. Layanan & Pengembalian Dana
          </h3>
          <ul className="list-disc ml-5">
            <li>
              <p className="mb-2">
                RajaOTP hanya digunakan untuk menerima SMS OTP dari aplikasi
                yang anda pilih saja.
              </p>
            </li>
            <li>
              <p className="mb-2">
                RajaOTP tidak menjamin keamanan akun yang anda daftarkan
                menggunakan nomor RajaOTP.
              </p>
            </li>
            <li>
              <p className="mb-2">
                RajaOTP tidak menerima permintaan pembatalan/refund setelah sms
                pertama diterima. Kami memberikan pengembalian dana hanya jika
                sms pertama tidak diterima.
              </p>
            </li>
            <li>
              <p className="mb-2">RajaOTP hanya menjamin SMS Pertama.</p>
            </li>
            <li>
              <p className="mb-2">
                RajaOTP tidak menerima permintaan refund setelah melakukan
                Deposit.
              </p>
            </li>
            <li>
              <p className="mb-2">
                Semua layanan yang ada di RajaOTP untuk applikasi/website
                official sesuai layanan yang dipilih, kami tidak bertanggung
                jawab jika ada kesalahan untuk penggunaan bukan dari applikasi
                official/resmi layanan.
              </p>
            </li>
            <li>
              <p className="mb-2">
                Kami tidak bisa mengembalikan pesanan yang udah selesai jika
                sewaktu-waktu butuh OTP lagi.
              </p>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold mb-2">3. Pemesanan & Harga</h3>
          <ul className="list-disc ml-5">
            <li>
              <p className="mb-2">
                Harga yang RajaOTP tawarkan dapat berubah sewaktu-waktu tanpa
                ada pemberitahuan.
              </p>
            </li>
            <li>
              <p className="mb-2">
                Pesanan yang sudah diinput tidak bisa dibatalkan oleh RajaOTP
                karena sistem kami sudah memakai sistem otomatis 24 Jam NonStop.
              </p>
            </li>
            <li>
              <p className="mb-2">
                Waktu pengerjaan yang RajaOTP lampirkan di deskripsi atau Note
                Layanan hanyalah perkiraan saja, karena Server bisa saja
                mengalami Overload.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default TermCondition;
