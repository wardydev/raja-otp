import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className="card-afiliasi bg-gradient-to-l from-primary-100 to-secondary-100 rounded-xl px-6 py-8 shadow-2xl shadow-primary-100/50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-light text-4xl lg:text-3xl font-bold">
          Coming Soon 😉
        </h1>
        <p className="text-[#e9e8e8bb] text-lg lg:text-base leading-5 lg:leading-4 mt-3">
          Fitur Afiliasi sedang dalam pengembangan
        </p>
        <Link to="/order">
          <div className="py-4 lg:py-3 mt-5 w-full rounded-xl bg-[#ffffff4f] hover:bg-[#ffffff2a] text-[#ec4d41] font-medium">
            Cari Produk
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
