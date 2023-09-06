import { useEffect, useState } from "react";
import { Button, CardContiner, DropdownInput, Layout } from "../../components";
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

export interface CountryResponseItem {
  id: number;
  country_name: string;
}

export interface IOperatorResponseItem {
  data: [string];
}
1;

export interface IOperatorResponse {
  success: boolean;
  messages: string;
  data: IOperatorResponseItem;
}

export interface ServiceByCountryResponse {
  id: number;
  name: string;
  price: number;
  icon: string;
}

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
  const order = useGetOrderQuery({
    id: newOrder.data?.data.id,
    number: newOrder.data?.data.number,
  });

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
    const body = {
      service_id: selectedCountryService?.id,
      operator: selectedOperator,
    };

    postNewOrder(body);
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
            defaultValue={operator.data?.data[0] ?? "Pilih Operator"}
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
            {order.isLoading && <div className="bg-[red]">Loading..</div>}
            {newOrder.isLoading && <div className="bg-[green]">Loading..</div>}
            <Table
              data={order.data?.data ?? []}
              onChange={() => order.refetch()}
            />
          </CardContiner>
        </div>
      </div>
    </Layout>
  );
};

export default OrderProduk;
