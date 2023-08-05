import ILogo from "/ILogo.svg";
import IDeposit from "/icons/IDeposit.svg";
import IOrder from "/icons/IOrder.svg";

const CardDrawer = () => {
  return (
    <div className="card-wallet bg-gradient-to-br from-primary-100 to-secondary-100 w-full rounded-lg px-3 py-4">
      <div className="relative z-10 flex items-center justify-between h-[100%]">
        <div className="h-full">
          <img src={ILogo} alt="logo" width={50} className="mb-1" />
          <h4 className="text-light text-xl font-semibold">Rp 100.000.00</h4>
        </div>
        <div className="flex items-center space-x-3">
          <div className="flex flex-col justify-center items-center space-y-1">
            <img
              src={IDeposit}
              alt="icon-deposit"
              width={30}
              className="bg-light p-2 rounded-lg"
            />
            <p className="text-xs text-light font-medium">Top Up</p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-1">
            <img
              src={IOrder}
              alt="icon-deposit"
              width={30}
              className="bg-light p-2 rounded-lg"
            />
            <p className="text-xs text-light font-medium">Order</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDrawer;
