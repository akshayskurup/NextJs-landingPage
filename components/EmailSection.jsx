'use client';

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaCircleCheck } from "react-icons/fa6";

function EmailSection() {
    const ref = useRef(null);
    const isInView = useInView(ref,{once:true})
  return (
    <div className="bg-[#fafafe] w-full">
        <div className="bg-[#524fff] h-96 w-full mt-48 flex justify-between p-20 items-center">
            <motion.p className="text-white font-semibold text-[42px] "
            initial={{ opacity: 0 }}
            animate={ isInView ? {opacity: 1}:{opacity: 0}}
            >Take your email marketing game to the next level
            </motion.p>
            <div className="w-50%">
            <div className="relative w-full mt-10">
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
              Get started
            </motion.button>
          </div>
          <motion.p
            ref={ref}
            className="flex items-center text-white font-semibold text-lg mt-5 gap-3"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaCircleCheck className="text-white w-6 h-6" />
            No credit card required
          </motion.p>
        
            </div>
        </div>
    </div>
  )
}

export default EmailSection