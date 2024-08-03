import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Header from "@/components/header";
import Card from "@/assets/laung-harmoni/Card.png";
import Footer from "@/components/footer";
import Button from "@/components/button";
import Button_WA from "@/components/button-wa"
import "./style.css";

export default function Portofolio() {
    return (
    <>
         <Header />
         {/* Header Page */}
            <main className="bg-cover h-[50%] w-screen flex bg-[url('/assets/laung-harmoni/Header_Portofolio.png')] justify-center">
                <div className="mt-[200px] mb-[146px] w-12/12 flex flex-row">
                    <div className=" text-center justify-center px-[194px]">
                        <h1 className="font-medium text-[55px] leading-[77px] mb-[60px]">Portofolio Laungharmoni</h1>
                        <p className="mb-[70px] font-regular font-lora text-[22px] leading-[37px]">
                        Lihat undangan para klien yang telah kami kerjakan dan jadikan sebagai referensimu. Berminat dengan tema yang ada? Chat Admin ya~</p>
                        {/* button */}
                        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                            <div className="flex w-full divide-x divide-gray-800 row">
                            <a href="/portofolio/template" className="button transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-[15px] py-[18px] px-[32px] rounded-[50px] bg-gradient-to-r from-[#E3457B] to-[#EF90A0] text-white focus:opacity-[0.5] focus:shadow-none active:opacity-[0.85] block w-full rounded-r-none border-r-0">
                                    <button>
                                    <p className="align-middle select-none text-center justify-center">Desain Template</p> 
                                    </button>
                                </a>
                                <a href="/portofolio/custom" className="button_2 transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-[15px] py-[18px] px-[32px] rounded-[50px] bg-gradient-to-r from-[#303030] to-[#616161] text-white focus:opacity-[0.5] focus:shadow-none active:opacity-[0.85] block w-full rounded-l-none">
                                    <button>
                                        <p className="align-middle select-none text-center justify-center">Desain Costum</p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <Button_WA />
            </main>
         {/* Header Page End */}

         {/* Portofolio */}
        <main className="bg-undangan h-sreen w-screen flex items-center justify-center ">
          <p className="mb-[146px]">Hiks, data belum tersedia..</p>
        </main>
         {/* Portofolio end */}
         <Footer />

    </>
    );
}