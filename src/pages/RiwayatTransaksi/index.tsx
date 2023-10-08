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
  const [statusDataActive, setStatusDataActive] = useState<
    "DEFAULT" | "NAME" | "DATE"
  >("DEFAULT");
  const [dateHistoryData, setDateHistoryData] = useState<
    IHistoryResponse | undefined
  >();
  const [nameHistoryData, setNameHitoryData] = useState<
    IHistoryResponse | undefined
  >();

  const [selectedFilterType, setSelectedFilterType] = useState<string>("NAME");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handlePageChange = (page: number) => {
    if (statusDataActive === "DEFAULT") {
      setPage(page);
    } else if (statusDataActive === "NAME") {
      getHistorySearchByName({
        name: inputSearch.toLowerCase(),
        page,
      });
    } else {
      const body = {
        start_date: formatDate(startDate),
        end_date: formatDate(endDate),
      };
      postHistoryByDate({ body, page });
    }
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilterType(e.target.value);
    setHistoryData(data);
    setStatusDataActive("DEFAULT");
    setPage(1);
    setInputSearch("");
    setStartDate("");
    setEndDate("");
  };

  const handleSearchByNameNumber = useCallback(async () => {
    try {
      if (inputSearch !== "") {
        await getHistorySearchByName({
          name: inputSearch.toLowerCase(),
          page: 1,
        });
        setStatusDataActive("NAME");
      } else {
        setHistoryData(data);
      }
    } catch (err) {
      toast.error(result.data?.messages);
    }
  }, [
    getHistorySearchByName,
    inputSearch,
    result.data?.messages,
    setPage,
    page,
  ]);

  const handleFilterByDate = useCallback(async () => {
    try {
      const body = {
        start_date: formatDate(startDate),
        end_date: formatDate(endDate),
      };
      await postHistoryByDate({ body, page: 1 });
      setStatusDataActive("DATE");
    } catch (err) {
      toast.error(historyDateResult.data?.messages);
    }
  }, [postHistoryByDate, startDate, endDate, setPage, page]);

  useEffect(() => {
    if (isSuccess) {
      setHistoryData(data);
    }
  }, [isSuccess, data]);

  useEffect(() => {
    if (result.isSuccess) {
      setNameHitoryData(result.data);
    }
  }, [result.isSuccess, result.data]);

  useEffect(() => {
    if (historyDateResult.isSuccess) {
      setDateHistoryData(historyDateResult?.data);
    }
  }, [historyDateResult.isSuccess, historyDateResult.data]);

  const renderTable = useCallback(() => {
    switch (statusDataActive) {
      case "DEFAULT":
        return (
          <div>
            <div>
              <Table data={historyData?.data?.data ?? []} />
              {historyData?.data?.data.length === 0 ||
                (isError && <EmptyDataTable />)}
            </div>
            <div>
              {data?.data?.last_page !== undefined &&
                data?.data?.last_page >= 2 && (
                  <Pagination
                    currentPage={data?.data.current_page ?? 1}
                    totalPages={data?.data.last_page ?? 1}
                    onPageChange={handlePageChange}
                  />
                )}
            </div>
          </div>
        );
      case "NAME":
        return (
          <div>
            <div>
              <Table data={nameHistoryData?.data?.data ?? []} />
              {nameHistoryData?.data?.data.length === 0 ||
                (isError && <EmptyDataTable />)}
            </div>
            <div>
              {result?.data?.data.last_page !== undefined &&
                result?.data?.data.last_page >= 2 && (
                  <Pagination
                    currentPage={result?.data?.data.current_page ?? 1}
                    totalPages={result?.data?.data.last_page ?? 1}
                    onPageChange={handlePageChange}
                  />
                )}
            </div>
          </div>
        );
      case "DATE":
        return (
          <div>
            <div>
              <Table data={dateHistoryData?.data?.data ?? []} />
              {dateHistoryData?.data?.data.length === 0 ||
                (isError && <EmptyDataTable />)}
            </div>
            <div>
              {historyDateResult?.data?.data.last_page !== undefined &&
                historyDateResult?.data?.data.last_page >= 2 && (
                  <Pagination
                    currentPage={
                      historyDateResult?.data?.data.current_page ?? 1
                    }
                    totalPages={historyDateResult?.data?.data.last_page ?? 1}
                    onPageChange={handlePageChange}
                  />
                )}
            </div>
          </div>
        );
    }
  }, [
    handlePageChange,
    historyData,
    nameHistoryData,
    dateHistoryData,
    page,
    setPage,
  ]);

  return (
    <Layout>
      <CardContiner>
        <div className="relative">
          {(isLoading && <LoadingSpinner />) ||
            (isFetching && <LoadingSpinner />) ||
            (result.isLoading && <LoadingSpinner />) ||
            (result.isFetching && <LoadingSpinner />) ||
            (historyDateResult.isLoading && <LoadingSpinner />)}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 px-0 lg:px-6">
            <div>
              <h3 className="text-dark text-2xl font-medium">
                Riwayat Transaksi
              </h3>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row mt-5 md:mt-0 lg:mt-0 items-start md:items-center lg:items-center w-full lg:w-auto">
              {selectedFilterType === "DATE" ? (
                <div className="flex items-center space-x-2 order-2 lg:order-1 flex-col lg:flex-row w-full">
                  <div className="flex items-center space-x-0 lg:space-x-2 space-y-4 lg:space-y-0 flex-col lg:flex-row relative w-full mb-6 lg:mb-0">
                    <div className="input-start_date w-full">
                      <input
                        type="date"
                        className="py-4 lg:py-3 px-4 rounded-lg bg-[white] focus:outline-none border border-[#d8d8d8] text-dark font-medium w-full"
                        value={startDate}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                          setStartDate(e.target.value)
                        }
                      />
                    </div>
                    <div className="input-end_date">
                      <input
                        type="date"
                        className="py-4 lg:py-3 px-4 rounded-lg bg-[white] focus:outline-none border border-[#d8d8d8] text-dark font-medium w-full"
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
                <div className="flex items-center order-2 lg:order-1 w-full -mt-4 lg:mt-0">
                  <input
                    type="text"
                    className="py-4 lg:py-3 px-4 rounded-tl-lg rounded-bl-lg bg-[white] focus:outline-none border-t border-b border-l border-[#d8d8d8] w-full"
                    placeholder="Cari Transaksi"
                    onChange={(e) => setInputSearch(e.target.value)}
                    value={inputSearch}
                  />
                  <button
                    className="text-white lg:p-3 p-4 rounded-tr-lg rounded-br-lg hover:bg-primary-200 bg-primary-100 border-t-4 border-r-4 border-b-4 border-primary-100"
                    onClick={handleSearchByNameNumber}
                  >
                    <img src={ISearch} alt="icon search" />
                  </button>
                </div>
              )}

              <div className="mb-8 lg:mb-0 flex justify-start w-full order-1 lg:order-2 ">
                <select
                  className="py-4 lg:py-3 px-4 rounded-lg bg-[white] focus:outline-none border border-[#d8d8d8] ml-0 lg:ml-6 w-full lg:w-auto"
                  value={selectedFilterType}
                  onChange={handleSelectChange}
                >
                  <option value="NAME">Filter by name/number</option>
                  <option value="DATE">Filter by date</option>
                </select>
              </div>
            </div>
          </div>
          {renderTable()}
        </div>
      </CardContiner>
    </Layout>
  );
};

export default RiwayatTransaksi;
