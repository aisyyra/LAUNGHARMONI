'use client'
import Image from 'next/image'
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { Suspense, useMemo, useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Playfair_Display, Playfair_Display_SC, Kapakana, Arapey, CourierPrime, PlusJakartaSans, Playwrite_CZ, Mustard } from '@/utils/fonts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Camera, BadgeCheck } from 'lucide-react';
import { faClock, faCopy, faLocationDot, faFaceGrinWide, faFaceSmile, faFaceFrownOpen, faFaceMeh, faFaceFrown, faFaceLaugh, faFaceMehBlank } from '@fortawesome/free-solid-svg-icons';
import { helper } from '@/utils/helper';
import http from "../../../services/api/http";
import GaleriMobile from "@/components/galeri-mobile/index";
import "./style.css";


import { io } from 'socket.io-client';
import pageStyle from "./index.module.css";

// #region images
  import ImgLH_Icon from "@/assets/laung-harmoni/Icon.svg";
  import ImgLH_IconWhite from "@/assets/Golden-black/mobile/m_Logo.png";
  import ImgLH from "@/assets/laung-harmoni/IconName.svg";
  import ImgLH_White from "@/assets/laung-harmoni/IconNameWhite.svg";

  import FrontLogo from "@/assets/rully-sabil/FrontLogo.svg";
  import IcoCopyButton from "@/assets/rully-sabil/CopyButton.svg";

  import Front1 from "@/assets/rully-sabil/Front1.webp";
  import Front2 from "@/assets/rully-sabil/Front2.webp";
  import Front3 from "@/assets/rully-sabil/Front3.webp";

  import BG from "@/assets/rully-sabil/BG.webp";
  import ImgS1_Slider1 from "@/assets/rully-sabil/Foto_1C.png";
  import ImgS1_Slider2 from "@/assets/rully-sabil/Foto_2C.png";
  import ImgS1_Slider3 from "@/assets/rully-sabil/Foto_3C.png";
  import ImgS2 from "@/assets/rully-sabil/S2.png";
  import ImgS3 from "@/assets/rully-sabil/S3.png";
  import ImgS6 from "@/assets/rully-sabil/S6_Mask.png";
  import ImgS7 from "@/assets/rully-sabil/S7.png";
  import ImgS8 from "@/assets/rully-sabil/S8.png";
  import ImgS9 from "@/assets/rully-sabil/S9.png";

  import ImgCard1 from "@/assets/rully-sabil/Card1.png";
  import ImgCard2 from "@/assets/rully-sabil/Card2.png";

  import imgDecor1 from "@/assets/rully-sabil/S1_Dec.png";
  import imgDecor2 from "@/assets/rully-sabil/S1_Dec2.png";
  import imgDecor3 from "@/assets/Golden-black/mobile/m_Front1.png";

  import imgSolid1 from "@/assets/choral-charm/mobile/m_BG_Akad.png";
  import imgSolid2 from "@/assets/Golden-black/mobile/m_Bg_Galeri.png";
// #endregion

// #region mobile images
  import m_Front1 from "@/assets/rully-sabil/mobile/Front1.png";
  import m_Front2 from "@/assets/Golden-black/mobile/m_BG.png";
  import m_Front3 from "@/assets/rully-sabil/mobile/Front3.png";
  
  import m_Name from "@/assets/choral-charm/mobile/m_Name.png";
  
  import m_ImgS1_Slider1A from "@/assets/rully-sabil/mobile/S1_Slider_1A.png";
  import m_ImgS1_Slider2A from "@/assets/rully-sabil/mobile/S1_Slider_2A.png";
  import m_ImgS1_Slider3A from "@/assets/rully-sabil/mobile/S1_Slider_3A.png";
  import m_ImgS1_Slider4A from "@/assets/rully-sabil/mobile/S1_Slider_4A.png";

  import m_ImgS1_Slider1B from "@/assets/rully-sabil/mobile/S1_Slider_1B.png";
  import m_ImgS1_Slider2B from "@/assets/rully-sabil/mobile/S1_Slider_2B.png";
  import m_ImgS1_Slider3B from "@/assets/rully-sabil/mobile/S1_Slider_3B.png";
  import m_ImgS1_Slider4B from "@/assets/rully-sabil/mobile/S1_Slider_4B.png";

  import m_ImgS2 from "@/assets/rully-sabil/mobile/S2.png";
  import m_ImgS2_1 from "@/assets/Golden-black/mobile/m_Mempelai2.png";
  import m_ImgS2_2 from "@/assets/Golden-black/mobile/m_Mempelai1.png";
  import m_ImgS5 from "@/assets/choral-charm/mobile/m_Notes.png";
  import m_ImgS6 from "@/assets/rully-sabil/mobile/S6_Mask.png";
  import m_ImgS7 from "@/assets/rully-sabil/mobile/S7.png";
  import m_ImgS8 from "@/assets/rully-sabil/mobile/S8.png";
  import m_imgDecor1 from "@/assets/rully-sabil/mobile/S1_Dec.png";

  import m_IcoBeranda from "@/assets/choral-charm/icon/m_Beranda.svg";
  import m_IcoBeranda_Box from "@/assets/choral-charm/icon/m_Ucapan2.svg";
  import m_IcoGaleri from "@/assets/choral-charm/icon/m_Galeri.svg";
  import m_IcoGaleri_Box from "@/assets/choral-charm/icon/m_Waktu2.svg";
  import m_IcoHadiah from "@/assets/choral-charm/icon/m_Hadiah.svg";
  import m_IcoHadiah_Box from "@/assets/choral-charm/icon/m_Hadiah2.svg";
  import m_IcoLokasi from "@/assets/choral-charm/icon/m_Lokasi.svg";
  import m_IcoLokasi_Box from "@/assets/choral-charm/icon/m_Lokasi2.svg";
  import m_IcoMempelai from "@/assets/choral-charm/icon/m_Mempelai.svg";
  import m_IcoMempelai_Box from "@/assets/choral-charm/icon/m_Hadiah2.svg";
  import m_IcoUcapan from "@/assets/choral-charm/icon/m_Ucapan.svg";
  import m_IcoUcapan_Box from "@/assets/choral-charm/icon/m_Beranda2.svg";
  import m_IcoWaktu from "@/assets/choral-charm/icon/m_Waktu.svg";
  import m_IcoWaktu_Box from "@/assets/choral-charm/icon/m_Galeri2.svg";

  import m_IcoArrow from "@/assets/rully-sabil/icon/ArrowR.svg";

  import m_Gal1 from "@/assets/rully-sabil/mobile/galeri/G1.png";
  import m_Gal2 from "@/assets/rully-sabil/mobile/galeri/G2.png";
  import m_Gal3 from "@/assets/rully-sabil/mobile/galeri/G3.png";
  import m_Gal4 from "@/assets/rully-sabil/mobile/galeri/G4.png";
  import m_Gal5 from "@/assets/rully-sabil/mobile/galeri/G5.png";
  import m_Gal6 from "@/assets/rully-sabil/mobile/galeri/G6.png";
  import m_Gal7 from "@/assets/rully-sabil/mobile/galeri/G7.png";
  import m_Gal8 from "@/assets/rully-sabil/mobile/galeri/G8.png";
  import m_Gal9 from "@/assets/rully-sabil/mobile/galeri/G9.png";
  import m_Gal10 from "@/assets/rully-sabil/mobile/galeri/G10.png";
  import m_Gal11 from "@/assets/rully-sabil/mobile/galeri/G11.png";
  import m_Gal12 from "@/assets/rully-sabil/mobile/galeri/G12.png";
  import m_Gal13 from "@/assets/rully-sabil/mobile/galeri/G13.png";
  import m_Gal14 from "@/assets/rully-sabil/mobile/galeri/G14.png";
  import m_Gal15 from "@/assets/rully-sabil/mobile/galeri/G15.png";
  import m_Gal16 from "@/assets/rully-sabil/mobile/galeri/G16.png";

  import Dekor from "@/assets/Golden-black/mobile/m_Dekor.png";
  import Dekor2 from "@/assets/Golden-black/mobile/m_Dekor2.png";
  import Dekor3 from "@/assets/Golden-black/mobile/m_Dekor3.png";
  import bg_awal from "@/assets/Golden-black/mobile/m_Bg_Awal.png";

// #endregion

// Galeri
import m_Pic1 from "@/assets/Golden-black/mobile/m_Pic1.png";
import m_Pic2 from "@/assets/Golden-black/mobile/m_Pic2.png";
import m_Pic3 from "@/assets/Golden-black/mobile/m_Pic3.png";
import m_Pic4 from "@/assets/Golden-black/mobile/m_Pic4.png";
import m_Pic5 from "@/assets/Golden-black/mobile/m_Pic5.png";
import m_Pic6 from "@/assets/Golden-black/mobile/m_Pic6.png";
import m_Pic7 from "@/assets/Golden-black/mobile/m_Pic7.png";

// #region components
  import Countdown from "@/components/template_countdown/index3";
  // import Countdown from "../../../components/template_countdown/index";
  import ScrollContainer from "../../../components/scroll-container/index";
  import MobileMenu from "../../../components/mobile-menu/index";
  import MobileImgSlider from "../../../components/galeri-mobile/index";
  import GaleriScroll from "../../../components/galeri-scroll/index";
  import MobileImgSliderFull from "../../../components/mobile-img-slider-full-screen/index";
  import MobileImgGallery from "../../../components/mobile-img-galeri/index";
  import Accordion from "../../../components/accordion/index";
  import Accordion2 from "../../../components/accordion/index2";
// #endregion


function show(){
  {/* Alamat */}
  <motion.div 
    className='flex justify-center items-center w-full mt-[20px]'
    variants={{
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: {
      delay: 0.8
    }}
  }}
>
    <div className='text-center w-full'>

      <div className={Playfair_Display_SC.className + ' flex justify-center items-center w-full text-[14px]'}>
        Alamat Paket
      </div>
      
      <div className={PlusJakartaSans.className + ' justify-center items-center w-full text-[9px] mt-5 leading-[18px]'}>
        <p>Rully Abdul Haq &nbsp; - &nbsp; 08567777766</p>
        <p>Jl.Raya Sukabumi Gg.Al-Falah 03/01 No.20 Desa Sukamaju<br /> Kec.Cianjur, Kabupaten Cianjur, Jawa Barat</p>
      </div>

      <motion.button 
        type='button'
        className='bg-bottom bg-contain bg-no-repeat mt-[17px] w-full h-[27px]'
        onClick={(e) => {
          copyToClipboard("Rully Abdul Haq\n08567777766\nJl.Raya Sukabumi Gg.Al-Falah 03/01 No.20 Desa Sukamaju, Kec.Cianjur, Kab.Cianjur");
        }}
        style={{ backgroundImage: `url(${IcoCopyButton.src})` }}
        whileTap={{ scale: 0.8 }}
      ></motion.button>

    </div>
</motion.div>
}

function TamuName() {
  const searchParams = useSearchParams();
  const to = searchParams.get('to');
 
  return <p className={Playfair_Display_SC.className + ' text-[24px] capitalize'}>{to || ""}</p>
}

