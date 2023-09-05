import { Link } from "react-router-dom";
import { useGetMeQuery } from "../../api/services/userApi";
import { formatRupiah } from "../../utils/functions";

const CardWallet = () => {
  const { data } = useGetMeQuery();

  return (
    <div className="card-wallet min-h-[120px] w-[380px] rounded-lg bg-gradient-to-r from-primary to-secondary p-5">
      <div className="card-wallet_content flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-light flex items-start">
            <span className="hidden md:block lg:block">
              {formatRupiah(data?.data.balance ?? 0)}
            </span>
          </h2>
          <Link
            to="/order"
            className="text-sm text-[#2a4dc2] hover:text-[#5e76ff] underline font-medium transition-all"
          >
            Order Produk
          </Link>
        </div>
        <Link
          to="/deposit"
          className="bg-primary-100 hover:bg-primary-200 rounded-lg text-sm text-[white] py-2 px-8 font-medium transition-all"
        >
          Top Up
        </Link>
      </div>
    </div>
  );
};
export default CardWallet;
