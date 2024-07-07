"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import { FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import Link from "next/link";
import { useRef } from "react";

function Footer() {
    const ref = useRef(null)
    const isInView = useInView(ref,{once:true})
  return (
    <footer className="w-full" ref={ref}>
      <div className="flex mt-44 mb-28 ml-14">
        <div>
          <motion.div
            whileHover={{
              scale: 0.96,
              transition: { duration: 0.3 },
            }}
          >
            <Image src="/logo.svg" width={200} height={200} alt="Logo" />
          </motion.div>
          <p className="text-lg w-72 text-[#5e5b8a] mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doin
            tempor incididunt labore et magna
          </p>
        </div>

        <div className="text-lg text-[#5e5b8a]">
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

        <div className="ml-20 text-lg text-[#5e5b8a]">
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
        <div className="ml-20 text-lg text-[#5e5b8a]">
          <p className="font-semibold">Follow us</p>
          <div className="mt-10 flex flex-col gap-4">
            <div className="flex items-center hover:text-[#524fff]">
              <FaFacebookSquare className="w-8 h-8 bg-blue-500 hover:bg-white hover:text-blue-500 rounded-md text-white border border-slate-300" />
              <p className="whitespace-nowrap  cursor-pointer ml-2 text-lg">
                Facebook
              </p>
            </div>
            <div className="flex items-center hover:text-[#524fff]">
              <FaTwitterSquare className="w-8 h-8 bg-blue-500 hover:bg-white hover:text-blue-500 rounded-md text-white border border-slate-300" />
              <p className="whitespace-nowrap  cursor-pointer ml-2 text-lg">
                Twitter
              </p>
            </div>
            <div className="flex items-center hover:text-[#524fff]">
              <FaSquareInstagram className="w-8 h-8 bg-blue-500 hover:bg-white hover:text-blue-500 rounded-md text-white border border-slate-300" />
              <p className="whitespace-nowrap  cursor-pointer ml-2 text-lg">
                Instagram
              </p>
            </div>
            <div className="flex items-center hover:text-[#524fff]">
              <FaLinkedin className="w-8 h-8 bg-blue-500 hover:bg-white hover:text-blue-500 rounded-md text-white border border-slate-300" />
              <p className="whitespace-nowrap  cursor-pointer ml-2 text-lg">
                LinkedIn
              </p>
            </div>
            <div className="flex items-center hover:text-[#524fff]">
              <FaYoutubeSquare className="w-8 h-8 bg-blue-500 hover:bg-white hover:text-blue-500 rounded-md text-white border border-slate-300" />
              <p className="whitespace-nowrap  cursor-pointer ml-2 text-lg">
                YouTube
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#fafafe] w-[90%] ml-auto mr-auto rounded-xl p-10 flex justify-between mb-5">
        <div className="flex items-center">
          <Image
            src="https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/6181d621f90781b24e43f991_email-icon-applay-x-template.svg"
            width={70}
            height={100}
            className="rounded-xl"
          />
          <div className="ml-5">
            <p className="text-lg font-semibold">Subscribe to our newsletter</p>
            <p className="text-[#5e5b8a] text-lg">
              Lorem ipsum dolor sit amet consecte
            </p>
          </div>
        </div>
        <div>
        <div className="relative w-full">
            <input
              type="text"
              placeholder="Enter your email address"
              className="p-6 font-normal text-lg h-[85px] w-[600px] border border-[#e7e6f1] hover:border-blue-600 rounded-xl"
            />
            <motion.button
              className="absolute top-0 right-0 flex items-center mt-[9px] mr-[10px] tracking-wide text-lg bg-[#524fff] hover:bg-blue-700 text-white p-[20px] pr-[24px] pl-[24px] text-[16px] font-semibold rounded-xl"
              whileHover={{
                scale: 0.92,
                transition: { duration: 0.3 },
              }}
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>
      <p className="text-center text-lg text-[#5e5b8a]">Copyright © Akshay | Designed by <Link href="http://akshayy.online/" className="text-[#524fff]">Akshay</Link> - Powered by Webflow</p>
    </footer>
  );
}

export default Footer;
