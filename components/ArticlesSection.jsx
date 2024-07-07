'use client'

import { delay, motion, useAnimation, useInView } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
import { CiCalendar } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";



function ArticlesSection() {
    const scrollRef = useRef(null)
    const controls = useAnimation()
    const ref = useRef(null)
    const isInView = useInView(ref,{once:true})

    const cards = [
        { 
            topic:"Growth",
            name: 'What is the average open and click rates for email newsletters?',
            img:"/article-1.png"
         },
         { 
            topic:"Marketing",
            name: '6 amazing email templates you can use in 2022 for free',
            img:"/article-2.png"
         },
         { 
            topic:"Growth",
            name: 'Email marketing benchmarks by industry and region',
            img:"/article-3.png"
         },
         { 
            topic:"Tech",
            name: 'Apple mail to block email tracking pixels with iOS and iPadOS 15',
            img:"/article-4.png"
         },
    ]

    const scroll = (direction) => {
        const { current } = scrollRef
        if (current) {
            const scrollAmount = direction === "left" ? -300 : 300
            current.scrollBy({ left: scrollAmount, behavior: "smooth" })
        }
    }

    return (
        <div className="bg-[#fafafe] w-full">
            <div className="flex ml-14 justify-between items-center mt-44 mb-10" ref={ref}>
                <motion.p className="text-[42px] text-[#0f086a] font-semibold w-[50%]"
                 initial={{opacity:0}}
                 animate={isInView?{opacity:1}:{opacity:0}}
                 transition={{delay:0.5}}
                >
                    Browse our latest articles and resources on email marketing
                    </motion.p>
                <motion.button
                    className="mr-10 hover:border-blue-500 rounded-xl border bg-white h-20 p-[20px] pr-[24px] pl-[24px] text-[#0f086a] shadow-md text-[18px]"
                    whileHover={{
                        scale: 0.92,
                    }}
                    
                >
                    Browse all articles
                </motion.button>
            </div>
            <div className="relative scrollbar-hide mb-32">
                <motion.div 
                    ref={scrollRef}
                    className="flex ml-14 overflow-x-scroll scrollbar-hide py-4"
                    animate={controls}
                >
                    {cards && cards.map((card, index) => (
                        <motion.div key={index} className="max-w-xl rounded-2xl overflow-hidden shadow-lg flex-shrink-0 mr-6"
                        initial={{opacity:0}}
                        animate={isInView?{opacity:1}:{opacity:0}}
                        transition={{delay:0.5}}
                        >
                            <Image className="w-full" src={card.img} alt="Sunset in the mountains" width={300} height={200} />
                            <div className="px-10 py-10">
                                <p className="text-lg text-[#524fff] font-semibold tracking-wider">{card.topic}</p>
                                <div className="font-bold text-2xl mb-2 mt-5 text-[#0f086a]">{card.name}</div>
                                <p className="text-[#5e5b8a] text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                                </p>
                            <div className="flex mt-10 text-lg text-[#5e5b8a]">
                                <div className="flex items-center">
                                <CiCalendar className="w-7 h-8"/>
                                November 1, 2021
                                </div>
                                <div className="flex items-center ml-5">
                                <CiClock2 className="w-7 h-8"/>
                                12 min read
                                </div>
                            </div>
                            </div>
                            
                        </motion.div>
                    ))}
                </motion.div>
                <button
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-[#524fff] hover:bg-blue-700 rounded-full p-2 shadow-md"
                    onClick={() => scroll("left")}
                >
                    <FaChevronLeft className="text-white h-14 ml-auto mr-auto" />
                </button>
                <button
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-[#524fff] hover:bg-blue-700 rounded-full p-2 shadow-md"
                    onClick={() => scroll("right")}
                >
                    <FaChevronRight className="text-white h-14 ml-auto mr-auto" />
                </button>
            </div>
        </div>
    )
}

export default ArticlesSection