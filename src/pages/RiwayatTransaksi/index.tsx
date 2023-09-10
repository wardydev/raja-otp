import { useState } from "react";
import { toast } from "react-toastify";

import {
  Button,
  CardContiner,
  Layout,
  LoadingSpinner,
  Pagination,
} from "../../components";
import Table from "./Table";
import ISearch from "/icons/ISearch.svg";
import { useGetHistoryQuery } from "../../api/services/orderApi";
import { dateToTimestamp, timestampToDateString } from "../../utils/functions";
import { IHistoryDataItem } from "../../api/services/types";
import EmptyDataTable from "../../components/EmptyDataTable";

const RiwayatTransaksi = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isError, isFetching } = useGetHistoryQuery(page);
  const [inputSearch, setInputSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<
    IHistoryDataItem[] | [] | undefined
  >(data?.data?.data ?? []);
  const [selectedDate, setSelectedDate] = useState("");

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  const handleSearch = () => {
    const filtered = data?.data.data.filter(
      (item: {
        sv_name: string;
        number: { toString: () => string | string[] };
        status: string;
      }) => {
        return (
          item.sv_name.toLowerCase().includes(inputSearch) ||
          item.number.toString().includes(inputSearch) ||
          item.status.toLowerCase().includes(inputSearch)
        );
      }
    );

    const filteredByDate = filtered?.filter((item) => {
      return (
        timestampToDateString(dateToTimestamp(selectedDate)) ===
        timestampToDateString(item.created_at)
      );
    });
    setFilteredData(filteredByDate);

    if (filteredByDate?.length === 0) {
      toast.error("Riwayat Transaksi tidak ditemukan!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success("Data berhasil dicari", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }

    setInputSearch("");
    setSelectedDate("");
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  return (
    <Layout>
      <CardContiner>
        <div className="relative">
          {(isLoading && <LoadingSpinner />) ||
            (isFetching && <LoadingSpinner />)}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 px-0 lg:px-6">
            <div>
              <h3 className="text-dark text-2xl font-medium">
                Riwayat Transaksi
              </h3>
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
          <div>
            <Table
              data={
                filteredData?.length !== 0
                  ? filteredData
                  : data?.data?.data ?? []
              }
            />
            {data?.data.data.length === 0 || (isError && <EmptyDataTable />)}
          </div>
          <div>
            {data?.data?.last_page !== undefined &&
              data?.data?.last_page >= 2 && (
                <Pagination
                  currentPage={data?.data?.current_page ?? 1}
                  totalPages={data?.data?.last_page ?? 1}
                  onPageChange={handlePageChange}
                />
              )}
          </div>
        </div>
      </CardContiner>
    </Layout>
  );
};

export default RiwayatTransaksi;
