import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  useGetMeQuery,
  usePostSettingMutation,
} from "../../api/services/userApi";

const ModalSettings: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [input, setInput] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const [postSetting, setting] = usePostSettingMutation();
  const { data, isLoading } = useGetMeQuery(undefined);

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmitPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (input.newPassword !== input.confirmNewPassword) {
      toast.error(
        "Pastikan Konfirmasi password sesuai dedngan pasword baru anda"
      );
      setInput({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
      return;
    }

    try {
      const body = {
        old_password: input.oldPassword,
        new_password: input.newPassword,
      };
      await postSetting(body);
      onClose();
      setInput({
        oldPassword: "",
        newPassword: "",
        confirmNewPassword: "",
      });
    } catch (err) {
      toast.error("Sepertinya terjadi kesalahan!");
    }
  };

  useEffect(() => {
    if (setting.data?.success !== false) {
      toast.success(setting.data?.messages);
    } else {
      toast.error(setting.data?.messages);
    }
  }, [setting]);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-20 ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-300 ease-in-out`}
    >
      <div className="absolute inset-0 bg-[black] opacity-50"></div>
      <div className="bg-[white] p-6 rounded-lg shadow-md z-10 w-full lg:w-2/5">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold mb-4">Ubah Profil</h2>
          <button className="cursor-pointer" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmitPassword}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none bg-[#e6e6e6] mb-4"
              disabled
              value={isLoading ? "Loading..." : data?.data.email}
            />
            <input
              type="text"
              id="username"
              className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none bg-[#e6e6e6] mb-4"
              disabled
              value={isLoading ? "Loading..." : data?.data.username}
            />
            <input
              type="text"
              id="phoneNumber"
              className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none bg-[#e6e6e6] mb-4"
              disabled
              value={isLoading ? "Loading..." : data?.data.phone}
            />
            <input
              type="password"
              id="oldPassword"
              className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none mb-4"
              placeholder="Password Lama"
              name="oldPassword"
              value={input.oldPassword}
              onChange={handleChangePassword}
              required
            />
            <input
              type="password"
              id="newPassword"
              className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none mb-4"
              placeholder="Password Baru"
              name="newPassword"
              value={input.newPassword}
              onChange={handleChangePassword}
              required
            />
            <input
              type="password"
              id="confirmNewPassword"
              className="border border-[#e9e9e9] w-full py-3 px-2 rounded-lg focus:outline-none mb-4"
              placeholder="Konfirmasi Password Baru"
              name="confirmNewPassword"
              value={input.confirmNewPassword}
              onChange={handleChangePassword}
              required
            />
          </div>

          <div className="mt-4 flex justify-end space-x-2">
            <button
              type="button"
              className="ml-2 px-4 py-2 bg-[#c2c2c2] text-[white] rounded-md hover:bg-[gray] focus:outline-none focus:ring focus:ring-[gray] transition-all"
              onClick={onClose}
            >
              Batalkan
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-primary-100 text-[white] rounded-md hover:bg-primary-200 focus:outline-none focus:ring focus:ring-secondary-100 transition-all"
            >
              {setting.isLoading ? "Loading..." : "Ganti Password"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalSettings;
