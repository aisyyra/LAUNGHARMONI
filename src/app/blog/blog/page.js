import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Header from "@/components/header";
import Blog_1 from "@/assets/laung-harmoni/1_Blog.jpg";
import Footer from "@/components/footer";
import Button_WA from "@/components/button-wa"


export default function tema() {
    return (
    <>
         <Header />
         {/* Header Page */}
        <main className="justify-center bg-cover h-[80%] w-screen flex bg-[url('/assets/laung-harmoni/Header_Portofolio.png')] pt-[5rem]">
                <div className="py-[146px] w-12/12 flex flex-row text-center">
                    <div className=" text-center justify-center gap-[60px] "> 
                        <h1 className="font-medium text-[55px]">Blog Laungharmoni</h1>
                        <p className="leading-[37px] font-regular text-[22px] font-lora mt-[60px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore<br></br> magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.
                        </p>
                    </div>
                </div>
        </main>
         {/* Header Page End */}

         {/* Tema */}
        <main className="bg-undangan h-sreen w-screen flex items-center justify-center px-[146px]">
            <div className="flex flex-col gap-[34px] mb-[146px]">
                {/* card 1 */}
                <div className="flex ">
                    {/* card */}
                    <div class="w-[1532] h-[300pt] xl:max-w-[1532] md:max-w-[1532] mx-auto bg-white rounded-[35px] shadow-md overflow-hidden">
                        <div className="flex">
                            <div className="w-3/6">
                            <Image
                                className="object-cover"
                                src={Blog_1.src}
                                alt="Next.js Logo"
                                width={771}
                                height={297}
                                priority
                            />
                            </div>
                            <div className="py-[40px] px-[40px] w-3/6">
                            <div clasName="mb-[29px] font-lora">
                            <button className="px-[17px] py-[9px] text-[12px] text-white font-medium rounded-full bg-gradient-to-r from-[#303030] to-[#616161] ">
                                 Kamis, 18 Juli 2024
                            </button>
                                <button className="mx-[13px] px-[17px] py-[9px] text-[12px] font-medium text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] ">
                                    Keyword
                                </button>
                                <button className="px-[17px] py-[9px] text-[12px] font-medium text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] ">
                                    Keyword
                                </button>
                            </div>
                            <Link href="/blog/artikel" className="leading-[38px] mb-[29px] block text-[22px] leading-tight font-medium hover:underline">Lorem Ipsum Dolor Sit Amet Consectetur Adispiscing Elit Sed do Eiusmod</Link>
                            <p className="leading-[22px] text-[14pt] font-regular font-lora">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 2 */}
                <div className="flex ">
                    {/* card */}
                    <div className="w-[1532] h-[300pt] xl:max-w-[1532] md:max-w-[1532] mx-auto bg-white rounded-[35px] shadow-md overflow-hidden">
                        <div className="flex">
                            <div className="w-3/6">
                            <Image
                                className="object-cover"
                                src={Blog_1.src}
                                alt="Next.js Logo"
                                width={771}
                                height={297}
                                priority
                            />
                            </div>
                            <div className="py-[40px] px-[40px] w-3/6">
                            <div className="mb-[29px] font-lora">
                            <button className="px-[17px] py-[9px] text-[12px] text-white font-medium rounded-full bg-gradient-to-r from-[#303030] to-[#616161] ">
                                 Kamis, 18 Juli 2024
                            </button>
                                <button className="mx-[13px] px-[17px] py-[9px] text-[12px] font-medium text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] ">
                                    Keyword
                                </button>
                                <button className="px-[17px] py-[9px] text-[12px] font-medium text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] ">
                                    Keyword
                                </button>
                            </div>
                            <Link href="/blog/artikel" className="leading-[38px] mb-[29px] block text-[22px] leading-tight font-medium hover:underline">Lorem Ipsum Dolor Sit Amet Consectetur Adispiscing Elit Sed do Eiusmod</Link>
                            <p className="leading-[22px] text-[14pt] font-regular font-lora">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* card 3 */}
                <div className="flex ">
                    {/* card */}
                    <div className="w-[1532] h-[300pt] xl:max-w-[1532] md:max-w-[1532] mx-auto bg-white rounded-[35px] shadow-md overflow-hidden">
                        <div className="flex">
                            <div className="w-3/6">
                            <Image
                                className="object-cover"
                                src={Blog_1.src}
                                alt="Next.js Logo"
                                width={771}
                                height={297}
                                priority
                            />
                            </div>
                            <div className="py-[40px] px-[40px] w-3/6">
                            <div className="mb-[29px] font-lora">
                            <button className="px-[17px] py-[9px] text-[12px] text-white font-medium rounded-full bg-gradient-to-r from-[#303030] to-[#616161] ">
                                 Kamis, 18 Juli 2024
                            </button>
                                <button className="mx-[13px] px-[17px] py-[9px] text-[12px] font-medium text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] ">
                                    Keyword
                                </button>
                                <button className="px-[17px] py-[9px] text-[12px] font-medium text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] ">
                                    Keyword
                                </button>
                            </div>
                            <Link href="/blog/artikel" className="leading-[38px] mb-[29px] block text-[22px] leading-tight font-medium hover:underline">Lorem Ipsum Dolor Sit Amet Consectetur Adispiscing Elit Sed do Eiusmod</Link>
                            <p className="leading-[22px] text-[14px] font-regular font-lora">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor inc</p>
                            </div>
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