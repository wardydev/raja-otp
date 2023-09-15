import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import ILogo from "/ILogo.svg";
import { Button } from "../components";
import { usePostForgotPasswordMutation } from "../api/services/authApi";

const ForgetPassword = () => {
  const [email, setEmail] = useState<string>("");
  const [postForgotPassword, results] = usePostForgotPasswordMutation();
  const navigate = useNavigate();

  const handleSubmitForgotPassword = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    try {
      const body = {
        email,
      };
      await postForgotPassword(body);
      navigate("/login");
      setEmail("");
    } catch (err) {
      toast.error("Terjadi Kesalahan, Periksa internet secara berkala!");
    }
  };

  useEffect(() => {
    if (results.isSuccess && results.data.success) {
      toast.success(results.data?.messages);
    } else {
      toast.error(results.data?.messages);
    }
  }, [results]);

  return (
    <div className="container-sign min-h-screen bg-gradient-to-l from-primary-100 to-secondary-100 overflow-y-hidden max-w-full w-full flex flex-col lg:flex-row md:flex-row items-center justify-center space-x-0 lg:space-x-24 px-3 lg:px-0">
      <div className="bg-light p-8 w-full lg:w-1/4 rounded-2xl relative z-10 order-2 lg:order-1 mt-8 lg:mt-0 md:mt-0">
        <h2 className="text-3xl font-medium mb-6 text-dark text-center border-b-4 border-primary-100 w-56 m-auto pb-1">
          Reset Password
        </h2>
        <div className="mb-4">
          <form onSubmit={handleSubmitForgotPassword}>
            <div className="mb-4">
              <p className="text-[#bebebe] mb-6">
                Masukan email kamu untuk melakukan reset password
              </p>
              <input
                type="email"
                className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none"
                placeholder="emailkamu@gmail.comn"
                name="email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button
              title={results?.isLoading ? "Loading..." : "Submit"}
              handleButton={() => null}
            />
          </form>
          <div className="mt-6">
            <p className="text-[#bebebe]">
              Kembali ke{" "}
              <Link className="underline text-dark" to="/login">
                Login page
              </Link>
            </p>
          </div>
        </div>
      </div>
      <img src={ILogo} alt="logo" width={200} className="order-1 lg:order-2" />
    </div>
  );
};

export default ForgetPassword;
