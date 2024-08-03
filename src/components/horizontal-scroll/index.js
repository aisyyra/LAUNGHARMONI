"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import pp from "@/assets/laung-harmoni/pp.png";
import { easeOut, motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { keyframes } from "popmotion";
import "./style.css";

function HorizontalScroll() {
   
    return (
        <div className="2xl:justify-center object-center bg-cover flex flex-col m-auto p-auto bg-[url('/assets/laung-harmoni/Testimoni.png')]">
            <div className="flex flex-col m-auto p-auto object-center items-center text-center ">
                <h1 className="flex pt-[146px] pb-[60px] lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-medium text-[55px] items-center">
                    Apa Kata Mereka?
                </h1>
            </div>
            <div className="scroll flex pb-[146px] object-center" >
                <div className="gap-[20pt] flex flex-nowrap mx-auto justify-center" >
                    {/* card 1 */}
                    <div className="A inline-block object-center justify-center">
                        <div className="w-[607pt] h-[146pt] overflow-hidden rounded-[34px] shadow-md bg-white hover:shadow-xl ">
                            <div className="flex px-[30pt] justify-center">
                                <Image
                                    className="pict w-[92pt] h-[92pt] mt-9 object-cover rounded-full justify-center items-center"
                                    src={pp.src}
                                    alt="Next.js Logo"
                                    width={600}
                                    height={200}
                                    priority
                                  />
                                <div className="pl-[28pt] py-[27pt] ">
                                    <p className="text-[18pt] font-bold leading-[28pt] pb-[15px]">Ahmad bajigur</p>
                                    <span className="text-[17pt] font-lora leading-[28pt] ">“Adminnya ramah, kerjanya satset dan undanganku langsung jadi. Pokoknya recommended!”</span>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* card 2 */}
                     <div className="A inline-block object-center justify-center">
                        <div className="w-[607pt] h-[146pt] overflow-hidden rounded-[34px] shadow-md bg-white hover:shadow-xl ">
                            <div className="flex px-[30pt] justify-center">
                                <Image
                                    className="pict w-[92pt] h-[92pt] mt-9 object-cover rounded-full justify-center items-center"
                                    src={pp.src}
                                    alt="Next.js Logo"
                                    width={600}
                                    height={200}
                                    priority
                                  />
                                <div className="pl-[28pt] py-[27pt] ">
                                    <p className="text-[18pt] font-bold leading-[28pt] pb-[15px]">Ahmad bajigur</p>
                                    <span className="text-[17pt] font-lora leading-[28pt] ">“Adminnya ramah, kerjanya satset dan undanganku langsung jadi. Pokoknya recommended!”</span>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* card 3 */}
                     <div className="A inline-block object-center justify-center">
                        <div className="w-[607pt] h-[146pt] overflow-hidden rounded-[34px] shadow-md bg-white hover:shadow-xl ">
                            <div className="flex px-[30pt] justify-center">
                                <Image
                                    className="pict w-[92pt] h-[92pt] mt-9 object-cover rounded-full justify-center items-center"
                                    src={pp.src}
                                    alt="Next.js Logo"
                                    width={600}
                                    height={200}
                                    priority
                                  />
                                <div className="pl-[28pt] py-[27pt] ">
                                    <p className="text-[18pt] font-bold leading-[28pt] pb-[15px]">Ahmad bajigur 3</p>
                                    <span className="text-[17pt] font-lora leading-[28pt] ">“Adminnya ramah, kerjanya satset dan undanganku langsung jadi. Pokoknya recommended!”</span>
                                </div>
                            </div>
                        </div>
                    </div>
                     {/* card 4 */}
                     <div className="A inline-block object-center justify-center">
                        <div className="w-[607pt] h-[146pt] overflow-hidden rounded-[34px] shadow-md bg-white hover:shadow-xl ">
                            <div className="flex px-[30pt] justify-center">
                                <Image
                                    className="pict w-[92pt] h-[92pt] mt-9 object-cover rounded-full justify-center items-center"
                                    src={pp.src}
                                    alt="Next.js Logo"
                                    width={600}
                                    height={200}
                                    priority
                                  />
                                <div className="pl-[28pt] py-[27pt] ">
                                    <p className="text-[18pt] font-bold leading-[28pt] pb-[15px]">Ahmad bajigur 4</p>
                                    <span className="text-[17pt] font-lora leading-[28pt] ">“Adminnya ramah, kerjanya satset dan undanganku langsung jadi. Pokoknya recommended!”</span>
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





