const DetailCard = ({ data }) => {
  return (
    <div className="overflow-x-hidden bg-white rounded-lg shadow overflow-y-scroll relative wrapper md:overflow-x-visible dark:bg-gray-800">
      <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative">
        <thead>
          <tr className="text-left">
            <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-4 text-gray-400 font-bold tracking-wider uppercase text-sm md:text-base dark:bg-gray-800 dark:border-gray-600">
              Tỉnh/TP
            </th>
            <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-400 font-bold tracking-wider uppercase text-sm md:text-base text-right dark:bg-gray-800 dark:border-gray-600">
              Tổng số ca
            </th>
            <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-400 font-bold tracking-wider uppercase text-sm md:text-base text-right dark:bg-gray-800 dark:border-gray-600">
              Hôm nay
            </th>
            <th className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-400 font-bold tracking-wider uppercase text-sm md:text-base text-right dark:bg-gray-800 dark:border-gray-600">
              Tử vong
            </th>
          </tr>
        </thead>

        <tbody className="bg-white divide-y divide-gray-200 h-1/2 text-gray-900 dark:bg-gray-700 dark:text-gray-100 dark:divide-gray-600">
          {data.map((item) => (
            <tr className="">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-bold text-sm md:text-base">
                  {item.city}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-bold text-right text-sm md:text-base">
                  {item.totalCases}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-red-400 font-bold text-right text-sm md:text-base">
                  {item.todayCases}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="font-bold text-right text-sm md:text-base">
                  {item.totalDeaths}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <div class="flex flex-col">
        <div class="-my-2 sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow border-b border-gray-200 sm:rounded-lg">
              <table class="table-fixed min-w-full divide-y divide-gray-200 h-80">
                <thead class="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left font-bold text-gray-600 uppercase tracking-wider"
                    >
                      Tỉnh/TP
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left font-bold text-gray-600 uppercase tracking-wider"
                    >
                      Tổng số ca
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left font-bold text-gray-600 uppercase tracking-wider"
                    >
                      Hôm nay
                    </th>
                    <th
                      scope="col"
                      class="px-6 py-3 text-left font-bold text-gray-600 uppercase tracking-wider"
                    >
                      Tử vong
                    </th>
                  </tr>
                </thead>

                <tbody class="bg-white divide-y divide-gray-200 h-1/2">
                  {data.map((item) => (
                    <tr className="hover:bg-gray-50">
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class=" text-gray-900 font-bold">{item.city}</div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class="text-gray-900 font-bold">
                          {item.totalCases}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class=" text-red-500 font-bold">
                          {item.todayCases}
                        </div>
                      </td>
                      <td class="px-6 py-4 whitespace-nowrap">
                        <div class=" text-gray-900 font-bold">
                          {item.totalDeaths}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default DetailCard;
