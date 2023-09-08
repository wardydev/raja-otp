import { useState, useCallback, useEffect } from "react";
import { Link } from "react-router-dom";

import IEye from "/icons/IEye.svg";
import IClose from "/icons/IClose.svg";

import {
  useGetCancelQuery,
  useGetHistoryQuery,
} from "../../api/services/depositApi";
import { Pagination } from "../../components";
import { formatRupiah, formatTimestamp } from "../../utils/functions";
import { IRenderDetailAction, ITableDeposit } from "../../utils/interfaces";
import { ItemDetailPayment } from "../../api/services/types";

const Table: React.FC<ITableDeposit> = ({
  setIsPending,
  setDepositId,
  depositId,
}) => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useGetHistoryQuery(page);

  const handlePageChange = useCallback(
    (page: number) => {
      setPage(page);
    },
    [page]
  );

  useEffect(() => {
    const isPending = data?.data.data.some((item) => item.status === "pending");
    if (isPending) {
      setIsPending(true);
    } else {
      setIsPending(false);
    }

    const dataIsPending = data?.data.data
      .filter((item) => item.status === "pending")
      .map((item) => item.id);
    if (dataIsPending) {
      setDepositId(dataIsPending[0]);
    }
  }, [data]);

  if (isLoading) {
    return <h1 className="text-xl bg-[red]">Loading..</h1>;
  }

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full">
        <thead className="shadow">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Tanggal Dibuat
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nominal
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Pembayaran
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Detail
            </th>
          </tr>
        </thead>
        <tbody className="">
          {data?.data.data.map((item) => {
            return (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {formatTimestamp(item.created_at)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {formatRupiah(item.amount)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.payment}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {<RenderDetailAction item={item} depositId={depositId} />}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        {data?.data.last_page !== 1 && (
          <Pagination
            currentPage={data?.data.current_page ?? 0}
            totalPages={data?.data.last_page ?? 0}
            onPageChange={handlePageChange}
          />
        )}
      </div>
    </div>
  );
};

const RenderDetailAction: React.FC<IRenderDetailAction> = ({
  item,
  depositId,
}) => {
  const [temporaryId, setTemporaryId] = useState<number | null>(null);
  const { isLoading } = useGetCancelQuery(temporaryId);

  const handleCancelDeposit = () => {
    setTemporaryId(depositId);
  };

  switch (item.status) {
    case "pending":
      return (
        <div className="flex items-center space-x-2">
          <button
            onClick={handleCancelDeposit}
            className="bg-[#fd4343] hover:bg-[#df4949] rounded flex py-1 px-2"
          >
            <img src={IClose} alt="eye-icon" width={16} />
            {isLoading && "Loading.."}
          </button>
          <button className="bg-[#3f7cff] hover:bg-[#6092ff] rounded flex py-1 px-2">
            <Link to={`/deposit/detail/${depositId}`} state={{ id: depositId }}>
              <img src={IEye} alt="eye-icon" width={16} />
            </Link>
          </button>
        </div>
      );
    case "sukses":
      return (
        <button
          className="bg-[#2dc542] rounded flex py-1 px-2 text-light text-xs font-medium"
          disabled
        >
          Sukses
        </button>
      );
    case "cancel":
      return (
        <button
          className="bg-[#fd4343] rounded flex py-1 px-2 text-light text-xs font-medium"
          disabled
        >
          Di batalkan
        </button>
      );
  }
};

export default Table;
