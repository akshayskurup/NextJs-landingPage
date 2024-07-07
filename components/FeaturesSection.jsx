"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { useRef } from "react";

function FeaturesSection() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  const cardDetails = [
    {
      img: "https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/61819692ed2a63372e88c5d1_feature-icon-01-applay-x-template.svg",
      heading: "Pre-made templates",
    },
    {
      img: "https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/61819691195773b863ef4212_feature-icon-02-applay-x-template.svg",
      heading: "Drag-and-drop editor",
    },
    {
      img: "https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/618196911a9553472e78f563_feature-icon-03-applay-x-template.svg",
      heading: "Delivery optimization",
    },
    {
      img: "https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/618196916bc70ac9b9dde336_feature-icon-04-applay-x-template.svg",
      heading: "Easy A/B testing",
    },
    {
      img: "https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/6181969186fc8b281ee853ae_feature-icon-05-applay-x-template.svg",
      heading: "Granular reports",
    },
    {
      img: "https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/61819691edcb1cea8c60dc3b_feature-icon-06-applay-x-template.svg",
      heading: "Multiple users",
    },
  ];
  return (
    <div className="w-full py-12">
      <div className="ml-14 mt-44">
        <div className="flex flex-col items-center text-center">
          <p className="text-[42px] font-semibold text-[#0f086a]">
            Simple and useful features
          </p>
          <p className="text-[#5e5b8a] w-[44%] text-lg mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit fermentum
            sit pulvinar sed adipiscing ullamcorper quam at purus.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {cardDetails &&
            cardDetails.map((card) => (
                <motion.div
                ref={ref}
                key={card.heading}
                className="border w-full shadow-md rounded-2xl p-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5}}
              >
                <Image
                  src={card.img}
                  width={70}
                  height={70}
                  className="rounded-xl"
                  alt={card.heading}
                />
                <div className="mt-6 text-[#0f086a]">
                  <p className="text-[23px] font-semibold tracking-wider">
                    {card.heading}
                  </p>
                  <p className="mt-3 mb-6 text-lg font-medium font-plusjakarta text-[#5e5b8a] tracking-wide">
                    Odio pellentesque diam volutpat commodo sed egestas egesta sollicitudin fringilla phasellus
                  </p>
                </div>
              </motion.div>
            ))}
        </div>
        <div className="flex justify-center gap-5 mt-10">
          <motion.div
            className="flex items-center bg-[#524fff] hover:bg-blue-700 text-white p-[20px] pr-[24px] pl-[24px] text-[16px] font-semibold rounded-xl"
            whileHover={{
              scale: 0.92,
              transition: { duration: 0.3 },
            }}
          >
            <button className="flex items-center">
              Get started <FaArrowRight className="ml-2" />
            </button>
          </motion.div>
          <motion.button
            className="hover:border-blue-500 rounded-xl border bg-white p-[20px] pr-[24px] pl-[24px] text-[#0f086a] shadow-md text-[18px]"
            whileHover={{
              scale: 0.92,
            }}
          >
            Browse features
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export default FeaturesSection;
