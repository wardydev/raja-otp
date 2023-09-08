import { useState } from "react";
import { Layout, LoadingSpinner } from "../../components";
import Payment from "./Payment";
import PaymentProceed from "./PaymentProceed";
import IQRCode from "/icons/IQRCode.svg";

const DetailPayment = () => {
  const [depositId, setDepositId] = useState<number | null>(null);

  return (
    <Layout>
      <div>
        <LoadingSpinner />
      </div>
      <div className="flex justify-center items-start w-full">
        <div className="flex space-x-6">
          <Payment setDeposit={setDepositId} />
          {depositId === null ? (
            <PaymentProceedPlaceholder />
          ) : (
            <PaymentProceed depositId={depositId} />
          )}
        </div>
      </div>
    </Layout>
  );
};

const PaymentProceedPlaceholder = () => {
  return (
    <div className="w-[666px] bg-[white] rounded-xl p-8 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center space-y-4 w-full lg:w-2/4 text-center">
        <img src={IQRCode} alt="qr-code icon" width={92} />
        <h5 className="text-[#C5C5C5] text-lg whitespace-pre-line">
          QR Code Akan Muncul Setelah Kamu Melanjutkan Pembayaran
        </h5>
      </div>
    </div>
  );
};

export default DetailPayment;
