import { useState } from "react";
import { Button, CardContiner, Layout, LoadingSpinner } from "../../components";
import Table from "./Table";
import {
  useGetCountryQuery,
  useGetOperatorQuery,
  useGetServiceCountryIdQuery,
} from "../../api/services/serviceApi";
import DropdownCountry from "./DropdownCountry";
import DropdownOperator from "./DropdownOperator";
import {
  useGetOrderQuery,
  usePostNewOrderMutation,
} from "../../api/services/orderApi";
import {
  CountryResponseItem,
  ServiceByCountryResponse,
} from "../../utils/interfaces";
import DropdownInput from "./DropdownInput";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";

const OrderProduk = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedCountry, setSelectedCountry] = useState<any>(0);
  const [selectedOperator, setSelectedOperator] = useState<string>("");
  const [selectedCountryService, setSelectedCountryService] = useState<
    ServiceByCountryResponse | undefined
  >();

  const { data } = useGetCountryQuery();
  const operator = useGetOperatorQuery(selectedCountry.id ?? 0);
  const serviceByCountry = useGetServiceCountryIdQuery(selectedCountry.id ?? 0);
  const [postNewOrder, newOrder] = usePostNewOrderMutation();
  const { refetch } = useGetOrderQuery();

  const handleSelectedCountryChange = (option: CountryResponseItem) => {
    setSelectedCountry(option);
  };
  const handleSelectedOperatorChange = (option: string) => {
    setSelectedOperator(option);
  };
  const handleSelectedCountryByService = (option: ServiceByCountryResponse) => {
    setSelectedCountryService(option);
  };

  const handleButtonSubmit = () => {
    try {
      const body = {
        service_id: selectedCountryService?.id,
        operator: selectedOperator,
      };

      postNewOrder(body);
      refetch();
    } catch (err) {
      toast.error(err);
    }
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-y-6 lg:gap-y-0 gap-x-0 md:gap-x-4 lg:gap-x-6">
        <CardContiner>
          <DropdownCountry
            label="*) Pilih Server :"
            options={data?.data ?? []}
            defaultValue={data?.data[0].country_name ?? "Server"}
            optionChange={handleSelectedCountryChange}
          />
          <DropdownOperator
            label="Pilih Operator :"
            options={operator?.data?.data ?? []}
            defaultValue={"Pilih Operator"}
            optionChange={handleSelectedOperatorChange}
          />
          <DropdownInput
            label="*) Pilih Layanan Aplikasi :"
            options={serviceByCountry.data?.data ?? []}
            defaultValue="Pilih layanan"
            optionChange={handleSelectedCountryByService}
          />
          <div className="mt-3">
            <Button title="Order Nomor" handleButton={handleButtonSubmit} />
          </div>
        </CardContiner>
        <div className="col-span-3">
          <CardContiner>
            <Table />
            {newOrder.isLoading && <LoadingSpinner />}
          </CardContiner>
        </div>
      </div>
    </Layout>
  );
};

export default OrderProduk;
