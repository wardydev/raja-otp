import { useEffect, useState, useCallback } from "react";
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
import { IHistoryResponse } from "../../api/services/types";
import EmptyDataTable from "../../components/EmptyDataTable";
import {
  useLazyGetHistorySearchByNameQuery,
  usePostHistoryByDateMutation,
} from "../../api/services/history";
import { formatDate } from "../../utils/functions";

const RiwayatTransaksi = () => {
  const [page, setPage] = useState<number>(1);

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetHistoryQuery(page);
  const [getHistorySearchByName, result] = useLazyGetHistorySearchByNameQuery();
  const [postHistoryByDate, historyDateResult] = usePostHistoryByDateMutation();

  const [inputSearch, setInputSearch] = useState<string>("");
  const [historyData, setHistoryData] = useState<IHistoryResponse | undefined>(
    data
  );
  const [selectedFilterType, setSelectedFilterType] = useState<string>("NAME");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handlePageChange = useCallback(
    (page: number) => {
      setPage(page);
    },
    [setPage]
  );

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilterType(e.target.value);
    setHistoryData(data);
  };

  const handleSearchByNameNumber = useCallback(async () => {
    try {
      if (inputSearch !== "") {
        await getHistorySearchByName({
          name: inputSearch.toLowerCase(),
          page: page,
        });
        setInputSearch("");
      } else {
        setHistoryData(data);
      }
    } catch (err) {
      toast.error(result.data?.messages);
    }
  }, [getHistorySearchByName, inputSearch, result.data?.messages]);

  const handleFilterByDate = useCallback(async () => {
    try {
      const body = {
        start_date: formatDate(startDate),
        end_date: formatDate(endDate),
      };
      await postHistoryByDate({ body, page: page });
      setStartDate("");
      setEndDate("");
    } catch (err) {
      toast.error(historyDateResult.data?.messages);
    }
  }, [postHistoryByDate, startDate, endDate]);

  useEffect(() => {
    if (isSuccess) {
      setHistoryData(data);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (result.isSuccess) {
      setHistoryData(result.data);
    }
  }, [result.isSuccess, handleSearchByNameNumber]);

  useEffect(() => {
    if (historyDateResult.isSuccess) {
      setHistoryData(historyDateResult?.data);
    }
  }, [historyDateResult.isSuccess, handleFilterByDate]);

  return (
    <Layout>
      <CardContiner>
        <div className="relative">
          {(isLoading && <LoadingSpinner />) ||
            (isFetching && <LoadingSpinner />) ||
            (result.isLoading && <LoadingSpinner />) ||
            (historyDateResult.isLoading && <LoadingSpinner />)}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 px-0 lg:px-6">
            <div>
              <h3 className="text-dark text-2xl font-medium">
                Riwayat Transaksi
              </h3>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row mt-5 md:mt-0 lg:mt-0 items-start md:items-center lg:items-center space-x-0 md:space-x-4 lg:space-x-4 space-y-4 md:space-y-0 lg:space-y-0">
              {selectedFilterType === "DATE" ? (
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-2">
                    <div className="input-start_date ">
                      <input
                        type="date"
                        className="py-3 px-4 rounded-lg bg-[white] focus:outline-none border border-[#d8d8d8] text-dark font-medium"
                        value={startDate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setStartDate(e.target.value)
                        }
                      />
                    </div>
                    <div className="input-end_date">
                      <input
                        type="date"
                        className=" py-3 px-4 rounded-lg bg-[white] focus:outline-none border border-[#d8d8d8] text-dark font-medium"
                        value={endDate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setEndDate(e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <Button
                    handleButton={handleFilterByDate}
                    title="Cari"
                    isDisabled={startDate === "" || endDate === ""}
                  />
                </div>
              ) : (
                <div className="flex items-center">
                  <input
                    type="text"
                    className="py-3 px-4 rounded-tl-lg rounded-bl-lg bg-[white] focus:outline-none border-t border-b border-l border-[#d8d8d8]"
                    placeholder="Cari Transaksi"
                    onChange={(e) => setInputSearch(e.target.value)}
                    value={inputSearch}
                  />
                  <button
                    className="text-white p-3 rounded-tr-lg rounded-br-lg hover:bg-primary-200 bg-primary-100 border-t-2 border-r-2 border-b-2 border-primary-100"
                    onClick={handleSearchByNameNumber}
                  >
                    <img src={ISearch} alt="icon search" />
                  </button>
                </div>
              )}

              <div>
                <select
                  className="py-3 px-4 rounded-lg bg-[white] focus:outline-none border border-[#d8d8d8] ml-6"
                  value={selectedFilterType}
                  onChange={handleSelectChange}
                >
                  <option value="NAME">Filter by name/number</option>
                  <option value="DATE">Filter by date</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <Table data={historyData?.data?.data ?? []} />
            {historyData?.data?.data.length === 0 ||
              (isError && <EmptyDataTable />)}
          </div>
          <div>
            {data?.data?.last_page !== undefined &&
              data?.data?.last_page >= 2 && (
                <Pagination
                  currentPage={historyData?.data.current_page ?? 1}
                  totalPages={historyData?.data.last_page ?? 1}
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
