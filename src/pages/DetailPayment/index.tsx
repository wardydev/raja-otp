import { useState } from "react";
import { Layout } from "../../components";
import Payment from "./Payment";
import PaymentProceed from "./PaymentProceed";

const DetailPayment = () => {
  const [depositId, setDepositId] = useState<number | null>(null);

  return (
    <Layout>
      <div className="flex justify-center items-start w-full">
        <div className="flex space-x-6">
          <Payment setDeposit={setDepositId} />
          <PaymentProceed depositId={depositId} />
        </div>
      </div>
    </Layout>
  );
};

export default DetailPayment;
