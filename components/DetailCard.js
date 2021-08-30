const DetailCard = ({ data }) => {
  return (
    <div>
      <div class="flex flex-col">
        <div class="-my-2 sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200 h-80">
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
      </div>
    </div>
  );
};

export default DetailCard;
