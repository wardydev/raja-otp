import { DummyDataTableOrder } from "../../utils/helper";
import IClose from "/icons/IClose.svg";
import ButtonCopy from "./ButtonCopy";

const Table = () => {
  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full">
        <thead className="shadow">
          <tr>
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
        <tbody className="">
          {DummyDataTableOrder.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">
                <ButtonCopy textToCopy={item.virtualNumber} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {item.virtualNumber}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {item.message}: <span className="font-bold">{item.otp}</span>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {item.remainingTime}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  <button className="bg-secondary-100 hover:bg-secondary-200 p-2 rounded text-light font-medium flex items-center space-x-2">
                    <img src={IClose} alt="close-icon" />
                    <span>Batalkan</span>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
