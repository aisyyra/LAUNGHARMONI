"use client";

import Image from "next/image";
import React from "react";
import mockup from "@/assets/laung-harmoni/Mokcup.png"
import Button_WA from "@/components/button-wa"
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import Home from "@/app/page";
import App from "@/components/counter/index"
import VerticalScroll from "@/components/vertikal-scroll/index";
import HorizontalScroll from "@/components/horizontal-scroll/index";
import Accordian, { AccordianItem} from "@/components/FAQS/index";
import Counter from "@/components/mobile-counter/index";
import { motion } from "framer-motion";
import "./style.css";
import { faQ } from "@fortawesome/free-solid-svg-icons";
import { fadeIn } from "@/components/variant"; 

function Homepage(){  
  return (
    <>
    <main className="justify-center justify-items-center content-center object-center mx-auto">
      {/* header page */}
        <main className="2xl:justify-center px-[20px] pt-[100px] pb-[50px] items-center bg-cover w-screen grid grid-rows-2 sm:grid-rows-2 md:flex justify-center bg-[url('/assets/laung-harmoni/Header.png')]">
          {/* image header */}
          <motion.div 
          variants={fadeIn("right", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-2xl ml-5 mt-11 md:w-7/12 items-center flex justify-center">
            <Image className="justify-center sm:w-screen w-[297px] h-[277px]"
              alt=""
              src={mockup}
              sizes="100vw"
              quality={80}
              style={{
                width: '95%',
                height: 'auto',
              }}
            />
          </motion.div> 
          {/* content header */}
          <div className="max-w-2xl md:w-6/12 flex flex-row pt-[20px] sm:pt-0 md:text-left text-center items-center justify-center ">
            <motion.div 
            variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3}}
            className="xl:pt-5 lg:pt-5 md:pt-5">
              <h1 className=' flex items-center text-[29px] md:text-[35px] md:leading-[55px] lg:text-[40px] lg:leading-[65px] xl:text-[55px] leading-[41px] xl:leading-[77px] font-medium text-center md:text-left justify-center md:justify-normal '>
                Buat Undangan Digital Untuk Momen Spesialmu
              </h1>
                <p className="py-[32px] xl:py-[60px] lg:py-[35px] font-lora text-[11px] sm:text-[22px] leading-[19px] lg:text-[17px] lg:leading-[30px] sm:leading-[37px] font-regular">
                  Pilih tema atau pesan desain custom undangan digital Anda.
                  Hemat biaya tanpa perlu cetak, undangan dengan fitur tamu tanpa batas, harga mulai dari 100 ribuan aja!
                </p>
                <button className=" button px-[22px] py-[12px] sm:px-[32px] sm:py-[18px] text-[10px] sm:text-[15px] leading-[21px] font-medium text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                  <p className="text ">Gratis Konsultasi</p>
                </button>
            </motion.div>
          </div>
          <Button_WA />
          {/* mobile version*/}
          <Counter />
        </main>
      {/* header page end */}

      {/* jenis tema */}
      <App />
      {/* jenis tema end */}

      {/* jenis tema */}
      {/* desktop ver */}
      <main className="hidden sm:flex object-center w-full bg-cover bg-no-repeat bg-center bg-[url('/assets/laung-harmoni/Jenis_tema.png')] flex ">
        <div className="w-12/12 flex flex-row object-center text-center mx-auto text-header">
            <div className="text-center object-center items-center pb-[528px] px-[20px]">
              <h1 className="flex items-center font-medium text-[29px] sm:text-[55px] leading-[41px] sm:leading-[77px] justify-center object-center text-center mt-[80px] ">Tema Sesuai Kebutuhan</h1>
                <p className="my-[32px] sm:my-[60px] font-lora font-regular text-[12px] sm:text-[29px] leading-[19px] sm:leading-[37px]">
                Kami menyediakan beberapa pilihan tema, sehingga kamu bisa menyesuaikannya dengan selera, budget, dan kebutuhanmu.
                </p>
                <button className="button_2 mt-[20px] bg-gradient-to-r from-[#303030] to-[#616161] px-[22px] py-[19px] sm:x-[32px] sm:py-[18px] text-[10px] sm:text-[15px] text-white font-thin rounded-[35px] sm:rounded-[50px] hover:bg-abu hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                  <p className="text">Lihat Tema Undangan</p>
                </button>
            </div>
        </div>
      </main>
      {/* mobile ver */}
      <main className="sm:hidden object-center w-full h-[700px] bg-cover bg-no-repeat bg-center bg-[url('/assets/laung-harmoni/bg-jenistema.png')] flex ">
        <div className="w-12/12 flex flex-row object-center text-center mx-auto text-header">
            <div className="text-center object-center items-center pb-[528px] px-[20px]">
              <h1 className="flex items-center font-medium text-[29px] sm:text-[55px] leading-[41px] sm:leading-[77px] justify-center object-center text-center mt-[80px] ">Tema Sesuai Kebutuhan</h1>
                <p className="my-[32px] sm:my-[60px] font-lora font-regular text-[12px] sm:text-[29px] leading-[19px] sm:leading-[37px]">
                Kami menyediakan beberapa pilihan tema, sehingga kamu bisa menyesuaikannya dengan selera, budget, dan kebutuhanmu.
                </p>
                <button className="button_2 mt-[20px] bg-gradient-to-r from-[#303030] to-[#616161] px-[22px] py-[12px] text-[10px] sm:text-[15px] text-white font-thin rounded-[35px] sm:rounded-[50px] hover:bg-abu hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
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
            <motion.h1 
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-11 pt-[100px] pb-[40px] sm:text-[55px] text-[29px] font-medium items-center">
              Pricelist Undangan
            </motion.h1>
          </div>
          <div className="grid pb-[100px] px-[100px] text-center items-center justify-center">
              <div className="grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 2xl:grid-cols-4">
                {/* card 1 */}
                <div className="inline-block px-3 py-3  ">
                  <div className="w-[300px] h-[560px] sm:w-[362px] sm:h-[650px] max-w-xs overflow-hidden rounded-[27px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="flex flex-row px-5 py-7 justify-center">
                    <div className=" justify-center">
                        <h1 className=" flex font-bold text-[16px] sm:text-[19px] justify-center leading-[19px] sm:leading-[23px] font-Mustard">Fitur Basic</h1>
                          <div className=" flex mt-[24px] sm:mt-[29px] text-[11px] sm:text-sm items-center text-center px-3 font-lora ">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Revisi Konten Sebanyak ?? Kali</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Akses tool Invite Guest</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Personalized Invitation</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Tidak Ada Batasan Tamu Undangan</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Petunjuk Lokasi</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Ucapan</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Backsound/Musik Latar</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Countdown Menuju Acara</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                          <AiOutlineClose /> 
                                <p className="ml-3">Galeri </p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                          <AiOutlineClose />
                                <p className="ml-3"> Love Journey</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                          <AiOutlineClose />
                                <p className="ml-3">Konfirmasi Kehadiran</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                          <AiOutlineClose /> 
                                <p className="ml-3">Amplop Digital dan Alamat Kado</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-smitems-center text-center px-3 font-lora">
                              <AiOutlineClose />
                                <p className="ml-3">Personalized Invitation</p>
                          </div>
                          <button className="leading-[19px] sm:leading-[23px] justify-center cursor-pointer border border-warna mt-[24px] sm:mt-[29px] px-10 py-[15px] text-[23px] sm:text-[27px] bg-transparent text-warna font-medium rounded-[41px] sm:rounded-[50px]">
                            Rp.100.000
                          </button>
                    </div>
                    </div>
                  </div>
                </div>
                {/* card 2 */}
                <div className="inline-block px-3 py-3">
                  <div className="w-[300px] h-[560px] sm:w-[362px] sm:h-[650px] max-w-xs overflow-hidden rounded-[27px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="flex flex-row px-5 py-7 justify-center">
                    <div className="justify-center">
                        <h1 className=" flex font-bold text-[16px] sm:text-[19px] justify-center leading-[19px] sm:leading-[23px] font-Mustard text-center items-center">Fitur Premium</h1>
                          <div className=" flex mt-[24px] sm:text-sm sm:mt-[29px] text-[11px] items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Revisi Konten Sebanyak ?? Kali</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Akses tool Invite Guest</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Personalized Invitation</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Tidak Ada Batasan Tamu Undangan</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Informasi Acara</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Countdown Menuju Acara</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Petunjuk Lokasi</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Galeri (Maksimal 5 foto)</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                          <AiOutlineCheck/>
                                <p className="ml-3">Ucapan </p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                          <AiOutlineCheck/>
                                <p className="ml-3"> Backsound/Musik Latar</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                          <AiOutlineClose />
                                <p className="ml-3">Love Journey</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                          <AiOutlineClose /> 
                                <p className="ml-3">Konfirmasi Kehadiran</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineClose />
                                <p className="ml-3">Personalized Invitation</p>
                          </div>
                          <button className="leading-[23px] justify-center cursor-pointer border border-warna mt-[24px] sm:mt-[29px] px-10 py-[15px] text-[23px] sm:text-[27px]  bg-transparent text-warna font-medium rounded-[41px] sm:rounded-[50px]">
                            Rp.200.000
                          </button>
                    </div>
                    </div>
                  </div>
                </div>
                {/* card 3*/}
                <div className="inline-block px-3 py-3">
                  <div className="w-[300px] h-[560px] sm:w-[362px] sm:h-[650px] max-w-xs overflow-hidden rounded-[22px] shadow-md bg-gradient-to-r from-[#E3457B] to-[#EF90A0] hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="flex flex-row px-5 py-7 justify-center">
                    <div className="text-white justify-center">
                        <h1 className=" flex font-bold text-[16px] sm:text-[19px] justify-center leading-[19px] sm:leading-[23px]">Fitur Luxury</h1>
                          <div className=" flex mt-[24px] sm:text-sm sm:mt-[29px] text-[11px] items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Revisi Konten Sebanyak ?? Kali</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Akses tool Invite Guest</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Personalized Invitation</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Tidak Ada Batasan Tamu Undangan</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Petunjuk Lokasi</p>
                          </div> 
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Ucapan</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Backsound/Musik Latar</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Countdown Menuju Acara</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                          <AiOutlineCheck/>  
                                <p className="ml-3">Galeri </p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                          <AiOutlineCheck/> 
                                <p className="ml-3"> Love Journey</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                          <AiOutlineCheck/> 
                                <p className="ml-3">Konfirmasi Kehadiran</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                          <AiOutlineCheck/> 
                                <p className="ml-3">Amplop Digital dan Alamat Kado</p>
                          </div>
                          <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                          <AiOutlineCheck/> 
                                <p className="ml-3">Personalized Invitation</p>
                          </div>
                          <button className="leading-[23px] justify-center cursor-pointer border border-white  mt-[24px] sm:mt-[29px] px-10 py-[15px] text-[23px] sm:text-[27px] bg-transparent text-white font-medium rounded-[41px] sm:rounded-[50px]">
                            Rp.300.000
                          </button>
                    </div>
                    </div>
                  </div>
                </div>
                {/* card 4 */}
                <div className="inline-block pl-3 py-3">
                  <div className="sm:w-[362px] sm:h-[650px] h-[313px] w-[300px] max-w-xs overflow-hidden rounded-[22px] shadow-md bg-gradient-to-r from-[#303030] to-[#616161] hover:shadow-xl transition-shadow duration-300 ease-in-out  ">
                    <div className="flex flex-row px-5 py-7 justify-center">
                      <div className=" text-white justify-center">
                          <h1 className=" flex font-bold text-[16px] sm:text-[19px] justify-center leading-[19px] sm:leading-[23px]">Desain Costum</h1>
                            <div className=" flex mt-[24px] sm:text-sm sm:mt-[29px] text-[11px] items-center text-center px-3 font-lora">
                                <AiOutlineCheck/> 
                                  <p className="ml-3">Revisi Konten Sebanyak ?? Kali</p>
                            </div>
                            <div className="font-regular flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                                <AiOutlineCheck/> 
                                  <p className="ml-3">Konsep Desain sesuai Permintaan</p>
                            </div>
                            <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                                <AiOutlineCheck/> 
                                  <p className="ml-3">Akses seluruh fitur Luxury</p>
                            </div>
                            <div className=" flex mt-[15px] text-[11px] sm:text-sm items-center text-center px-3 font-lora">
                                <AiOutlineCheck/> 
                                  <p className="ml-3">Bisa request fitur baru</p>
                            </div>
                            <p className="sm:mt-[225pt] mt-3 sm:mb-[18px] mb-3 text-[17px] sm:text-[20px] font-medium justify-center">Mulai Dari</p>
                            <button className="justify-center cursor-pointer border border-white px-10 py-[15px] text-[23px] sm:text-[27px] leading-[23px] bg-transparent text-whte font-medium rounded-[41px] sm:rounded-full">
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
      <main className="hidden md:flex object-center content-center grid grid-rows-2 w-screen h-[1500px] bg-cover bg-no-repeat bg-center bg-[url('/assets/laung-harmoni/FAQs.png')]">
        {/* left konten */}
        <div className="md:ml-10 xl:ml-0 sm:w-6/12 xl:w-7/12 2xl:w-6/12 xl:ml-[100px] flex flex-row items-center justify-center 2xl:justify-center">
          <div className="max-w-2xl">
            <motion.h1 
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex items-center font-medium text-[55px] sm:mt-[146px] mt-[146px] text-white leading-[77px]">
              Pertanyaan Yang Sering Ditanyakan
            </motion.h1>
            <motion.p 
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="font-lora mt-5 pb-[60px] text-white text-[22px] leading-[37px]">
              Berikut merupakan jawaban dari pertanyaan-pertanyaan yang sering orang tanyakan kepada kami:    
            </motion.p>
            {/* card */}
            <div className="">
              <Accordian className="max-w-lg">
                <AccordianItem value="1" trigger="Berapa lama proses pembuatan undangan?">
                  Lorem pimusijdhwebnmcmnaeifqehbacbbjc cantik
                </AccordianItem>
                <AccordianItem value="2" trigger="Apa yang dimaksud dengan Masa Aktif Undangan?">
                Yakni jangka waktu di mana kamu dan orang-orang dapat mengakses link undangan. Adapun ‘Masa Aktif Selamanya’ tidak mengandung makna selama-lamanya, namun lebih kepada masa aktif selama server Laungharmoni tetap berjalan.
                </AccordianItem>
                <AccordianItem value="3" trigger="Apakah customer bisa meminta fitur tambahan?">
                  Lorem pimusijdhwebnmcmnaeifqehbacbbjc cantik
                </AccordianItem>
                <AccordianItem value="4" trigger="Apakah customer boleh mengganti desain undangan?">
                  Lorem pimusijdhwebnmcmnaeifqehbacbbjc cantik
                </AccordianItem>
                <AccordianItem value="5" trigger="Bagaimana dengan proses pembayarannya?">
                  Lorem pimusijdhwebnmcmnaeifqehbacbbjc cantik
                </AccordianItem>
              </Accordian>
            </div>
            <button className="button_2 sm:mt-[60px] mt-[32px] mb-[146px] px-[22px] py-[12px] sm:px-[32px] sm:py-[18px] text-[10px] sm:text-[15px] text-white font-regular rounded-full bg-gradient-to-r from-[#303030] to-[#616161] hover:border-transparent">
              <p className="text">Lihat Panduan Pengguna</p>
            </button>
          </div>
        </div>
        {/* right konten */}
        <div className="hidden sm:w-6/12 2xl:w-3/12 flex flex-row items-center ">
        </div>
      </main>
      {/* faqs end */}
      {/* mobile ver */}
      <main className="md:hidden object-center content-center grid grid-rows md:flex w-screen h-[1410px] sm:h-[1500px] bg-cover bg-no-repeat bg-center bg-[url('/assets/laung-harmoni/Mobile_FAQs.png')]">
        {/* left konten */}
        <div className="md:w-6/12 xl:w-7/12 2xl:w-6/12 xl:ml-[100px] flex flex-row items-center justify-center 2xl:justify-center">
          <div className="max-w-2xl items-center flex flex-col">
            {/* card */}
            <div className="mt-[40rem]">
              <Accordian className="max-w-lg">
                <AccordianItem value="1" trigger="Berapa lama proses pembuatan undangan?">
                  Yakni jangka waktu di mana kamu dan orang-orang dapat mengakses link undangan. 
                  Adapun ‘Masa Aktif Selamanya’ tidak mengandung makna selama-lamanya, namun lebih 
                  kepada masa aktif selama server Laungharmoni tetap berjalan.
                </AccordianItem>
                <AccordianItem value="2" trigger="Apa yang dimaksud dengan Masa Aktif Undangan?">
                  Yakni jangka waktu di mana kamu dan orang-orang dapat mengakses link undangan. 
                  Adapun ‘Masa Aktif Selamanya’ tidak mengandung makna selama-lamanya, namun lebih 
                  kepada masa aktif selama server Laungharmoni tetap berjalan.
                </AccordianItem>
                <AccordianItem value="3" trigger="Apakah customer bisa meminta fitur tambahan?">
                  Lorem pimusijdhwebnmcmnaeifqehbacbbjc cantik
                </AccordianItem>
                <AccordianItem value="4" trigger="Apakah customer boleh mengganti desain undangan?">
                  Lorem pimusijdhwebnmcmnaeifqehbacbbjc cantik
                </AccordianItem>
                <AccordianItem value="5" trigger="Bagaimana dengan proses pembayarannya?">
                  Lorem pimusijdhwebnmcmnaeifqehbacbbjc cantik
                </AccordianItem>
              </Accordian>
            </div>
            <button className="mx-10 text-center button_2 mt-[40px] px-[22px] py-[12px] text-[10px] text-white font-regular rounded-[35px] bg-gradient-to-r from-[#303030] to-[#616161] hover:border-transparent">
              <p className="text">Lihat Panduan Pengguna</p>
            </button>
          </div>
        </div>
      </main>

      {/* action */}
      <div className="object-center flex flex-col m-auto p-auto bg-bg">
        <div className="flex flex-col m-auto p-auto mx-[20px] items-center font-medium text-center py-[100px] sm:py-[80px] ">
          <motion.h1 
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          class="text-white flex justify-center font-medium text-[29px] sm:text-[55px] sm:leading-[77px] leading-[42px] items-center ">
            Tunggu Apa lagi?<br></br>
            Ayo Pesan Sekarang Juga!
          </motion.h1>
          <button className="text-center mt-[32px] sm:mt-[60px] button_2 px-[22px] py-[12px] sm:px-[32px] sm:py-[18px] text-white font-regular rounded-[35px] sm:rounded-[50px] bg-gradient-to-r from-[#303030] to-[#616161]">
              <p className="text-[10px] sm:text-[15px] text">Pesan Melalui WhatsApp</p>
         </button>
        </div>
      </div>
      {/* action end */}

    </main>
   </>
  )
}

export default Homepage;

