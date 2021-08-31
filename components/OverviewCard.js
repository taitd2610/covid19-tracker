import CountUp from "react-countup";
import moment from "moment";
import "moment/locale/vi";

moment.locale("vi");

const OverviewCard = ({ data }) => {
  var lastUpdate = moment(data.lastUpdate);

  return (
    <div className="flex flex-col p-6 justify-center shadow rounded-md text-center mb-4 dark:bg-gray-800">
      <div className="mb-4 dark:text-gray-100 ">
        <p className="font-bold mb-2 md:text-lg">
          Số liệu Covid-19 tại Việt Nam
        </p>
        <p className="text-sm md:text-base">
          Cập nhật lần cuối: {lastUpdate.fromNow()}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <div className="grid gap-2 bg-red-50 p-4 rounded-md text-red-600 dark:bg-gray-600 dark:text-red-300">
          <p className="font-bold text-sm md:text-base">Ca nhiễm</p>
          <CountUp
            className="text-2xl md:text-4xl font-bold"
            start={0}
            end={data.infected}
            duration={2.75}
          />

          <p className="text-xs md:text-sm">
            {`Hôm nay: ${data.todayNewCases * 1000} `}
            <span className="inline-block">{`( ${data.yesterdayCasesCompare} )`}</span>
          </p>
        </div>

        <div className="grid gap-2 bg-yellow-50 p-4 rounded-md text-yellow-400 dark:bg-gray-600 dark:text-yellow-300">
          <p className="font-bold text-sm md:text-base">Đang điều trị</p>
          <CountUp
            className="text-2xl md:text-4xl font-bold"
            start={0}
            end={data.treated}
            duration={2.75}
          />

          <p className="text-xs md:text-sm">{`Hôm nay: 0`}</p>
        </div>

        <div className="grid gap-2 bg-green-50 p-4 rounded-md text-green-600 dark:bg-gray-600 dark:text-green-300">
          <p className="font-bold text-sm md:text-base">Hồi phục</p>
          <CountUp
            className="text-2xl md:text-4xl font-bold"
            start={0}
            end={data.recovered}
            duration={2.75}
          />

          <p className="text-xs md:text-sm">{`Hôm nay: 0`}</p>
        </div>

        <div className="grid gap-2 bg-gray-50 p-4 rounded-md text-gray-500 dark:bg-gray-600 dark:text-gray-300">
          <p className="font-bold text-sm md:text-base">Tử vong</p>
          <CountUp
            className="text-2xl md:text-4xl font-bold"
            start={0}
            end={data.deceased}
            duration={2.75}
          />
          <p className="text-xs md:text-sm">{`Hôm nay: 0`}</p>
        </div>
      </div>
    </div>
  );
};

export default OverviewCard;
