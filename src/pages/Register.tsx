import { Link } from "react-router-dom";
import { useState, ChangeEvent, useMemo, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Ilogo from "/ILogo.svg";
import { Button } from "../components";
import IWhatsapp from "/icons/IWhatsapp.svg";
import { usePostRegisterMutation } from "../api/services/authApi";
import { convertToZeroPrefix, isEmailValid } from "../utils/functions";
import { toast } from "react-toastify";

const Register = () => {
  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [postRegister, result] = usePostRegisterMutation();
  const navigate = useNavigate();

  const handleSubmitLogin = async () => {
    try {
      if (input.password !== input.confirmPassword) {
        toast.error("Pastikan konfirmasi password dengan benar!");
        input.password = "";
        input.confirmPassword = "";
      } else {
        const body = {
          email: input.email,
          username: input.username,
          password: input.password,
          phone: convertToZeroPrefix(input.phone),
        };
        await postRegister(body);

        clearInput();
      }
    } catch (err) {
      clearInput();
      navigate("/register");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const isDisabled = useMemo(() => {
    return (
      input.username === "" ||
      input.password === "" ||
      input.email === "" ||
      input.confirmPassword === "" ||
      input.phone === "" ||
      isEmailValid(input.email) === false
    );
  }, [input]);

  const clearInput = useCallback(() => {
    input.username = "";
    input.password = "";
    input.email = "";
    input.confirmPassword = "";
    input.phone = "";
  }, [input]);

  useEffect(() => {
    if (result?.isSuccess) {
      if (result?.data.success) {
        navigate("/login");
        toast.success(result?.data?.messages);
      } else {
        toast.error(result?.data?.messages);
        navigate("/register");
      }
    }
  }, [result]);

  return (
    <div className="container-sign min-h-screen bg-gradient-to-l from-primary-100 to-secondary-100 overflow-y-hidden flex items-center justify-center flex-col">
      <div className="flex flex-col lg:flex-row md:flex-row items-center justify-center space-x-0 lg:space-x-24 px-3 lg:px-0 w-full mb-8">
        <div className="bg-light px-8 py-4 w-full lg:w-2/6 rounded-2xl relative z-10 order-2 lg:order-1 mt-8 lg:mt-0 md:mt-0">
          <h2 className="text-3xl font-medium mb-6 text-dark text-center border-b-4 border-primary-100 w-24 m-auto pb-1">
            Daftar
          </h2>
          <div className="mb-4">
            <div className="mb-4">
              <input
                type="email"
                className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none"
                placeholder="Alamat Email"
                name="email"
                value={input.email}
                required
                onChange={handleChange}
              />
              {!isEmailValid(input.email) && (
                <p className="text-[#dddddd] text-xs mt-1">
                  Gunakan format email yang benar
                </p>
              )}
            </div>
            <div className="mb-4">
              <input
                type="text"
                className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none"
                placeholder="Username"
                name="username"
                value={input.username}
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none"
                placeholder="Kata Sandi"
                name="password"
                value={input.password}
                required
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none"
                placeholder="Konfirmasi Password"
                name="confirmPassword"
                value={input.confirmPassword}
                required
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center mb-6">
              <div className="mr-2">
                <img src={IWhatsapp} alt="Logo Whatsapp" width={30} />
              </div>
              <input
                type="number"
                placeholder="+62"
                className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none"
                name="phone"
                value={input.phone}
                onChange={handleChange}
              />
            </div>
            <Button
              title={result?.isLoading ? "Loading.." : "Daftar"}
              handleButton={handleSubmitLogin}
              isDisabled={isDisabled}
            />
          </div>
          <hr className="my-7 opacity-10" />
          <h4 className="text-center text-[#808080b0]">
            Sudah Punya Akun? Masuk{" "}
            <Link
              to="/login"
              className="font-medium text-primary-200 underline"
            >
              Disini
            </Link>
          </h4>
        </div>
        <div className="order-1 lg:order-2 flex flex-col items-center">
          <img src={Ilogo} alt="logo" width={200} />
          <div className="mt-4 hidden lg:block">
            <ul className="flex items-center justify-center space-x-4">
              <li>
                <a href="/" className="underline text-[#ffd4a6]">
                  Landing Page
                </a>
              </li>
              <li>
                <a href="/terms-codition" className="underline text-[#ffd4a6]">
                  Ketentuan Layanan
                </a>
              </li>
              <li>
                <a href="/api-developer" className="underline text-[#ffd4a6]">
                  API Dokumentasi
                </a>
              </li>
            </ul>
            <div className="text-center text-[#f3f3f3] mt-1 font-medium">
              &copy; copyright RAJAOTP 2023
            </div>
          </div>
        </div>
        <div className="mt-4 order-3 px-4 lg:px-0 block lg:hidden">
          <ul className="flex items-center justify-center space-x-4">
            <li>
              <a
                href="/"
                className="underline text-[#ffd4a6] text-xs lg:text-base"
              >
                Landing Page
              </a>
            </li>
            <li>
              <a
                href="/terms-codition"
                className="underline text-[#ffd4a6] text-xs lg:text-base"
              >
                Ketentuan Layanan
              </a>
            </li>
            <li>
              <a
                href="/api-developer"
                className="underline text-[#ffd4a6] text-xs lg:text-base"
              >
                API Dokumentasi
              </a>
            </li>
          </ul>
          <div className="text-center text-[#f3f3f3] mt-1 font-medium">
            &copy; copyright RAJAOTP 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
