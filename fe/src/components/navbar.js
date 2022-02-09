import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Brand = () => {
  return (
    <h1 className="font-sans text-blue-200 basis-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl pl-3 py-1 xl:pl-12">
      Xero fitness
    </h1>
  );
};

const Menu = () => {
  return (
    <button className="pr-3 cursor-pointer">
      <GiHamburgerMenu size={30} color="rgb(191 219 254)" />
    </button>
  );
};

const Navbar = () => {
  return (
    <div className="flex justify-between bg-sky-800">
      <Brand />
      <Menu />
    </div>
  );
};

export default Navbar;
