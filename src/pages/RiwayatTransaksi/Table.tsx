import React from "react";
import { IHistoryDataItem } from "../../api/services/types";
import { formatRupiah, formatTimestamp } from "../../utils/functions";
import { ITableHistory } from "../../utils/interfaces";
import { Button } from "../../components";

const Table: React.FC<ITableHistory> = ({ data }) => {
  return (
    <div className="mt-4 overflow-x-auto bg-[white] px-4">
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
              Nomor HP
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Layanan
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Deskripsi
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nominal
            </th>
          </tr>
        </thead>
        <tbody className="">
          {data?.map((item: IHistoryDataItem) => (
            <tr key={item.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {formatTimestamp(item.created_at)}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.number}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{item.sv_name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap w-2/4">
                <div className="text-sm text-gray-900">{item.inbox}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {item.status === "0" ? (
                    <button
                      className="bg-[#fd4343] rounded flex py-1 px-2 font-medium text-xs"
                      disabled
                    >
                      Refund
                    </button>
                  ) : (
                    <button
                      className="bg-[#2dc542]  rounded flex py-1 px-2 font-medium text-xs"
                      disabled
                    >
                      Selesai
                    </button>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {formatRupiah(item.order_price)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
