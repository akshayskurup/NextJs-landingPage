'use client';

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function TutorialSection({data}) {
  const ref = useRef(null);
  const optionsRef = useRef(null);
  const isInView = useInView(ref, { once: true });
  const optionsIsInView = useInView(optionsRef, {once:true})

  return (
    <div className="flex bg-[#fafafe] w-screen" >
        {!data.inverted ? (
          <motion.div
            ref={ref}
            className={`${data.inverted ? "ml-0" : "ml-16"} mt-48 w-[55%]`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={data.image}
              width={650}
              height={900}
              alt="Tutorial"
            />
          </motion.div>
        ) : (
          <div             className={`${data.inverted ? "ml-16" : "ml-16"} mt-48 w-[55%]`}
>
            <div className=" -mr-[270px] w-[85%]">
              <motion.p className="text-[42px] font-semibold text-[#0f086a] "
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              >
                {data.heading}
              </motion.p>
              <motion.p className="text-[#5e5b8a] mt-5 font-medium tracking-normal text-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={optionsIsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis velit augue turpis etiam felis aliquam u.
              </motion.p>
              <motion.div className="flex gap-5 mt-10" ref={optionsRef}
              initial={{ opacity: 0, x: -100 }}
              animate={optionsIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  className="-mt-8"
                  src={data.firstPointImg}
                  width={100}
                  height={100}
                  alt="Drag-and-drop builder"
                />
                <div>
                  <p className="text-[#0f086a] font-semibold text-[20px]">
                  {data.firstPointHeading}
                  </p>
                  <p className="text-[18px] text-[#5e5b8a] mt-2 font-medium">
                    Odio pellentesque diam volutpat commodolo sed egestas egestas fringilla phasellus
                  </p>
                </div>
              </motion.div>
              <motion.div className="flex mt-10 gap-5"
              initial={{ opacity: 0, x: -100 }}
              animate={optionsIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image
                  className="-mt-8"
                  src={data.secondPointImg}
                  width={100}
                  height={100}
                  alt="Pre-made templates"
                />
                <div>
                  <p className="text-[#0f086a] font-semibold text-[20px]">
                  {data.secondPointHeading}
                  </p>
                  <p className="text-[18px] text-[#5e5b8a] mt-2 font-medium">
                    Senectus et netus et malesuada pellentesque eu tincidunt tortor aliquam nulla facilisi.
                  </p>
                </div>
              </motion.div>
              <motion.button className="mt-12 hover:border-blue-500 rounded-xl border bg-white pt-[26px] pb-[26px] pr-[38px] pl-[38px] flex items-center text-[#0f086a] shadow-md text-[18px]"
              whileHover={{
                scale: 0.92,
            }
              }
              >
                Learn more <FaArrowRight className="ml-2" />
              </motion.button>
            </div>
          </div>
        )}

        {!data.inverted && 
        (
            <div className="mt-48 ">
              <div className=" -mr-[270px] w-[85%]">
                <motion.p className="text-[42px] font-semibold text-[#0f086a] "
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                >
                  {data.heading}
                </motion.p>
                <motion.p className="text-[#5e5b8a] mt-5 font-medium tracking-normal text-lg"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={optionsIsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis velit augue turpis etiam felis aliquam u.
                </motion.p>
                <motion.div className="flex gap-5 mt-10" ref={optionsRef}
                initial={{ opacity: 0, x: -100 }}
                animate={optionsIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image
                    className="-mt-8"
                    src={data.firstPointImg}
                    width={100}
                    height={100}
                    alt="Drag-and-drop builder"
                  />
                  <div>
                    <p className="text-[#0f086a] font-semibold text-[20px]">
                    {data.firstPointHeading}
                    </p>
                    <p className="text-[18px] text-[#5e5b8a] mt-2 font-medium">
                      Odio pellentesque diam volutpat commodolo sed egestas egestas fringilla phasellus
                    </p>
                  </div>
                </motion.div>
                <motion.div className="flex mt-10 gap-5"
                initial={{ opacity: 0, x: -100 }}
                animate={optionsIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Image
                    className="-mt-8"
                    src={data.secondPointImg}
                    width={100}
                    height={100}
                    alt="Pre-made templates"
                  />
                  <div>
                    <p className="text-[#0f086a] font-semibold text-[20px]">
                    {data.secondPointHeading}
                    </p>
                    <p className="text-[18px] text-[#5e5b8a] mt-2 font-medium">
                      Senectus et netus et malesuada pellentesque eu tincidunt tortor aliquam nulla facilisi.
                    </p>
                  </div>
                </motion.div>
                <motion.button className="mt-12 hover:border-blue-500 rounded-xl border bg-white pt-[26px] pb-[26px] pr-[38px] pl-[38px] flex items-center text-[#0f086a] shadow-md text-[18px]"
                whileHover={{
                  scale: 0.92,
              }
                }
                >
                  Learn more <FaArrowRight className="ml-2" />
                </motion.button>
              </div>
            </div>
          )}
        {data.inverted && (
          <motion.div
            ref={ref}
            className="ml-16 mt-48 w-[55%]"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={data.image}
              width={650}
              height={900}
              alt="Tutorial"
            />
          </motion.div>
        )}
    </div>
  );
}

export default TutorialSection;


















// 'use client';

// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";
// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// function TutorialSection({data}) {
//   const ref = useRef(null);
//   const optionsRef = useRef(null);
//   const isInView = useInView(ref, { once: true });
//   const optionsIsInView = useInView(optionsRef, {once:true})

//   return (
//     <div className="flex bg-[#fafafe] w-screen" >
//       <motion.div
//         ref={ref}
//         className="ml-16 mt-48 w-[55%]"
//         initial={{ opacity: 0, scale: 0.5 }}
//         animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
//         transition={{ duration: 0.5 }}
//       >
//         <Image
//           src="/tutorial.png"
//           width={650}
//           height={900}
//           alt="Tutorial"
//         />
//       </motion.div>
//       <div className="mt-48 ">
//         <div className=" -mr-[270px] w-[85%]">
//           <motion.p className="text-[42px] font-semibold text-[#0f086a] "
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
//           transition={{ duration: 0.3 }}
//           >
//             1. Create beautiful email newsletters
//           </motion.p>
//           <motion.p className="text-[#5e5b8a] mt-5 font-medium tracking-normal text-lg"
//           initial={{ opacity: 0, scale: 0.5 }}
//           animate={optionsIsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
//           transition={{ duration: 0.5 }}
//           >
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis velit augue turpis etiam felis aliquam u.
//           </motion.p>
//           <motion.div className="flex gap-5 mt-10" ref={optionsRef}
//           initial={{ opacity: 0, x: -100 }}
//           animate={optionsIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <Image
//               className="-mt-8"
//               src="https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/61819699b67a2c0948dcdef8_home-perk-01-applay-x-template.svg"
//               width={100}
//               height={100}
//               alt="Drag-and-drop builder"
//             />
//             <div>
//               <p className="text-[#0f086a] font-semibold text-[20px]">
//                 Drag-and-drop builder
//               </p>
//               <p className="text-[18px] text-[#5e5b8a] mt-2 font-medium">
//                 Odio pellentesque diam volutpat commodolo sed egestas egestas fringilla phasellus
//               </p>
//             </div>
//           </motion.div>
//           <motion.div className="flex mt-10 gap-5"
//           initial={{ opacity: 0, x: -100 }}
//           animate={optionsIsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           >
//             <Image
//               className="-mt-8"
//               src="https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/6181969935b63c7bfad6685d_home-perk-02-applay-x-template.svg"
//               width={100}
//               height={100}
//               alt="Pre-made templates"
//             />
//             <div>
//               <p className="text-[#0f086a] font-semibold text-[20px]">
//                 Pre-made templates
//               </p>
//               <p className="text-[18px] text-[#5e5b8a] mt-2 font-medium">
//                 Senectus et netus et malesuada pellentesque eu tincidunt tortor aliquam nulla facilisi.
//               </p>
//             </div>
//           </motion.div>
//           <motion.button className="mt-12 hover:border-blue-500 rounded-xl border bg-white pt-[26px] pb-[26px] pr-[38px] pl-[38px] flex items-center text-[#0f086a] shadow-md text-[18px]"
//           whileHover={{
//             scale: 0.92,
//         }
//           }
//           >
//             Learn more <FaArrowRight className="ml-2" />
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TutorialSection;
