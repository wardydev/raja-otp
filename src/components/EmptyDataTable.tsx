import IEmpty from "/icons/IEmpty.svg";

const EmptyDataTable = () => {
  return (
    <div className="text-center flex justify-center items-center flex-col w-full py-20">
      <img src={IEmpty} alt="icon-trash" width={30} className="mb-2" />
      <h3 className="text-[#7E7E7E] font-medium">
        Mohon maaf, Data Tidak Ditemukan✌️
      </h3>
    </div>
  );
};

export default EmptyDataTable;
