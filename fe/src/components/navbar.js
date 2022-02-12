import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Brand = () => {
  return (
    <h1
      data-testid="brandname"
      className="font-sans text-blue-200 basis-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl pl-3 py-1 xl:pl-12"
    >Xero fitness</h1>
  );
};

const Menu = (props) => {
  const [click, handleClick] = useState(false);


  function logout() {
    props.setToken(null);
    console.log(props.token)
    props.navigate("/login");
  }

  if (click) {
    return (
      <div>
        <ul className="bg-sky-800 text-blue-200  text-base lg:text-lg  xl:text-xl mr-2 lg:mr-2  lg:mt-2 flex flex-col  focus:outline-none  list-none">
          <li
            onClick={logout}
            className="shadow-sky-900 shadow-xl pl-2 cursor:pointer"
          >
            Logout
          </li>
          <li className="shadow-sky-900 shadow-xl pl-2 cursor:pointer">
            Add new workout
          </li>
        </ul>
      </div>
    );
  }
  return (
    <button className="pr-3 cursor-pointer" onClick={() => handleClick(true)}>
      <GiHamburgerMenu size={30} color="rgb(191 219 254)" />
    </button>
  );
};

const Navbar = (props) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between bg-sky-800">
      <Brand />
      <Menu setToken={props.setToken} token={props.token} navigate={navigate}/>
    </div>
  );
};

export default Navbar;
