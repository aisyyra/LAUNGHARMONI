import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Header from "@/components/header";
import Card from "@/assets/laung-harmoni/Card.png";
import Footer from "@/components/footer";
import Button_WA from "@/components/button-wa"


export default function tema() {
    return (
    <>
         <Header />
         {/* Header Page */}
            <main className="justify-center bg-cover h-[80%] w-screen flex bg-[url('/assets/laung-harmoni/Header_Portofolio.png')]">
                <div className="mt-[150px] mb-[100px] w-12/12 flex flex-row text-center">
                    <div className=" text-center justify-center">
                        <h1 className="font-medium text-[40px]">Tema Desain Undangan</h1>
                        <p className="mt-5 font-regular font-lora">
                        Berisi template yang telah kami buat dan dapat langsung diisi dengan informasi acaramu. Memakai template <br></br>akan menghemat banyak waktu karena proses pembuatan lebih cepat dibanding Desain Custom.</p>
                    </div>
                </div>
                <Button_WA />
            </main>
            
         {/* Header Page End */}

         {/* Tema */}
        <main className="bg-undangan h-sreen w-screen flex items-center justify-center">
            <div className="flex flex-col my-[20px] mb-[50px]">
                <div className="flex ">
                <div className=" justify-center  ">
                    <div className="inline-block flex max-w-[40rem] w-80 flex-col overflow-hidden rounded-[35px] bg-white text-gray-700 shadow-md">
                        <div className="m-0 bg-transparent rounded-none shadow-none bg-clip-border">
                                    <Image
                                        className="object-fill w-80 h-80"
                                        src={Card.src}
                                        alt="Next.js Logo"
                                        width={600}
                                        height={200}
                                        priority
                                    />
                        </div>
                        <div className="p-5 text-center mb-7">
                                    <h4 class=" block text-[18px] font-bold antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                    Coral Charming
                                    </h4>
                                    <p class="block mt-2 text-[13px] antialiased font-regular leading-relaxed text-gray-700">
                                    KODE TEMA #2139
                                    </p>
                        </div>
                    </div> 
                    <div className="mx-[6rem] -translate-y-6 transform ">
                        <button className="font-lora px-7 py-3 text-sm text-white font-regular rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] shadow-inner drop-shadow shadow-warna hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                        Lihat Tema
                        </button>
                    </div>
                </div>
                <div className=" justify-center mx-7 ">
                    <div className="inline-block flex max-w-[40rem] w-80 flex-col overflow-hidden rounded-[35px] bg-white text-gray-700 shadow-md">
                        <div className="m-0 bg-transparent rounded-none shadow-none bg-clip-border">
                                    <Image
                                        className="object-fill w-80 h-80"
                                        src={Card.src}
                                        alt="Next.js Logo"
                                        width={600}
                                        height={200}
                                        priority
                                    />
                        </div>
                        <div className="p-5 text-center mb-7">
                                    <h4 class=" block text-[18px] font-bold antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                    Coral Charming
                                    </h4>
                                    <p class="block mt-2 text-[13px] antialiased font-regular leading-relaxed text-gray-700">
                                    KODE TEMA #2139
                                    </p>
                        </div>
                    </div> 
                    <div className="mx-[6rem] -translate-y-6 transform ">
                        <button className="font-lora px-7 py-3 text-sm text-white font-regular rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] shadow-inner drop-shadow shadow-warna hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                        Lihat Tema
                        </button>
                    </div>
                </div>
                <div className=" justify-center ">
                    <div className="inline-block flex max-w-[40rem] w-80 flex-col overflow-hidden rounded-[35px] bg-white text-gray-700 shadow-md">
                        <div className="m-0 bg-transparent rounded-none shadow-none bg-clip-border">
                                    <Image
                                        className="object-fill w-80 h-80"
                                        src={Card.src}
                                        alt="Next.js Logo"
                                        width={600}
                                        height={200}
                                        priority
                                    />
                        </div>
                        <div className="p-5 text-center mb-7">
                                    <h4 class=" block text-[18px] font-bold antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                    Coral Charming
                                    </h4>
                                    <p class="block mt-2 text-[13px] antialiased font-regular leading-relaxed text-gray-700">
                                    KODE TEMA #2139
                                    </p>
                        </div>
                    </div> 
                    <div className="mx-[6rem] -translate-y-6 transform ">
                        <button className="font-lora px-7 py-3 text-sm text-white font-regular rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] shadow-inner drop-shadow shadow-warna hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                        Lihat Tema
                        </button>
                    </div>
                </div>
                </div>
                <div className="flex ">
                <div className=" justify-center  ">
                    <div className="inline-block flex max-w-[40rem] w-80 flex-col overflow-hidden rounded-[35px] bg-white text-gray-700 shadow-md">
                        <div className="m-0 bg-transparent rounded-none shadow-none bg-clip-border">
                                    <Image
                                        className="object-fill w-80 h-80"
                                        src={Card.src}
                                        alt="Next.js Logo"
                                        width={600}
                                        height={200}
                                        priority
                                    />
                        </div>
                        <div className="p-5 text-center mb-7">
                                    <h4 class=" block text-[18px] font-bold antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                    Coral Charming
                                    </h4>
                                    <p class="block mt-2 text-[13px] antialiased font-regular leading-relaxed text-gray-700">
                                    KODE TEMA #2139
                                    </p>
                        </div>
                    </div> 
                    <div className="mx-[6rem] -translate-y-6 transform ">
                        <button className="font-lora px-7 py-3 text-sm text-white font-regular rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] shadow-inner drop-shadow shadow-warna hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                        Lihat Tema
                        </button>
                    </div>
                </div>
                <div className=" justify-center mx-7 ">
                    <div className="inline-block flex max-w-[40rem] w-80 flex-col overflow-hidden rounded-[35px] bg-white text-gray-700 shadow-md">
                        <div className="m-0 bg-transparent rounded-none shadow-none bg-clip-border">
                                    <Image
                                        className="object-fill w-80 h-80"
                                        src={Card.src}
                                        alt="Next.js Logo"
                                        width={600}
                                        height={200}
                                        priority
                                    />
                        </div>
                        <div className="p-5 text-center mb-7">
                                    <h4 class=" block text-[18px] font-bold antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                    Coral Charming
                                    </h4>
                                    <p class="block mt-2 text-[13px] antialiased font-regular leading-relaxed text-gray-700">
                                    KODE TEMA #2139
                                    </p>
                        </div>
                    </div> 
                    <div className="mx-[6rem] -translate-y-6 transform ">
                        <button className="font-lora px-7 py-3 text-sm text-white font-regular rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] shadow-inner drop-shadow shadow-warna hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                        Lihat Tema
                        </button>
                    </div>
                </div>
                <div className=" justify-center">
                    <div className="inline-block flex max-w-[40rem] w-80 flex-col overflow-hidden rounded-[35px] bg-white text-gray-700 shadow-md">
                        <div className="m-0 bg-transparent rounded-none shadow-none bg-clip-border">
                                    <Image
                                        className="object-fill w-80 h-80"
                                        src={Card.src}
                                        alt="Next.js Logo"
                                        width={600}
                                        height={200}
                                        priority
                                    />
                        </div>
                        <div className="p-5 text-center mb-7">
                                    <h4 class=" block text-[18px] font-bold antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                    Coral Charming
                                    </h4>
                                    <p class="block mt-2 text-[13px] antialiased font-regular leading-relaxed text-gray-700">
                                    KODE TEMA #2139
                                    </p>
                        </div>
                    </div> 
                    <div className="mx-[6rem] -translate-y-6 transform ">
                        <button className="font-lora px-7 py-3 text-sm text-white font-regular rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] shadow-inner drop-shadow shadow-warna hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                        Lihat Tema
                        </button>
                    </div>
                </div>
                </div>
            
           </div>
        </main>
        
         {/* Tema end */}
        
         <Footer />

    </>
    );
}