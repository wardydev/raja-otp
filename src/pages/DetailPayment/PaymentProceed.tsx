import ITime from "/icons/ITime.svg";
import { useGetDetailPaymentQuery } from "../../api/services/depositApi";
import { formatRupiah } from "../../utils/functions";
import { itemsTutorialQris } from "../../utils/helper";
import IQRCode from "/icons/IQRCode.svg";

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
  const { data, isLoading } = useGetDetailPaymentQuery(depositId);
  if (isLoading) {
    <h1 className="bg-[red] font-medium">Loading...</h1>;
  }
  if (depositId === null)
    return <PaymentProceedPlaceholder depositId={depositId} />;
  return (
    <div className="w-[666px] bg-[white] rounded-xl p-8">
      <div>
        <div className="w-full bg-[#FFF1EA] border border-primary-100 rounded-lg p-3 flex items-center space-x-3 mb-7">
          <img src={ITime} alt="icon" width={24} />
          <span className="text-secondary-200 font-medium">
            Menunggu Pembayaran
          </span>
        </div>
        <div className="flex items-end space-x-10 mb-7">
          <div>
            <h4 className="uppercase font-medium">Scan qr code dibawah ini:</h4>
            <img
              src={`data:image/png;base64, ${data?.data.data}`}
              alt="qris-barcode"
              width={227}
              className="mt-3"
            />
          </div>
          <div>
            <h5 className="text-[#d3d3d3] font-medium text-sm">
              Nominal Deposit
            </h5>
            <h3 className="text-3xl font-bold text-primary-100">
              {formatRupiah(data?.data.amount) ?? 0}
            </h3>
          </div>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-3">Tutorial Cara Order OTP</h2>
          <ul className="ml-5 list-decimal">{itemsTutorialQris.content}</ul>
        </div>
      </div>
    </div>
  );
};

export default PaymentProceed;
