import CountUp from "react-countup";
import moment from "moment";
import "moment/locale/vi";

import { numberWithCommas } from "../utils/utils";

moment.locale("vi");

const OverviewCard = ({ data }) => {
  var lastUpdate = moment(data.lastUpdate);

  return (
    <div className="flex flex-col p-4 justify-center shadow rounded-md text-center mb-4">
      <div className="mb-4">
        <p className="font-bold text-lg">Số liệu Covid-19 tại Việt Nam</p>
        <p>Cập nhật lần cuối: {lastUpdate.fromNow()}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="grid gap-2 bg-red-50 p-4 rounded-md text-red-600">
          <p className="font-bold">Ca nhiễm</p>
          <CountUp
            className="text-3xl md:text-4xl font-bold"
            start={0}
            end={data.infected}
            duration={2.75}
          />

          <p>Hôm nay:{0}</p>
        </div>

        <div className="grid gap-2 bg-yellow-50 p-4 rounded-md text-yellow-400">
          <p className="font-bold">Đang điều trị</p>
          <CountUp
            className="text-3xl md:text-4xl font-bold"
            start={0}
            end={data.treated}
            duration={2.75}
          />

          <p>Hôm nay:{0}</p>
        </div>

        <div className="grid gap-2 bg-green-50 p-4 rounded-md text-green-600">
          <p className="font-bold">Hồi phục</p>
          <CountUp
            className="text-3xl md:text-4xl font-bold"
            start={0}
            end={data.recovered}
            duration={2.75}
          />

          <p>Hôm nay:{0}</p>
        </div>

        <div className="grid gap-2 bg-gray-50 p-4 rounded-md text-gray-500">
          <p className="font-bold">Tử vong</p>
          <CountUp
            className="text-3xl md:text-4xl font-bold"
            start={0}
            end={data.deceased}
            duration={2.75}
          />
          <p>Hôm nay:{0}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
