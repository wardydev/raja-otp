import { useLocation } from "react-router-dom";

import { Layout } from "../../components";
import ITime from "/icons/ITime.svg";
import { useGetDetailPaymentQuery } from "../../api/services/depositApi";
import { formatRupiah } from "../../utils/functions";
import { itemsTutorialQris } from "../../utils/helper";

const DetailPaymentById = () => {
  const location = useLocation();
  const { data } = useGetDetailPaymentQuery(location?.state.id);

  return (
    <Layout>
      <div className="flex items-center px-20">
        <div className="flex items-start m space-x-6 w-full">
          <div className="flex flex-col justify-center items-center bg-[white] p-12 rounded-xl">
            <h3 className="text-dark font-bold mb-4 uppercase">
              Scan qr code dibawah ini
            </h3>
            <img
              src={`data:image/png;base64, ${data?.data.data}`}
              alt="qrcode"
              width={350}
            />
          </div>
          <div className="bg-[white] p-12 rounded-xl w-full">
            <div>
              <h2 className="font-bold text-xl mb-3">
                Tutorial Cara Order OTP
              </h2>
              <ul className="ml-5 list-decimal">{itemsTutorialQris.content}</ul>
            </div>
            <hr className="w-full mb-6 mt-4 border border-[#c9c9c962]" />
            <div className="mb-4">
              <h5 className="font-medium text-[#c9c9c9] capitalize">
                Metode Pembayaran
              </h5>
              <h3 className="text-xl font-bold text-dark">
                {data?.data.payment}
              </h3>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h5 className="font-medium text-[#c9c9c9] capitalize">
                  Nominal Deposit
                </h5>
                <h3 className="text-3xl font-bold text-primary-100">
                  {formatRupiah(data?.data.amount)}
                </h3>
              </div>
              <div className="bg-[#FFF1EA] border border-primary-100 rounded-lg p-3 flex items-center space-x-3">
                <img src={ITime} alt="icon" width={24} />
                <span className="text-secondary-200 font-medium">
                  Menunggu Pembayaran
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DetailPaymentById;
