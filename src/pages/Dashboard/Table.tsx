import { useState } from "react";
import { useGetNewsQuery } from "../../api/services/homeApi";
import { formatTimestamp } from "../../utils/functions";
import { Pagination } from "../../components";

const Table = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading } = useGetNewsQuery(page);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  if (isLoading) {
    return <h1 className="bg-[red]">LOADING</h1>;
  }

  return (
    <div className="mt-4 overflow-x-auto">
      <table className="min-w-full">
        <thead className="shadow">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Tanggal Dibuat
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
              Status
            </th>
          </tr>
        </thead>
        <tbody className="">
          {data?.data.data.map((item) => {
            return (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {formatTimestamp(item.created_at)}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div
                    className="text-sm text-gray-900"
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  ></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <p>selesai</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        currentPage={data?.data.current_page ?? 1}
        totalPages={data?.data.last_page ?? 1}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
