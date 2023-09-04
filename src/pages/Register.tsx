import { Link } from "react-router-dom";
import { useState, ChangeEvent, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import Ilogo from "/ILogo.svg";
import { Alert, Button } from "../components";
import IWhatsapp from "/icons/IWhatsapp.svg";
import { usePostRegisterMutation } from "../api/services/authApi";
import { convertToZeroPrefix, isEmailValid } from "../utils/functions";

const Register = () => {
  const [input, setInput] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    phone: "",
  });
  const [postRegister, result] = usePostRegisterMutation();
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(false);
  const navigate = useNavigate();
  const [isAlert, setIsAlert] = useState<boolean>(false);

  const handleSubmitLogin = async () => {
    if (
      input.username === "" &&
      input.password === "" &&
      input.email === "" &&
      input.confirmPassword === "" &&
      input.phone === ""
    ) {
      return;
    }
    try {
      if (input.password !== input.confirmPassword) {
        setConfirmPassword("Pastikan konfirmasi password dengan benar!");
        setIsConfirmPassword(true);
        setTimeout(() => {
          setIsConfirmPassword(false);
        }, 2000);
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
        if (result?.isSuccess) {
          navigate("/login");
        } else {
          navigate("/register");
          setIsAlert(true);
          setTimeout(() => {
            setIsAlert(false);
          }, 2000);
        }
        clearInput();
      }
    } catch (err) {
      console.log(err);
      clearInput();
      navigate("/register");
      setIsAlert(true);
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

  return (
    <div className="container-sign min-h-screen bg-gradient-to-l from-primary-100 to-secondary-100 overflow-y-hidden max-w-full w-full flex flex-col lg:flex-row md:flex-row items-center justify-center space-x-0 lg:space-x-24 px-3 lg:px-0">
      <div className="bg-light p-8 w-full lg:w-1/4 rounded-2xl relative z-10 order-2 lg:order-1 mt-8 lg:mt-0 md:mt-0">
        {isConfirmPassword && (
          <Alert message={confirmPassword} types="danger" />
        )}
        {isAlert && <Alert message={result?.data?.messages} types="danger" />}
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
