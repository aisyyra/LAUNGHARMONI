"use client";
import Image from "next/image";
import React, { useEffect } from "react";

import m_ImgS1_Slider1B from "@/assets/rully-sabil/mobile/S1_Slider_1B.png";
import m_ImgS1_Slider2B from "@/assets/rully-sabil/mobile/S1_Slider_2B.png";
import m_ImgS1_Slider3B from "@/assets/rully-sabil/mobile/S1_Slider_3B.png";
import m_ImgS1_Slider4B from "@/assets/rully-sabil/mobile/S1_Slider_4B.png";

const list = [
    m_ImgS1_Slider4B.src,
    m_ImgS1_Slider3B.src,
    m_ImgS1_Slider2B.src,
    m_ImgS1_Slider1B.src,
]

function show() {
    document.getElementById("demo")
     .innerHTML = "<img src="+list[0,1,2,3]+">";
};

function HorizontalScroll() {
    return (
    <>
         <div className="overflow-y-scroll scrollbar-hide flex flex-col m-auto p-auto">
            <div className="flex object-center gap-x-4" >
                <div className="flex flex-nowrap mx-auto justify-center gap-x-4" >
                    <div className="w-screen overflow-x-scroll hide-scroll-bar">
                        <ul className="flex flex-row gap-4 ">
                            {list.map((item) => (
                                <li key={item} onClick={show} className="">
                                    <Image
                                        className=""
                                        src={item}
                                        alt="image"
                                        width={200}
                                        height={200}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-screen overflow-x-scroll hide-scroll-bar">
                        <ul className="flex flex-row gap-4 ">
                            {list.map((item) => (
                                <li key={item} onClick={show} className="">
                                    <Image
                                        className=""
                                        src={item}
                                        alt="image"
                                        width={200}
                                        height={200}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </>    
    )
}

export default HorizontalScroll;





