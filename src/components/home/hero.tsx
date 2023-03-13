import React from "react";
import Image from "next/image";
import mainLogo from "../../assets/icons/microsoft-stream.svg";

const Hero = () => {
  return (
    <div>
      <div className="grid grid-cols-3 w-[70%] mx-auto text-center items-center py-[3rem]">
        <div className="col-span-1">
          <Image width={350} src={mainLogo} alt="..." />
        </div>
        <div className="col-span-2">
          <h1 className="text-5xl font-bold">Stream Next</h1>
          <p className="font-medium">
            Everybody wants to see a great movie with his friends and family
            every once in a while and Stream Next is the exact place for that!
            Start by Searching or by Navigating the OnionPlay Top Menu, You will
            find something to Watch in a matter of seconds!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
