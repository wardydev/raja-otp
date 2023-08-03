import React from "react";
import { Button, CardContiner, Layout } from "../../components";
import Table from "./Table";
import ISearch from "/icons/ISearch.svg";

const RiwayatTransaksi = () => {
  return (
    <Layout>
      <CardContiner>
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4">
          <div>
            <h3 className="text-dark text-xl font-medium">Riwayat Transaksi</h3>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row mt-5 md:mt-0 lg:mt-0 items-start md:items-center lg:items-center space-x-0 md:space-x-4 lg:space-x-4 space-y-4 md:space-y-0 lg:space-y-0">
            <div className="flex items-center">
              <button className="bg-primary-100 text-white px-4 py-3 rounded hover:bg-primary-200">
                <img src={ISearch} alt="icon search" />
              </button>
              <input
                type="text"
                className="py-3 px-4 rounded-tr-lg rounded-br-lg shadow-md bg-[white] shadow-dark-100/5 focus:outline-none"
                placeholder="Search..."
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="date"
                className="py-3 px-4 roundedlg rounded-lg shadow-md bg-[white] shadow-dark-100/5 focus:outline-none"
              />
            </div>
            <div>
              <Button title="Button Download Transaksi" />
            </div>
          </div>
        </div>
        <Table />
      </CardContiner>
    </Layout>
  );
};

export default RiwayatTransaksi;
