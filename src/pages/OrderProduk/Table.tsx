import { useCallback, useEffect } from "react";
import { toast } from "react-toastify";

import IClose from "/icons/IClose.svg";
import IResend from "/icons/IResend.svg";
import IDone from "/icons/IDone.svg";
import ButtonCopy from "./ButtonCopy";
import { Countdown, LoadingSpinner } from "../../components";
import {
  IActionColumn,
  ICardDataTable,
  IInboxColumn,
} from "../../utils/interfaces";
import {
  useGetOrderQuery,
  useLazyGetCancelQuery,
  useLazyGetFinishQuery,
  useLazyGetResendQuery,
} from "../../api/services/orderApi";
import EmptyDataTable from "../../components/EmptyDataTable";
import { useGetMeQuery } from "../../api/services/userApi";

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
        <tbody className="w-full">
          {(data?.data?.length !== 0 &&
            data?.data?.map((item, index) => (
              <tr key={index}>
                <td className="w-2 px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 text-left">
                    {item.id}
                  </div>
                </td>
                <td className="w-20 lg:w-24 px-6 py-4 whitespace-nowrap flex justify-start">
                  <ButtonCopy textToCopy={item.number} />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{item.number}</div>
                </td>
                <InboxColumn
                  status={item.status}
                  inbox={item.inbox}
                  onChange={() => refetch()}
                />
                <td className="px-6 py-4 whitespace-nowrap  flex justify-start">
                  <Countdown
                    initialMinutes={
                      item.status === "3" ? 0 : item?.expired_at ?? 0
                    }
                    status={item.status}
                  />
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
      <div className="block lg:hidden">
        <CardDataTable data={data?.data} onChange={() => refetch()} />
      </div>
    </div>
  );
};

const InboxColumn: React.FC<IInboxColumn> = ({ status, inbox, onChange }) => {
  useEffect(() => {
    const pollingInterval = setInterval(() => {
      onChange();
    }, 5000);

    if (status === "3") {
      clearInterval(pollingInterval);
    }

    return () => {
      clearInterval(pollingInterval);
    };
  }, [status]);
  return (
    <td className="px-6 py-4 whitespace-nowrap w-2/4">
      <div className="text-sm text-gray-900 flex flex-wrap lg:whitespace-pre-wrap">
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
          className="w-full lg:w-8 h-12 lg:h-8 flex items-center justify-center bg-[red] hover:bg-[#bb3b3b] text-light font-medium rounded-lg"
          onClick={handleCancel}
        >
          <img src={IClose} alt="" width={16} className="hidden lg:block" />
          <span className="block lg:hidden">Batalkan</span>
        </button>
      );
    case status === "3":
      return (
        <div className="flex items-center space-x-2">
          <button
            className="w-full lg:w-8 h-12 lg:h-8 flex items-center justify-center bg-[#3aa524] hover:bg-[#409130] text-light font-medium rounded-lg "
            onClick={handleFinish}
          >
            <img src={IDone} alt="" width={16} className="hidden lg:block" />
            <span className="block lg:hidden">Selesai</span>
          </button>
          <button
            className="w-full lg:w-8 h-12 lg:h-8 flex items-center justify-center bg-[#0077ff] hover:bg-[#0051ff] text-light font-medium rounded-lg "
            onClick={handleResend}
          >
            <img src={IResend} alt="" width={16} className="hidden lg:block" />
            <span className="block lg:hidden">Kirim Ulang</span>
          </button>
        </div>
      );
    case status === "2" && inbox !== null:
      return (
        <button
          className="w-8 h-8 flex items-center justify-center bg-[#3aa524] hover:bg-[#409130] text-light font-medium rounded-lg"
          onClick={handleFinish}
        >
          <img src={IDone} alt="" width={16} />
        </button>
      );
  }
};

const CardDataTable: React.FC<ICardDataTable> = ({ data, onChange }) => {
  return (
    <>
      {data?.length !== 0 &&
        data?.map((item) => {
          return (
            <div className="w-full" key={item.id}>
              <div className="mb-3">
                <h5 className="text-[#878787] text-sm capitalize">ID</h5>
                <p className="text-xl text-dark font-bold">{item.id}</p>
              </div>
              <div className="mb-5">
                <h5 className="text-[#878787] text-sm capitalize mb-2">
                  nomor virtual
                </h5>
                <div className="flex space-x-2">
                  <div className="h-12 w-full rounded-lg border border-primary-100 text-primary-100 font-bold text-center flex items-center justify-center">
                    {item.number}
                  </div>
                  <ButtonCopy textToCopy={item.number} />
                </div>
              </div>
              <div className="mb-5">
                <h5 className="text-[#878787] text-sm capitalize">isi pesan</h5>
                <p className="text-xl text-dark font-bold font-mono">
                  {item.inbox}
                </p>
              </div>
              <div className="mb-5">
                <h5 className="text-[#878787] text-sm capitalize">
                  sisa waktu
                </h5>
                <Countdown
                  initialMinutes={
                    item.status === "3" ? 0 : item?.expired_at ?? 0
                  }
                  status={item.status}
                />
              </div>
              <div className="flex flex-col space-y-4">
                <ActionColumn
                  inbox={item.inbox}
                  itemId={item.id}
                  status={item.status}
                  onChange={onChange}
                />
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Table;
