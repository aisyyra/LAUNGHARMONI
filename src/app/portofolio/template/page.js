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
                        <p className="mt-5 font-regular font-lora ">
                        Lihat undangan para klien yang telah kami kerjakan dan jadikan sebagai referensimu. Berminat dengan tema yang ada? Chat Admin ya~</p>
                        <Button />
                    </div>
                </div>
            </main>
         {/* Header Page End */}

         {/* Portofolio */}
        <main className="bg-undangan h-sreen w-screen flex items-center justify-center">
            <div className="flex flex-col my-[30px]">
                <div className="flex">
                    <div className="inline-block flex max-w-[20rem] w-56 flex-col overflow-hidden rounded-[30px] bg-white shadow-md">
                        <div className="">
                            <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none">
                            <Image
                                className="object-fill w-56 h-80"
                                src={Card.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />
                            </div>
                            <div className="p-5 text-center items-center">
                                <h4 class=" my-2 block text-sm antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                Alexander & Bella
                                </h4>
                                <p class="block mt-3 text-[10px] antialiased font-regular leading-relaxed text-gray-700">
                                09 OKTOBER 2024
                                </p>
                            </div>
                        </div>
                    </div> 
                
                    <div className="inline-block flex max-w-[20rem] w-56 flex-col overflow-hidden rounded-[30px] ml-11 bg-white shadow-md">
                        <div className="">
                            <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none">
                            <Image
                                className="object-fill w-56 h-80"
                                src={Card.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />
                            </div>
                            <div className="p-5 text-center items-center">
                                <h4 class=" my-2 block text-sm antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                Alexander & Bella
                                </h4>
                                <p class="block mt-3 text-[10px] antialiased font-regular leading-relaxed text-gray-700">
                                09 OKTOBER 2024
                                </p>
                            </div>
                        </div>
                    </div> 

                    <div className="inline-block flex max-w-[20rem] w-56 flex-col overflow-hidden rounded-[30px] ml-11 bg-white shadow-md">
                        <div className="">
                            <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none">
                            <Image
                                className="object-fill w-56 h-80"
                                src={Card.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />
                            </div>
                            <div className="p-5 text-center items-center">
                                <h4 class=" my-2 block text-sm antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                Alexander & Bella
                                </h4>
                                <p class="block mt-3 text-[10px] antialiased font-regular leading-relaxed text-gray-700">
                                09 OKTOBER 2024
                                </p>
                            </div>
                        </div>
                    </div> 

                    <div className="inline-block flex max-w-[20rem] w-56 flex-col overflow-hidden rounded-[30px] ml-11 bg-white shadow-md">
                        <div className="">
                            <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none">
                            <Image
                                className="object-fill w-56 h-80"
                                src={Card.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />
                            </div>
                            <div className="p-5 text-center items-center">
                                <h4 class=" my-2 block text-sm antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                Alexander & Bella
                                </h4>
                                <p class="block mt-3 text-[10px] antialiased font-regular leading-relaxed text-gray-700">
                                09 OKTOBER 2024
                                </p>
                            </div>
                        </div>
                    </div> 
            </div>

                <div className="flex my-5 ">
                <div className="inline-block flex max-w-[20rem] w-56 flex-col overflow-hidden rounded-[30px] bg-white shadow-md">
                        <div className="">
                            <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none">
                            <Image
                                className="object-fill w-56 h-80"
                                src={Card.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />
                            </div>
                            <div className="p-5 text-center items-center">
                                <h4 class=" my-2 block text-sm antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                Alexander & Bella
                                </h4>
                                <p class="block mt-3 text-[10px] antialiased font-regular leading-relaxed text-gray-700">
                                09 OKTOBER 2024
                                </p>
                            </div>
                        </div>
                    </div> 
                
                    <div className="inline-block flex max-w-[20rem] w-56 flex-col overflow-hidden rounded-[30px] ml-11 bg-white shadow-md">
                        <div className="">
                            <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none">
                            <Image
                                className="object-fill w-56 h-80"
                                src={Card.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />
                            </div>
                            <div className="p-5 text-center items-center">
                                <h4 class=" my-2 block text-sm antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                Alexander & Bella
                                </h4>
                                <p class="block mt-3 text-[10px] antialiased font-regular leading-relaxed text-gray-700">
                                09 OKTOBER 2024
                                </p>
                            </div>
                        </div>
                    </div> 

                    <div className="inline-block flex max-w-[20rem] w-56 flex-col overflow-hidden rounded-[30px] ml-11 bg-white shadow-md">
                        <div className="">
                            <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none">
                            <Image
                                className="object-fill w-56 h-80"
                                src={Card.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />
                            </div>
                            <div className="p-5 text-center items-center">
                                <h4 class=" my-2 block text-sm antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                Alexander & Bella
                                </h4>
                                <p class="block mt-3 text-[10px] antialiased font-regular leading-relaxed text-gray-700">
                                09 OKTOBER 2024
                                </p>
                            </div>
                        </div>
                    </div> 

                    <div className="inline-block flex max-w-[20rem] w-56 flex-col overflow-hidden rounded-[30px] ml-11 bg-white shadow-md">
                        <div className="">
                            <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none">
                            <Image
                                className="object-fill w-56 h-80"
                                src={Card.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />
                            </div>
                            <div className="p-5 text-center items-center">
                                <h4 class=" my-2 block text-sm antialiased font-medium leading-snug tracking-normal text-blue-gray-900">
                                Alexander & Bella
                                </h4>
                                <p class="block mt-3 text-[10px] antialiased font-regular leading-relaxed text-gray-700">
                                09 OKTOBER 2024
                                </p>
                            </div>
                        </div>
                    </div> 
                
                </div>
           </div>
        </main>
         {/* Portofolio end */}
        
         <Footer />

    </>
    );
}