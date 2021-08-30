import Image from "next/image";
import coronaVirus from "../public/coronavirus.svg";
import sun from "../public/sun.svg";

const Header = () => {
  return (
    <div className="grid grid-cols-5 md:grid-cols-3 shadow-md py-4 items-center">
      <div className="flex px-4 items-center">
        <Image src={coronaVirus} width="36px" height="36px"></Image>
        <p className="hidden md:inline font-semibold ml-2 text-xl">
          COVID-19 TRACKER
        </p>
      </div>
      <div className="flex justify-center space-x-4 col-span-3 md:col-span-1">
        <p className="cursor-pointer text-lg">Thế giới</p>
        <p className="cursor-pointer text-lg">Việt Nam</p>
      </div>
      <div className="flex justify-end pr-4">
        <Image src={sun} width="24px" height="24px"></Image>
      </div>
    </div>
  );
};

export default Header;
