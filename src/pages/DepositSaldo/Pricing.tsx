import React, { useState } from "react";
import { Link } from "react-router-dom";

import { formatRupiah } from "../../utils/functions";
import { Button } from "../../components";
import { PricingProps } from "../../utils/interfaces";

const Pricing: React.FC<PricingProps> = ({ packages }) => {
  const [pricingFlex, setPricingFlex] = useState<string>("");
  return (
    <div className="grid lg:grid-cols-4 items-center grid-cols-1 lg:space-x-6 space-x-0 lg:space-y-0 space-y-7">
      {packages.map((pkg, index) => (
        <div
          key={index}
          className={
            pkg.isSpecial
              ? "card-afiliasi bg-gradient-to-l from-primary-100 to-secondary-100 rounded-xl px-6 py-8 shadow-2xl shadow-primary-100/50 text-[#e7e7e7] min-h-[290px]"
              : "bg-[white] shadow-lg shadow-primary-100/10 rounded-xl p-6 text-[gray] min-h-[290px]"
          }
        >
          <div className="mb-3">
            {pkg.isSpecial ? (
              <p className={"font-medium uppercase text-xs text-[#f1ecec]"}>
                Favorite🌟
              </p>
            ) : (
              <p className="font-medium uppercase text-xs text-[#b0b0b0]">
                Populer
              </p>
            )}
            <h3 className="text-xl font-semibold mb-4">{pkg.name}</h3>
          </div>

          <h3
            className={`${
              pkg.isSpecial ? "text-light" : "text-dark"
            } mb-2 text-xl font-bold`}
          >
            {formatRupiah(pkg.price)}
          </h3>
          <div className="my-5">
            <p>{pkg.description}</p>
          </div>
          <Link
            state={{ amount: pkg.price, package: pkg.name }}
            to="/deposit/detail"
            className={`block w-fulltext-white py-3 rounded-lg text-light mt-6 text-center ${
              pkg.isSpecial
                ? "bg-[#ffffff52] hover:bg-[#ffffff41] font-medium text-primary-200"
                : "bg-primary-100 hover:bg-primary-200"
            }`}
          >
            Pilih Paket
          </Link>
        </div>
      ))}
      <div className="bg-[white] shadow-lg shadow-primary-100/10 rounded-xl p-6 text-dark">
        <div className="mb-3">
          <p className="font-medium uppercase text-xs text-[#b0b0b0]">
            Fleksibel
          </p>
          <h3 className="text-xl font-semibold mb-4">Paket Ratu</h3>
        </div>

        <div>
          <div className="flex items-center bg-[#d5d5d5] rounded-md mb-1">
            <h4 className="py-2 px-3 font-medium">Rp</h4>
            <input
              type="number"
              placeholder="100000"
              className="w-full py-2 px-4 focus:outline-none border-t-2 border-r-2 border-b-2 rounded-tr-md rounded-br-md border-[#d5d5d5]"
              value={pricingFlex}
              onChange={(e) => setPricingFlex(e.target.value)}
            />
          </div>
          <p className="text-xs font-medium text-secondary-200">
            *Minimum deposit: Rp 5.000
          </p>
        </div>
        <div className="my-5">
          <p>Untuk pengalaman yang lebih fleksibel🤗</p>
        </div>
        {pricingFlex.length !== 0 && Number(pricingFlex) >= 5000 ? (
          <Link
            state={{ amount: Number(pricingFlex), package: "Paket Pangeran" }}
            to="/deposit/detail"
            className="block w-full text-white py-3 rounded-lg text-light mt-6 text-center bg-primary-100 hover:bg-primary-200 disabled:bg-dark"
          >
            Pilih Paket
          </Link>
        ) : (
          <Button isDisabled title="Pilih Peket" handleButton={() => null} />
        )}
      </div>
    </div>
  );
};

export default Pricing;
