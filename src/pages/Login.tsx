import { Link } from "react-router-dom";
import { Button } from "../components";
import Ilogo from "/ILogo.svg";

const Login = () => {
  return (
    <div className="container-sign min-h-screen bg-gradient-to-l from-primary-100 to-secondary-100 overflow-y-hidden max-w-full w-full flex flex-col lg:flex-row md:flex-row items-center justify-center space-x-0 lg:space-x-24 px-3 lg:px-0">
      <div className="bg-light p-8 w-full lg:w-1/4 rounded-2xl relative z-10 order-2 lg:order-1 mt-8 lg:mt-0 md:mt-0">
        <h2 className="text-3xl font-medium mb-6 text-dark text-center border-b-4 border-primary-100 w-24 m-auto pb-1">
          Masuk
        </h2>
        <form className="mb-4">
          <div className="mb-4">
            <input
              type="text"
              className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none"
              placeholder="No HP / Alamat Email"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none"
              placeholder="Kata Sandi"
            />
          </div>
          <div className="mb-6">
            <label className="flex items-center">
              <input
                type="checkbox"
                className="form-checkbox h-4 w-4 text-blue-500"
              />
              <span className="ml-2 text-gray-600">Remember Me</span>
            </label>
          </div>
          <Button title="Masuk" />
        </form>
        <Link
          to="/"
          className="text-primary-100 font-medium mx-auto flex justify-center"
        >
          <span>Lupa Kata Sandi?</span>
        </Link>
        <hr className="my-7 opacity-10" />
        <h4 className="text-center text-[#808080b0]">
          Belum Punya Akun? Daftar{" "}
          <Link
            to="/register"
            className="font-medium text-primary-200 underline"
          >
            Disini
          </Link>
        </h4>
      </div>
      <img src={Ilogo} alt="logo" width={200} className="order-1 lg:order-2" />
    </div>
  );
};

export default Login;
