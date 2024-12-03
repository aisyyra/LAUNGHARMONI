import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Artikel from "@/assets/laung-harmoni/1_Blog.jpg";
import { IoIosArrowForward } from "react-icons/io";
import Artikel2 from "@/assets/laung-harmoni/blog.jpg";


export default function tema() {
    return (
    <>
         {/* Header Page */}
            <main className="justify-center w-screen flex bg-undangan">
                <div className="mt-[150px] mb-[100px] w-12/12 flex flex-row">
                    <div className="flex flex-col justify-center px-[100px] lg:px-[146px]">
                        <div class="rounded-[35px] overflow-hidden shadow-lg max-w-7xl bg-white ">
                            <Image
                                className="w-[100%] h-[536px]"
                                    src={Artikel2.src}
                                    alt="Next.js Logo"
                                    width={100}
                                    height={100}
                                    priority
                            />
                            <div class="px-[120px] py-[60px]">
                                <div class="leading-[62px] font-bold text-md text-[40px] font-medium">Keuntungan Menggunakan Undangan Digital untuk Momen Spesial Anda</div>
                                <button className="my-[60px] px-[28px] py-[15px] text-[22px] text-white font-medium rounded-full font-lora bg-gradient-to-r from-[#303030] to-[#616161] ">
                                    Minggu, 20 Oktober 2024
                                </button>
                                <div className="font-lora text-[22px] leading-[36px]">
                                    <p>Mengatur acara spesial seperti pernikahan atau ulang tahun membutuhkan banyak persiapan. Salah satu hal penting yang perlu dipersiapkan adalah undangan. Di era digital seperti sekarang, undangan digital menjadi pilihan yang semakin populer. Bukan hanya karena kemudahannya, tapi juga karena beberapa keuntungan yang tidak bisa didapat dari undangan cetak. Berikut adalah beberapa alasan mengapa undangan digital dari Laungharmoni bisa menjadi solusi sempurna untuk acara Anda.</p>
                                    <div>
                                        <h3 className="font-bold text-[30px] my-7">1. Hemat Waktu dan Biaya</h3>
                                        <p className="my-3">Tidak perlu lagi mencetak dan mendistribusikan undangan satu per satu. Dengan undangan digital, Anda bisa menyebarkan undangan hanya dalam hitungan detik melalui pesan atau media sosial. Ini berarti Anda tidak hanya menghemat waktu, 
                                            tetapi juga biaya cetak dan pengiriman.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[30px] my-7">2. Ramah Lingkungan</h3>
                                        <p className="my-3">Dengan undangan digital, Anda berkontribusi dalam mengurangi penggunaan kertas dan tinta yang berdampak pada lingkungan. Pilihan ini sangat cocok untuk Anda yang ingin 
                                            merayakan momen spesial secara lebih berkelanjutan.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[30px] my-7">3. Mudah Disesuaikan dan Dipersonalisasi</h3>
                                        <p className="my-3">Setiap undangan di Laungharmoni bisa disesuaikan dengan tema acara dan gaya pribadi Anda. Anda bisa memilih tema, warna, dan elemen desain yang sesuai dengan kepribadian Anda, 
                                            sehingga undangan terasa lebih spesial.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[30px] my-7">4. Aksesibilitas untuk Semua Tamu</h3>
                                        <p className="my-3">Undangan digital dapat diakses kapan saja dan dari mana saja, selama tamu memiliki akses ke internet. Ini sangat membantu terutama bagi tamu yang tinggal di luar kota atau luar negeri, 
                                            karena undangan dapat langsung diterima dan disimpan di perangkat mereka.
                                        </p>
                                    </div>
                                    

                                </div>
                            </div>
                            <div class="px-[80px] xl:px-[120px] font-lora pb-[60px] grid grid-cols-4">
                                <button className="mr-[10px] xl:mr-[19px] xl:px-[23px] xl:py-[12px] px-[17px] py-[9px] font-thin text-black rounded-full bg-white border border-black ">
                                    Keyword
                                </button>
                                <button className="px-[23px] py-[12px] text-[17px] font-thin text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] ">
                                undangan digital
                                </button>
                                <button className="mx-[19px] px-[23px] py-[12px] text-[17px] font-thin text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] ">
                                  Pernikahan
                                </button>
                            </div>
                        </div>
                        <div className="my-[100px] justify-center">
                            <p className="mb-[60px]">Artikel lain nya</p>
                            <div className="flex flex-row ">
                                <div className="mr-[34px] max-w-[357px] rounded-[25px] overflow-hidden shadow-lg bg-white">
                                <Image
                                        className="w-[357px] h-[297px]"                                                          
                                        src={Artikel.src}
                                        alt="Next.js Logo"
                                        width={200}
                                        height={200}
                                        priority
                                />
                                <div className="px-[25px] py-[29px]">
                                    <button className="mb-[21px] px-[15px] py-[8px] text-[11px] text-white font-regular rounded-full bg-gradient-to-r from-[#303030] to-[#616161] ">
                                        Kamis, 18 Juli 2024
                                    </button>
                                    <Link href="/">
                                        <div className="text-[16px] mb-[21px] leading-[26px] ">Lorem Ipsum Dolor Sit Amet Consectetur Adispiscing Elit Sed do Eiusmod</div>
                                    </Link>
                                    <p className="font-lora text-[12px] font-regular">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    </p>
                                </div>
                                </div>
                                <div className="mr-[34px] max-w-[357px] rounded-[25px] overflow-hidden shadow-lg bg-white">
                                <Image
                                        className="w-[357px]  h-[297px]"                                                          
                                        src={Artikel.src}
                                        alt="Next.js Logo"
                                        width={200}
                                        height={200}
                                        priority
                                />
                                <div class="px-[25px] py-[29px]">
                                    <button className="mb-[21px] px-[15px] py-[8px] text-[11px] text-white font-regular rounded-full bg-gradient-to-r from-[#303030] to-[#616161] ">
                                        Kamis, 18 Juli 2024
                                    </button>
                                    <div className="text-[16px] mb-[21px] leading-[26px]">Lorem Ipsum Dolor Sit Amet Consectetur Adispiscing Elit Sed do Eiusmod</div>
                                    <p className="font-lora text-[12px] font-regular">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    </p>
                                </div>
                                </div>
                                <div className=" max-w-[357px] rounded-[25px] overflow-hidden shadow-lg bg-white">
                                    <Image
                                            className="w-[357px] h-[297px]"                                                          
                                            src={Artikel.src}
                                            alt="Next.js Logo"
                                            width={200}
                                            height={200}
                                            priority
                                    />
                                    <div className="px-[25px] py-[29px]">
                                        <button className="mb-[21px] px-[15px] py-[8px] text-[11px] text-white font-regular rounded-full bg-gradient-to-r from-[#303030] to-[#616161] ">
                                            Kamis, 18 Juli 2024
                                        </button>
                                        <div className="text-[16px] mb-[21px] leading-[26px]">Lorem Ipsum Dolor Sit Amet Consectetur Adispiscing Elit Sed do Eiusmod</div>
                                        <p className="font-lora text-[12px] font-regular">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        </p>
                                    </div>
                                </div>
                                <div>
                                <button className="z-10 -translate-x-8 mt-[15rem] px-[15px] py-[50px] text-[20px] text-white font-bold rounded-full bg-gradient-to-r from-[#303030] to-[#616161] ">
                                <IoIosArrowForward />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
         {/* Header Page End */}

    </>
    );
}