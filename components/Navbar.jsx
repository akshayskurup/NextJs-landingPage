"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MotionConfig, motion } from "framer-motion";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <nav className="mt-[32px] pl-[24px] pr-[24px] h-16 w-[1268px]  flex items-center">
      <div className="flex gap-8 items-center text-[18px]">
        <Link href="/">
          <motion.div
            whileHover={{
              scale: 0.92,
              transition: { duration: 0.3 },
            }}
          >
            <Image src="/logo.svg" width={200} height={200} alt="Logo" />
          </motion.div>
        </Link>
        <Link
          href="/"
          className="text-[#0F086A] hover:text-[#524fff] font-medium text-lg"
        >
          Home
        </Link>
        <Link
          href="/"
          className="text-[#0F086A] hover:text-[#524fff] font-medium text-lg"
        >
          About
        </Link>
        <Link
          href="/"
          className="text-[#0F086A] hover:text-[#524fff] font-medium text-lg"
        >
          Pricing
        </Link>
        <div
          className="relative"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <Link
            href="/"
            className="text-[#0F086A] font-medium text-lg flex items-center hover:text-[#524fff]"
          >
            Pages
            <motion.div
              animate={{ rotate: showDropdown ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <RiArrowDropDownLine size={35} />
            </motion.div>
          </Link>
          {showDropdown && (
            <div className="absolute top-full -right-60 pt-2 rounded-md shadow-lg bg-white">
              <div className="flex p-5">
                <div>
                  <p className="font-semibold">Menu</p>
                  <div className="flex mt-10">
                    <div className="flex flex-col gap-4 mr-14">
                      <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                        Sales home
                      </p>
                      <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                        About
                      </p>
                      <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                        Pricing
                      </p>
                      <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                        Pricing single
                      </p>
                      <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                        Features
                      </p>
                      <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                        Contact
                      </p>
                    </div>
                    <div className="flex flex-col gap-4">
                      <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                        Blog
                      </p>
                      <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                        Blog post
                      </p>
                      <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                        Careers single
                      </p>
                      <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                        Integrations
                      </p>
                      <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                        Integrations single
                      </p>
                      <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                        Coming soon
                      </p>
                    </div>
                  </div>
                </div>

                <div className="ml-20">
                  <p className="font-semibold">Utility Pages</p>
                  <div className="mt-10 flex flex-col gap-4">
                    <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                      Start Here
                    </p>
                    <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                      Style guide
                    </p>
                    <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                      Password protected
                    </p>
                    <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                      Licenses
                    </p>
                    <p className="whitespace-nowrap hover:text-[#524fff] cursor-pointer">
                      Changelog
                    </p>
                    <div className="whitespace-nowrap text-[#524fff] font-semibold text-xl hover:text-[#3f3dc2] cursor-pointer mt-2">
                      More Webflow Templates
                      <span className="block bg-[#524fff] h-1 mt-1"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <Link
          href="/"
          className="text-[#0F086A] font-medium text-lg hover:text-[#524fff]"
        >
          Cart (0)
        </Link>
      </div>
      <motion.div
        className="flex items-center ml-auto bg-[#524fff] hover:bg-blue-700 text-white p-[20px] pr-[24px] pl-[24px] text-[16px] font-semibold rounded-xl"
        whileHover={{
          scale: 0.92,
          transition: { duration: 0.3 },
        }}
      >
        <button className="flex items-center">
          Get started <FaArrowRight className="ml-2" />
        </button>
      </motion.div>
    </nav>
  );
}

export default Navbar;
