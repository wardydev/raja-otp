import {
  CardContiner,
  Dropdown,
  DropdownInput,
  Layout,
} from "../../components";
import Table from "./Table";
import { options } from "../../utils/helper";

const OrderProduk = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-x-0 md:gap-x-4 lg:gap-x-6">
        <CardContiner>
          <Dropdown
            label="*) Pilih Server :"
            options={options}
            defaultValue="Pilih server mu"
          />
          <Dropdown
            label="*) Pilih Operator :"
            options={options}
            defaultValue="Pilih operator"
          />
          <DropdownInput
            label="*) Pilih Layanan Aplikasi :"
            options={options}
            defaultValue="Pilih layanan"
          />
        </CardContiner>
        <div className="col-span-3">
          <CardContiner>
            <Table />
          </CardContiner>
        </div>
      </div>
    </Layout>
  );
};

export default OrderProduk;
