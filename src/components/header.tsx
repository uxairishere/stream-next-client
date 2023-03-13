import React from "react";
import mainLogo from "../assets/icons/microsoft-stream.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-primary">
      <div className="w-[80%] mx-auto py-3 flex justify-between items-center">
        <div className="brand-container">
          <h1 className="text-3xl text-white">
            <Image src={mainLogo} alt="..." width="100" />
          </h1>
        </div>
        <div className="links-container">
          <button className="border-[1px] border-white  hover:bg-white hover:text-primary text-white font-bold py-2 px-6 rounded-full">
            Contact
          </button>
          <button className="border-[1px] border-white  hover:bg-white hover:text-primary text-white font-bold py-2 px-6 rounded-full">
            Contact
          </button>
          <button className="border-[1px] border-white  hover:bg-white hover:text-primary text-white font-bold py-2 px-6 rounded-full">
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
