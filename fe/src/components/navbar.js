import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Brand = () => {
  return (
    <h1 className="font-sans text-blue-200 basis-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl pl-3 py-1 xl:pl-12">
      Xero fitness
    </h1>
  );
};

const Menu = () => {
  const [click, handleClick] = useState(false);

  if (click) {
    return (
      <div>
        <select
          name="menu"
          className="bg-sky-800 text-blue-200 focus:outline-none border-b border-blue-200 "
        >
          <option value="Logout">Logout</option>
          <option value="Add new workout">Add new workout</option>
        </select>
      </div>
    );
  }
  return (
    <button className="pr-3 cursor-pointer" onClick={() => handleClick(true)}>
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
