"use client";

import Image from "next/image";
import React from "react";
import mockup from "@/assets/laung-harmoni/Mokcup.png"
import pp from "@/assets/laung-harmoni/pp.png"
import Header from "@/components/header";
import Footer from "@/components/footer";
import Button_WA from "@/components/button-wa"
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { IoChevronDownSharp } from "react-icons/io5";
import Home from "@/app/page";
import App from "@/components/counter/index"
import VerticalScroll from "@/components/vertikal-scroll/index";
import HorizontalScroll from "@/components/horizontal-scroll/index";
import Accordian, { AccordianItem} from "@/components/FAQS/index";
import { motion } from "framer-motion";
import "./style.css";
import { faQ } from "@fortawesome/free-solid-svg-icons";

function Homepage(){  
  return (
    <>
    <main className="justify-center justify-items-center content-center object-center mx-auto">
      <Header />
      {/* header page */}
        <main className="max-h-screen 2xl:justify-center pt-[100px] pb-[50px] items-center bg-cover h-screen w-screen flex bg-[url('/assets/laung-harmoni/Header.png')]">
          {/* image header */}
          <div className="max-w-2xl ml-5 mt-11 w-7/12 flex justify-center">
            <Image className="justify-center"
              alt=""
              src={mockup}
              sizes="100vw"
              quality={80}
              style={{
                width: '95%',
                height: 'auto',
              }}
            />
          </div> 
          {/* content header */}
          <div className="max-w-2xl w-6/12 flex flex-row justify-center ">
            <div className="">
              <h1 className='flex items-center text-[55px] leading-[77px] font-medium'>Buat Undangan <br></br> Digital Untuk <br></br> Momen Spesialmu</h1>
                <p className="py-[60px] font-lora text-[22px] leading-[37px] font-regular">
                  Pilih tema atau pesan desain custom undangan digital Anda. <br></br>
                  Hemat biaya tanpa perlu cetak, undangan dengan fitur tamu <br></br>tanpa batas, harga mulai dari 100 ribuan aja!
                </p>
                <button className=" button px-[32px] py-[18px] text-[15px] leading-[21px] font-medium text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                  <p className="text ">Gratis Konsultasi</p>
                </button>
            </div>
          </div>
          {/* buttton wa */}
          <Button_WA />
        </main>
      {/* header page end */}

      {/* jenis tema */}
      <App />
      {/* jenis tema end */}

      {/* jenis tema */}
      <main className="object-center h-screen w-full bg-cover bg-[url('/assets/laung-harmoni/Jenis_tema.png')] flex">
        <div className="w-12/12 flex flex-row object-center text-center mx-auto text-header">
            <div className="text-center object-center items-center">
              <h1 className="flex items-center font-medium text-[55px] leading-[77px] justify-center object-center text-center mt-[80px] ">Tema Sesuai Kebutuhan</h1>
                <p className="my-[60px] font-lora font-regular text-[22px] leading-[37px]">
                Kami menyediakan beberapa pilihan tema, sehingga kamu bisa menyesuaikannya dengan selera, budget, dan kebutuhanmu.
                </p>
                <button className="button_2 my-[20px] bg-gradient-to-r from-[#303030] to-[#616161] px-[32px] py-[18px] text-[15px] text-white font-thin rounded-[50px] hover:bg-abu hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                  <p className="text">Lihat Tema Undangan</p>
                </button>
            </div>
        </div>
      </main>
      {/* jenis tema end */}

      {/* fitur */}
      <VerticalScroll />
      {/* fitur end */}

      {/* testimoni */}
      <HorizontalScroll />
      {/* testimoni end */}

      {/* Pricrelist */}
      <main className="object-center justify-center w-screen">
        <div className="flex flex-col m-auto p-auto bg-pricelist justify-center">
          <div className="flex flex-col items-center text-center justify-center ">
            <h1 className="flex lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-11 pt-[146px] pb-[60px] text-[55px] font-medium items-center">
              Pricelist Undangan
            </h1>
          </div>
          <div className="flex pb-[146px] px-[194px] text-center items-center justify-center">
              <div className="flex flex-nowrap  ">
                {/* card 1 */}
                <div className="inline-block px-3  ">
                  <div className="w-[362px] h-[650px] max-w-xs overflow-hidden rounded-[27px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="flex flex-row px-5 py-7 justify-center">
                    <div className=" justify-center">
                        <h1 className=" flex font-bold text-[19px] justify-center leading-[23px] font-Mustard">Fitur Basic</h1>
                          <div className=" flex mt-[29px] text-sm items-center text-center px-3 font-lora ">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Revisi Konten Sebanyak ?? Kali</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Akses tool Invite Guest</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Personalized Invitation</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Tidak Ada Batasan Tamu Undangan</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Petunjuk Lokasi</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Ucapan</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Backsound/Musik Latar</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Countdown Menuju Acara</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                          <AiOutlineClose /> 
                                <p className="ml-3">Galeri </p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                          <AiOutlineClose />
                                <p className="ml-3"> Love Journey</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                          <AiOutlineClose />
                                <p className="ml-3">Konfirmasi Kehadiran</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                          <AiOutlineClose /> 
                                <p className="ml-3">Amplop Digital dan Alamat Kado</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineClose />
                                <p className="ml-3">Personalized Invitation</p>
                          </div>
                          <button className="leading-[23px] justify-center cursor-pointer mt-[29px] border border-warna px-10 py-[20px] text-[27px] bg-transparent text-warna font-medium rounded-[50px]">
                            Rp.100.000
                          </button>
                    </div>
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className="inline-block px-3">
                  <div className="w-[362px] h-[650px] max-w-xs overflow-hidden rounded-[27px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="flex flex-row px-5 py-7">
                    <div className="">
                        <h1 className=" flex font-bold text-[19px] justify-center leading-[23px]">Fitur Premium</h1>
                          <div className=" flex mt-[29px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Revisi Konten Sebanyak ?? Kali</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Akses tool Invite Guest</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Personalized Invitation</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Tidak Ada Batasan Tamu Undangan</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Informasi Acara</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Countdown Menuju Acara</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Petunjuk Lokasi</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Galeri (Maksimal 5 foto)</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                          <AiOutlineCheck/>
                                <p className="ml-3">Ucapan </p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                          <AiOutlineCheck/>
                                <p className="ml-3"> Backsound/Musik Latar</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                          <AiOutlineClose />
                                <p className="ml-3">Love Journey</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                          <AiOutlineClose /> 
                                <p className="ml-3">Konfirmasi Kehadiran</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineClose />
                                <p className="ml-3">Personalized Invitation</p>
                          </div>
                          <button className="leading-[23px] justify-center cursor-pointer mt-[29px] border border-warna px-10 py-[20px] text-[27px] text-[27px] bg-transparent text-warna font-medium rounded-[50px]">
                            Rp.200.000
                          </button>
                    </div>
                    </div>
                  </div>
                </div>
                {/* card 3*/}
                <div className="inline-block px-3 ">
                  <div className="w-[362px] h-[650px] max-w-xs overflow-hidden rounded-[22px] shadow-md bg-gradient-to-r from-[#E3457B] to-[#EF90A0] hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="flex flex-row px-5 py-7">
                    <div className="text-white">
                        <h1 className=" flex font-bold text-[19px] justify-center leading-[23px]">Fitur Luxury</h1>
                          <div className=" flex mt-[29px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Revisi Konten Sebanyak ?? Kali</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Akses tool Invite Guest</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Personalized Invitation</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Tidak Ada Batasan Tamu Undangan</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Petunjuk Lokasi</p>
                          </div> 
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Ucapan</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Backsound/Musik Latar</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Countdown Menuju Acara</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                          <AiOutlineCheck/>  
                                <p className="ml-3">Galeri </p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                          <AiOutlineCheck/> 
                                <p className="ml-3"> Love Journey</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                          <AiOutlineCheck/> 
                                <p className="ml-3">Konfirmasi Kehadiran</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                          <AiOutlineCheck/> 
                                <p className="ml-3">Amplop Digital dan Alamat Kado</p>
                          </div>
                          <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                          <AiOutlineCheck/> 
                                <p className="ml-3">Personalized Invitation</p>
                          </div>
                          <button className="leading-[23px] justify-center cursor-pointer mt-[29px] border border-white px-10 py-[20px] text-[27px] bg-transparent text-white font-medium rounded-[50px]">
                            Rp.300.000
                          </button>
                    </div>
                    </div>
                  </div>
                </div>
                {/* card 4 */}
                <div className="inline-block pl-3">
                  <div className=" w-[362px] h-[650px] max-w-xs overflow-hidden rounded-[22px] shadow-md bg-gradient-to-r from-[#303030] to-[#616161] hover:shadow-xl transition-shadow duration-300 ease-in-out  ">
                    <div className="flex flex-row px-5 py-7">
                      <div className=" text-white">
                          <h1 className=" flex font-bold text-[19px] leading-[28px] justify-center">Desain Costum</h1>
                            <div className=" flex mt-[20px] text-sm items-center text-center px-3 font-lora">
                                <AiOutlineCheck/> 
                                  <p className="ml-3">Revisi Konten Sebanyak ?? Kali</p>
                            </div>
                            <div className="font-regular flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                                <AiOutlineCheck/> 
                                  <p className="ml-3">Konsep Desain sesuai Permintaan</p>
                            </div>
                            <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                                <AiOutlineCheck/> 
                                  <p className="ml-3">Akses seluruh fitur Luxury</p>
                            </div>
                            <div className=" flex mt-[15px] text-sm items-center text-center px-3 font-lora">
                                <AiOutlineCheck/> 
                                  <p className="ml-3">Bisa request fitur baru</p>
                            </div>
                            <p className="mt-[225pt] mb-[18px] text-[20px] font-medium Justify-center">Mulai Dari</p>
                            <button className="justify-center cursor-pointer border border-white px-10 py-[20px] text-[27px] leading-[23px] bg-transparent text-whte font-medium rounded-full">
                              Rp.600.000
                            </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </main>
      {/* Pricelist end */}

      {/* faqs */}
      <main className="object-center content-center flex w-full bg-[url('/assets/laung-harmoni/FAQs.png')] bg-cover">
        <div className="w-6/12 xl:w-7/12 2xl:w-6/12 xl:ml-[100px] flex flex-row items-center justify-center 2xl:justify-center">
          <div className="max-w-2xl py-[146px]">
            <h1 className="flex items-center font-medium text-[55px] text-white leading-[77px]">Pertanyaan Yang Sering Ditanyakan</h1>
            <p className="font-lora mt-5 pb-[60px] text-white text-[22px] leading-[37px]">
                    Berikut merupakan jawaban dari pertanyaan-pertanyaan yang sering orang tanyakan kepada kami:    
            </p>
            {/* card */}
            <div className="">
              <Accordian className="max-w-lg">
                <AccordianItem value="1" trigger="Accordian Item 1">
                  Lorem pimusijdhwebnmcmnaeifqehbacbbjc cantik
                </AccordianItem>
                <AccordianItem value="2" trigger="Accordian Item 2">
                  Lorem pimusijdhwebnmcmnaeifqehbacbbjc cantik
                </AccordianItem>
                <AccordianItem value="3" trigger="Accordian Item 3">
                  Lorem pimusijdhwebnmcmnaeifqehbacbbjc cantik
                </AccordianItem>
                <AccordianItem value="4" trigger="Accordian Item 4">
                  Lorem pimusijdhwebnmcmnaeifqehbacbbjc cantik
                </AccordianItem>
              </Accordian>
            </div>
            <button className="button_2 mt-[60px] px-[32px] py-[18px] text-[15px] text-white font-regular rounded-full bg-gradient-to-r from-[#303030] to-[#616161] hover:border-transparent">
              <p className="text">Lihat Panduan Pengguna</p>
            </button>
          </div>
        </div>
        <div className="w-6/12 2xl:w-3/12 flex flex-row items-center ">
        </div>
      </main>
      {/* faqs end */}

      {/* action */}
      <div className="object-center flex flex-col m-auto p-auto bg-bg">
        <div className="flex flex-col m-auto p-auto items-center font-medium text-center py-[80px] ">
          <h1 class="text-white flex justify-center font-medium text-[55px] leading-[77px] items-center ">
            Tunggu Apa lagi?<br></br>
            Ayo Pesan Sekarang Juga!
          </h1>
          <button className="text-center mt-[60px] button_2 px-[32px] py-[18px] text-[15px] text-white font-regular rounded-full bg-gradient-to-r from-[#303030] to-[#616161]">
              <p className="text-[15px] text">Pesan Melalui WhatsApp</p>
         </button>
        </div>
      </div>
      {/* action end */}

      {/* footer */}
      <Footer />
      {/* footer end */}

    </main>
   </>
  )
}

export default Homepage;

