import { Link } from "react-router-dom";
import { useGetMeQuery } from "../../api/services/userApi";
import { formatRupiah } from "../../utils/functions";
import { LoadingSpinner } from "..";

const CardWallet = () => {
  const { data, isLoading } = useGetMeQuery();

  return (
    <div className="card-wallet min-h-[70px] w-[380px] rounded-lg bg-gradient-to-r from-primary to-secondary p-5 relative">
      {isLoading && <LoadingSpinner />}
      <div className="card-wallet_content flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-light flex items-start mb-2">
            <span className="hidden md:block lg:block">
              {formatRupiah(data?.data.balance ?? 0)}
            </span>
          </h2>
          <Link
            to="/order"
            className="text-sm text-[#5e76ff] hover:text-[#2a4dc2] underline font-medium transition-all"
          >
            Order Produk
          </Link>
        </div>
        <div className="text-right mt-2">
          <h3 className="text-[#ffe7b4c2] mb-3 text-xs font-semibold">
            *Pilih Paket Terbaikmu
          </h3>
          <Link
            to="/deposit"
            className="bg-[#ffffff4d] hover:bg-[#ffffff28] rounded-lg text-sm text-[#ec4d41] py-2 px-8 font-medium transition-all"
          >
            Top Up
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CardWallet;
