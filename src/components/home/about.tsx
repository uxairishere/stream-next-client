import React from "react";
import Image from "next/image";
import nextLogo from "../../assets/icons/nextlogo.png";
import { FiSearch } from "react-icons/fi";

const About = () => {
  return (
    <div>
      <div className="grid grid-cols-3 w-[70%] mx-auto text-center items-center py-[3rem]">
        <div className="col-span-1">
          <Image width={350} src={nextLogo} alt="..." />
        </div>
        <div className="col-span-2">
          <h1 className="text-5xl mb-[1rem] font-bold main-heading">
            About US
          </h1>
          <p className="font-medium text-gray-500">
            Everybody wants to see a great movie with his friends and family
            every once in a while and Stream Next is the exact place for that!
            Start by Searching or by Navigating the StreamNext Top Menu, You
            will find something to Watch in a matter of seconds!
          </p>
          <button className="btn-secondary flex mx-auto rounded-full items-center mt-3">
            Browse <FiSearch className="ml-[1rem]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
