import { toast } from "react-toastify";

const Card = () => {
  const handleTestToast = () => {
    toast.error("Error Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  return (
    <div className="card-afiliasi bg-gradient-to-l from-primary-100 to-secondary-100 rounded-xl px-6 py-8 shadow-2xl shadow-primary-100/50">
      <div>
        <h3 className="text-xl font-medium text-[white]">
          Total Afiliasi Anda
        </h3>
        <div className="flex items-center space-x-3 my-4">
          <img
            src="https://wellgroomedgentleman.com/media/images/Tony_Stark_Beard_with_Quiff_Hairstyle.width-800.jpg"
            alt="profile afiliasi"
            className="rounded-full"
            width={50}
          />
          <h2 className="text-5xl font-bold text-[white]">12</h2>
        </div>
        <p className="text-[#ffffffd1]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          recusandae!
        </p>
        <div className="mt-4">
          <button
            className="bg-[#ffffff93] text-primary-100 py-2 px-4 rounded-lg"
            onClick={handleTestToast}
          >
            test Toast
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
