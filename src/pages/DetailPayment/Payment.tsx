import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

import { Button, LoadingSpinner } from "../../components";
import {
  useGetHistoryQuery,
  useGetPaymentQuery,
  usePostNewPaymentMutation,
} from "../../api/services/depositApi";
import { useCallback, useMemo } from "react";
import { formatRupiah } from "../../utils/functions";
import { IPaymentProceed } from "../../utils/interfaces";

const Payment: React.FC<IPaymentProceed> = ({ setDeposit }) => {
  const location = useLocation();
  const [isPending, setIsPending] = useState<boolean>(false);
  const [depositId, setDepositId] = useState<number | undefined>();

  const { data, isLoading } = useGetPaymentQuery(undefined);
  const [postNewPayment, newPayment] = usePostNewPaymentMutation();
  const historyDeposit = useGetHistoryQuery(1);

  const paymentKey = useMemo(() => {
    return data?.data[0].pm_key;
  }, [data?.data]);

  const handleProceedPayment = useCallback(() => {
    const body = {
      pm_key: paymentKey,
      amount: location.state?.amount,
    };
    const res = postNewPayment(body);
    toast.promise(res, {
      pending: "Tunggu sebentar..",
      success: "Pembayaran berhasil👍",
      error: "Maaf, Sepertinya terjadi kesalahan",
    });
  }, [location.state?.amount, paymentKey, postNewPayment]);

  useEffect(() => {
    if (newPayment.isSuccess) {
      setDeposit(newPayment.data?.data.id);
      if (newPayment.data?.success === false) {
        setIsPending(true);
      }
    }

    const isPending = historyDeposit.data?.data.data.some(
      (item) => item.status === "pending"
    );
    if (isPending) {
      setIsPending(true);
    } else {
      setIsPending(false);
    }

    const dataIsPending = historyDeposit.data?.data.data
      .filter((item) => item.status === "pending")
      .map((item) => item.id);
    if (dataIsPending) {
      setDepositId(dataIsPending[0]);
    }
  }, [postNewPayment, newPayment, setDeposit, historyDeposit]);

  return (
    <div className="w-full lg:w-[454px] h-auto lg:min-h-[578px] bg-[white] rounded-2xl p-4 lg:p-8 mb-6 lg:mb-0 pb-10 lg:pb-0">
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Link to="/deposit" className="text-[#DEDEDE]">
            Deposit /
          </Link>
          <span className="text-dark">Payment</span>
        </div>
        {isPending && (
          <div className="bg-[#ff8f8f] p-4 mb-4 text-left whitespace-pre-wrap">
            <h1>
              Selesaikan Pembayaran sebelumnya Terlebih dahulu{" "}
              <Link
                className="underline"
                to={`/deposit/detail/${depositId}`}
                state={{ id: depositId }}
              >
                Cek disini
              </Link>{" "}
            </h1>
          </div>
        )}
        <div className="mb-6 relative">
          {isLoading && <LoadingSpinner />}
          <h3 className="text-dark font-semibold">Metode Pembayaran</h3>
          {data?.data.map((item, index) => {
            return (
              <div
                className="flex items-center space-x-2 mt-3 mb-4"
                key={index}
              >
                <div className="p-4 bg-[#F9F9F9] border border-primary-100 rounded-lg">
                  <img
                    src="https://seeklogo.com/images/Q/quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png"
                    alt="qris logo"
                    width={36}
                  />
                  <h4 className="text-primary-100 font-medium mt-1 text-xs">
                    {item.pm_name}
                  </h4>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mb-6">
          <h3 className="text-dark font-semibold">Detail Paket</h3>
          <div className="w-full border-2 border-[#e7e7e7] rounded-xl p-4 mt-3">
            <div>
              <h5 className="font-medium text-[#d3d3d3] text-xs">Nama Paket</h5>
              <h3 className="font-semibold text-dark text-lg">
                {location.state?.package}
              </h3>
            </div>
            <hr className="border border-[#f3f3f3] my-4" />
            <div>
              <h5 className="font-medium text-[#d3d3d3] text-xs">Harga</h5>
              <h3 className="font-semibold text-dark text-lg">
                {formatRupiah(location.state?.amount)}
              </h3>
            </div>
          </div>
        </div>
        <Button
          isDisabled={data?.data.length === 0 || isPending === true}
          title="Lanjutkan Pembayaran"
          handleButton={handleProceedPayment}
        />
      </div>
    </div>
  );
};

export default Payment;
