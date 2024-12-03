import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Header from "@/components/header";
import Card from "@/assets/laung-harmoni/Card.png";
import foto1 from "@/assets/laung-harmoni/tema1.png"
import template1 from "@/assets/rully-sabil/mobile/S1_Slider_2A.png"
import template2 from "@/assets/laung-harmoni/template2.jpg"
import template3 from "@/assets/laung-harmoni/template3.jpg"
import template4 from "@/assets/laung-harmoni/template4.jpg"
import template5 from "@/assets/laung-harmoni/template5.jpg"
import template6 from "@/assets/laung-harmoni/template6.jpg"
import Footer from "@/components/footer";
import Button from "@/components/button";
import Button_WA from "@/components/button-wa"


export default function Portofolio() {
    return (
    <>
         {/* Header Page */}
            <main className="bg-cover h-[50%] w-screen flex bg-[url('/assets/laung-harmoni/Header_Portofolio.png')] justify-center">
                <div className=" w-12/12 flex flex-row">
                    <div className=" text-center items-center justify-center pt-[200px] pb-[146px]">
                        <h1 className="font-medium xl:text-[55px] text-[29px] xl:leading-[77px] leading-[55px]">Portofolio Laungharmoni</h1>
                        <p className="mt-[60px] mb-[72px] font-regular font-lora xl:leading-[37px] xl:text-[22px] leading-[36px] text-[22px]">
                        Lihat undangan para klien yang telah kami kerjakan dan jadikan sebagai referensimu. Berminat dengan tema yang ada? Chat Admin ya~</p>
                        <Button />
                    </div>
                </div>
             <Button_WA />
            </main>
         {/* Header Page End */}

         {/* Portofolio */}
        <main className="bg-undangan h-sreen w-screen flex items-center justify-center">
            <div className="">
                {/* card atas */}
                <div className="gap-x-[34px] gap-y-[34px] xl:gap-y-[34px] lg:grid grid-cols-1 xl:grid grid-cols-3 pb-[100px]">
                    {/* card */}
                    <div className="max-w-[357px] w-[357px] h-[618px] overflow-hidden rounded-[35px] bg-white shadow-md">
                        <div className="">
                            <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none">
                            <Image
                                className="object-cover w-[357px] h-[480px]"
                                src={template1.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />
                            </div>
                            <div className="py-[34px] text-center items-center">
                                <h4 className="block text-[22px] font-medium tracking-normal">
                                Rully & Sabil
                                </h4>
                                <p className="pt-4 block text-[13px]">
                                12 Mei 2024
                                </p>
                            </div>
                        </div>
                    </div> 
                    {/* card  */}
                    <div className="max-w-[357px] w-[357px] h-[618px] overflow-hidden rounded-[35px] bg-white shadow-md">
                        <div className="">
                            <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none">
                            <Image
                                className="object-fill w-[357px] h-[480px]"
                                src={template2.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />
                            </div>
                            <div className="py-[34px] text-center items-center">
                                <h4 className="block text-[22px] font-medium tracking-normal">
                                 Akhmad & Sintya
                                </h4>
                                <p className="pt-4 block text-[13px]">
                                 15 Juli 2024
                                </p>
                            </div>
                        </div>
                    </div> 
                    {/* card */}
                    <div className="max-w-[357px] w-[357px] h-[618px] overflow-hidden rounded-[35px] bg-white shadow-md">
                        <div className="">
                            <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none">
                            <Image
                                className="object-fill w-[357px] h-[480px]"
                                src={template3.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />
                            </div>
                            <div className="py-[34px] text-center items-center">
                                <h4 className="block text-[22px] font-medium tracking-normal">
                                Septian & Hannah
                                </h4>
                                <p className="pt-4 block text-[13px]">
                                09 September 2024
                                </p>
                            </div>
                        </div>
                    </div> 
                     {/* card */}
                     <div className="max-w-[357px] w-[357px] h-[618px] overflow-hidden rounded-[35px] bg-white shadow-md">
                        <div className="">
                            <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none">
                            <Image
                                className="object-fill w-[357px] h-[480px]"
                                src={template4.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />
                            </div>
                            <div className="py-[34px] text-center items-center">
                                <h4 className="block text-[22px] font-medium tracking-normal">
                                 Abidzar & Kanaya
                                </h4>
                                <p className="pt-4 block text-[13px]">
                                20 Agustus 2024
                                </p>
                            </div>
                        </div>
                    </div> 
                    {/* card  */}
                    <div className="max-w-[357px] w-[357px] h-[618px] overflow-hidden rounded-[35px] bg-white shadow-md">
                        <div className="">
                            <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none">
                            <Image
                                className="object-fill w-[357px] h-[480px]"
                                src={template5.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />
                            </div>
                            <div className="py-[34px] text-center items-center">
                                <h4 className="block text-[22px] font-medium tracking-normal">
                                 Alfian & Salsabila
                                </h4>
                                <p className="pt-4 block text-[13px]">
                                18 Juni 2024
                                </p>
                            </div>
                        </div>
                    </div> 
                    {/* card */}
                    <div className="max-w-[357px] w-[357px] h-[618px] overflow-hidden rounded-[35px] bg-white shadow-md">
                        <div className="">
                            <div className="relative m-0 overflow-hidden bg-transparent rounded-none shadow-none">
                            <Image
                                className="object-fill w-[357px] h-[480px]"
                                src={template6.src}
                                alt="Next.js Logo"
                                width={600}
                                height={200}
                                priority
                            />
                            </div>
                            <div className="py-[34px] text-center items-center">
                                <h4 className="block text-[22px] font-medium tracking-normal">
                                 Erick & Tania
                                </h4>
                                <p className="pt-4 block text-[13px]">
                                28 April 2024
                                </p>
                            </div>
                        </div>
                    </div> 
                </div>
           </div>
        </main>
         {/* Portofolio end */}

    </>
    );
}