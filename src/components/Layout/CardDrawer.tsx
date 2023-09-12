import { Link } from "react-router-dom";
import { useGetMeQuery } from "../../api/services/userApi";
import { formatRupiah } from "../../utils/functions";
import ILogo from "/ILogo.svg";
import IDeposit from "/icons/IDeposit.svg";
import IOrder from "/icons/IOrder.svg";

const CardDrawer = () => {
  const { data } = useGetMeQuery(undefined);

  return (
    <div className="card-wallet bg-gradient-to-br from-primary-100 to-secondary-100 w-full min-h-[120px] rounded-lg px-4 py-4 items-center z-10 relative">
      <div className="relative z-10 flex items-center justify-between min-h-[80px]">
        <div className="h-full">
          <img src={ILogo} alt="logo" width={80} className="mb-2" />
          <h4 className="text-light text-2xl font-semibold">
            {formatRupiah(data?.data.balance)}
          </h4>
        </div>
        <div className="flex items-center space-x-3">
          <Link
            to="/deposit"
            className="flex flex-col justify-center items-center space-y-1"
          >
            <img
              src={IDeposit}
              alt="icon-deposit"
              width={40}
              className="bg-light p-2 rounded-lg"
            />
            <p className="text-xs text-light font-medium">Top Up</p>
          </Link>
          <Link
            to="/order"
            className="flex flex-col justify-center items-center space-y-1"
          >
            <img
              src={IOrder}
              alt="icon-deposit"
              width={40}
              className="bg-light p-2 rounded-lg"
            />
            <p className="text-xs text-light font-medium">Order</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDrawer;
