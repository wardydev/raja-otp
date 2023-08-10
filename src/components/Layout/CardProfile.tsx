import { Button } from "..";

const CardProfile = () => {
  return (
    <div className="bg-[white] absolute top-[76px] w-[220px] -left-16 z-20 rounded-xl p-4 shadow-xl">
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://wellgroomedgentleman.com/media/images/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg"
          alt="profile-img"
          width={50}
          className="rounded-full"
        />
        <div className="text-center my-3 mb-5">
          <h4 className="text-lg text-dark font-medium">Wardi</h4>
          <p className="text-[#3F526D]">Saldo Anda : Rp 10,000</p>
        </div>
        <Button title="Pengaturan Akun" />
      </div>
    </div>
  );
};

export default CardProfile;
