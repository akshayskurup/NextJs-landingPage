'use client'

import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { FaArrowRight } from "react-icons/fa6"
import { useRef, useState } from "react"

function TestimonialSection() {
    const ref = useRef(null)
    const usersRef = useRef(null)
    const isInView = useInView(ref,{once:true})
    const usersIsInView = useInView(usersRef,{once:true})
    const users = [
        {
            img:"/testimonial-1.png",
            name:"Lilly Allen",
            profession:"VP of Marketing",
            logo:"https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aef4d5960a71f88a1da_agency-logo-techpool-x-webflow-template.svg"
        },
        {
            img:"/testimonial-2.png",
            name:"Michael Scott",
            profession:"Head of Email",
            logo:"https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aee7c221202d33dc6ba_business-logo-techpool-x-webflow-template.svg"
        },
        {
            img:"/testimonial-3.png",
            name:"Anne Williams",
            profession:"Inbound Lead",
            logo:"https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/655b9aeeeecbab41bde190a1_company-logo-techpool-x-webflow-template.svg"
        },
    ]
    const [currentUser,setCurrentUser] = useState(users[0])

  return (
    <div className='flex flex-col items-center justify-center'>
        <motion.p className="text-[#0f086a] text-[42px] font-semibold w-[50vw] text-center mt-44"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 }:{ opacity: 0, scale: 0.5 }}
        >Hear what our amazing customers say about us</motion.p>
        <motion.div className="border shadow-sm p-[80px] pl-[64px] pr-[64px] w-[75%] rounded-xl mt-10" ref={ref}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={isInView ? { opacity: 1, scale: 1 }:{ opacity: 0, scale: 0.5 }}
        >
            <div className="flex items-center">
                <Image src={currentUser.img} width={300} height={200}
                className="rounded-full"
                />
                <div className="ml-10">
                    <p className="text-[26px] text-[#0f086a] font-semibold tracking-wider">“The best email marketing tool”</p>
                    <p className="text-[#5e5b8a] text-lg mt-3 mb-8">Ut pharetra sit amet aliquam id diam maecenas ultricies hendrerit dolor magna eget est lorem ipsum dolor sit amet mauris in aliquam sem fringilla ut morbi tincidunt dis parturient montes nascetur ridiculus.</p>
                    <div className="flex justify-between">
                        <div>
                        <p className="font-semibold text-xl tracking-wider">{currentUser.name}</p>
                        <p className="text-[#5e5b8a] text-xl tracking-wider">{currentUser.profession}</p>
                        </div>

                        <Image src={currentUser.logo} width={130} height={100} />
                    </div>
                </div>
            </div>
        </motion.div>
        <motion.div className="flex gap-20 mt-14" ref={usersRef} 
         initial={{ opacity: 0, scale: 0.5 }}
         animate={usersIsInView ? { opacity: 1, scale: 1 }:{ opacity: 0, scale: 0.5 }}
        >
            {users && users.map((user)=>    
        <div className={`cursor-pointer flex items-center gap-5 ${currentUser.name === user.name ? 'opacity-55' : 'opacity-1'}`} onClick={()=>setCurrentUser(user)}>
        <Image src={user.img} width={80} height={200}
                className="rounded-full"
                />
                <div>
                <p className="font-semibold text-lg tracking-wider">{user.name}</p>
                <p className="text-[#5e5b8a] text-lg tracking-wider">{user.profession}</p>

                </div>
        </div>
            )}

        
        </motion.div>
        <div className="flex justify-center gap-5 mt-14 mb-44">
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
            View pricing
          </motion.button>
        </div>
        
    </div>
  )
}

export default TestimonialSection