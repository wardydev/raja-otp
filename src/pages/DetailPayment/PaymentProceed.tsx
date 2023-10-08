import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import ITime from "/icons/ITime.svg";
import {
  useGetDetailPaymentQuery,
  useGetHistoryQuery,
  useLazyGetCancelQuery,
} from "../../api/services/depositApi";
import { formatRupiah } from "../../utils/functions";
import { itemsTutorialQris } from "../../utils/helper";
import IQRCode from "/icons/IQRCode.svg";
import { useEffect } from "react";
import { LoadingSpinner } from "../../components";

const PaymentProceedPlaceholder = () => {
  return (
    <div className="w-full lg:w-[666px] bg-[white] rounded-xl p-8 flex items-center justify-center relative">
      <div className="flex flex-col items-center justify-center space-y-4 w-full lg:w-2/4 text-center">
        <img src={IQRCode} alt="qr-code icon" width={92} />
        <h5 className="text-[#C5C5C5] text-lg whitespace-pre-line">
          QR Code Akan Muncul Setelah Kamu Melanjutkan Pembayaran
        </h5>
      </div>
    </div>
  );
};

const PaymentProceed = ({ depositId }: { depositId: number | null }) => {
  const navigate = useNavigate();

  const { data, isLoading, isSuccess, refetch } =
    useGetDetailPaymentQuery(depositId);
  const [getCancel, results] = useLazyGetCancelQuery();
  const history = useGetHistoryQuery(1);

  const handleCancelDeposit = () => {
    try {
      toast.promise(getCancel(depositId), {
        pending: "Mohon menunggu",
        success: "Deposit berhasil dibatalkan",
        error: "Mohon maaf, sepertinya terjadi kesalahan!",
      });
    } catch (err) {
      toast.error("Terjadi Kesalahan!");
    }
  };

  useEffect(() => {
    if (results?.data?.success && results.isSuccess) {
      history.refetch();
      navigate("/deposit");
    }
  }, [results]);

  useEffect(() => {
    const pollingInterval = setInterval(() => {
      if (depositId !== null) {
        refetch();
      }
    }, 5000);

    if (isSuccess && data.success) {
      if (data?.data.status === "sukses") {
        toast.success("Pembayaran anda telah diterima");
        clearInterval(pollingInterval);
        navigate("/order");
      }
    }

    return () => {
      clearInterval(pollingInterval);
    };
  }, [data?.data.status, depositId]);

  if (depositId === null) return <PaymentProceedPlaceholder />;
  return (
    <div className="w-full lg:w-[666px] bg-[white] rounded-xl p-8 relative">
      {isLoading && <LoadingSpinner />}
      <div>
        <div className="w-full bg-[#FFF1EA] border border-primary-100 rounded-lg p-3 flex items-center space-x-3 mb-7">
          <img src={ITime} alt="icon" width={24} />
          <span className="text-secondary-200 font-medium">
            Menunggu Pembayaran
          </span>
        </div>
        <div className="flex flex-col lg:flex-row items-start lg:items-end space-x-0 lg:space-x-10 mb-7">
          <div className="w-full lg:w-auto">
            <h4 className="uppercase font-medium text-xl">
              Scan qr code dibawah ini:
            </h4>
            <img
              src={`data:image/png;base64, ${data?.data.data}`}
              alt="qris-barcode"
              className="mt-3 lg:w-[277px] w-full"
            />
          </div>
          <div className="my-4 lg:my-0">
            <h5 className="text-[#d3d3d3] font-medium text-base lg:text-sm">
              Nominal Deposit
            </h5>
            <h3 className="text-4xl lg:text-3xl font-bold text-primary-100">
              {formatRupiah(data?.data.amount) ?? 0}
            </h3>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-3">Tutorial Cara Order OTP</h2>
          <ul className="ml-5 list-decimal">{itemsTutorialQris.content}</ul>
        </div>
        <div className="order-3 mt-8">
          <button
            className="w-full rounded-xl py-4 border border-[#ff9898] text-[red] font-medium bg-[#ffe4e4] hover:bg-[#ffd7d7] transition-all"
            onClick={handleCancelDeposit}
          >
            {results.isLoading ? "Loading..." : "Batalkan"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentProceed;
