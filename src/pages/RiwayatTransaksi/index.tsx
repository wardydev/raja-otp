import { useState } from "react";
import { Button, CardContiner, Layout, Pagination } from "../../components";
import Table from "./Table";
import ISearch from "/icons/ISearch.svg";
import { useGetHistoryQuery } from "../../api/services/orderApi";
import { dateToTimestamp, timestampToDateString } from "../../utils/functions";
import { IHistoryDataItem } from "../../api/services/types";

const RiwayatTransaksi = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useGetHistoryQuery(page);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<
    IHistoryDataItem[] | [] | undefined
  >(data?.data?.data ?? []);
  const [selectedDate, setSelectedDate] = useState("");
  const [isShowAlert, setIsShowAlert] = useState(false);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  if (isLoading) {
    return <h1 className="bg-[red] text-white text-2xl">Loading...</h1>;
  }

  const handleSearch = () => {
    const filtered = data?.data.data.filter((item) => {
      return (
        item.sv_name.toLowerCase().includes(inputSearch) ||
        item.number.toString().includes(inputSearch) ||
        item.status.toLowerCase().includes(inputSearch)
      );
    });
    const filteredByDate = filtered?.filter((item) => {
      return (
        timestampToDateString(dateToTimestamp(selectedDate)) ===
        timestampToDateString(item.created_at)
      );
    });
    setFilteredData(filteredByDate);

    if (filteredByDate?.length === 0) {
      setIsShowAlert(true);
      setTimeout(() => {
        setIsShowAlert(false);
      }, 2000);
    }

    setInputSearch("");
    setSelectedDate("");
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <Layout>
      <CardContiner isCustomBackground customBackground="#FFFAF6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-12">
          <div>
            <h3 className="text-dark text-xl font-medium">Riwayat Transaksi</h3>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row mt-5 md:mt-0 lg:mt-0 items-start md:items-center lg:items-center space-x-0 md:space-x-4 lg:space-x-4 space-y-4 md:space-y-0 lg:space-y-0">
            <div className="flex items-center space-x-2">
              <input
                type="date"
                className="py-3 px-4 roundedlg rounded-lg bg-[white] focus:outline-none border border-[#d8d8d8]"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </div>
            <div className="flex items-center ">
              <button
                className={` text-white px-4 py-3 rounded ${
                  selectedDate === ""
                    ? "bg-[#bdbdbd]"
                    : "hover:bg-primary-200 bg-primary-100"
                }`}
                onClick={handleSearch}
                disabled={selectedDate === ""}
              >
                <img src={ISearch} alt="icon search" />
              </button>
              <input
                type="text"
                className="py-3 px-4 rounded-tr-lg rounded-br-lg bg-[white] focus:outline-none border-t border-t-[#d8d8d8] border-r border-r-[#d8d8d8] border-b border-b-[#d8d8d8]"
                placeholder="Search..."
                onChange={(e) => setInputSearch(e.target.value)}
                value={inputSearch}
              />
            </div>

            <div>
              <Button
                title="Button Download Transaksi"
                handleButton={() => null}
              />
            </div>
          </div>
        </div>
        {filteredData?.length === 0 && isShowAlert && (
          <h1 className="bg-[red] text-2xl">Data tidak ditemukan</h1>
        )}

        <Table
          data={
            filteredData?.length !== 0 ? filteredData : data?.data?.data ?? []
          }
        />
        <div>
          {filteredData?.length === 0 && (
            <Pagination
              currentPage={data?.data?.current_page ?? 1}
              totalPages={data?.data?.last_page ?? 1}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </CardContiner>
    </Layout>
  );
};

export default RiwayatTransaksi;
