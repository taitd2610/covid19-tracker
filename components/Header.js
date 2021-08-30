import Image from "next/image";
import { useTheme } from "next-themes";
import { useState } from "react";
import coronaVirus from "../public/coronavirus.svg";
import sun from "../public/sun.svg";
import moon from "../public/moon.svg";

const Header = () => {
  const [src, setSrc] = useState(sun);

  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    if (theme === "light") {
      setSrc(moon);
    }

    if (theme === "dark") {
      setSrc(sun);
    }
  };

  return (
    <nav className="grid grid-cols-5 md:grid-cols-3 shadow-md py-4 items-center bg-white dark:bg-gray-800 dark:text-gray-100">
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
        <Image
          className="cursor-pointer"
          src={src}
          width="24px"
          height="24px"
          onClick={changeTheme}
        ></Image>
      </div>
    </nav>
  );
};

export default Header;
