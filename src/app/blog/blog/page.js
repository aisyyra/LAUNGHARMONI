import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Blog_1 from "@/assets/laung-harmoni/1_Blog.jpg";
import Button_WA from "@/components/button-wa"
import Artikel2 from "@/assets/laung-harmoni/blog.jpg";
import Artikel3 from "@/assets/laung-harmoni/blog2.jpg";


export default function tema() {
    return (
    <>

         {/* Header Page */}
        <main className="justify-center bg-cover h-[80%] w-screen flex bg-[url('/assets/laung-harmoni/Header_Portofolio.png')] pt-[5rem]">
                <div className="py-[146px] w-12/12 flex flex-row text-center">
                    <div className=" text-center justify-center gap-[60px] "> 
                        <h1 className="font-medium xl:text-[55px] text-[29px] xl:leading-[77px] leading-[55px]">Blog Laungharmoni</h1>
                        <p className="leading-[37px] font-regular font-lora xl:leading-[37px] xl:text-[22px] leading-[36px] text-[22px]">
                        Temukan inspirasi dan informasi terbaru seputar dunia undangan digital, tips pernikahan, serta panduan acara yang tak terlupakan.<br></br> Jadikan momen spesial Anda semakin berkesan bersama Laungharmoni.
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
                    <div className="w-[1532] h-[300pt] xl:max-w-[1532] md:max-w-[1532] mx-auto bg-white rounded-[35px] shadow-md overflow-hidden">
                        <div className="flex">
                            <div className="w-3/6 h-[300pt]">
                            <Image
                                className="object-cover"
                                src={Artikel2.src}
                                alt="Next.js Logo"
                                width={771}
                                height={297}
                                priority
                            />
                            </div>
                            <div className="py-[40px] px-[40px] w-3/6">
                            <div className="mb-[29px] font-lora">
                            <button className="px-[17px] py-[9px] text-[12px] text-white font-medium rounded-full bg-gradient-to-r from-[#303030] to-[#616161] ">
                                 Minggu, 20 Oktober 2024
                            </button>
                                <button className="mx-[13px] px-[17px] py-[9px] text-[12px] font-medium text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] ">
                                    Undangan digital
                                </button>
                                <button className="px-[17px] py-[9px] text-[12px] font-medium text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] ">
                                    Pernikahan
                                </button>
                            </div>
                            <Link href="/blog/artikel" className="leading-[38px] mb-[29px] block text-[22px] leading-tight font-medium hover:underline">Keuntungan Menggunakan Undangan Digital untuk Momen Spesial Anda</Link>
                            <p className="leading-[22px] text-[14px] font-regular font-lora">Mengatur acara spesial seperti pernikahan atau ulang tahun membutuhkan banyak persiapan. Salah satu hal penting yang perlu dipersiapkan adalah undangan. Di era digital seperti sekarang, undangan digital menjadi pilihan yang semakin populer. Bukan hanya karena kemudahannya, 
                            tapi juga karena beberapa keuntungan yang tidak bisa didapat dari undangan cetak</p>
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
                                src={Artikel3.src}
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
                                  Pernikahan
                                </button>
                                <button className="px-[17px] py-[9px] text-[12px] font-medium text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] ">
                                Keyword
                                </button>
                            </div>
                            <Link href="/blog/artikel" className="leading-[38px] mb-[29px] block text-[22px] leading-tight font-medium hover:underline">Momen Pernikahan yang Berkesan: 7 Ide Unik untuk Membuat Acara Anda Tak Terlupakan</Link>
                            <p className="leading-[22px] text-[14px] font-regular font-lora">Pernikahan bukan hanya tentang dua hati yang menyatu, tetapi juga tentang menciptakan kenangan tak terlupakan bersama orang-orang terkasih. Jika Anda sedang mencari ide-ide segar 
                                untuk membuat pernikahan Anda berbeda dari yang lain, simak tips seru dari Laungharmoni berikut ini!
                            </p>
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
                                src={Artikel2.src}
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
                            <Link href="/blog/artikel" className="leading-[38px] mb-[29px] block text-[22px] leading-tight font-medium hover:underline">Keuntungan Menggunakan Undangan Digital untuk Momen Spesial Anda</Link>
                            <p className="leading-[22px] text-[14px] font-regular font-lora">Mengatur acara spesial seperti pernikahan atau ulang tahun membutuhkan banyak persiapan. Salah satu hal penting yang perlu dipersiapkan adalah undangan. Di era digital seperti sekarang, undangan digital menjadi pilihan yang semakin populer. Bukan hanya karena kemudahannya, 
                            tapi juga karena beberapa keuntungan yang tidak bisa didapat dari undangan cetak</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </main>
         {/* Tema end */}

    </>
    );
}