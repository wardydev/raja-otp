import { Link } from "react-router-dom";
import { useState } from "react";

import { CardContiner, Layout } from "../../components";
import Pricing from "./Pricing";
import Table from "./Table";
import { itemPackage } from "../../utils/helper";

const DepositSaldo = () => {
  const [isPending, setIsPending] = useState<boolean>(false);
  const [depositId, setDepositId] = useState<number | undefined>();

  return (
    <Layout>
      {isPending && (
        <div className="bg-[#ff8f8f] p-6 flex items-center mb-4">
          <h1>Selesaikan Pembayaran</h1>
          <Link
            className="underline"
            to={`/deposit/detail/${depositId}`}
            state={{ id: depositId }}
          >
            Cek disini
          </Link>
        </div>
      )}
      <Pricing packages={itemPackage} />
      <div className="mt-12">
        <CardContiner>
          <Table
            setIsPending={setIsPending}
            setDepositId={setDepositId}
            depositId={depositId}
          />
        </CardContiner>
      </div>
    </Layout>
  );
};

export default DepositSaldo;
