import { Link } from "react-router-dom";

import Ilogo from "/ILogo.svg";
import { Button } from "../components";

const Register = () => {
  return (
    <div className="container-sign min-h-screen bg-gradient-to-l from-primary-100 to-secondary-100 overflow-y-hidden max-w-full w-full flex flex-col lg:flex-row md:flex-row items-center justify-center space-x-0 lg:space-x-24 px-3 lg:px-0">
      <div className="bg-light p-8 w-full lg:w-1/4 rounded-2xl relative z-10 order-2 lg:order-1 mt-8 lg:mt-0 md:mt-0">
        <h2 className="text-3xl font-medium mb-6 text-dark text-center border-b-4 border-primary-100 w-24 m-auto pb-1">
          Daftar
        </h2>
        <form className="mb-4">
          <div className="mb-4">
            <input
              type="text"
              className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none"
              placeholder="Alamat Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none"
              placeholder="No Handphone"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none"
              placeholder="Kata Sandi"
            />
          </div>
          <Button title="Daftar" />
        </form>
        <hr className="my-7 opacity-10" />
        <h4 className="text-center text-[#808080b0]">
          Sudah Punya Akun? Masuk{" "}
          <Link to="/login" className="font-medium text-primary-200 underline">
            Disini
          </Link>
        </h4>
      </div>
      <img src={Ilogo} alt="logo" width={200} className="order-1 lg:order-2" />
    </div>
  );
};

export default Register;
