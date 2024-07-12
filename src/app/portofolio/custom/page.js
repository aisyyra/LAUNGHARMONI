import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Header from "@/components/header";
import Card from "@/assets/laung-harmoni/Card.png";
import Footer from "@/components/footer";
import Button from "@/components/button";


export default function Portofolio() {
    return (
    <>
         <Header />
         {/* Header Page */}
            <main className="bg-cover h-[50%] w-screen flex bg-[url('/assets/laung-harmoni/Header_Portofolio.png')] justify-center">
                <div className="mt-[150px] w-12/12 flex flex-row">
                    <div className=" text-center justify-center">
                        <h1 className="font-medium text-[40px]">Portofolio Laungharmoni</h1>
                        <p className="mt-5 font-regular font-lora">
                        Lihat undangan para klien yang telah kami kerjakan dan jadikan sebagai referensimu. Berminat dengan tema yang ada? Chat Admin ya~</p>
                        <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                            <div class="flex w-full divide-x divide-gray-800 row">
                            <a href="/portofolio/template" className="transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-[50px] bg-gradient-to-r from-[#303030] to-[#616161] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-warna-900/20 focus:opacity-[0.5] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full rounded-r-none border-r-0">
                                    <button>
                                    <p className="align-middle select-none text-center">Desain Template</p> 
                                    </button>
                                </a>
                                <a href="/portofolio/custom" className="transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-[50px] bg-gradient-to-r from-[#E3457B] to-[#EF90A0]  text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-abu-900/20 focus:opacity-[0.5] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full rounded-l-none">
                                    <button>
                                        <p className="align-middle select-none text-center">Desain Costum</p>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
         {/* Header Page End */}

         {/* Portofolio */}
        <main className="bg-undangan h-sreen w-screen flex items-center justify-center ">
          <p className="mb-[50px]">Hiks, data belum tersedia..</p>
        </main>
         {/* Portofolio end */}
        
         <Footer />

    </>
    );
}