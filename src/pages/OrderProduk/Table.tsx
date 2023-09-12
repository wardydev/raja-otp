import { useEffect } from "react";

import IClose from "/icons/IClose.svg";
import IResend from "/icons/IResend.svg";
import IDone from "/icons/IDone.svg";
import ButtonCopy from "./ButtonCopy";
import { Countdown, LoadingSpinner } from "../../components";
import { IActionColumn, IInboxColumn } from "../../utils/interfaces";
import { useGetOrderQuery } from "../../api/services/orderApi";
import EmptyDataTable from "../../components/EmptyDataTable";

const Table = () => {
  const { data, isLoading } = useGetOrderQuery();
  return (
    <div className="mt-4 overflow-x-auto relative">
      {isLoading && <LoadingSpinner />}
      <table className="min-w-full">
        <thead className="shadow">
          <tr>
            <th className="w-56 lg:w-24"></th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Nomor Virtual
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Isi Pesan
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Sisa Waktu
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Aksi
            </th>
          </tr>
        </thead>
        <tbody className="">
          {(data?.data.length !== 0 &&
            data?.data.map((item, index) => (
              <tr key={index}>
                <td className="w-20 lg:w-24 px-6 py-4 whitespace-nowrap flex justify-start">
                  <ButtonCopy textToCopy={item.number} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.number}</div>
                </td>
                <InboxColumn status={item.status} inbox={item.inbox} />
                <td className="px-6 py-4 whitespace-nowrap  flex justify-start">
                  <Countdown
                    initialMinutes={
                      item.status === "3" ? 0 : item?.expired_at ?? 0
                    }
                  />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    <ActionColumn status={item.status} inbox={item.inbox} />
                  </div>
                </td>
              </tr>
            ))) ??
            []}
        </tbody>
      </table>
      {data?.data.length === 0 && <EmptyDataTable />}
    </div>
  );
};

const InboxColumn: React.FC<IInboxColumn> = ({ status, inbox }) => {
  return (
    <td className="px-6 py-4 whitespace-nowrap w-2/4">
      <div className="text-sm text-gray-900 flex flex-wrap lg:whitespace-pre-wrap">
        {status === "2" ? "Menunggu SMS ..." : inbox}
      </div>
    </td>
  );
};

const ActionColumn: React.FC<IActionColumn> = ({ status, inbox }) => {
  switch (true) {
    case status === "2" && inbox === null:
      return (
        <button className="py-1 px-2 bg-[red] hover:bg-[#bb3b3b] text-light font-medium rounded-lg flex items-center space-x-2">
          <img src={IClose} alt="" width={16} />
          <span>Batalkan</span>
        </button>
      );
    case status === "3":
      return (
        <div className="flex items-center space-x-2">
          <button className="p-3 bg-[#3aa524] hover:bg-[#409130] text-light font-medium rounded-lg flex items-center space-x-2">
            <img src={IDone} alt="" width={16} />
          </button>
          <button className="p-3 bg-[#0077ff] hover:bg-[#0051ff] text-light font-medium rounded-lg flex items-center space-x-2">
            <img src={IResend} alt="" width={16} />
          </button>
        </div>
      );
    case status === "2" && inbox !== null:
      return (
        <button className="py-1 px-2 bg-[#3aa524] hover:bg-[#409130] text-light font-medium rounded-lg flex items-center space-x-2">
          <img src={IDone} alt="" width={16} />
        </button>
      );
  }
};

export default Table;
