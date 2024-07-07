'use client'

import { delay, motion, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { FaArrowRight } from "react-icons/fa6"
function IntegretionSection() {
    const ref = useRef(null)
    const isInView = useInView(ref,{once:true})
  return (
    <div className="bg-[#fafafe] w-full">
        <div className="ml-14 flex mt-52 mb-44">
            <motion.div className="w-[45%]" ref={ref}
            initial={{opacity:0}}
            animate={isInView ? {opacity:1}:{opacity:0}}
            transition={{delay:0.4}}
            >
                <p className="text-[42px]  font-semibold tracking-wide text-[#0f086a]">Integrated with the tools you know and love</p>
                <p className="text-lg tracking-wider mt-2 text-[#5e5b8a]">Pellentesque id nibh tortor id aliquet lectus proin nibh nisl id velit ut tortor pretium viverra suspendisse dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu oucibus a pellentesque sit amet porttitor eget dolor.</p>

            <motion.button className ="mt-10 flex items-center border bg-white shadow-md p-[20px] pr-[24px] pl-[24px] text-lg text-[#0f086a] hover:border-blue-500 hover:text-blue-500 rounded-xl"
            whileHover={{
                scale: 0.92,
                transition: { duration: 0.3 },
              }}
            >
              Browse all integrations <FaArrowRight className="ml-2" />
            </motion.button>
          
            </motion.div>
            <div>

            </div>
            <motion.div className="pl-10"
            initial={{opacity:0,y:50}}
            animate={isInView ? {opacity:1,y:0}:{opacity:0,y:50}}
            >
                <Image src="/integration.png" width={600} height={100} />
            </motion.div>
        </div>
    </div>
  )
}

export default IntegretionSection