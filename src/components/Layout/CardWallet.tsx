import React from "react";
import { Link } from "react-router-dom";

const CardWallet = () => {
  return (
    <div className="card-wallet min-h-[94px] w-[360px] rounded-lg bg-gradient-to-r from-primary to-secondary p-5">
      <div className="card-wallet_content flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-light flex items-start">
            <span className="text-xs mr-1 hidden md:block lg:block">Rp</span>{" "}
            <span className="hidden md:block lg:block">100.000.000.00</span>
          </h2>
          <Link
            to="/order"
            className="text-sm text-[#e0e0e0] hover:text-[white]"
          >
            Lihat harga
          </Link>
        </div>
        <Link
          to="/deposit"
          className="bg-primary-100 hover:bg-primary-200 rounded-lg text-sm text-[white] py-1 px-3"
        >
          Top Up
        </Link>
      </div>
    </div>
  );
};
export default CardWallet;
