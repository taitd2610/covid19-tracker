import moment from "moment";
import "moment/locale/vi";

import { numberWithCommas } from "../utils/utils";

moment.locale("vi");

const OverviewCard = ({ data }) => {
  var a = moment("2021-08-29T23:00:00.000Z");

  return (
    <div className="flex flex-col p-4 justify-center shadow rounded-md text-center">
      <div className="mb-4">
        <p className="font-bold text-lg">Số liệu Covid-19 tại Việt Nam</p>
        <p>Cập nhật lần cuối: {a.fromNow()}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2 bg-red-50 p-4 rounded-md text-red-600">
          <p className="font-extrabold">Ca nhiễm</p>
          <p className="text-4xl font-bold">
            {numberWithCommas(data.infected)}
          </p>
          <p>Hôm nay:{12}</p>
        </div>

        <div className="grid gap-2 bg-yellow-50 p-4 rounded-md text-yellow-400">
          <p className="font-bold">Đang điều trị</p>
          <p className="text-4xl font-bold">{numberWithCommas(data.treated)}</p>
          <p>Hôm nay:{12}</p>
        </div>

        <div className="grid gap-2 bg-green-50 p-4 rounded-md text-green-600">
          <p className="font-bold">Hồi phục</p>
          <p className="text-4xl font-bold">
            {numberWithCommas(data.recovered)}
          </p>
          <p>Hôm nay:{12}</p>
        </div>

        <div className="grid gap-2 bg-gray-50 p-4 rounded-md text-gray-500">
          <p className="font-bold">Tử vong</p>
          <p className="text-4xl font-bold">{data.deceased}</p>
          <p>Hôm nay:{12}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
