import { useCallback, useEffect } from "react";
import { toast } from "react-toastify";

import IClose from "/icons/IClose.svg";
import IResend from "/icons/IResend.svg";
import IDone from "/icons/IDone.svg";
import ButtonCopy from "./ButtonCopy";
import { LoadingSpinner } from "../../components";
import { IActionColumn, IInboxColumn } from "../../utils/interfaces";
import {
  useGetOrderQuery,
  useLazyGetCancelQuery,
  useLazyGetFinishQuery,
  useLazyGetResendQuery,
} from "../../api/services/orderApi";
import EmptyDataTable from "../../components/EmptyDataTable";
import { useGetMeQuery } from "../../api/services/userApi";
import Countdown from "./CountDown";

const Table = () => {
  const { isLoading, data, refetch } = useGetOrderQuery(undefined);
  return (
    <div className="mt-4 overflow-x-auto relative w-full">
      {isLoading && <LoadingSpinner />}
      <table className="min-w-full">
        <thead className="shadow">
          <tr>
            <th className="w-2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th></th>
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
        <tbody className="w-full">
          {(data?.data?.length !== 0 &&
            data?.data?.map((item) => (
              <tr key={item.id}>
                <td className="w-2 px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 text-left">
                    {item.id}
                  </div>
                </td>
                <td className="px-2 py-4 whitespace-nowrap flex justify-start">
                  <ButtonCopy textToCopy={item.number} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-dark font-medium">
                    {item.number}
                  </div>
                </td>
                <InboxColumn
                  status={item.status}
                  inbox={item.inbox}
                  onChange={() => refetch()}
                />
                <td className="px-6 py-4 whitespace-nowrap  flex justify-start">
                  <div className="text-sm font-medium text-[gray]">
                    <Countdown initialSeconds={item?.expired_at ?? 1} />
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    <ActionColumn
                      status={item.status}
                      inbox={item.inbox}
                      itemId={item.id}
                      onChange={() => refetch()}
                    />
                  </div>
                </td>
              </tr>
            ))) ??
            []}
        </tbody>
      </table>
      {data?.data?.length === 0 && <EmptyDataTable />}
    </div>
  );
};

const InboxColumn: React.FC<IInboxColumn> = ({ status, inbox, onChange }) => {
  useEffect(() => {
    const pollingInterval = setInterval(() => {
      onChange();
    }, 3000);

    if (status === "3") {
      clearInterval(pollingInterval);
    }

    return () => {
      clearInterval(pollingInterval);
    };
  }, [status]);
  return (
    <td className="px-6 py-4 whitespace-nowrap w-2/4">
      <div className="text-sm text-gray-900 flex flex-wrap lg:whitespace-pre-wrap font-medium">
        {status === "2" ? "Menunggu SMS ..." : inbox}
      </div>
    </td>
  );
};

const ActionColumn: React.FC<IActionColumn> = ({
  status,
  inbox,
  itemId,
  onChange,
}) => {
  const [getCancel, cancelResults] = useLazyGetCancelQuery();
  const [getResend, resendResults] = useLazyGetResendQuery();
  const [getFinish, finishResults] = useLazyGetFinishQuery();
  const me = useGetMeQuery(undefined);

  const handleCancel = useCallback(() => {
    toast.promise(getCancel(itemId), {
      pending: "Permintaan sedang di proses",
      success: "Item berhasil di cancel",
      error: "Terjadi kesalahan, periksa koneksi secara berkala",
    });
  }, [getCancel, itemId]);

  const handleResend = useCallback(() => {
    toast.promise(getResend(itemId), {
      pending: "Permintaan sedang di proses",
      success: "Kode sms sudah dikirim kembali",
      error: "Terjadi kesalahan, periksa koneksi secara berkala",
    });
  }, [getResend, itemId]);

  const handleFinish = useCallback(() => {
    toast.promise(getFinish(itemId), {
      pending: "Permintaan sedang di proses",
      success: "Item berhasil diselesaikan",
      error: "Terjadi kesalahan, periksa koneksi secara berkala",
    });
  }, [getFinish, itemId]);

  useEffect(() => {
    if (cancelResults.isSuccess && cancelResults.data?.success) {
      onChange();
      me.refetch();
    }
  }, [cancelResults]);
  useEffect(() => {
    if (resendResults.isSuccess && resendResults.data?.success) {
      onChange();
    }
  }, [resendResults]);
  useEffect(() => {
    if (finishResults.isSuccess && finishResults.data?.success) {
      onChange();
    }
  }, [finishResults]);

  switch (true) {
    case status === "2" && inbox === null:
      return (
        <button
          className="w-12 h-12 lg:h-10 lg:w-10 flex items-center justify-center bg-[red] hover:bg-[#bb3b3b] text-light font-medium rounded-lg"
          onClick={handleCancel}
        >
          <img src={IClose} alt="" width={16} className="block" />
        </button>
      );
    case status === "3":
      return (
        <div className="flex items-center space-x-2">
          <button
            className="w-12 h-12 lg:h-10 lg:w-10 flex items-center justify-center bg-[#3aa524] hover:bg-[#409130] text-light font-medium rounded-lg "
            onClick={handleFinish}
          >
            <img src={IDone} alt="" width={16} className="block" />
          </button>
          <button
            className="w-12 h-12 lg:h-10 lg:w-10 flex items-center justify-center bg-[#0077ff] hover:bg-[#0051ff] text-light font-medium rounded-lg "
            onClick={handleResend}
          >
            <img src={IResend} alt="" width={16} className="block" />
          </button>
        </div>
      );
    case status === "2" && inbox !== null:
      return (
        <button
          className="w-12 h-12 lg:h-10 lg:w-10 flex items-center justify-center bg-[#3aa524] hover:bg-[#409130] text-light font-medium rounded-lg"
          onClick={handleFinish}
        >
          <img src={IDone} alt="" width={16} />
        </button>
      );
  }
};

export default Table;
