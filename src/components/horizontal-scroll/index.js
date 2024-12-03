"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import pp from "@/assets/laung-harmoni/pp.png";
import pp1 from "@/assets/laung-harmoni/PP1.jpg";
import pp2 from "@/assets/laung-harmoni/PP2.jpg";
import pp3 from "@/assets/laung-harmoni/PP3.jpg";
import { easeOut, motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { keyframes } from "popmotion";
import "./style.css";
import { fadeIn } from "@/components/variant";

function HorizontalScroll() {
    return (
        <div className="2xl:justify-center object-center bg-cover flex flex-col m-auto p-auto bg-[url('/assets/laung-harmoni/Testimoni.png')]">
            <div className="flex flex-col m-auto p-auto object-center text-center ">
                <motion.h1 
                variants={fadeIn("up", 0.1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className="flex pt-[100px] sm:pt-[146px] pb-[40px] sm:pb-[60px] lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-medium text-[29px] sm:text-[55px] leading-[41px] sm:leading-[77px] items-center">
                    Apa Kata Mereka?
                </motion.h1>
            </div>
            <div className="flex overflow-x-scroll overflow-hidden hide-scroll-bar pb-[100px] sm:pb-[146px] object-center" >
                <div className="gap-[10px] sm:gap-[20pt] flex flex-nowrap mx-auto justify-center" >
                    {/* card 1 */}
                    <div className="inline-block object-center justify-center">
                        <div className="w-[320px] sm:w-[607pt] sm:h-[146pt] overflow-hidden rounded-[17px] sm:rounded-[34px] shadow-md bg-white hover:shadow-xl ">
                            <div className="flex px-[15px] sm:px-[30pt] justify-center">
                                <Image
                                    className="pict w-[48pt] h-[48pt] sm:w-[92pt] sm:h-[92pt] mt-5 sm:mt-9 object-cover rounded-full justify-center items-center"
                                    src={pp.src}
                                    alt="Next.js Logo"
                                    width={600}
                                    height={200}
                                    priority
                                  />
                                <div className="pl-[14pt] sm:pl-[28pt] py-[14pt] sm:py-[27pt] ">
                                    <p className="text-[10px] sm:text-[18pt] font-bold leading-[15px] sm:leading-[28pt] pb-2 sm:pb-[15px]">Ahmad Yoga Noviansyah</p>
                                    <p className="text-[9px] sm:text-[17pt] font-lora leading-[15px] sm:leading-[28pt] ">“Adminnya ramah, kerjanya satset dan undanganku langsung jadi. Pokoknya recommended!”</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* card 2 */}
                     <div className="inline-block object-center justify-center">
                        <div className="w-[320px] sm:w-[607pt] sm:h-[146pt] overflow-hidden rounded-[17px] sm:rounded-[34px] shadow-md bg-white hover:shadow-xl ">
                            <div className="flex px-[15px] sm:px-[30pt] justify-center">
                                <Image
                                    className="pict w-[48pt] h-[48pt] sm:w-[92pt] sm:h-[92pt] mt-5 sm:mt-9 object-cover rounded-full justify-center items-center"
                                    src={pp1.src}
                                    alt="Next.js Logo"
                                    width={600}
                                    height={200}
                                    priority
                                  />
                                <div className="pl-[14pt] sm:pl-[28pt] py-[14pt] sm:py-[27pt] ">
                                    <p className="text-[10px] sm:text-[18pt] font-bold leading-[15px] sm:leading-[28pt] pb-2 sm:pb-[15px]">Amalia Apriliani</p>
                                    <p className="text-[9px] sm:text-[17pt] font-lora leading-[15px] sm:leading-[28pt] ">"Sangat praktis dan modern, Pilihan temanya banyak dan desainnya menarik"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* card 3 */}
                     <div className="inline-block object-center justify-center">
                        <div className="w-[320px] sm:w-[607pt] sm:h-[146pt] overflow-hidden rounded-[17px] sm:rounded-[34px] shadow-md bg-white hover:shadow-xl ">
                            <div className="flex px-[15px] sm:px-[30pt] justify-center">
                                <Image
                                    className="pict w-[48pt] h-[48pt] sm:w-[92pt] sm:h-[92pt] mt-5 sm:mt-9 object-cover rounded-full justify-center items-center"
                                    src={pp2.src}
                                    alt="Next.js Logo"
                                    width={600}
                                    height={200}
                                    priority
                                  />
                                <div className="pl-[14pt] sm:pl-[28pt] py-[14pt] sm:py-[27pt] ">
                                    <p className="text-[10px] sm:text-[18pt] font-bold leading-[15px] sm:leading-[28pt] pb-2 sm:pb-[15px]">Ayutianingsih</p>
                                    <p className="text-[9px] sm:text-[17pt] font-lora leading-[15px] sm:leading-[28pt] ">"Desainnya cantik sesuai dengan tema pernikahan kami, bisa menambahkan pesan dan foto juga"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* card 4 */}
                     <div className="inline-block object-center justify-center">
                        <div className="w-[320px] sm:w-[607pt] sm:h-[146pt] overflow-hidden rounded-[17px] sm:rounded-[34px] shadow-md bg-white hover:shadow-xl ">
                            <div className="flex px-[15px] sm:px-[30pt] justify-center">
                                <Image
                                    className="pict w-[48pt] h-[48pt] sm:w-[92pt] sm:h-[92pt] mt-5 sm:mt-9 object-cover rounded-full justify-center items-center"
                                    src={pp3.src}
                                    alt="Next.js Logo"
                                    width={600}
                                    height={200}
                                    priority
                                  />
                                <div className="pl-[14pt] sm:pl-[28pt] py-[14pt] sm:py-[27pt] ">
                                    <p className="text-[10px] sm:text-[18pt] font-bold leading-[15px] sm:leading-[28pt] pb-2 sm:pb-[15px]">Andini Shafitri</p>
                                    <p className="text-[9px] sm:text-[17pt] font-lora leading-[15px] sm:leading-[28pt] ">Undangan digital ini sangat memudahkan kami, Tampilannya elegan bisa menambahkan detail acara"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* card 5 */}
                    <div className="inline-block object-center justify-center">
                        <div className="w-[320px] sm:w-[607pt] sm:h-[146pt] overflow-hidden rounded-[17px] sm:rounded-[34px] shadow-md bg-white hover:shadow-xl ">
                            <div className="flex px-[15px] sm:px-[30pt] justify-center">
                                <Image
                                    className="pict w-[48pt] h-[48pt] sm:w-[92pt] sm:h-[92pt] mt-5 sm:mt-9 object-cover rounded-full justify-center items-center"
                                    src={pp.src}
                                    alt="Next.js Logo"
                                    width={600}
                                    height={200}
                                    priority
                                  />
                                <div className="pl-[14pt] sm:pl-[28pt] py-[14pt] sm:py-[27pt] ">
                                    <p className="text-[10px] sm:text-[18pt] font-bold leading-[15px] sm:leading-[28pt] pb-2 sm:pb-[15px]">Muhammad Ditto</p>
                                    <p className="text-[9px] sm:text-[17pt] font-lora leading-[15px] sm:leading-[28pt] ">"Sangat rekomendasi untuk yang ingin undangan berbeda!"</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HorizontalScroll;





