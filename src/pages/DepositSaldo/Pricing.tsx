import React from "react";

interface Package {
  name: string;
  price: string;
  description: string;
  isSpecial: boolean;
}

interface PricingProps {
  packages: Package[];
}

const Pricing: React.FC<PricingProps> = ({ packages }) => {
  return (
    <div className="grid lg:grid-cols-4 grid-cols-1 lg:space-x-6 space-x-0 lg:space-y-0 space-y-7">
      {packages.map((pkg, index) => (
        <div
          key={index}
          className={
            pkg.isSpecial
              ? "card-afiliasi bg-gradient-to-l from-primary-100 to-secondary-100 rounded-xl px-6 py-8 shadow-2xl shadow-primary-100/50 text-[white]"
              : "bg-[white] shadow-lg shadow-primary-100/10 rounded-xl p-6 text-dark"
          }
        >
          <div className="mb-3">
            <p
              className={`font-medium uppercase text-xs ${
                pkg.isSpecial ? "text-[#f1ecec]" : "text-[#b0b0b0]"
              }`}
            >
              Most Popular
            </p>
            <h3 className="text-xl font-semibold mb-4">{pkg.name}</h3>
          </div>

          <h3 className="text-gray-600 mb-2 text-xl font-bold">{pkg.price}</h3>
          <div className="my-5">
            <p>{pkg.description}</p>
          </div>
          <button
            className={`block w-full bg-primary-100 text-white py-3 rounded-lg hover:bg-primary-200 text-light ${
              pkg.isSpecial
                ? "bg-[orange] hover:bg-[#ff5e00]"
                : "bg-primary-100 hover:bg-primary-200"
            }`}
          >
            Beli
          </button>
        </div>
      ))}
      <div className="bg-[white] shadow-lg shadow-primary-100/10 rounded-xl p-6 text-dark">
        <div className="mb-3">
          <p className="font-medium uppercase text-xs text-[#b0b0b0]">
            Most Popular
          </p>
          <h3 className="text-xl font-semibold mb-4">Paket Fleksibel</h3>
        </div>

        <div className="flex items-center bg-[#d5d5d5] rounded-md">
          <h4 className="py-2 px-3">Rp</h4>
          <input
            type="number"
            placeholder="50000"
            className="w-full py-2 px-4 focus:outline-none border-t-2 border-r-2 border-b-2 rounded-tr-md rounded-br-md border-primary-200"
          />
        </div>
        <div className="my-5">
          <p>description</p>
        </div>
        <button className="block w-full bg-primary-100 text-white py-3 rounded-lg hover:bg-primary-200 text-light">
          Beli
        </button>
      </div>
    </div>
  );
};

export default Pricing;
