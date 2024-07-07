"use client";
import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaCircleCheck } from "react-icons/fa6";
import { useRef, useEffect } from "react";

function HeroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const logos = [
    "https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aef4d5960a71f88a1da_agency-logo-techpool-x-webflow-template.svg",
    "https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aef097dddb009841ae8_application-logo-techpool-x-webflow-template.svg",
    "https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aee7c221202d33dc6ba_business-logo-techpool-x-webflow-template.svg",
    "https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aeeeecbab41bde190a1_company-logo-techpool-x-webflow-template.svg",
    "https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aef50d2eca1d811425d_venture-logo-techpool-x-webflow-template.svg",
    "https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aeef080fc67b808eae4_startup-logo-techpool-x-webflow-template.svg"
  ];

  return (
    <div className="pl-[24px] ">
      <div className="mt-28 flex gap-[24px] overflow-x-hidden">
        <motion.div
          className="mt-20 ml-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="text-[58px] text-[#0f086a] font-semibold leading-tight">
            All-in-one email marketing platform
          </p>
          <p className="text-[#5e5b8a] max-w-[36rem] mt-5 font-medium tracking-normal text-lg">
            Lorem ipsum dolor sit amet consectetur adipiscing elit lorem
            tristique cras ullamcorper est pharetra at sit condimentum sed arcu
            etiam aliquam.
          </p>
          <div className="relative w-full mt-10">
            <input
              type="text"
              placeholder="Enter your email address"
              className="p-6 font-normal text-lg h-[85px] border border-[#e7e6f1] hover:border-blue-600 rounded-xl w-[80%]"
            />
            <motion.button
              className="absolute top-0 right-0 flex items-center mt-[9px] mr-[150px] tracking-wide text-lg bg-[#524fff] hover:bg-blue-700 text-white p-[20px] pr-[24px] pl-[24px] text-[16px] font-semibold rounded-xl"
              whileHover={{
                scale: 0.92,
                transition: { duration: 0.3 },
              }}
            >
              Get started
            </motion.button>
          </div>
          <motion.p
            ref={ref}
            className="flex items-center text-[#0f086a] font-semibold text-lg mt-5 gap-3"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaCircleCheck className="text-blue-600 w-6 h-6" />
            No credit card required
          </motion.p>
        </motion.div>

        <div className="-mr-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
            }}
          >
            <Image src="/hero.png" width={900} height={800} alt="Hero image" />
          </motion.div>
        </div>
      </div>
      <div className="ml-10 mt-36">
        <p className="text-[20px] text-[#0f086a] font-semibold text-center">
          Trusted by 10,000 companies around the world
        </p>
        <div className="flex justify-between gap-14 mr-16 mt-10 mb-20">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 0.92,
                transition: { duration: 0.3 },
              }}
            >
              <Image
                src={logo}
                width={300} // Adjust width and height as needed
                height={100}
                alt="companies"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
