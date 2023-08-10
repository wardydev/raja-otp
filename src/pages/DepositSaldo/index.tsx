import { CardContiner, Layout } from "../../components";
import Pricing from "./Pricing";
import Table from "./Table";

const packages = [
  {
    name: "Paket Basic",
    price: "Rp 5.000,-",
    description: "lorem ipsum dolor sit amet",
    isSpecial: false,
  },
  {
    name: "Paket Pro",
    price: "Rp 50.000,-",
    description: "lorem ipsum dolor sit amet",
    isSpecial: false,
  },
  {
    name: "Paket Premium",
    price: "Rp 100.000,-",
    description: "lorem ipsum dolor sit amet",
    isSpecial: true,
  },
];

const DepositSaldo = () => {
  return (
    <Layout>
      <Pricing packages={packages} />
      <div className="mt-12">
        <CardContiner>
          <Table />
        </CardContiner>
      </div>
    </Layout>
  );
};

export default DepositSaldo;