const Rully_Sabil_Inv = () => {

  // const searchParams = useSearchParams();
  // const to = searchParams.get('to');
  // const socket = io.connect("http://localhost:3339");

  const [activeLink, setActiveLink] = useState(null);
  const [invActive, setInvActive] = useState(false);
  const [refresh, setrefresh] = useState(false);

  const mobileMenuStructure = [
    {
      id: "beranda",
      icon: m_IcoBeranda_Box,
      iconSelected: m_IcoBeranda,
    },
    {
      id: "mempelai",
      icon: m_IcoMempelai_Box,
      iconSelected: m_IcoMempelai,
    },
    {
      id: "waktu",
      icon: m_IcoWaktu_Box,
      iconSelected: m_IcoWaktu,
    },
    {
      id: "lokasi",
      icon: m_IcoLokasi_Box,
      iconSelected: m_IcoLokasi,
    },
    {
      id: "galeri",
      icon: m_IcoGaleri_Box,
      iconSelected: m_IcoGaleri,
    },
    {
      id: "hadiah",
      icon: m_IcoHadiah_Box,
      iconSelected: m_IcoHadiah,
    },
    {
      id: "ucapan",
      icon: m_IcoUcapan_Box,
      iconSelected: m_IcoUcapan,
    },
  ]

  const front_SliderStructure = [
    Front1.src,
    Front2.src,
    Front3.src,
  ]

  const front_mobileSliderStructure = [
    // m_Front1.src,
    m_Front2.src,
    // m_Front3.src,
  ]

  const up_SliderStructure = [
    ImgS1_Slider1.src,
    ImgS1_Slider2.src,
    ImgS1_Slider3.src,
  ]

  const up_mobileSliderStructure = [
    m_ImgS1_Slider1A.src,
    m_ImgS1_Slider2A.src,
    m_ImgS1_Slider3A.src,
    m_ImgS1_Slider4A.src,
  ]

  const down_mobileSliderStructure = [
    m_ImgS1_Slider4B.src,
    m_ImgS1_Slider3B.src,
    m_ImgS1_Slider2B.src,
    m_ImgS1_Slider1B.src,
  ]

  const galeri_mobileSliderStructure = [
    m_Gal1.src,
    m_Gal16.src,
    // m_Gal15.src,
    m_Gal14.src,
    m_Gal13.src,
    m_Gal12.src,
    // m_Gal11.src,
    m_Gal10.src,
    m_Gal9.src,
    m_Gal8.src,
    m_Gal7.src,
    m_Gal6.src,
    // m_Gal5.src,
    m_Gal4.src,
    m_Gal3.src,
    m_Gal2.src,
  ]

  const [expanded, setExpanded] = useState(null);
  const isOpen = 0 === expanded;

  const [expanded2, setExpanded2] = useState(null);
  const isOpen2 = 0 === expanded2;

  
  const accordionStructure = useMemo(
    () => [
      {
        name: "Tab_1",
        header: () => (

          <div className='flex justify-center items-center col-span-12 mt-3'>
              <motion.a 
                type='button'
                target="_blank"
                className={"flex flex-cols text-white font-inter bg-[#A2999E] hover:cursor-pointer rounded-[43px] px-[25px] py-[9px] text-center tracking-wide mt-[30px]"}
                whileTap={{ scale: 0.95 }}
                onClick={() => setExpanded(isOpen ? false : 0)}
              >
                <svg className='mr-2' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_603_305)">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.45479 2.8623C3.8336 2.8623 3.23785 3.10907 2.7986 3.54832C2.35935 3.98757 2.11258 4.58332 2.11258 5.20452V16.1348C2.11258 16.756 2.35935 17.3518 2.7986 17.791C3.23785 18.2303 3.8336 18.4771 4.45479 18.4771H16.1659C16.58 18.4771 16.9771 18.3125 17.27 18.0197C17.5628 17.7269 17.7273 17.3297 17.7273 16.9156V14.3642C17.8445 14.2965 17.9534 14.2134 18.0507 14.116C18.3436 13.8232 18.5081 13.426 18.5081 13.0119V11.4504C18.5081 11.0363 18.3436 10.6391 18.0507 10.3463C17.9534 10.2489 17.8445 10.1658 17.7273 10.0981V7.54673C17.7273 7.1326 17.5628 6.73543 17.27 6.4426C16.9771 6.14977 16.58 5.98525 16.1659 5.98525V4.42378C16.1659 4.00965 16.0013 3.61248 15.7085 3.31965C15.4157 3.02682 15.0185 2.8623 14.6044 2.8623H4.45479ZM16.1659 14.5734V16.9156H4.45479C4.24773 16.9156 4.04914 16.8333 3.90273 16.6869C3.75631 16.5405 3.67405 16.3419 3.67405 16.1348V7.41278C3.92249 7.50062 4.18626 7.54673 4.45479 7.54673H16.1659V9.88894H14.6044C13.9832 9.88894 13.3874 10.1357 12.9482 10.575C12.5089 11.0142 12.2622 11.61 12.2622 12.2312C12.2622 12.8523 12.5089 13.4481 12.9482 13.8873C13.3874 14.3266 13.9832 14.5734 14.6044 14.5734H16.1659ZM3.67405 5.20452C3.67405 5.41158 3.75631 5.61016 3.90273 5.75658C4.04914 5.903 4.24773 5.98525 4.45479 5.98525H14.6044V4.42378H4.45479C4.24773 4.42378 4.04914 4.50604 3.90273 4.65245C3.75631 4.79887 3.67405 4.99745 3.67405 5.20452ZM16.9466 13.0119V11.4504H14.6044C14.3973 11.4504 14.1987 11.5327 14.0523 11.6791C13.9059 11.8255 13.8236 12.0241 13.8236 12.2312C13.8236 12.4382 13.9059 12.6368 14.0523 12.7832C14.1987 12.9296 14.3973 13.0119 14.6044 13.0119H16.9466Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_603_305">
                  <rect width="20" height="20" fill="white" transform="translate(0.310318 0.669922)"/>
                  </clipPath>
                  </defs>
                </svg>  
                <p className='mt-[2px] items-center justify-center text-[12px]'>Kirim Amplop Digital</p>
              </motion.a>
          </div>
          
        ),
        item: () => (
          
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
              }
            }}
            initial="hidden"
            animate="show"
          >
            {/* Bank Rully */}
            <motion.div 
              className='flex justify-center items-center w-full mt-[60px]'
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: {
                  delay: 0.4
                }}
              }}
            >
              <motion.div 
                className='relative bg-center bg-contain bg-no-repeat w-full h-[149px]'
                style={{ backgroundImage: `url(${ImgCard1.src})` }}
                whileTap={{ scale: 0.95 }}
              >

                <motion.button 
                  type='button'
                  className='w-full h-full'
                  onClick={(e) => {
                    copyToClipboard("1262286006");
                  }}
                >
                </motion.button>

              </motion.div>
            </motion.div>

            {/* Bank Sabil */}
            <motion.div 
              className='flex justify-center items-center w-full mt-[20px]'
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: {
                  delay: 0.6
                }}
              }}
            >
              <motion.div 
                className='relative bg-bottom bg-contain bg-no-repeat w-full h-[149px]'
                style={{ backgroundImage: `url(${ImgCard2.src})` }}
                whileTap={{ scale: 0.95 }}
              >

                <motion.button 
                  type='button'
                  className='w-full h-full'
                  onClick={(e) => {
                    copyToClipboard("1831517102");
                  }}
                >
                </motion.button>

              </motion.div>
            </motion.div>

          </motion.div>

        ),
      }
    ]
  );

  const accordionStructure2 = useMemo(
    () => [
      {
        name: "Tab_1",
        header: () => (

          <div className='flex justify-center items-center col-span-12 mt-3'>
              <motion.a 
                type='button'
                target="_blank"
                className={"flex flex-cols text-white font-inter bg-[#A2999E] hover:cursor-pointer rounded-[43px] px-[25px] py-[9px] text-center tracking-wide mt-[30px]"}
                whileTap={{ scale: 0.95 }}
                onClick={() => setExpanded2(isOpen2 ? false : 0)}
              >
                 <svg className='mr-2' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_603_241)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20309 4.23222C7.69128 4.22372 8.24272 4.4566 8.77392 5.04682C9.13767 5.45099 9.46246 5.99351 9.71742 6.64648H7.1835C6.86538 6.64501 6.5606 6.518 6.33555 6.29295C6.10918 6.06658 5.982 5.75955 5.982 5.43942C5.982 5.11928 6.10918 4.81226 6.33555 4.58589C6.56192 4.35952 6.86894 4.23235 7.18908 4.23235L7.20309 4.23222ZM7.18055 8.25591C7.18339 8.25592 7.18624 8.25592 7.18908 8.25592C7.19061 8.25592 7.19214 8.25592 7.19368 8.25591H10.0056V9.86534H4.3726V8.25591H7.18055ZM4.64434 6.64648C4.46707 6.27275 4.37257 5.86096 4.37257 5.43942C4.37257 4.69244 4.66931 3.97605 5.19751 3.44785C5.72404 2.92132 6.43757 2.62479 7.18199 2.62293C8.24368 2.60676 9.21114 3.12677 9.9702 3.97017C10.287 4.32215 10.5678 4.72951 10.8103 5.17915C11.0528 4.72951 11.3336 4.32215 11.6504 3.97017C12.4095 3.12677 13.3769 2.60676 14.4386 2.62293C15.183 2.62479 15.8966 2.92132 16.4231 3.44785C16.9513 3.97605 17.248 4.69244 17.248 5.43942C17.248 5.86096 17.1535 6.27275 16.9763 6.64648H17.248C18.1369 6.64648 18.8575 7.36704 18.8575 8.25591V9.86534C18.8575 10.7542 18.1369 11.4748 17.248 11.4748H17.248V16.3031C17.248 16.9433 16.9937 17.5574 16.5409 18.0101C16.0882 18.4629 15.4741 18.7172 14.8339 18.7172H6.78672C6.14645 18.7172 5.5324 18.4629 5.07966 18.0101C4.62692 17.5574 4.37257 16.9433 4.37257 16.3031V11.4748C3.48372 11.4748 2.76317 10.7542 2.76317 9.86534V8.25591C2.76317 7.36704 3.48373 6.64648 4.3726 6.64648H4.64434ZM14.4269 8.25591C14.4284 8.25592 14.43 8.25592 14.4315 8.25592C14.4344 8.25592 14.4372 8.25592 14.44 8.25591H17.248V9.86534H11.6151V8.25591H14.4269ZM14.4371 6.64648C14.7552 6.64501 15.06 6.518 15.285 6.29295C15.5114 6.06658 15.6386 5.75955 15.6386 5.43942C15.6386 5.11928 15.5114 4.81226 15.285 4.58589C15.0587 4.35952 14.7516 4.23235 14.4315 4.23235L14.4175 4.23222C13.9293 4.22372 13.3779 4.4566 12.8467 5.04682C12.4829 5.45099 12.1581 5.99351 11.9032 6.64648H14.4371ZM5.982 16.3031V11.4748H10.0056V17.1078H6.78672C6.5733 17.1078 6.36861 17.023 6.2177 16.8721C6.06679 16.7212 5.982 16.5165 5.982 16.3031ZM14.8339 17.1078H11.6151V11.4748H15.6386V16.3031C15.6386 16.5165 15.5538 16.7212 15.4029 16.8721C15.252 17.023 15.0473 17.1078 14.8339 17.1078Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_603_241">
                    <rect width="20" height="20" fill="white" transform="translate(0.810318 0.669922)"/>
                    </clipPath>
                    </defs>
                </svg>                
                <p className='mt-[2px] items-center justify-center text-[12px]'>Kirim Hadiah</p>
              </motion.a>
          </div>
          
        ),
        item: () => (
          
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
              }
            }}
            initial="hidden"
            animate="show"
          >
            {/* Alamat */}
            <motion.div 
              className='flex justify-center items-center w-full mt-[20px]'
              variants={{
                hidden: { opacity: 0 },
                show: { opacity: 1, transition: {
                  delay: 0.8
                }}
              }}
            >
              <div className='text-center w-full'>

                <div className={Playfair_Display_SC.className + ' flex justify-center items-center w-full text-[14px]'}>
                  Alamat Paket
                </div>
                
                <div className={PlusJakartaSans.className + ' justify-center items-center w-full text-[9px] mt-5 leading-[18px]'}>
                  <p>Rully Abdul Haq &nbsp; - &nbsp; 08567777766</p>
                  <p>Jl.Raya Sukabumi Gg.Al-Falah 03/01 No.20 Desa Sukamaju<br /> Kec.Cianjur, Kabupaten Cianjur, Jawa Barat</p>
                </div>

                <motion.button 
                  type='button'
                  className='bg-bottom bg-contain bg-no-repeat mt-[17px] w-full h-[27px]'
                  onClick={(e) => {
                    copyToClipboard("Rully Abdul Haq\n08567777766\nJl.Raya Sukabumi Gg.Al-Falah 03/01 No.20 Desa Sukamaju, Kec.Cianjur, Kab.Cianjur");
                  }}
                  style={{ backgroundImage: `url(${IcoCopyButton.src})` }}
                  whileTap={{ scale: 0.8 }}
                ></motion.button>

              </div>
            </motion.div>

          </motion.div>

        ),
      }
    ]
  );



  const copyToClipboard = (x) => {
    navigator.clipboard.writeText(x)
      .then(() => {})
      .catch((error) => {
        console.error('Error copying :', error);
      });
  };

  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  const togglePlay = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (volume > 0) {
      audioRef.current.volume = 0;
      setVolume(0);
    } else {
      audioRef.current.volume = 0.5; // Set to default volume
      setVolume(0.5);
    }
  };

  const [msgName, setMsgName] = useState("");
  const [msgText, setMsgText] = useState("");
  const [msgAttendance, setMsgAttendance] = useState(1);
  const [msgReceived, setMsgReceived] = useState([]);
  const [guest, setGuest] = useState([]);

  const [attY, setAttY] = useState('0');
  const [attN, setAttN] = useState('0');
  const [attNS, setAttNS] = useState('0');

  // const sendMessage = useCallback(
  //   async (e) => {
  //     console.log("XXX");

  //     // emit message
  //     socket.emit("send_message", { 
  //       name: msgName,
  //       message: msgText,
  //     });

  //     setMsgText('');

  //   }, [msgName, msgText]
  // );

  const sendMessage = useCallback(
    async (event) => {
      // event.preventDefault();
        
      // assign form data
      const formData = new FormData();
      formData.append('code', '1686157d');
      formData.append('name', msgName);
      formData.append('message', msgText);
      formData.append('attendance', msgAttendance);

      // *debug
      // for (var pair of formData.entries()) {
      //   console.log(pair[0]+ ', ' + pair[1]); 
      // }


      try {
        let res;
        res = await http.addClient(formData);

        // *debug
        // console.log(res);

        if (res?.status !== 'success') {
          // notif("warning", "Failed", res.message);    // error notif
          return;
        }

        // notif("success", "Success", res?.message);    // success notif
        setrefresh((prev) => !prev);
        // setMsgName('');
        setMsgText('');

      } catch (error) {
        console.log(error);
      }
    }, [msgName, msgText, msgAttendance]
  );

  const _loop_sample = Array.from({ length: 0 }, (_, index) => index);

  const initialized = useRef(false);

  const fetchData = useCallback(
    async (controller) => {
      try {

        // get data
        const res = await http.getClient(controller, '1686157d');

        // debug*
        // console.log(res);

        // false status
        if (res.status !== "success") {
          return;
        }

        // set data
        setMsgReceived(res.data?.chat || []);
        setGuest(res.data?.guest || []);
        setAttY(res.data?.att_y);
        setAttN(res.data?.att_n);
        setAttNS(res.data?.att_ns);

      } catch (error) {
        if (error.message === "canceled") {} 
        else console.log(error);
      }
    },
    []
  );

  // first load
  useEffect(() => {
    
    if (!initialized.current) {
      
      initialized.current = true;

      const controller = new AbortController();
      fetchData(controller);
      
    } 
    
  }, []);

  // trigger on changing div link
  useEffect(() => {

    if (initialized.current) {

      // check div link
      if (activeLink == 'ucapan') {
        
        // start getting data loop
        const autoplay = setInterval(() => {
    
          const controller = new AbortController();
          fetchData(controller);

        }, 10000);    // in ms 3s = 3000

        return () => clearInterval(autoplay);
      }
    }
  }, [activeLink]);

  // trigger on refresh form
  useEffect(() => {

    if (initialized.current) {

      const controller = new AbortController();
      fetchData(controller);
    }
  }, [refresh]);


  return (
    <main className={Playfair_Display.className}>

      <AnimatePresence initial={true}>
        {!invActive && (
          <>
            {/* --- */}
            <motion.div className="lg:hidden">
              {/* Mobile */}
              <nav className="fixed left-0 right-0 z-50">
                <div className="relative w-full h-full grid grid-rows-2">
                  <div className={"mt-[5rem] justify-center items-center absolute text-center text-white items-center justify-center w-full transform translate-y-[25rem]"}>
                    <div
                      className=" grid grid-rows flex w-4/4 h-full pt-[100px] bg-[url('/assets/Golden-black/mobile/m_Front1.png')] bg-contain bg-no-repeat bg-center justify-center items-center"
                    >
                      <div className='grid grid-rows justify-center bg-clip-text text-transparent bg-gradient-to-r from-[#C8A882] to-[#907658]'>
                        <p className='font-Suranna text-[21px] '>Wedding Invitation of</p>
                        <p className='font-Suranna text-[38px] '>Meyla & Imran</p>
                        <p className='font-Suranna text-[17px] mt-3'>For, Guest Name</p>
                        <hr className="w-20 mx-[65px] mt-2 h-px bg-[#907658] border-0 justify-center items-center text-center"></hr>
                        <motion.button 
                        className='mt-5'
                          type='button'
                          onClick={(e) => {
                            setInvActive(true);
                            togglePlay();
                          }}
                          whileTap={{ 
                            scale: 0.95,
                          }}
                        >
                           <svg className='mx-12 pt-5 justify-center' width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_335_422)">
                            <rect x="24.9509" y="24.9958" width="54" height="54" rx="27" fill="url(#paint0_linear_335_422)" shape-rendering="crispEdges"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8757 45.9457C42.8757 45.3888 43.3272 44.9373 43.8841 44.9373H60.0177C60.5746 44.9373 61.0261 45.3888 61.0261 45.9457V46.4L52.4542 51.8471L52.4519 51.8485C52.3016 51.9421 52.128 51.9917 51.9509 51.9917C51.7738 51.9917 51.6002 51.9421 51.4499 51.8485L42.8757 46.4V45.9457ZM40.859 46.9376C40.8588 46.9479 40.8588 46.9581 40.859 46.9684V58.0459C40.859 59.7166 42.2134 61.071 43.8841 61.071H60.0177C61.6884 61.071 63.0428 59.7166 63.0428 58.0459V46.9697C63.043 46.9586 63.043 46.9475 63.0428 46.9363V45.9457C63.0428 44.275 61.6884 42.9206 60.0177 42.9206H43.8841C42.2134 42.9206 40.859 44.275 40.859 45.9457V46.9376ZM61.0261 48.7894V58.0459C61.0261 58.6028 60.5746 59.0543 60.0177 59.0543H43.8841C43.3272 59.0543 42.8757 58.6028 42.8757 58.0459V48.7894L50.3715 53.5527L50.377 53.5561C50.8487 53.8517 51.3942 54.0084 51.9509 54.0084C52.5076 54.0084 53.0531 53.8517 53.5249 53.5561L61.0261 48.7894Z" fill="#EEF0F2"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_335_422" x="0.150928" y="0.195789" width="107.6" height="107.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="2" dy="2"/>
                            <feGaussianBlur stdDeviation="13.4"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_335_422"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_335_422" result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear_335_422" x1="74.0659" y1="24.9958" x2="83.3355" y2="61.9229" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#C8A882"/>
                            <stop offset="1" stop-color="#907658"/>
                            </linearGradient>
                            </defs>
                           </svg>
                        </motion.button>
                      </div>    
                    
                    </div>
                  </div>
            
                  <div className='w-full justify-center items-center text-center transform translate-y-[40rem]'>
                    <Image
                    src={Dekor3}
                    className='flex justify-center'
                    alt="."
                    />
                  </div>
                  <div className='inline-flex w-full justify-center items-center absolute text-center text-white items-center justify-center w-full transform translate-y-[43rem]'>
                  <motion.button 
                        className='mt-5'
                          type='button'
                          onClick={(e) => {
                            setInvActive(true);
                            togglePlay();
                          }}
                          whileTap={{ 
                            scale: 0.95,
                          }}
                        >
                           <svg className='mx-12 pt-5 justify-center' width="108" height="108" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_335_422)">
                            <rect x="24.9509" y="24.9958" width="54" height="54" rx="27" fill="url(#paint0_linear_335_422)" shape-rendering="crispEdges"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M42.8757 45.9457C42.8757 45.3888 43.3272 44.9373 43.8841 44.9373H60.0177C60.5746 44.9373 61.0261 45.3888 61.0261 45.9457V46.4L52.4542 51.8471L52.4519 51.8485C52.3016 51.9421 52.128 51.9917 51.9509 51.9917C51.7738 51.9917 51.6002 51.9421 51.4499 51.8485L42.8757 46.4V45.9457ZM40.859 46.9376C40.8588 46.9479 40.8588 46.9581 40.859 46.9684V58.0459C40.859 59.7166 42.2134 61.071 43.8841 61.071H60.0177C61.6884 61.071 63.0428 59.7166 63.0428 58.0459V46.9697C63.043 46.9586 63.043 46.9475 63.0428 46.9363V45.9457C63.0428 44.275 61.6884 42.9206 60.0177 42.9206H43.8841C42.2134 42.9206 40.859 44.275 40.859 45.9457V46.9376ZM61.0261 48.7894V58.0459C61.0261 58.6028 60.5746 59.0543 60.0177 59.0543H43.8841C43.3272 59.0543 42.8757 58.6028 42.8757 58.0459V48.7894L50.3715 53.5527L50.377 53.5561C50.8487 53.8517 51.3942 54.0084 51.9509 54.0084C52.5076 54.0084 53.0531 53.8517 53.5249 53.5561L61.0261 48.7894Z" fill="#EEF0F2"/>
                            </g>
                            <defs>
                            <filter id="filter0_d_335_422" x="0.150928" y="0.195789" width="107.6" height="107.6" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dx="2" dy="2"/>
                            <feGaussianBlur stdDeviation="13.4"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_335_422"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_335_422" result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear_335_422" x1="74.0659" y1="24.9958" x2="83.3355" y2="61.9229" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#C8A882"/>
                            <stop offset="1" stop-color="#907658"/>
                            </linearGradient>
                            </defs>
                           </svg>
                        </motion.button>
                  </div>
                </div>
              </nav>
              
              {/* Mobile Slider */}
              <MobileImgSliderFull
                _data = {front_mobileSliderStructure}
                _height={240}
                _direction={1}
                _movementEnter={0}
                _movementExit={0}
                _scrollStiffness={100}
                _scrollDamping={10}
                _scrollInterval={30000}
                _scrollDuration={1}
              />
            </motion.div>

            <motion.div className='hidden lg:block'>
              {/* Desktop */}
              <nav className="fixed top-0 left-0 right-0 z-50">
                <div className="relative w-full h-screen">
                  <div className={"absolute text-center text-white items-center justify-center w-full transform translate-y-1/3"}>
                    
                    {/* Upper Logo */}
                    <div
                      className="flex w-4/4 h-[128px] bg-contain bg-no-repeat bg-center justify-center items-center"
                      style={{ backgroundImage: `url(${imgDecor3.src})` }}
                    ></div>

                    {/* User */}
                    <div className='w-full mt-[100px] py-[14px]'>
                      
                      <div>
                        <p className={Playfair_Display.className + ' tracking-wide text-[11.5px] font-thin'}>
                          Kepada Bapak/Ibu/Saudara/i:
                        </p>
                        {/* <p className={Playfair_Display_SC.className + ' text-[24px] capitalize'}>
                          {to || ""}
                        </p> */}
                        <Suspense>
                          <TamuName />
                        </Suspense>
                        <p className={Playfair_Display.className + ' tracking-wide text-[11.5px] mt-[16px] font-thin'}>
                          Anda diundang dalam Acara Pernikahan kami
                        </p>
                      </div>

                      <div className='flex justify-center items-center w-full mt-[16px]'>
                        <motion.button 
                          type='button'
                          className={Playfair_Display_SC.className + " text-white bg-[#404138] hover:bg-[#7c7d6a] hover:cursor-pointer rounded-md text-xs px-7 py-2.5 w-auto text-center tracking-widest"}
                          onClick={(e) => {
                            setInvActive(true);
                            togglePlay();
                          }}
                          whileTap={{ 
                            scale: 0.95,
                            backgroundColor: "#A0A381",
                          }}
                        >
                          buka undangan
                      </motion.button>
                    </div>
                    </div>

                  </div>
                </div>
              </nav>

              {/* Desktop Slider */}
              <MobileImgSliderFull
                _data = {front_SliderStructure}
                _height={240}
                _direction={1}
                _movementEnter={0}
                _movementExit={0}
                _scrollStiffness={100}
                _scrollDamping={10}
                _scrollInterval={5000}
                _scrollDuration={1}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {invActive && (
        <>
          <MobileMenu
            data          = {mobileMenuStructure}
            menu_length   = "grid grid-cols-7 gap-x-1"
            activeLink    = {activeLink}
            setActiveLink = {setActiveLink}
            togglePlay    = {togglePlay}
            toggleMute    = {toggleMute}
          />  

          {/* Mobile */}
          <section 
            className="bg-[#A2999E] flex flex-col w-4/4 h-4/4 bg-cover bg-no-repeat bg-fixed bg-right justify-center items-center lg:hidden"
          >

            <div className="items-center justify-center grid grid-cols-1 w-full px-0 sm:px-24 block">

            
              {/* Opening */}
                <ScrollContainer 
                content = {(
                  <div 
                    className="w-full h-full bg-cover bg-no-repeat bg-contain bg-[url('/assets/Golden-black/mobile/m_Bg_Awal.png')] grid grid-cols-12 px-7 py-[250px] gap-5 bg-[center_top_-10rem]"
                    id=""                  >
                    <div className='bg-gradient-to-r from-[#1B2022] to-[#353B3C] rounded-[18px] -translate-y-1/4 py-[65px] justify-center items-center col-span-12 text-center'>
                      <div className='justify-center items-center col-span-12 text-center'>
                        <div className='inline-flex w-[100px] justify-center text-center'>
                          <Image
                            src={Dekor}
                            className='transform w-full flex justify-center'
                            alt="."
                          />
                        </div>
                        <div className='inline-flex items-center justify-center w-full pt-[36px]'>
                          <p className='font-Suranna text-[17px] text-[#A2999E] px-[38px] leading-[24px]'>
                            “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan diantaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”(QS. Ar-Rum : 21)
                          </p>
                        </div>
                        <div className='inline-flex items-end items-center justify-center w-full pt-[36px]'>
                          <p className='font-Suranna text-[17px] text-[#A2999E] px-[38px] leading-[24px]'>
                           (QS. Ar-Rum : 21)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />

              {/* Mempelai */}
              <ScrollContainer 
                content = {(
                  <div 
                    className="w-full grid grid-cols-12 px-7 transform -translate-y-[13rem]"
                    id="mempelai"
                  >
                    <div className='bg-gradient-to-r from-[#1B2022] to-[#353B3C] rounded-[18px] py-[52px] justify-center items-center col-span-12 text-center'>
                      <div className='justify-center items-center col-span-12 text-center'>
                        <div className={'tracking-normal drop-shadow-[1.5px_1.5px_rgba(0,0,0,0.07)] mt-[-7px]'}>
                          <p className='font-Suranna text-[25px] bg-clip-text text-transparent bg-gradient-to-r from-[#C8A882] to-[#907658] leading-[24px]'>Kedua Mempelai</p>
                        </div>
                        <div className='inline-flex items-center justify-center w-full'>
                          <hr class="w-40 h-px bg-[#907658] border-0 justify-center items-center text-center"></hr>
                      </div>
                      </div>

                      <div className='flex justify-start items-end grid-cols-12 text-center'>
                        <div className='w-full'>

                          <div className={'text-2xl text-black py-10'}>
                            <div className='w-full justify-center flex'>
                              <Image
                                src={m_ImgS2_2}
                                className='flex  h-[200px] justify-center'
                                alt="."
                              />
                            </div>

                          </div>
                          <label className='text-[38px] font-Suranna text-[#A2999E] leading-[42px] '>
                              Meyla Maudy<br></br> Ananda, S.Pd.
                            </label>
                          <div className='text-[17px] pb-5 text-[#A2999E] leading-[24px] my-[28px] font-Suranna mx-[20px]'>
                            Anak kedua dari Bapak Ahmad Yasin dan Ibu Maemunah
                          </div>
                          {/* button */}
                          <div className='flex justify-center items-center w-full'>
                          <motion.button 
                            type='button'
                            className={"flex flex-cols font-inter text-white bg-gradient-to-r from-[#A2999E] to-[#828282] hover:cursor-pointer rounded-[43px] text-[8px] px-[11px] py-[6px] w-auto text-center tracking-widest"}
                            onClick={(e) => {
                              setInvActive(true);
                              togglePlay();
                            }}
                            whileTap={{ 
                              scale: 0.95,
                              backgroundColor: "#BB806F",
                            }}
                          >
                            <svg className='mr-1 mt-[1px]' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.09869 2.9082C3.8317 2.9082 2.78191 3.93989 2.78191 5.22498C2.78191 6.51007 3.8136 7.54176 5.09869 7.54176C6.38378 7.54176 7.41547 6.49197 7.41547 5.22498C7.41547 3.95799 6.36568 2.9082 5.09869 2.9082ZM5.09869 6.70917C4.2842 6.70917 3.6145 6.03947 3.6145 5.22498C3.6145 4.41049 4.2842 3.7408 5.09869 3.7408C5.91318 3.7408 6.58287 4.41049 6.58287 5.22498C6.58287 6.03947 5.91318 6.70917 5.09869 6.70917Z" fill="white"/>
                              <path d="M7.50595 3.37883C7.79584 3.37883 8.03085 3.14383 8.03085 2.85394C8.03085 2.56404 7.79584 2.32904 7.50595 2.32904C7.21606 2.32904 6.98106 2.56404 6.98106 2.85394C6.98106 3.14383 7.21606 3.37883 7.50595 3.37883Z" fill="white"/>
                              <path d="M8.86346 1.49643C8.39287 1.00773 7.72317 0.754333 6.96298 0.754333H3.23442C1.65973 0.754333 0.60994 1.80412 0.60994 3.37881V7.08927C0.60994 7.86757 0.863337 8.53726 1.37013 9.02596C1.85883 9.49655 2.51042 9.73185 3.25252 9.73185H6.94488C7.72317 9.73185 8.37477 9.47845 8.84536 9.02596C9.33406 8.55536 9.58746 7.88567 9.58746 7.10738V3.37881C9.58746 2.61862 9.33406 1.96702 8.86346 1.49643ZM8.79106 7.10738C8.79106 7.66847 8.59196 8.12097 8.26617 8.42866C7.94037 8.73636 7.48788 8.89926 6.94488 8.89926H3.25252C2.70952 8.89926 2.25702 8.73636 1.93123 8.42866C1.60543 8.10287 1.44253 7.65037 1.44253 7.08927V3.37881C1.44253 2.83581 1.60543 2.38332 1.93123 2.05752C2.23892 1.74982 2.70952 1.58693 3.25252 1.58693H6.98108C7.52407 1.58693 7.97657 1.74982 8.30237 2.07562C8.61006 2.40142 8.79106 2.85391 8.79106 3.37881V7.10738Z" fill="white"/>
                            </svg>
                            <p className=''>@laungharmoni</p>
                        </motion.button>
                          </div>

                          <div className={'font-Suranna text-[50pt] py-[52px] bg-clip-text text-transparent bg-gradient-to-r from-[#C8A882] to-[#907658]'}>
                            <p>&</p>
                          </div>

                          <div className={'text-2xl text-black pt-5 pb-2'}>
                            <div className='relative w-full h-[200px] '>
                              <Image
                                src={m_ImgS2_1}
                                className='flex justify-center'
                                alt="."
                              />
                            </div>
                          </div>
                          <label className='text-[38px] font-Suranna text-[#A2999E] leading-[42px]'>
                            Tengku Imran Purnawa, M.Si.
                          </label>
                          <div className='text-[17px] text-[#A2999E] leading-[24px] font-Suranna my-[28px] mx-[20px]'>
                            Anak pertama dari Bapak Agung Kertanegara dan Ibu Sri Rahayu
                          </div>
                          <div className='flex justify-center items-center w-full'>
                            <motion.button 
                              type='button'
                              className={"flex flex-cols font-inter text-white bg-gradient-to-r from-[#A2999E] to-[#828282] hover:cursor-pointer rounded-[43px] text-[8px] px-[11px] py-[6px] w-auto text-center tracking-widest"}
                              onClick={(e) => {
                                setInvActive(true);
                                togglePlay();
                              }}
                              whileTap={{ 
                                scale: 0.95,
                                backgroundColor: "#BB806F",
                              }}
                            >
                              <svg className='mr-1' width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.09869 2.9082C3.8317 2.9082 2.78191 3.93989 2.78191 5.22498C2.78191 6.51007 3.8136 7.54176 5.09869 7.54176C6.38378 7.54176 7.41547 6.49197 7.41547 5.22498C7.41547 3.95799 6.36568 2.9082 5.09869 2.9082ZM5.09869 6.70917C4.2842 6.70917 3.6145 6.03947 3.6145 5.22498C3.6145 4.41049 4.2842 3.7408 5.09869 3.7408C5.91318 3.7408 6.58287 4.41049 6.58287 5.22498C6.58287 6.03947 5.91318 6.70917 5.09869 6.70917Z" fill="white"/>
                                <path d="M7.50595 3.37883C7.79584 3.37883 8.03085 3.14383 8.03085 2.85394C8.03085 2.56404 7.79584 2.32904 7.50595 2.32904C7.21606 2.32904 6.98106 2.56404 6.98106 2.85394C6.98106 3.14383 7.21606 3.37883 7.50595 3.37883Z" fill="white"/>
                                <path d="M8.86346 1.49643C8.39287 1.00773 7.72317 0.754333 6.96298 0.754333H3.23442C1.65973 0.754333 0.60994 1.80412 0.60994 3.37881V7.08927C0.60994 7.86757 0.863337 8.53726 1.37013 9.02596C1.85883 9.49655 2.51042 9.73185 3.25252 9.73185H6.94488C7.72317 9.73185 8.37477 9.47845 8.84536 9.02596C9.33406 8.55536 9.58746 7.88567 9.58746 7.10738V3.37881C9.58746 2.61862 9.33406 1.96702 8.86346 1.49643ZM8.79106 7.10738C8.79106 7.66847 8.59196 8.12097 8.26617 8.42866C7.94037 8.73636 7.48788 8.89926 6.94488 8.89926H3.25252C2.70952 8.89926 2.25702 8.73636 1.93123 8.42866C1.60543 8.10287 1.44253 7.65037 1.44253 7.08927V3.37881C1.44253 2.83581 1.60543 2.38332 1.93123 2.05752C2.23892 1.74982 2.70952 1.58693 3.25252 1.58693H6.98108C7.52407 1.58693 7.97657 1.74982 8.30237 2.07562C8.61006 2.40142 8.79106 2.85391 8.79106 3.37881V7.10738Z" fill="white"/>
                              </svg>
                              @laungharmoni
                          </motion.button>
                            </div>
                        </div>

                      </div>
                    </div>
                  </div>
                )}
              />

              {/* Date */}
              <ScrollContainer 
                content = {(
                  <div 
                    className="w-full bg-gradient-to-r from-[#1B2022] to-[#353B3C] bg-fixed bg-center h-auto flex flex-col"
                    id="waktu"
                  >
                    <div 
                      className="w-full grid grid-cols-12 px-7 py-[100px] "
                    >
                      <div className={'flex justify-center items-center col-span-12 text-center font-Suranna text-[25px] bg-clip-text text-transparent bg-gradient-to-r from-[#C8A882] to-[#907658] leading-[60px] col-span-12 text-right'}>
                          <label className="mr-3">Waktu Acara</label> 
                        </div>

                        <div className='col-span-12 inline-flex items-center justify-center w-full'>
                          <hr class="w-40 h-px bg-[#907658] border-0 justify-center items-center text-center"></hr>
                        </div>

                      <div className='flex justify-center items-center col-span-12 text-center pt-10'>
                        <div className='w-full'>
                          <div className='text-[17px] tracking-normal'>
                            <label className='leading-6 font-Suranna text-[#A2999E]'>
                            Pernikahan kami akan diselenggarakan<br></br> 
                            pada waktu dan keterangan berikut:
                            </label>
                          </div>

                          <div className={'font-Suranna text-[#A2999E] text-[38px] py-[28px]'}>
                            <div className='leading-9'>
                              Selasa,
                            </div>
                            <div>
                              10 <label className={'font-Suranna text-[38px]'}>Juni </label>2024
                            </div>
                          </div>

                          <div className='bg-gradient-to-b from-[#1B2022] to-[#353B3C] rounded-[18px] card py-[28px]'>
                            <div className='flex-cols justify-center items-center flex font-Oranienbaum pt-[40px] '>
                              <label className='text-[#A2999E] flex flex-cols text-[27px] leading-[20px]'>
                                  Akad, 09:00 - 11:00 WIB
                              </label>
                            </div>

                            <div className='flex-cols mt-[28px] justify-center items-center flex font-Oranienbaum pb-[40px]'>
                              <label className='text-[#A2999E] text-[27px] leading-[20px]'>
                                  Resepsi, 09:00 - 11:00 WIB
                              </label>
                            </div>
                          </div>

                          <div className='w-full flex col-span-12 my-[28px] justify-center items-center text-center'>
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.66968C10.1435 3.66968 8.36301 4.40718 7.05025 5.71993C5.7375 7.03269 5 8.81316 5 10.6697C5 13.2746 6.77047 16.0313 8.74741 18.2553C9.71242 19.341 10.6805 20.2489 11.4085 20.8859C11.6312 21.0807 11.8307 21.2496 12 21.3899C12.1693 21.2496 12.3688 21.0807 12.5915 20.8859C13.3195 20.2489 14.2876 19.341 15.2526 18.2553C17.2295 16.0313 19 13.2746 19 10.6697C19 8.81316 18.2625 7.03269 16.9497 5.71993C15.637 4.40718 13.8565 3.66968 12 3.66968ZM12 22.6697C11.4 23.4697 11.3998 23.4695 11.3995 23.4693L11.3989 23.4688L11.397 23.4674L11.3912 23.463L11.3709 23.4476C11.3537 23.4345 11.3291 23.4156 11.2976 23.3912C11.2346 23.3424 11.1441 23.2714 11.0299 23.1797C10.8016 22.9962 10.4782 22.7294 10.0915 22.391C9.31946 21.7155 8.28758 20.7484 7.25259 19.584C5.22953 17.3081 3 14.0647 3 10.6697C3 8.28273 3.94821 5.99354 5.63604 4.30572C7.32387 2.61789 9.61305 1.66968 12 1.66968C14.3869 1.66968 16.6761 2.61789 18.364 4.30572C20.0518 5.99354 21 8.28273 21 10.6697C21 14.0647 18.7705 17.3081 16.7474 19.584C15.7124 20.7484 14.6805 21.7155 13.9085 22.391C13.5218 22.7294 13.1984 22.9962 12.9701 23.1797C12.8559 23.2714 12.7654 23.3424 12.7024 23.3912C12.6709 23.4156 12.6463 23.4345 12.6291 23.4476L12.6088 23.463L12.603 23.4674L12.6011 23.4688L12.6005 23.4693C12.6002 23.4695 12.6 23.4697 12 22.6697ZM12 22.6697L12.6 23.4697C12.2444 23.7363 11.7556 23.7363 11.4 23.4697L12 22.6697Z" fill="#9D7265"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M12 8.66968C10.8954 8.66968 10 9.56511 10 10.6697C10 11.7742 10.8954 12.6697 12 12.6697C13.1046 12.6697 14 11.7742 14 10.6697C14 9.56511 13.1046 8.66968 12 8.66968ZM8 10.6697C8 8.46054 9.79086 6.66968 12 6.66968C14.2091 6.66968 16 8.46054 16 10.6697C16 12.8788 14.2091 14.6697 12 14.6697C9.79086 14.6697 8 12.8788 8 10.6697Z" fill="#9D7265"/>
                            </svg>
                          </div>

                          <div className='text-[17px] font-Suranna text-[#A2999E]'>
                            <p>Lokasi: The Krakatau Grand Ballroom</p>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                )} 
              />

              {/* Image */}
              <div className='bg-white w-full h-full'>
                <Image
                  src={m_Front2}
                  className='w-full bg-contain bg-no-repeat flex justify-center shadow-[2px_2px_5px_2px_rgba(0,0,0,0.06)]'
                  alt="."
                />          
              </div>
              

              {/* Maps */}
              <ScrollContainer 
                content = {(
                  <div 
                    className="w-full bg-gradient-to-r from-[#1B2022] to-[#353B3C] bg-cover grid grid-cols-12 px-7 py-[100px] gap-5"
                    id="lokasi"
                  >
                    
                    <div className={'font-Suranna bg-clip-text text-transparent bg-gradient-to-r from-[#C8A882] to-[#907658] flex justify-center text-center items-center col-span-12 text-[25px]'}>
                      <p>Petunjuk Lokasi</p>
                    </div>

                    <div className='col-span-12 inline-flex items-center justify-center w-full'>
                      <hr class="w-40 h-px bg-[#C8A882] border-0 justify-center items-center text-center"></hr>
                    </div>

                    <div className={'text-[#A2999E] mt-[65px] mb-4 font-Suranna flex justify-center text-center items-center col-span-12 mt-11 text-[17px]'}>
                      The Krakatau Grand Ballroom, Jl. Taman Mini Indonesia Indah Pintu 1 Tmii, Ceger, Kec. Cipayung, Jakarta, Daerah Khusus Ibukota Jakarta 13820
                    </div>

                    <div className='justify-center items-center col-span-12 mt-3'>
                        <div className="max-w-screen-lg mx-auto shadow-md rounded-md p-3 bg-[#907658] rounded-[18px]">
                            <div className="relative w-full h-[320px] ">
                              <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.681775986828!2d107.1548687!3d-6.8085087999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68531b9962435b%3A0x986824c5a9f4f408!2sGedung%20KORPRI%20Cianjur!5e0!3m2!1sid!2sid!4v1711700085767!5m2!1sid!2sid" 
                                allowFullScreen=""
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                className="absolute top-0 left-0 w-full h-full"
                              >
                              </iframe>
                            </div>
                        </div>
                    </div>
              
                    <div className='flex justify-center items-center col-span-12 mt-3'>
                      <motion.a 
                        type='button'
                        href='https://maps.app.goo.gl/TTs53xfK5SLTEBAZA'
                        target="_blank"
                        className={"flex flex-cols text-white font-inter bg-gradient-to-r from-[#A2999E] to-[#828282] hover:cursor-pointer rounded-[43px] px-[25px] py-[9px] text-center tracking-wide mt-[30px]"}
                        whileTap={{ scale: 0.95 }}
                      >
                        <svg className='mr-2' width="20" height="20" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M7.46843 4.61264C8.22215 3.85892 9.2444 3.43549 10.3103 3.43549C11.3762 3.43549 12.3985 3.85892 13.1522 4.61264C13.9059 5.36635 14.3293 6.38861 14.3293 7.45452C14.3293 8.94555 13.3081 10.5585 12.121 11.894C11.5462 12.5406 10.969 13.082 10.5346 13.4621C10.4545 13.5323 10.3794 13.5967 10.3103 13.6551C10.2412 13.5967 10.1662 13.5323 10.0861 13.4621C9.65163 13.082 9.0744 12.5406 8.49967 11.894C7.3125 10.5585 6.29129 8.94555 6.29129 7.45452C6.29129 6.38861 6.71472 5.36635 7.46843 4.61264ZM10.3103 14.6888C9.82803 15.3318 9.82767 15.3315 9.82767 15.3315L10.3103 14.6888ZM9.82594 15.3302L9.82767 15.3315C10.1135 15.5459 10.5068 15.5462 10.7926 15.3318L10.3111 14.6898C10.7926 15.3318 10.7934 15.3312 10.7934 15.3312L10.7947 15.3302L10.7985 15.3273L10.8114 15.3176L10.8569 15.2826C10.8957 15.2525 10.9512 15.209 11.021 15.1529C11.1606 15.0407 11.3577 14.8781 11.5932 14.672C12.063 14.2609 12.6915 13.6719 13.3225 12.9621C14.5467 11.5848 15.937 9.58061 15.937 7.45452C15.937 5.96224 15.3441 4.53108 14.2889 3.47588C13.2337 2.42069 11.8026 1.82788 10.3103 1.82788C8.81804 1.82788 7.38688 2.42069 6.33168 3.47588C5.27648 4.53108 4.68368 5.96224 4.68368 7.45452C4.68368 9.58061 6.07388 11.5848 7.29813 12.9621C7.9291 13.6719 8.55758 14.2609 9.02744 14.672C9.26294 14.8781 9.46003 15.0407 9.59959 15.1529C9.6694 15.209 9.72492 15.2525 9.76376 15.2826L9.80926 15.3176L9.8221 15.3273L9.82594 15.3302ZM9.50652 7.45449C9.50652 7.01056 9.86639 6.65069 10.3103 6.65069C10.7543 6.65069 11.1141 7.01056 11.1141 7.45449C11.1141 7.89842 10.7543 8.2583 10.3103 8.2583C9.86639 8.2583 9.50652 7.89842 9.50652 7.45449ZM10.3103 5.04308C8.97854 5.04308 7.89891 6.1227 7.89891 7.45449C7.89891 8.78628 8.97854 9.86591 10.3103 9.86591C11.6421 9.86591 12.7217 8.78628 12.7217 7.45449C12.7217 6.1227 11.6421 5.04308 10.3103 5.04308Z" fill="white"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.63995 11.4748C4.65452 11.474 4.6691 11.4736 4.68368 11.4736H7.76628C8.21021 11.4736 8.57008 11.8335 8.57008 12.2774C8.57008 12.7214 8.21021 13.0812 7.76628 13.0812H4.72703L4.72282 13.0943L3.11955 17.9041H17.5011L15.8978 13.0943L15.8936 13.0812H12.8544C12.4104 13.0812 12.0506 12.7214 12.0506 12.2774C12.0506 11.8335 12.4104 11.4736 12.8544 11.4736H15.937C15.9515 11.4736 15.9661 11.474 15.9807 11.4748C16.3078 11.4926 16.6216 11.61 16.8802 11.8111C17.1365 12.0104 17.3263 12.2826 17.4249 12.5918L18.9899 17.2867C19.154 17.549 19.1527 17.8053 19.1522 17.8929C19.1522 17.897 19.1522 17.9007 19.1522 17.9041C19.1522 18.3279 19.0074 18.7435 18.6957 19.0552C18.384 19.3669 17.9684 19.5117 17.5446 19.5117H3.07607C2.65227 19.5117 2.23664 19.3669 1.92494 19.0552C1.61324 18.7435 1.46846 18.3279 1.46846 17.9041C1.46846 17.9007 1.46844 17.897 1.46842 17.8929C1.46798 17.8053 1.46667 17.5491 1.63076 17.2867L3.19574 12.5918C3.2943 12.2826 3.48417 12.0104 3.74044 11.8111C3.99901 11.61 4.31286 11.4926 4.63995 11.4748ZM17.5442 17.8823C17.5442 17.8822 17.5443 17.8836 17.5444 17.8867L17.5442 17.8823ZM3.07641 17.8823C3.07643 17.8823 3.0764 17.8839 3.07624 17.8867L3.07641 17.8823Z" fill="white"/>
                        </svg>
                        <p className='mt-[1px] items-center justify-center text-[12px]'>Lihat Petunjuk Rute</p>
                      </motion.a>
                    </div>

                  </div>
                )}
              />

              {/* Countdown*/}
              <div 
                    className="w-full items-center justify-center grid grid-cols-12"
                    id="lokasi"
                  >
                    
                   <div className='flex justify-center text-center items-center col-span-12'>
                    <div className='justify-center items-center w-full'>
                      <div className='justify-center items-center text-center'>
                        <Countdown 
                          project = 'Rully_Sabil_Mobile' 
                          target_date = '2024-10-25'
                          className=''
                        />  
                         <Countdown 
                          project = 'Rully_Sabil_Mobile2' 
                          target_date = '2024-10-25'
                          className=''
                        />  
                      </div>
                    </div>
                   </div>

                  </div>

              {/* Galery */}
              <ScrollContainer 
                content = {(
                  <div 
                    id="galeri"
                    className="relative w-screen h-full bg-cover bg-fixed bg-center py-16 grid grid-cols-12"
                    style={{ backgroundImage: `url(${imgSolid2.src})` }}
                  >
                    <div className='col-span-12'>
                    {/* Galery mempelai */}
                      <div 
                        className="mb-7 px-7 grid grid-rows-1 gap-y-5 col-span-12 inline-flex items-center justify-center w-full"
                      >
                        <div className='flex bg-white w-full h-full'>
                          <Image
                            src={m_Pic1}
                            className='w-full bg-contain bg-no-repeat flex justify-center shadow-[2px_2px_5px_2px_rgba(0,0,0,0.06)]'
                            alt="."
                          />          
                        </div>
                        <div className='flex bg-white w-full h-full'>
                          <Image
                            src={m_Pic2}
                            className='w-full bg-contain bg-no-repeat flex justify-center shadow-[2px_2px_5px_2px_rgba(0,0,0,0.06)]'
                            alt="."
                          />          
                        </div>
                        <div className='grid grid-cols-2 gap-x-3'>
                          <div className='bg-white w-full h-full'>
                            <Image
                              src={m_Pic3}
                              className='w-full bg-contain bg-no-repeat flex justify-center shadow-[2px_2px_5px_2px_rgba(0,0,0,0.06)]'
                              alt="."
                            />          
                          </div>
                          <div className='bg-white w-full h-full'>
                            <Image
                              src={m_Pic4}
                              className='w-full bg-contain bg-no-repeat flex justify-center shadow-[2px_2px_5px_2px_rgba(0,0,0,0.06)]'
                              alt="."
                            />          
                          </div>
                        </div>
                        <div className='flex bg-white w-full h-full'>
                          <Image
                            src={m_Pic5}
                            className='w-full bg-contain bg-no-repeat flex justify-center shadow-[2px_2px_5px_2px_rgba(0,0,0,0.06)]'
                            alt="."
                          />          
                        </div>
                        <div className='grid grid-cols-2 gap-x-3'>
                          <div className='bg-white w-full h-full'>
                            <Image
                              src={m_Pic6}
                              className='w-full bg-contain bg-no-repeat flex justify-center shadow-[2px_2px_5px_2px_rgba(0,0,0,0.06)]'
                              alt="."
                            />          
                          </div>
                          <div className='bg-white w-full h-full'>
                            <Image
                              src={m_Pic7}
                              className='w-full bg-contain bg-no-repeat flex justify-center shadow-[2px_2px_5px_2px_rgba(0,0,0,0.06)]'
                              alt="."
                            />          
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )} 
              />

              {/* Tanda Kasih */}
              <ScrollContainer
                content = {(
                  <div 
                    className="w-full grid grid-cols-12 px-7 transform bg-[url('/assets/Golden-black/mobile/m_Dekor3.png')] bg-cover bg-no-repeat bg-center py-[100px] -translate-y-[12rem]"
                    id="hadiah"
                  >
                    <div className='col-span-12 px-7 bg-[#353B3C] rounded-[18px] py-[52px] translate-y-[10rem]'>
                      
                      <div className={'bg-clip-text text-transparent bg-gradient-to-r from-[#C8A882] to-[#907658] font-Suranna text-[25px] flex justify-center items-center w-full text-[25px]'}>
                        Tanda Kasih
                      </div>

                      <div className='inline-flex items-center justify-center w-full'>
                        <hr class="w-36 h-px bg-[#A2999E] border-0 justify-center items-center text-center"></hr>
                      </div>

                      <div className='font-Suranna text-[#A2999E] flex justify-center items-center w-full text-[17px] pt-3 text-center mt-6'>
                        <p>Do’a restu Anda merupakan karunia yang amat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberikan kado ke alamat berikut atau mengirim amplop secara <i>cashless/digital</i>.</p>
                      </div>

                      <Accordion
                        _isOpen={isOpen}
                        _dataStructure={accordionStructure}
                      />

                      <Accordion2
                        _isOpen2={isOpen2}
                        _dataStructure={accordionStructure2}
                      />
                       
                    </div>
          
                  </div>
                )}
              />

              {/* Chat Form */}
              <ScrollContainer
                content = {(
                  <div 
                    className="w-full bg-cover px-7 bg-[url('/assets/Golden-black/mobile/m_Bg_Ucapan.png')] h-[2000px] "
                    id="ucapan"
                  >
                    
                    <div className={'pt-[100px] font-Suranna bg-clip-text text-transparent bg-gradient-to-r from-[#C8A882] to-[#907658] flex justify-center text-center items-center col-span-12 text-[25px]'}>
                      <p>Ucapan dan Do’a Restu</p>
                    </div>

                    <div className='col-span-12 inline-flex items-center justify-center w-full'>
                      <hr class="w-48 h-px bg-[#C8A882] border-0 justify-center items-center text-center"></hr>
                    </div>

                    <div className='font-regular font-Suranna text-[#A2999E] text-center justify-center items-center w-full text-[12px] pt-[40px] mb-6'>
                      <p>Tulis ucapan, do&apos;a, dan pesan sukacita untuk <br></br>mempelai melalui form di bawah ini.</p>
                    </div>

                    <form method="post">
                        <input 
                          type='text' 
                          name="name" 
                          placeholder='Nama Pengirim '
                          className="w-full rounded-md py-2.5 my-[28px] px-4 border text-[12px] outline-[#A2999E] bg-white border-[#A2999E]" 
                          value={msgName}
                          onChange={(e) => {
                            setMsgName(e.target.value);
                          }}
                        />
                        <textarea 
                          rows="4"
                          name='message'
                          placeholder='Ucapan' 
                          className="w-full rounded-md py-2.5 px-4 border text-[12px] outline-[#A2999E] bg-white border-[#A2999E] mt-4" 
                          value={msgText}
                          onChange={(e) => {
                            setMsgText(e.target.value);
                          }}
                        >
                        </textarea>

                        <div className='flex justify-center items-center col-span-12 mt-[28px]'>
                          <motion.button
                            type='button'
                            className={"flex flex-cols text-[12px] mt-4 text-white justify-center items-center font-inter bg-gradient-to-r from-[#A2999E] to-[#828282] hover:cursor-pointer rounded-[18px] px-[25px] py-[9px] w-full text-center tracking-wide"}
                            onClick={() => {
                              sendMessage();
                            }}
                            whileTap={{ 
                              scale: 0.95,
                              backgroundColor: "#A0A381",
                            }}
                          >
                            <svg className='mr-1' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_615_427)">
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18481 4.09188C7.66056 3.0166 9.47184 2.50376 11.2922 2.64578C13.1127 2.78779 14.8225 3.57533 16.1136 4.86646C17.4048 6.1576 18.1923 7.86743 18.3343 9.68784C18.4763 11.5082 17.9635 13.3195 16.8882 14.7953C15.8129 16.271 14.2459 17.3142 12.4695 17.7368C10.8008 18.1338 9.05045 17.9587 7.4976 17.2451L3.2752 18.6764C2.99905 18.77 2.69371 18.6987 2.48753 18.4926C2.28134 18.2864 2.21008 17.981 2.30369 17.7049L3.73501 13.4825C3.02143 11.9296 2.84628 10.1793 3.24328 8.51054C3.66589 6.73417 4.70906 5.16716 6.18481 4.09188ZM11.1731 4.17336C9.71675 4.05975 8.26772 4.47002 7.08713 5.33025C5.90653 6.19047 5.07199 7.44408 4.7339 8.86517C4.39581 10.2863 4.5764 11.7814 5.24313 13.0811C5.33774 13.2655 5.35358 13.4804 5.28703 13.6767L4.25302 16.7271L7.30336 15.6931C7.49967 15.6265 7.71456 15.6423 7.89899 15.737C9.19871 16.4037 10.6938 16.5843 12.1149 16.2462C13.536 15.9081 14.7896 15.0736 15.6498 13.893C16.5101 12.7124 16.9203 11.2633 16.8067 9.80701C16.6931 8.35068 16.0631 6.98282 15.0302 5.94991C13.9973 4.917 12.6294 4.28697 11.1731 4.17336Z" fill="white"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6317 7.38272C11.0971 7.02675 11.669 6.83105 12.2609 6.83105C12.8958 6.83105 13.5079 7.05626 13.9899 7.46293C14.0705 7.50431 14.1451 7.56079 14.2094 7.63216C14.6724 8.14668 14.9462 8.81017 14.9326 9.51924C14.9188 10.2348 14.6137 10.9357 14.0284 11.521L14.0208 11.5286L14.0207 11.5286L11.2627 14.21C10.9654 14.4991 10.492 14.4991 10.1946 14.21L7.47256 11.5635C7.19774 11.3541 6.96688 11.0923 6.79346 10.793C6.61009 10.4766 6.495 10.1252 6.45561 9.76157C6.41622 9.39794 6.4534 9.03009 6.56476 8.68169C6.67612 8.33329 6.85919 8.01207 7.10218 7.7387C7.34518 7.46533 7.64272 7.24586 7.97566 7.09442C8.3086 6.94299 8.66955 6.86293 9.0353 6.85942C9.40104 6.8559 9.76347 6.929 10.0993 7.07402C10.2888 7.15586 10.4674 7.25959 10.6317 7.38272ZM11.4937 8.65693L11.3033 8.91078C11.1762 9.08025 10.9846 9.18953 10.774 9.21265C10.5634 9.23576 10.3526 9.17065 10.1918 9.03279L9.92366 8.80295C9.9011 8.78362 9.87969 8.76299 9.85953 8.74116C9.75647 8.62962 9.6312 8.54088 9.49178 8.48067C9.35236 8.42047 9.20188 8.39011 9.05002 8.39157C8.89816 8.39303 8.74829 8.42627 8.61005 8.48915C8.47182 8.55203 8.34828 8.64315 8.24738 8.75665C8.14649 8.87016 8.07048 9.00353 8.02424 9.14819C7.978 9.29284 7.96257 9.44558 7.97892 9.59656C7.99528 9.74754 8.04306 9.89343 8.1192 10.0248C8.19534 10.1562 8.29815 10.2702 8.42101 10.3595C8.45056 10.381 8.47853 10.4045 8.50472 10.43L10.7287 12.5922L12.9485 10.434C13.2798 10.1012 13.3953 9.7692 13.4006 9.48978C13.4053 9.24659 13.3275 8.99815 13.1657 8.77485C13.1306 8.75045 13.0969 8.72276 13.0653 8.69178C12.8505 8.48122 12.5617 8.36328 12.2609 8.36328C11.9771 8.36328 11.704 8.46825 11.4937 8.65693Z" fill="white"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_615_427">
                              <rect width="20" height="20" fill="white" transform="translate(0.310318 0.669922)"/>
                              </clipPath>
                              </defs>
                            </svg>
                            kirim ucapan
                          </motion.button>
                        </div>
                    </form>

                    {/* Chat List */}
                    <ScrollContainer
                      content = {(
                        <div 
                          id="ucapan"
                          className="w-full bg-cover "
                        >
                          <div className="w-full py-[100px]">

                            {/* Message List */}
                            <div className={'grid grid-cols-1 gap-y-3 overflow-x-auto w-full max-h-[700px] rounded-xl ' + (msgReceived.length >= 5 ? 'pr-2' : '')}>
                              <AnimatePresence initial={false}>

                                { msgReceived.length > 0 ? (
                                  msgReceived.map((item, index) => (

                                  <motion.div 
                                    key={index} 
                                    initial={{ opacity: 0, x: -50, scale: 0.3 }}
                                    animate={{ opacity: .9, x: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.5, transition: { duration: 2 } }}
                                    className='justify-center items-center border bg-white rounded-xl py-4 px-7 opacity-90'
                                  >
                                    <div className={Playfair_Display_SC.className + ' justify-center items-center w-full text-[17px] capitalize tracking-wide mb-2'}>
                                      {item?.name || '-'}
                                    </div>
                                    <hr/>

                                    <div className='justify-center items-center w-full text-[12.5px] pt-3 mb-2'>
                                      <p>{item?.message || ''}</p>
                                    </div>
                                    <div className={Arapey.className + ' text-[#8F907E] justify-center items-center w-full text-[11px] pt-2 text-right opacity-60'}>
                                      {/* <p><FontAwesomeIcon icon={faClock} className='text-[9px]' />&nbsp; 12 Januari 2024, pukul 20.40</p> */}
                                      <p><FontAwesomeIcon icon={faClock} className='text-[9px]' />&nbsp; {helper.formatDate(item?.created_at, "DD MMM YYYY, pukul hh:mm") || '-'}</p>
                                    </div>
                                  </motion.div>

                                ))) : (
                                  <>
                                    <div className='justify-center items-center border bg-white rounded-xl py-4 px-7 opacity-90'>
                                      <div className='justify-center items-center w-full text-[12.5px] pt-3 mb-2 text-center'>
                                        <p>Jadilah yang pertama memberi ucapan dan do&apos;a untuk kedua mempelai</p>
                                      </div>

                                      <div className={Arapey.className + ' text-[#8F907E] justify-center items-center w-full text-[11px] pt-2 text-center opacity-60'}>
                                        <p>Laungharmoni</p>
                                      </div>
                                    </div>
                                    <div className='justify-center items-center border bg-white rounded-xl py-4 px-7 opacity-50'></div>
                                    <div className='justify-center items-center border bg-white rounded-xl py-4 px-7 opacity-20'></div>
                                  </>
                                )}

                              </AnimatePresence>
                            </div>
                          </div>
                        </div>
                      )}
                    />

                  </div>
                )}
              />


              {/* Thank You */}
              <ScrollContainer
                content = {(
                  <div className="w-full justtify-center bg-[url('/assets/Golden-black/mobile/m_Dekor2.png')] transform -translate-y-[85px] bg-cover grid grid-cols-12 p-7 py-7">
                    <div className='col-span-12'>
                      
                      <div className={'font-Suranna text-[25px] flex bg-clip-text text-transparent bg-gradient-to-r from-[#C8A882] to-[#907658] justify-center items-center col-span-5 text-right mt-5'}>
                        <label className="mr-3">Terima kasih</label> 
                      </div>

                      <div className='inline-flex items-center justify-center w-full'>
                        <hr class="w-36 h-px bg-[#C8A882] border-0 justify-center items-center text-center"></hr>
                      </div>
                      
                      <div className='font-Suranna flex justify-center items-center text-[#A2999E] w-full text-[17px] pt-[40px] text-center'>
                        <p>Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir<b></b> dan memberikan do’a restu kepada kedua<b></b> mempelai.</p>
                      </div>
                      <div className='font-Suranna flex justify-center items-center text-[#A2999E] w-full text-[17px] pt-[40px] text-center'>
                        <p>Salam hangat,</p>
                      </div>

                      <div className='font-Suranna flex justify-center items-center w-full text-[38px] bg-clip-text text-transparent bg-gradient-to-r from-[#C8A882] to-[#907658] pt-5 text-center pb-[40px]'>
                        <h1>Meyla & Imran</h1>
                      </div>

                    </div>
                  </div>
                )}
              />

<              div className="w-full bg-cover">
                <div className='relative w-full'>
                  <Image
                    src={Dekor3}
                    className='transform -translate-y-[225px] w-full flex justify-center'
                    alt="."
                  />
                </div>
              </div>

              {/* Footer */}
              <footer className="bg-[#A2999E] transform -translate-y-[230px] h-auto flex flex-col justify-center items-center text-white font-inter">
                <Image
                    src={ImgLH_IconWhite}
                    className='pt-6'
                    alt="."
                    width={200}
                    height={69}
                  />

                <div className={'flex justify-center items-center w-full text-[9.5px] pt-[17px] text-center font-regular tracking-wide'}>
                  <p className=''>
                    Mau undangan pernikahan seperti ini?<br></br>
                    Ayo pesan sekarang juga lewat sosial media kami:
                  </p>
                </div>

                <div className={'flex justify-center items-center w-full text-[10px] pt-[17px] text-center font-regular tracking-wide'}>
                  <p className='flex flex-cols'>
                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.21049 2.33391C8.22599 1.34829 6.91677 0.805259 5.52187 0.804688C2.64775 0.804688 0.308524 3.14373 0.307402 6.01873C0.307 6.93778 0.547114 7.83482 1.00345 8.62559L0.263672 11.3277L3.02793 10.6026C3.78955 11.018 4.64707 11.2369 5.51979 11.2372H5.52191V11.2372C8.39572 11.2372 10.7351 8.89796 10.7364 6.0229C10.7369 4.62958 10.195 3.3195 9.21049 2.33391ZM5.52189 10.3566H5.52013C4.74247 10.3563 3.97969 10.1473 3.31425 9.75248L3.15601 9.65856L1.51566 10.0888L1.95351 8.48953L1.85045 8.32553C1.41662 7.6355 1.18749 6.83794 1.18783 6.01902C1.18876 3.62944 3.13304 1.68537 5.52364 1.68537C6.68125 1.68573 7.76944 2.13715 8.58773 2.95636C9.40599 3.77557 9.85637 4.86449 9.8559 6.02254C9.85493 8.41231 7.91071 10.3566 5.52189 10.3566Z" fill="white"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.8992 7.11025C7.76892 7.04504 7.12833 6.72989 7.00891 6.68637C6.88949 6.6429 6.80262 6.62116 6.71577 6.75159C6.62893 6.88199 6.37922 7.17549 6.30321 7.26246C6.22723 7.34937 6.1512 7.36032 6.02094 7.29504C5.89066 7.22982 5.47084 7.09226 4.97319 6.64838C4.58584 6.30287 4.32437 5.87624 4.24834 5.74577C4.17235 5.61536 4.24025 5.54485 4.30549 5.47987C4.3641 5.42147 4.43579 5.32771 4.50094 5.25161C4.56607 5.17556 4.58779 5.12116 4.63122 5.03427C4.67465 4.9473 4.65296 4.87121 4.62036 4.80601C4.58779 4.7408 4.32722 4.09949 4.21866 3.83857C4.11287 3.58455 4.00547 3.61897 3.92548 3.61492C3.8496 3.61113 3.76263 3.61035 3.67578 3.61035C3.58893 3.61035 3.44775 3.64297 3.32835 3.77338C3.20893 3.90383 2.87231 4.21906 2.87231 4.8603C2.87231 5.50163 3.33919 6.12118 3.40434 6.20811C3.46947 6.29511 4.32308 7.61108 5.63007 8.17544C5.94093 8.3097 6.18362 8.38986 6.37283 8.44989C6.68495 8.54908 6.96899 8.53507 7.19348 8.50152C7.44382 8.46411 7.96435 8.18634 8.07291 7.88203C8.1815 7.57766 8.1815 7.31676 8.1489 7.26244C8.11635 7.20811 8.02948 7.17549 7.8992 7.11025Z" fill="white"/>
                    </svg>
                  </p>
                  <p>+62 851-8300-3387</p>
                </div>

                <div className={'flex justify-center items-center w-full text-[10px] pt-[8px] text-center font-regular tracking-wide'}>
                  <p className='flex flex-cols'>
                    <svg className='mr-1' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_347_786)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.00007 0.683594C3.03063 0.683594 0.616943 3.09728 0.616943 6.06672C0.616943 9.03616 3.03063 11.4498 6.00007 11.4498C8.96951 11.4498 11.3832 9.03616 11.3832 6.06672C11.3832 3.09728 8.96951 0.683594 6.00007 0.683594ZM7.86315 3.86328C7.62345 3.05204 7.25402 2.26418 6.74761 1.54268C8.16335 1.77516 9.35506 2.65081 10.0163 3.86328H7.86315ZM4.01629 3.86328H1.98418C2.62645 2.69414 3.75835 1.83678 5.11224 1.57283C4.61543 2.28366 4.24768 3.05424 4.01629 3.86328ZM7.03324 3.86328H4.84658C5.08733 3.12684 5.44935 2.42865 5.93991 1.78285C6.43048 2.42865 6.79249 3.12684 7.03324 3.86328ZM1.41444 6.06672C1.41444 5.57962 1.49474 5.10051 1.63966 4.66078H3.8285C3.66277 5.57901 3.66267 6.51223 3.82056 7.43018L1.63098 7.44658C1.48669 7.00819 1.41444 6.5457 1.41444 6.06672ZM4.63555 7.4294C4.45141 6.51148 4.45143 5.57051 4.63553 4.66078H7.2443C7.42836 5.57009 7.42871 6.50291 7.26063 7.41279L4.63555 7.4294ZM8.06811 7.40344C8.22539 6.49409 8.21729 5.56981 8.05144 4.66078H10.3605C10.5054 5.10051 10.5857 5.57962 10.5857 6.06672C10.5857 6.52762 10.5139 6.97289 10.3933 7.38701L8.06811 7.40344ZM6.74867 10.5901C7.27134 9.85167 7.64889 9.04572 7.88125 8.20109L10.0608 8.18489C9.4065 9.43917 8.19021 10.3483 6.74867 10.5901ZM5.93965 10.3504C5.44017 9.69515 5.07019 8.98006 4.83661 8.22665L7.05074 8.21055C6.80936 8.96451 6.43903 9.68734 5.93965 10.3504ZM5.11199 10.5607C3.74939 10.2958 2.60896 9.42225 1.9663 8.24365L3.99908 8.22752C4.23085 9.04556 4.60657 9.83982 5.11199 10.5607Z" fill="white"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_347_786">
                      <rect width="11" height="11" fill="white" transform="translate(0.5 0.566406)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </p>
                  <p>Laungharmoni.com</p>
                </div>

                <div className={'flex justify-center items-center w-full text-[10px] pt-[8px] text-center font-regular tracking-wide'}>
                  <p className='flex flex-cols'>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.00001 3.33594C4.51853 3.33594 3.29102 4.54229 3.29102 6.04493C3.29102 7.54758 4.49737 8.75393 6.00001 8.75393C7.50266 8.75393 8.709 7.52641 8.709 6.04493C8.709 4.56345 7.48149 3.33594 6.00001 3.33594ZM6.00001 7.78038C5.04763 7.78038 4.26456 6.99731 4.26456 6.04493C4.26456 5.09255 5.04763 4.30948 6.00001 4.30948C6.95239 4.30948 7.73546 5.09255 7.73546 6.04493C7.73546 6.99731 6.95239 7.78038 6.00001 7.78038Z" fill="white"/>
                      <path d="M8.81468 3.88572C9.15365 3.88572 9.42844 3.61093 9.42844 3.27196C9.42844 2.93299 9.15365 2.6582 8.81468 2.6582C8.47572 2.6582 8.20093 2.93299 8.20093 3.27196C8.20093 3.61093 8.47572 3.88572 8.81468 3.88572Z" fill="white"/>
                      <path d="M10.402 1.68511C9.85175 1.11368 9.06868 0.817383 8.17979 0.817383H3.82C1.97873 0.817383 0.751221 2.0449 0.751221 3.88617V8.22479C0.751221 9.13484 1.04752 9.91791 1.64011 10.4893C2.21154 11.0396 2.97344 11.3147 3.84117 11.3147H8.15863C9.06868 11.3147 9.83059 11.0184 10.3809 10.4893C10.9523 9.93908 11.2486 9.15601 11.2486 8.24595V3.88617C11.2486 2.99728 10.9523 2.23537 10.402 1.68511ZM10.3174 8.24595C10.3174 8.90204 10.0846 9.43114 9.7036 9.79093C9.32265 10.1507 8.79355 10.3412 8.15863 10.3412H3.84117C3.20625 10.3412 2.67715 10.1507 2.29619 9.79093C1.91524 9.40998 1.72477 8.88087 1.72477 8.22479V3.88617C1.72477 3.25125 1.91524 2.72214 2.29619 2.34119C2.65598 1.9814 3.20625 1.79093 3.84117 1.79093H8.20096C8.83588 1.79093 9.36498 1.9814 9.74593 2.36236C10.1057 2.74331 10.3174 3.27241 10.3174 3.88617V8.24595Z" fill="white"/>
                    </svg>
                  </p>
                  <p>@laungharmoni</p>
                </div>

                <div className={'flex justify-center items-center w-full text-[9.5px] pt-[17px] text-center font-regular tracking-wide drop-shadow-2xl'}>
                  <p className=''>©2024 Laungharmoni.com ❤ All rights reserved.</p>
                </div>
              </footer>
            </div>

          </section>

          {/* Desktop */}
          <section 
            className="flex flex-col w-full h-full bg-cover bg-fixed bg-center justify-center items-center hidden lg:block"
            style={{ backgroundImage: `url(${BG.src})` }}
          >

            <div className="items-center justify-center grid grid-cols-1 w-full px-0 md:px-16 xl:px-60">

              {/* Slider Top */}
              <div className="w-full h-auto">
                <MobileImgSlider
                  _data = {up_SliderStructure}
                  _height={"h-[506px]"}
                  _direction={1}
                  _scrollStiffness={250}
                  _scrollDamping={50}
                  _scrollInterval={4000}
                  _scrollDuration={0.5}
                />  
              </div>

              {/* Header Decor */}
              <ScrollContainer
                content = {(
                  <div className="w-full bg-white grid grid-cols-12 px-24 py-5">
                    <div className='justify-center items-center col-span-6'>
                      <div className='relative w-full h-full flex justify-center items-start'>
                        <div 
                          className='absolute -bottom-14 -left-8 w-[389.3px] h-[254px] bg-cover drop-shadow-[3px_1.5px_rgba(0,0,0,0.05)] flex justify-center z-[20]'
                          style={{ backgroundImage: `url(${imgDecor1.src})` }}
                        >
                        </div>
                      </div>
                    </div>

                    <div className='flex justify-center items-end col-span-6'>
                      <Image
                        src={imgDecor2}
                        alt="."
                      />
                    </div>
                  </div>
                )}
              />

              {/* Countdown */}
              <div className="h-auto flex flex-col justify-center items-center shadow-[0px_-5px_5px_0px_rgba(0,0,0,0.1)] bg-transparent backdrop-blur-sm px-24 pt-14 pb-10">
                  <div className="w-full grid grid-cols-12">
                    
                    <div className='text-white justify-center items-center col-span-6'>
                      <div className={Playfair_Display_SC.className + ' text-xs tracking-wider'}>
                        Undangan Pernikahan
                      </div>
                      <div className={Playfair_Display_SC.className + ' text-[42px] tracking-normal drop-shadow-[1.5px_1.5px_rgba(0,0,0,0.25)] mt-[-7px]'}>
                        Sabil <label className='text-[#D8D8D8]'>&</label> Rully
                      </div>
                    </div>

                    <div className='col-span-6'>
                      <Countdown 
                        project = 'Rully_Sabil' 
                        target_date = '2024-05-12'
                      />  
                    </div>

                  </div>
              </div>
              
              {/* Opening Name */}
              <ScrollContainer 
                content = {(
                  <div className="w-full bg-white grid grid-cols-12 p-24">
                    <div className='flex justify-start items-end col-span-7'>
                      <div>
                        <div className='text-[12.5px] tracking-normal pt-16'>
                          <label className='drop-shadow-[1.5px_1.5px_rgba(0,0,0,0.25)] leading-6'>
                            <label className='italic tracking-wide'>Assalamu’alaikum warahmatullahi wabarakatuh.</label> Dengan memohon rahmat <br />
                            dan ridho Allah SWT, izinkan kami mengundang Bapak/Ibu/Saudara/i <br />
                            untuk menghadiri pernikahan kami: <br />
                          </label>
                        </div>

                        <div className={Playfair_Display_SC.className + ' text-2xl text-[#8F8C7B] pt-10 pb-2'}>
                          <label className='leading-6'>
                            Salsabila Rifdah, S.E.
                          </label>
                        </div>
                        <div className='text-sm pb-5'>
                          Anak pertama dari Bapak Japar, S.Pd., M.Ak. dan Ibu E. Juniarti, S.Pd.
                        </div>

                        <div className={Kapakana.className + ' text-2xl text-[#8F8C7B]'}>
                          dengan
                        </div>

                        <div className={Playfair_Display_SC.className + ' text-2xl text-[#8F8C7B] pt-5 pb-2'}>
                          <label className='leading-6'>
                            Rully Abdul Haq, S.Pt.
                          </label>
                        </div>
                        <div className='text-sm pb-16'>
                          Anak kedua dari Bapak Misbahudin dan Ibu Wiwin Widiawati
                        </div>
                      </div>
                    </div>

                    <div className='justify-center items-center col-span-5'>
                      <div className='relative w-full h-full'>
                        <div 
                          className='absolute w-[400px] h-full -left-10 bg-contain bg-no-repeat flex justify-center'
                          style={{ backgroundImage: `url(${ImgS2.src})` }}
                        >
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              />

              {/* Date */}
              <ScrollContainer 
                content = {(
                  <div 
                    className="w-full bg-cover bg-fixed bg-center h-auto flex flex-col"
                    style={{ backgroundImage: `url(${imgSolid1.src})` }}
                  >

                    <div className="w-full grid grid-cols-12 p-24 pt-16 pb-32">
                      <div className='justify-center items-center col-span-7 p-5'>
                        <div className='relative w-full h-full flex justify-center items-start'>
                          <div 
                            className='absolute w-[574px] h-full -left-7 bg-contain bg-no-repeat flex justify-center'
                            style={{ backgroundImage: `url(${ImgS3.src})` }}
                          >
                          </div>
                        </div>
                      </div>
                      <div className='flex justify-center items-center col-span-5'>
                        <div>
                          <div className='text-[12.5px] tracking-normal pt-14'>
                            <label className='drop-shadow-[1.5px_1.5px_rgba(0,0,0,0.25)] leading-6'>
                              Pernikahan kami akan dilaksanakan pada :
                            </label>
                          </div>

                          <div className={Playfair_Display_SC.className + ' text-[60px] text-[#838473] pt-7 pb-2'}>
                            <div className='leading-10'>
                              Minggu,
                            </div>
                            <div className={Arapey.className}>
                              12/<label className={Playfair_Display_SC.className + ' text-[50px]'}>Mei</label>/2024
                            </div>
                          </div>

                          <div className='text-sm text-[#838473] mb-8'>
                            <label className='bg-white rounded-full py-2 px-5'>
                              Akad Nikah : &nbsp;<label className={Arapey.className + ' text-[17px] tracking-wide'}>08.00 - 10.00</label> WIB
                            </label>
                          </div>

                          <div className='text-sm text-[#838473] mb-8'>
                            <label className='bg-white rounded-full py-2 px-5'>
                              Acara Resepsi : &nbsp;<label className={Arapey.className + ' text-[17px] tracking-wide'}>11.00 - 14.00</label> WIB
                            </label>
                          </div>

                          <div className='text-sm pb-16'>
                            &nbsp;<FontAwesomeIcon icon={faLocationDot} className='text-[#838473]' />&nbsp;  Gedung KORPRI - Kabupaten Cianjur, Jawa Barat
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                )} 
              />

              {/* Page Break */}
              <div className="w-full h-full bg-cover">
                <div className='relative w-full h-full'>
                  <div 
                    className='absolute w-full h-[200px] -top-[67px] bg-contain bg-no-repeat flex justify-center'
                    style={{ backgroundImage: `url(${imgDecor3.src})` }}
                  >
                  </div>
                </div>
              </div>

              {/* Maps */}
              <ScrollContainer 
                content = {(
                  <div className="w-full bg-[#EDE9E7] grid grid-cols-12 p-24 gap-5">
                    
                    
                    <div className={Playfair_Display_SC.className + ' justify-center items-center col-span-4 text-[25px]'}>
                      Petunjuk Lokasi
                    </div>

                    <div className='justify-end items-end col-span-8 text-right'>
                      Gedung KORPRI Cianjur <br />
                      <label className='text-[11.5px]'>Jl. Raya Bandung No.65, Sabandar, Kec. Cianjur, Kabupaten Cianjur, Jawa Barat </label>
                    </div>

                    <div className='justify-center items-center col-span-12 mt-5'>
                      
                      <div className="max-w-screen-lg mx-auto bg-white p-2 shadow-md rounded-md">
                        <div className="relative w-full h-[300px]">
                          <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.681775986828!2d107.1548687!3d-6.8085087999999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68531b9962435b%3A0x986824c5a9f4f408!2sGedung%20KORPRI%20Cianjur!5e0!3m2!1sid!2sid!4v1711700085767!5m2!1sid!2sid" 
                            allowFullScreen=""
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute top-0 left-0 w-full h-full"
                          >
                          </iframe>
                        </div>
                      </div>

                      <a 
                        type='button'
                        href='https://maps.app.goo.gl/TTs53xfK5SLTEBAZA'
                        target="_blank"
                        className={Playfair_Display_SC.className + " text-white bg-[#8F907E] hover:bg-[#7c7d6a] hover:cursor-pointer rounded-md text-sm px-4 py-2.5 w-full text-center tracking-wide mt-5"}>
                          BUKA PETUJUK RUTE
                      </a>

                    </div>
                  </div>
                )}
              />

              {/* Notes */}
              <ScrollContainer
                content = {(
                  <div className="w-full bg-white grid grid-cols-12 p-24 py-10 gap-5">
                    <div className={'font-Suranna text-[19px] text-[#9D7265] justify-center items-center col-span-5 text-right pr-6'}>
                      ✦ <br></br> Surat Ar-Rum Ayat 21 <br></br>✦
                    </div>

                    <div className='font-Suranna justify-center items-center col-span-7 text-[12.5px] text-justify pl-5 pt-3 '>
                      “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan diantaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”
                    </div>
                  </div>
                )}
              />

              {/* Galery */}
              <ScrollContainer 
                content = {(

                  <div 
                    id="galeri"
                    className="relative w-full bg-cover bg-fixed bg-center grid grid-cols-12"
                    style={{ backgroundImage: `url(${imgSolid2.src})` }}
                  >
                    <div 
                      className="w-auto h-[745px] bg-cover bg-no-repeat bg-center p-52 col-span-12"
                      style={{ backgroundImage: `url(${ImgS6.src})` }}
                    ></div>

                    <div className='col-span-12 absolute top-0 right-0 left-0 h-full'>
                      <div className='w-2/4 h-1/2 inset-1/2 transform translate-x-1/2 translate-y-1/2'>
                        
                        <div className={Playfair_Display_SC.className + ' flex justify-end items-end w-full text-[20px] text-white px-[59px]'}>
                          Galeri Mempelai
                        </div>

                        <MobileImgGallery 
                          _data={galeri_mobileSliderStructure}
                        />

                        <motion.div 
                          className={Kapakana.className + ' flex justify-start items-center w-auto text-[20px] text-white px-[75px] leading-[8px] tracking-wide opacity-75'}
                          initial={{ marginLeft: "0px" }}
                          animate={{ 
                            marginLeft: ["0px", "10px", "0px"] 
                          }}
                          transition={{
                            duration: 2,
                            ease: "easeInOut",
                            times: [0, 0.2, 0.5, 0.8, 0.9, 1],
                            repeat: Infinity,
                            repeatDelay: 4,
                          }}
                        >
                          Geser untuk melihat 
                          <motion.div 
                            className="w-[25px] h-[10px] bg-contain bg-no-repeat bg-center ml-[5px] mt-4"
                            style={{ backgroundImage: `url(${m_IcoArrow.src})` }}
                          ></motion.div>
                        </motion.div>

                      </div>
                    </div>
                  </div>
                )} 
              />

              {/* Tanda Kasih */}
              <ScrollContainer
                content = {(
                  <div className="w-full bg-white grid grid-cols-12 px-24 pt-20 mt-[-10px]">
                    <div className='col-span-12'>
                      
                      <div className={Playfair_Display_SC.className + ' flex justify-center items-center w-full text-[25px]'}>
                        Tanda Kasih
                      </div>

                      <div className='flex justify-center items-center w-full text-[12.5px] pl-5 pt-3 text-center mt-6'>
                        <p>Do’a restu Anda merupakan karunia yang amat berarti bagi kami. Dan jika memberi adalah ungkapan<br/> tanda kasih Anda, Anda dapat memberikan kado di alamat berikut atau mengirim amplop secara <i>cashless</i>.</p>
                      </div>

                      <Accordion
                        _isOpen={isOpen}
                        _dataStructure={accordionStructure}
                      />

                      {/* <div className='flex justify-center items-center w-full mt-6'>
                        <button 
                          type='button'
                          className={Playfair_Display_SC.className + " text-white bg-[#8F907E] hover:bg-[#7c7d6a] hover:cursor-pointer rounded-md text-sm px-16 py-2.5 w-auto text-center tracking-wide"}
                          onClick={(e) => {
                            alert('x');
                          }}
                        >
                            KIRIM HADIAH
                        </button>
                      </div> */}

                      {/* Bank Rully */}
                      {/* <div className='flex justify-center items-center w-full mt-10'>
                        <div 
                          className='relative bg-center bg-contain bg-no-repeat w-[350px] h-[218px]'
                          style={{ backgroundImage: `url(${ImgCard1.src})` }}
                        >

                          <button 
                            type='button'
                            className={Arapey.className + " absolute bottom-5 right-5 shadow-[2px_2px_5px_2px_rgba(0,0,0,0.1)] text-[#8F907E] bg-white hover:bg-slate-500 hover:cursor-pointer hover:text-white rounded-xl text-sm px-5 py-1 w-auto text-center tracking-wide"}
                            onClick={(e) => {
                              copyToClipboard("1262286006");
                            }}
                          >
                            <FontAwesomeIcon icon={faCopy} className='text-xs' />&nbsp;Copy
                          </button>

                        </div>
                      </div> */}

                      {/* Bank Sabil */}
                      {/* <div className='flex justify-center items-center w-full mt-1'>
                        <div 
                          className='relative bg-center bg-contain bg-no-repeat w-[350px] h-[218px]'
                          style={{ backgroundImage: `url(${ImgCard2.src})` }}
                        >

                          <button 
                            type='button'
                            className={Arapey.className + " absolute bottom-5 right-5 shadow-[2px_2px_5px_2px_rgba(0,0,0,0.1)] text-[#8F907E] bg-white hover:bg-slate-500 hover:cursor-pointer hover:text-white rounded-xl text-sm px-5 py-1 w-auto text-center tracking-wide"}
                            onClick={(e) => {
                              copyToClipboard("1831517102");
                            }}
                          >
                            <FontAwesomeIcon icon={faCopy} className='text-xs' />&nbsp;Copy
                          </button>

                        </div>
                      </div> */}

                      {/* Alamat */}
                      {/* <div className='flex justify-center items-center w-full mt-6'>
                        <div className='text-center bg-center bg-contain bg-no-repeat w-[350px] h-[218px]'>

                          <div className={Playfair_Display_SC.className + ' flex justify-center items-center w-full text-[25px]'}>
                            Alamat Paket
                          </div>
                          
                          <div className={Arapey.className + ' justify-center items-center w-full text-md mt-5'}>
                            <p>Rully Abdul Haq &nbsp;-&nbsp; 081100009999</p>
                            <p>Jl. Lorem Ipsum no. 404, Lorem, Ipsum 169100</p>
                          </div>

                          <button 
                            type='button'
                            className={Arapey.className + " mt-5 shadow-[2px_2px_5px_2px_rgba(0,0,0,0.1)] text-[#8F907E] bg-white hover:bg-slate-500 hover:cursor-pointer hover:text-white rounded-xl text-sm px-5 py-1 w-auto text-center tracking-wide"}
                            onClick={(e) => {
                              copyToClipboard("Rully Abdul Haq\n081100009999\nJl. Lorem Ipsum no. 404, Lorem, Ipsum 169100");
                            }}
                          >
                            <FontAwesomeIcon icon={faCopy} className='text-xs' />&nbsp;Copy
                          </button>

                        </div>
                      </div> */}

                      <div 
                        className='justify-center items-end h-[290px] bg-contain bg-center bg-no-repeat mt-8'
                        style={{ backgroundImage: `url(${ImgS7.src})` }}
                      >
                      </div>

                    </div>
                  </div>
                )}
              />

              {/* Chat Form */}
              <ScrollContainer
                content = {(
                  <div className="w-full bg-[#EDE9E7] px-24 pt-24">
                    
                    <div className={Playfair_Display_SC.className + ' justify-center items-center w-full text-[25px]'}>
                      Ucapan dan do&apos;a restu
                    </div>

                    <div className='justify-center items-center w-full text-[11px] pt-3 mt-6 mb-2'>
                      <p>Tulis ucapan, do&apos;a, dan pesan sukacita untuk mempelai melalui form di bawah ini.</p>
                    </div>

                    <form method="post" className="ml-auo space-y-4">
                      
                      <input 
                        type='text' 
                        name="name" 
                        placeholder='Nama Pengirim . . .'
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#7c7d6a] bg-[#f2f2f0] border-[#8F907E]" 
                        value={msgName}
                        onChange={(e) => {
                          setMsgName(e.target.value);
                        }}
                      />
                      <textarea 
                        rows="4"
                        name='message'
                        placeholder='Ucapan . . .' 
                        className="w-full rounded-md py-2.5 px-4 border text-sm outline-[#7c7d6a] bg-[#f2f2f0] border-[#8F907E] mt-4" 
                        value={msgText}
                        onChange={(e) => {
                          setMsgText(e.target.value);
                        }}
                      >
                      </textarea>
                        
                      {guest.length == 0 ? (
                        <>
                          {/* Attendance Form */}
                          <div className="relative w-full mt-3 rounded-md border border-[#7c7d6a] bg-[#f2f2f0] h-auto p-1 text-sm">
                            <div className="relative w-full h-full flex items-center my-2">
                              <div className="w-full flex justify-center text-gray-400 cursor-pointer">
                                <button type='button' onClick={() => { setMsgAttendance(1); }} className=''>
                                  {/* <div className='flex justify-center items-center'><BadgeCheck size={28} className='mr-1' /></div> */}
                                  <div className='flex justify-center items-center mb-1 opacity-30'><FontAwesomeIcon icon={faFaceLaugh} className='text-2xl text-[#ffe554] rounded-full bg-[#A0A381] p-[1.2px]' /></div>
                                  <div className='flex justify-center items-center text-xs opacity-50'>Hadir</div>
                                </button>
                              </div>
                              <div className="w-full flex justify-center text-gray-400 cursor-pointer">
                                <button type='button' onClick={() => { setMsgAttendance(2); }} className=''>
                                  <div className='flex justify-center items-center mb-1 opacity-30'><FontAwesomeIcon icon={faFaceSmile} className='text-2xl text-[#ffe554] rounded-full bg-[#A0A381] p-[1.2px]' /></div>
                                  <div className='flex justify-center items-center text-xs opacity-50'>Ragu-ragu</div>
                                </button>
                              </div>
                              <div className="w-full flex justify-center text-gray-400 cursor-pointer">
                                <button type='button' onClick={() => { setMsgAttendance(0); }} className=''>
                                  <div className='flex justify-center items-center mb-1 opacity-30'><FontAwesomeIcon icon={faFaceMeh} className='text-2xl text-[#ffe554] rounded-full bg-[#A0A381] p-[1.2px]' /></div>
                                  <div className='flex justify-center items-center text-xs opacity-50'>Tidak Hadir</div>
                                </button>
                              </div>
                            </div>
                            
                            {/* <span className="bg-transparent shadow text-sm flex items-center justify-center w-1/3 rounded h-[1.88rem] transition-all duration-150 ease-linear top-[4px] absolute"></span> */}
                            <div className={"text-sm flex items-center justify-center w-1/3 rounded h-full transition-all duration-200 ease-linear top-0 absolute p-1 " + (msgAttendance == 1 ? 'left-0' : msgAttendance ==  2 ? 'left-1/3' : 'left-2/3')}>
                              <div className='bg-white shadow-sm w-full h-full rounded-md pt-2'>

                                <div className="w-full flex justify-center text-gray-400 cursor-pointer">
                                  <div>
                                    <div className='flex justify-center items-center mb-1'>
                                      <FontAwesomeIcon icon={msgAttendance == 1 ? faFaceLaugh : 
                                                            msgAttendance == 2 ? faFaceSmile : faFaceMeh} 
                                                      className='text-2xl text-[#ffe554] rounded-full bg-[#A0A381] p-[1.2px]' 
                                      />
                                    </div>
                                    <div className='flex justify-center items-center text-xs'>
                                      {msgAttendance == 1 ? 'Hadir' : 
                                      msgAttendance == 2 ? 'Ragu-ragu' : 'Tidak Hadir'}
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          {/* Attendance */}
                          <div className="relative w-full mt-3 rounded-md border border-[#7c7d6a] bg-[#f2f2f0] h-auto p-1 py-2 text-sm">
                            <div className="relative w-full h-full flex items-center my-2">
                              <div className="w-full flex justify-center text-gray-400 cursor-pointer">
                                <div className=''>
                                  <div className={Arapey.className + ' flex justify-center items-center text-[30px] mb-1'}>{attY}</div>
                                  <div className='flex justify-center items-center text-xs'>Hadir</div>
                                </div>
                              </div>
                              <div className="w-full flex justify-center text-gray-400 cursor-pointer">
                                <div className=''>
                                  <div className={Arapey.className + ' flex justify-center items-center text-[30px] mb-1'}>{attNS}</div>
                                  <div className='flex justify-center items-center text-xs'>Ragu-ragu</div>
                                </div>
                              </div>
                              <div className="w-full flex justify-center text-gray-400 cursor-pointer">
                                <div className=''>
                                  <div className={Arapey.className + ' flex justify-center items-center text-[30px] mb-1'}>{attN}</div>
                                  <div className='flex justify-center items-center text-xs'>Tidak Hadir</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}

                      <motion.button
                        type='button'
                        className={Playfair_Display_SC.className + " mt-4 text-white bg-[#8F907E] hover:bg-[#7c7d6a] hover:cursor-pointer w-full rounded-md text-sm px-16 py-2 text-center tracking-wide"}
                        onClick={() => {
                          sendMessage();
                        }}
                        whileTap={{ 
                          scale: 0.95,
                          backgroundColor: "#A0A381",
                        }}
                      >
                        kirim ucapan
                      </motion.button>

                    </form>
                  </div>
                )}
              />

              {/* Chat List */}
              <ScrollContainer
                content = {(
                  <div 
                    className="w-full bg-cover bg-[center_top_-3px] h-[1050px]"
                    style={{ backgroundImage: `url(${ImgS8.src})` }}
                  >
                    <div className="w-full p-24">
                      
                      {/* Message List */}
                      <div className={'grid grid-cols-1 gap-y-3 overflow-x-auto w-full max-h-[700px] rounded-xl ' + (msgReceived.length >= 5 ? 'pr-2' : '')}>
                        <AnimatePresence initial={false}>

                          { msgReceived.length > 0 ? (
                            msgReceived.map((item, index) => (

                            <motion.div 
                              key={index} 
                              initial={{ opacity: 0, x: -50, scale: 0.3 }}
                              animate={{ opacity: .9, x: 0, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5, transition: { duration: 2 } }}
                              className='justify-center items-center border bg-white rounded-xl py-4 px-7 opacity-90'
                            >
                              <div className={Playfair_Display_SC.className + ' justify-center items-center w-full text-[17px] capitalize tracking-wide mb-2'}>
                                {item?.name || '-'}
                              </div>
                              <hr/>

                              <div className='justify-center items-center w-full text-[12.5px] pt-3 mb-2'>
                                <p>{item?.message || ''}</p>
                              </div>
                              <div className={Arapey.className + ' text-[#8F907E] justify-center items-center w-full text-[11px] pt-2 text-right opacity-60'}>
                                {/* <p><FontAwesomeIcon icon={faClock} className='text-[9px]' />&nbsp; 12 Januari 2024, pukul 20.40</p> */}
                                <p><FontAwesomeIcon icon={faClock} className='text-[9px]' />&nbsp; {helper.formatDate(item?.created_at, "DD MMM YYYY, pukul hh:mm") || '-'}</p>
                              </div>
                            </motion.div>

                          ))) : (
                            <>
                              <div className='justify-center items-center border bg-white rounded-xl py-4 px-7 opacity-90'>
                                <div className='justify-center items-center w-full text-[12.5px] pt-3 mb-2 text-center'>
                                  <p>Jadilah yang pertama memberi ucapan dan do&apos;a untuk kedua mempelai</p>
                                </div>
                                <div className={Arapey.className + ' text-[#8F907E] justify-center items-center w-full text-[11px] pt-2 text-center opacity-60'}>
                                  <p>Laungharmoni</p>
                                </div>
                              </div>
                              <div className='justify-center items-center border bg-white rounded-xl py-4 px-7 opacity-50'></div>
                              <div className='justify-center items-center border bg-white rounded-xl py-4 px-7 opacity-20'></div>
                            </>
                          )}

                        </AnimatePresence>
                      </div>

                    </div>
                  </div>
                )}
              />

              {/* Page Break */}
              <div className="w-full h-full bg-cover">
                <div className='relative w-full h-full'>
                  <div 
                    className='absolute w-full h-[200px] -top-[67px] bg-contain bg-no-repeat flex justify-center'
                    style={{ backgroundImage: `url(${imgDecor3.src})` }}
                  >
                  </div>
                  <Image
                    src={ImgS9}
                    className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-[180px] w-[470px] flex justify-center'
                    alt="."
                  />
                </div>
              </div>

              {/* Thank You */}
              <ScrollContainer
                content = {(
                  <div className="w-full bg-[#EDE9E7] grid grid-cols-12 p-16 rounded-b-2xl">
                    <div className='col-span-12'>
                      
                      <div className={Kapakana.className + ' flex text-[55px] text-[#8F8C7B] leading-[60px] justify-center items-center col-span-5 text-right mt-24'}>
                        <label className="mr-3">Terima</label> kasih
                      </div>

                      <div className='flex justify-center items-center w-full text-[12.5px] pt-3 text-center'>
                        <p>Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/<br/>Saudara/i berkenan hadir dan memberikan do’a restu kepada kedua mempelai.</p>
                      </div>

                      <div className='flex justify-center items-center w-full text-xs pt-7 text-center tracking-wide'>
                        <i>Wassalamu’alaikum warahmatullahi wabarakatuh,</i>
                      </div>

                    </div>
                  </div>
                )}
              />

              {/* Footer */}
              <footer className="h-auto flex flex-col justify-center items-center pt-20 pb-10 text-white">
                <div className={PlusJakartaSans.className + ' flex justify-center items-center w-full text-[12.5px] pt-3 text-center'}>
                  <p className='drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]'><b>Ingin undangan pernikahan yang keren dan kekinian?</b> <br/>Anda bisa memesannya melalui website <a className='' href='http://laungharmoni.com' target='_blank'>Laungharmoni.com</a></p>
                </div>

                <Image
                  src={ImgLH_IconWhite}
                  className='w-8 pt-6 opacity-80 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]'
                  alt="."
                />

                <div className={PlusJakartaSans.className + ' flex justify-center items-center w-full text-xs pt-3 text-center font-medium tracking-normal'}>
                   <p className='drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]'>© 2024 <a className='' href='http://laungharmoni.com' target='_blank'>Laungharmoni</a> &nbsp;|&nbsp; All rights reserved.</p>
                </div>
              </footer>
            </div>

          </section>
        </>
      )}

    </main>
  );
};

export default Rully_Sabil_Inv;

