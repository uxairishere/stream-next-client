import React from "react";
import mainLogo from "../assets/icons/microsoft-stream.svg";
import Image from "next/image";

const Header = () => {
  return (
    <nav className="px-2 bg-primary border-gray-200 dark:bg-gray-900 dark:border-gray-700 py-3">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <Image
            src={mainLogo}
            className="w-[50px] md:w-[90px]"
            alt="Flowbite Logo"
          />
          <span className="self-center text-pink-700 text-xl md:text-3xl main-heading font-semibold whitespace-nowrap dark:text-white">
            Stream Next
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-primary md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className="block text-xl text-white border-[1px] px-5 py-2  rounded-full hover:bg-white hover:text-primary "
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="block text-xl text-white border-[1px] px-5 py-2  rounded-full hover:bg-white hover:text-primary "
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="./auth/signup"
                className="block text-xl text-white border-[1px] px-5 py-2  rounded-full hover:bg-white hover:text-primary "
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
