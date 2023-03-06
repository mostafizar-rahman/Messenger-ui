import React from "react";
import { BiSignal4 } from "react-icons/bi";
import {BsBatteryFull} from "react-icons/bs"
function Header() {
  return (
    <div className="">
      <div className="flex justify-around items-center text-white">
        <div className="flex items-center">
          <BiSignal4 className="font-extrabold text-2xl"/>
          <p>Service LTE</p>
        </div>
        <p>19:02</p>
        <BsBatteryFull className="text-2xl"/>
      </div>
    </div>
  );
}

export default Header;
