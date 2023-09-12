import { useNavigate } from "react-router-dom";

import { Button } from "..";
import IKingAvatar from "/icons/IkingAvatar2.png";
import { useGetMeQuery } from "../../api/services/userApi";
import { formatRupiah } from "../../utils/functions";
import { toast } from "react-toastify";
import { useState } from "react";

const CardProfile = ({ onCloseModal }: { onCloseModal: () => void }) => {
  const navigate = useNavigate();
  const { data } = useGetMeQuery(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        import.meta.env.VITE_API_URL + "api/auth/logout",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const resJson = await res.json();
      if (resJson) {
        setIsLoading(false);
        toast.success(resJson.messages);
        localStorage.removeItem("token");
        navigate("/login");
      }
    } catch (err) {
      toast.error("Terjadi Kesalahan!");
    }
  };

  return (
    <div className="bg-[white] absolute top-[76px] w-[220px] -left-16 z-20 rounded-xl p-4 shadow-xl">
      <div className="flex flex-col items-center justify-center">
        <img
          src={IKingAvatar}
          alt="profile-img"
          width={80}
          className="rounded-full"
        />
        <div className="text-center my-3 mb-5">
          <h4 className="text-lg text-dark font-medium capitalize">
            {data?.data.username}
          </h4>
          <p className="text-[#3f526d62] mb-2 -mt-2">{data?.data.email}</p>
          <p className="text-dark text-lg font-medium">
            Saldo Anda :{" "}
            <span className="text-primary-100">
              {formatRupiah(data?.data.balance ?? 0)}
            </span>
          </p>
        </div>
        <hr className="mb-4 border-1 w-full border-[#ebebeb]" />
        <Button title="Pengaturan Akun" handleButton={onCloseModal} />
        <div className="mt-4 mb-2 w-full text-center">
          <span
            className="text-[red] font-medium cursor-pointer hover:text-[#be4343]"
            onClick={handleLogout}
          >
            {isLoading ? "Loading..." : "Logout"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
