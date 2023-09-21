import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Layout, LoadingSpinner } from "../../components";
import ITime from "/icons/ITime.svg";
import {
  useGetDetailPaymentQuery,
  useGetHistoryQuery,
  useLazyGetCancelQuery,
} from "../../api/services/depositApi";
import { formatRupiah } from "../../utils/functions";
import { itemsTutorialQris } from "../../utils/helper";

const DetailPaymentById = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { data, isLoading, isSuccess, refetch } = useGetDetailPaymentQuery(
    location?.state?.id
  );
  const [getCancel, results] = useLazyGetCancelQuery();
  const history = useGetHistoryQuery(1);

  const handleCancelDeposit = () => {
    try {
      toast.promise(getCancel(location?.state?.id), {
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
      if (location?.state?.id !== null) {
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
  }, [data?.data.status, location?.state?.id]);

  return (
    <Layout>
      <div className="flex items-center px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row items-start space-x-0 lg:space-x-6 w-full space-y-6 lg:space-y-0">
          <div className="flex flex-col justify-center items-center bg-[white] p-12 rounded-xl relative">
            {isLoading && <LoadingSpinner />}
            <h3 className="text-dark font-bold uppercase">
              Scan qr code dibawah ini
            </h3>
            <img
              src={`data:image/png;base64, ${data?.data.data}`}
              alt="qrcode"
              width={350}
            />
          </div>
          <div className="bg-[white] p-6 lg:p-12 rounded-xl w-full flex flex-col">
            <div className="lg:order-1 order-2">
              <div>
                <h2 className="font-bold text-xl mb-3">
                  Tutorial Cara Order OTP
                </h2>
                <ul className="ml-5 list-decimal">
                  {itemsTutorialQris.content}
                </ul>
              </div>
              <hr className="w-full mb-6 mt-4 border border-[#c9c9c962]" />
            </div>
            <div className="lg:order-2 order-1 mb-6 lg:mb-0">
              <div className="mb-4">
                <h5 className="font-medium text-[#c9c9c9] capitalize">
                  Metode Pembayaran
                </h5>
                <h3 className="text-xl font-bold text-dark">
                  {data?.data.payment}
                </h3>
              </div>
              <div className="flex flex-col lg:flex-row items-start lg:items-center lg:justify-between justify-start space-y-6 lg:space-y-0">
                <div>
                  <h5 className="font-medium text-[#c9c9c9] capitalize">
                    Nominal Deposit
                  </h5>
                  <h3 className="text-3xl font-bold text-primary-100">
                    {formatRupiah(data?.data.amount)}
                  </h3>
                </div>
                <div className="bg-[#FFF1EA] border border-primary-100 rounded-lg p-3 flex items-center space-x-3 w-full lg:w-auto">
                  <img src={ITime} alt="icon" width={24} />
                  <span className="text-secondary-200 font-medium">
                    Menunggu Pembayaran
                  </span>
                </div>
              </div>
            </div>
            <div className="order-3 mt-8">
              <button
                className="w-full rounded-xl py-4 border border-[#ff9898] text-[red] font-medium bg-[#ffe4e4] hover:bg-[#ffd7d7] transition-all"
                onClick={handleCancelDeposit}
              >
                {results?.isLoading ? "Loading..." : "Batalkan"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPaymentById;
