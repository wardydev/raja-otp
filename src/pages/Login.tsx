import { useState, ChangeEvent, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button } from "../components";
import Ilogo from "/ILogo.svg";
import { usePostLoginMutation } from "../api/services/authApi";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [input, setInput] = useState({ username: "", password: "" });
  const [postLogin, result] = usePostLoginMutation();
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmitLogin = async () => {
    if (input.username === "" && input.password === "") {
      return;
    }
    try {
      const body = {
        username: input.username,
        password: input.password,
      };
      await postLogin(body);
      setInput({ username: "", password: "" });
    } catch (err) {
      setInput({ username: "", password: "" });
    }
  };

  useEffect(() => {
    if (result.isSuccess) {
      login(result?.data?.data.token);
      if (!result?.data.success) {
        navigate("/login");
        toast.error(result.data.messages);
      } else {
        navigate("/");
        toast.success(result.data.messages);
      }
    }
  }, [result]);

  return (
    <div className="container-sign min-h-screen bg-gradient-to-l from-primary-100 to-secondary-100 overflow-y-hidden max-w-full w-full flex flex-col lg:flex-row md:flex-row items-center justify-center space-x-0 lg:space-x-24 px-3 lg:px-0">
      <div className="bg-light p-8 w-full lg:w-1/4 rounded-2xl relative z-10 order-2 lg:order-1 mt-8 lg:mt-0 md:mt-0">
        <h2 className="text-3xl font-medium mb-6 text-dark text-center border-b-4 border-primary-100 w-24 m-auto pb-1">
          Masuk
        </h2>
        <div className="mb-4">
          <div className="mb-4">
            <input
              type="text"
              className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none"
              placeholder="Username"
              name="username"
              value={input.username}
              onChange={handleChangeInput}
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none"
              placeholder="Kata Sandi"
              name="password"
              value={input.password}
              onChange={handleChangeInput}
              required
            />
          </div>
          <Button
            title={result?.isLoading ? "Loading.." : "Masuk"}
            handleButton={handleSubmitLogin}
            isDisabled={input.username === "" || input.password === ""}
          />
        </div>
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
