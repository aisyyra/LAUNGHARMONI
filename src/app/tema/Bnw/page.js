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


import { io } from 'socket.io-client';
import pageStyle from "./index.module.css";

// #region images
  import ImgLH_Icon from "@/assets/laung-harmoni/Icon.svg";
  import ImgLH_IconWhite from "@/assets/choral-charm/mobile/m_Logo.png";
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
  import ImgS9 from "@/assets/Bnw/mobile/m_Dekor2.png";

  import ImgCard1 from "@/assets/rully-sabil/Card1.png";
  import ImgCard2 from "@/assets/rully-sabil/Card2.png";

  import text5 from "@/assets/Bnw/mobile/m_Teks5.png";
  import text4 from "@/assets/Bnw/mobile/m_Teks4.png";
  import text3 from "@/assets/Bnw/mobile/m_Teks3.png";

  import imgDecor from "@/assets/Bnw/mobile/m_Dekor.png";
  import imgDecor1 from "@/assets/Bnw/mobile/m_Dekor1.png";
  import imgDecor2 from "@/assets/Bnw/mobile/m_Dekor2.png";
  import imgDecor3 from "@/assets/Bnw/mobile/m_Bg_Note.png";
  import imgDecor4 from "@/assets/Bnw/mobile/m_Dekor3.png";
  

  import imgSolid1 from "@/assets/Bnw/mobile/m_Bg_Waktu.png";
  import imgSolid2 from "@/assets/choral-charm/mobile/m_Galeri.png";
// #endregion

// #region mobile images
  import m_Front2 from "@/assets/Bnw/mobile/m_Bg_Awal.png";

  
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
  import m_ImgS2_1 from "@/assets/Bnw/mobile/m_Mempelai2.png";
  import m_ImgS2_2 from "@/assets/Bnw/mobile/m_Mempelai1.png";
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
  import Bunga from "@/assets/Bnw/mobile/m_Bunga.png";

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

// #endregion

// #region components
  import Countdown from "@/components/template_countdown/index2";
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
                className={"flex flex-cols text-white font-inter bg-[#474747] hover:cursor-pointer rounded-[43px] px-[25px] py-[9px] text-center tracking-wide mt-[30px]"}
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
                <p className='mt-[2px] font-semibold items-center justify-center text-[12px]'>Kirim Amplop Digital</p>
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
                className={"flex flex-cols text-white font-inter bg-[#474747] hover:cursor-pointer rounded-[43px] px-[25px] py-[9px] text-center tracking-wide mt-[30px]"}
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
                <p className='mt-[2px] font-semibold items-center justify-center text-[12px]'>Kirim Hadiah</p>
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
              <nav className="fixed top-[200px] fixed w-full h-[110px] left-0 right-0 z-50 ">
                <div className="relative w-full h-screen">
                  <div className={"absolute text-center text-white items-center justify-center w-full"}>
                    
                    {/* User */}
                    <div className="h-full w-full text-black bg-contain bg-no-repeat bg-center justify-center items-center translate-y-[25rem]">
                      {/* top */}
                      <div>
                        <p className={'font-Oranienbaum text-[38px] font-regular text-left px-7'}>
                          Maya & <br></br>Rahardian
                        </p>
                      </div>
                      {/* text */}
                      <div className="mt-7">
                        <p className={'font-Oranienbaum tracking-wide text-[12px] font-regular text-left px-7'}>
                          Teruntuk,
                        </p>
                        {/* <p className={Playfair_Display_SC.className + ' text-[24px] capitalize'}>
                          {to || ""}
                        </p> */}
                        <Suspense>
                          <TamuName />
                        </Suspense>
                        <p className={'font-Oranienbaum tracking-wide text-[20px] mt-1 font-regular text-left px-7'}>
                          Nama Tamu Undangan
                        </p>
                      </div>
                      {/* button */}
                      <div className='flex justify-center items-center w-full h-full bottom-0'>
                        <motion.button 
                          type='button'
                          className={"flex flex-cols font-inter text-white bg-[#474747] hover:cursor-pointer text-[12px] px-[16px] py-[36px] w-full text-center tracking-widest"}
                          onClick={(e) => {
                            setInvActive(true);
                            togglePlay();
                          }}
                          whileTap={{ 
                            scale: 0.95,
                            backgroundColor: "#BB806F",
                          }}
                        >
                          <svg className="mr-2" width="19" height="19" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.76649 5.70403C3.76649 5.27178 4.1169 4.92138 4.54914 4.92138H17.0715C17.5038 4.92138 17.8542 5.27178 17.8542 5.70403V6.05667L11.2009 10.2845L11.1992 10.2856C11.0825 10.3583 10.9478 10.3968 10.8103 10.3968C10.6728 10.3968 10.5381 10.3583 10.4215 10.2856L3.76649 6.0567V5.70403ZM2.20119 6.47163C2.20102 6.48116 2.20102 6.49068 2.20119 6.50019V15.0958C2.20119 16.3926 3.2524 17.4438 4.54914 17.4438H17.0715C18.3683 17.4438 19.4195 16.3926 19.4195 15.0958V6.49613C19.4196 6.48932 19.4196 6.48251 19.4195 6.47569V5.70403C19.4195 4.40729 18.3683 3.35608 17.0715 3.35608H4.54914C3.2524 3.35608 2.20119 4.40729 2.20119 5.70403V6.47163ZM17.8542 7.91126V15.0958C17.8542 15.5281 17.5038 15.8785 17.0715 15.8785H4.54914C4.1169 15.8785 3.76649 15.5281 3.76649 15.0958V7.91131L9.58442 11.6083L9.58865 11.611C9.95483 11.8404 10.3782 11.9621 10.8103 11.9621C11.2424 11.9621 11.6658 11.8404 12.032 11.611L17.8542 7.91126Z" fill="white"/>
                          </svg>
                          <p className='mt-[1px] items-center justify-center text-[12px]'>Buka Undangan</p>
                      </motion.button>
                      </div>
                    </div>

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
                      style={{ backgroundImage: `url(${FrontLogo.src})` }}
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
            className="bg-white flex flex-col w-4/4 h-4/4 bg-cover bg-no-repeat bg-fixed bg-right justify-center items-center lg:hidden"
          >

            <div className="items-center justify-center grid grid-cols-1 w-full px-0 sm:px-24 block">

               {/* Notes */}
               <div className='bg-white w-full h-full'>
                <Image
                  src={imgDecor3}
                  className='w-full bg-contain bg-no-repeat flex justify-center'
                  alt="."
                />          
              </div>
              
              {/* Opening Name */}
              <ScrollContainer 
                content = {(
                  <div 
                    className="w-full bg-[url('/assets/Bnw/mobile/m_Bg_Mempelai.png')] bg-cover grid grid-cols-12 pt-[45px] pb-[82px]"
                    id="mempelai"
                  >
                    
                    <div className='justify-center items-center col-span-12 text-center'>
                      <div className='relative w-full h-full mt-[100px] justify-center flex'>
                        <svg width="360" height="37" viewBox="0 0 360 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <line y1="13" x2="94.5" y2="13" stroke="white"/>
                          <path d="M128.229 0.399998H133.549V0.779998L131.269 1.35V26.05L133.549 26.62V27H125.759V26.62L128.039 26.05V3.63L119.869 27.57H119.299L110.179 3.63V25.67L112.649 26.62V27H106.949V26.62L109.419 25.67V1.54L106.949 0.779998V0.399998H112.459L120.781 22.25L128.229 0.399998ZM140.395 18.26C140.395 19.8813 140.509 21.2367 140.737 22.326C140.99 23.4153 141.307 24.302 141.687 24.986C142.092 25.6447 142.535 26.1133 143.017 26.392C143.523 26.6707 144.043 26.81 144.575 26.81C145.233 26.81 145.854 26.6833 146.437 26.43C147.019 26.1767 147.539 25.8347 147.995 25.404C148.451 24.9733 148.818 24.454 149.097 23.846C149.401 23.238 149.603 22.5793 149.705 21.87H150.275C150.173 22.6807 149.945 23.4407 149.591 24.15C149.261 24.834 148.831 25.4293 148.299 25.936C147.767 26.4427 147.146 26.8353 146.437 27.114C145.753 27.418 145.005 27.57 144.195 27.57C143.232 27.57 142.32 27.3673 141.459 26.962C140.597 26.5313 139.825 25.9233 139.141 25.138C138.482 24.3273 137.95 23.352 137.545 22.212C137.165 21.0467 136.975 19.7293 136.975 18.26C136.975 16.74 137.165 15.3973 137.545 14.232C137.925 13.0667 138.419 12.104 139.027 11.344C139.66 10.5587 140.382 9.96333 141.193 9.558C142.029 9.15267 142.903 8.95 143.815 8.95C144.727 8.95 145.588 9.15267 146.399 9.558C147.235 9.96333 147.957 10.5587 148.565 11.344C149.198 12.104 149.705 13.0667 150.085 14.232C150.465 15.3973 150.655 16.74 150.655 18.26H140.395ZM143.815 9.52C143.435 9.52 143.055 9.64667 142.675 9.9C142.295 10.128 141.94 10.546 141.611 11.154C141.281 11.762 141.003 12.5853 140.775 13.624C140.572 14.6373 140.445 15.9293 140.395 17.5H147.235C147.184 15.9293 147.045 14.6373 146.817 13.624C146.614 12.5853 146.348 11.762 146.019 11.154C145.689 10.546 145.335 10.128 144.955 9.9C144.575 9.64667 144.195 9.52 143.815 9.52ZM155.797 26.05V10.47L153.517 9.9V9.52H158.837V11.8C159.09 11.2933 159.432 10.8247 159.863 10.394C160.217 10.0393 160.673 9.71 161.231 9.406C161.788 9.102 162.447 8.95 163.207 8.95C164.169 8.95 164.955 9.12733 165.563 9.482C166.196 9.83667 166.703 10.2293 167.083 10.66C167.539 11.1667 167.893 11.7367 168.147 12.37C168.476 11.7367 168.869 11.1667 169.325 10.66C169.73 10.2293 170.224 9.83667 170.807 9.482C171.389 9.12733 172.086 8.95 172.897 8.95C173.657 8.95 174.353 9.08933 174.987 9.368C175.645 9.64667 176.215 10.0393 176.697 10.546C177.178 11.0273 177.545 11.6227 177.799 12.332C178.077 13.016 178.217 13.7887 178.217 14.65V26.05L180.497 26.62V27H173.087V26.62L175.177 26.05V14.65C175.177 12.8513 174.885 11.5847 174.303 10.85C173.745 10.09 173.087 9.71 172.327 9.71C171.693 9.71 171.149 9.88733 170.693 10.242C170.237 10.5967 169.844 10.9893 169.515 11.42C169.135 11.9267 168.805 12.4967 168.527 13.13V26.05L170.617 26.62V27H163.397V26.62L165.487 26.05V14.65C165.487 12.8513 165.195 11.5847 164.613 10.85C164.055 10.09 163.397 9.71 162.637 9.71C162.003 9.71 161.459 9.88733 161.003 10.242C160.547 10.5967 160.154 10.9893 159.825 11.42C159.445 11.9267 159.115 12.4967 158.837 13.13V26.05L160.927 26.62V27H153.517V26.62L155.797 26.05ZM184.659 10.47L182.379 9.9V9.52H187.699V11.8C187.952 11.2933 188.294 10.8247 188.725 10.394C189.079 10.0393 189.535 9.71 190.093 9.406C190.65 9.102 191.309 8.95 192.069 8.95C192.879 8.95 193.677 9.16533 194.463 9.596C195.273 10.0013 195.983 10.6093 196.591 11.42C197.224 12.2053 197.731 13.1807 198.111 14.346C198.516 15.486 198.719 16.7907 198.719 18.26C198.719 19.7293 198.516 21.0467 198.111 22.212C197.731 23.352 197.211 24.3273 196.553 25.138C195.894 25.9233 195.147 26.5313 194.311 26.962C193.475 27.3673 192.601 27.57 191.689 27.57C190.954 27.57 190.333 27.4687 189.827 27.266C189.345 27.0887 188.94 26.8733 188.611 26.62C188.231 26.3413 187.927 26.0247 187.699 25.67V35.17L189.979 35.74V36.12H182.379V35.74L184.659 35.17V10.47ZM191.119 26.81C191.651 26.81 192.157 26.6707 192.639 26.392C193.145 26.1133 193.589 25.6447 193.969 24.986C194.374 24.302 194.691 23.4153 194.919 22.326C195.172 21.2367 195.299 19.8813 195.299 18.26C195.299 16.6387 195.172 15.2833 194.919 14.194C194.691 13.1047 194.387 12.2307 194.007 11.572C193.652 10.9133 193.247 10.4447 192.791 10.166C192.36 9.862 191.929 9.71 191.499 9.71C190.865 9.71 190.321 9.88733 189.865 10.242C189.409 10.5967 189.016 10.9893 188.687 11.42C188.307 11.9267 187.977 12.4967 187.699 13.13V24.53C187.927 24.9607 188.205 25.3407 188.535 25.67C188.813 25.9487 189.168 26.2147 189.599 26.468C190.029 26.696 190.536 26.81 191.119 26.81ZM205.559 18.26C205.559 19.8813 205.673 21.2367 205.901 22.326C206.154 23.4153 206.471 24.302 206.851 24.986C207.256 25.6447 207.699 26.1133 208.181 26.392C208.687 26.6707 209.207 26.81 209.739 26.81C210.397 26.81 211.018 26.6833 211.601 26.43C212.183 26.1767 212.703 25.8347 213.159 25.404C213.615 24.9733 213.982 24.454 214.261 23.846C214.565 23.238 214.767 22.5793 214.869 21.87H215.439C215.337 22.6807 215.109 23.4407 214.755 24.15C214.425 24.834 213.995 25.4293 213.463 25.936C212.931 26.4427 212.31 26.8353 211.601 27.114C210.917 27.418 210.169 27.57 209.359 27.57C208.396 27.57 207.484 27.3673 206.623 26.962C205.761 26.5313 204.989 25.9233 204.305 25.138C203.646 24.3273 203.114 23.352 202.709 22.212C202.329 21.0467 202.139 19.7293 202.139 18.26C202.139 16.74 202.329 15.3973 202.709 14.232C203.089 13.0667 203.583 12.104 204.191 11.344C204.824 10.5587 205.546 9.96333 206.357 9.558C207.193 9.15267 208.067 8.95 208.979 8.95C209.891 8.95 210.752 9.15267 211.563 9.558C212.399 9.96333 213.121 10.5587 213.729 11.344C214.362 12.104 214.869 13.0667 215.249 14.232C215.629 15.3973 215.819 16.74 215.819 18.26H205.559ZM208.979 9.52C208.599 9.52 208.219 9.64667 207.839 9.9C207.459 10.128 207.104 10.546 206.775 11.154C206.445 11.762 206.167 12.5853 205.939 13.624C205.736 14.6373 205.609 15.9293 205.559 17.5H212.399C212.348 15.9293 212.209 14.6373 211.981 13.624C211.778 12.5853 211.512 11.762 211.183 11.154C210.853 10.546 210.499 10.128 210.119 9.9C209.739 9.64667 209.359 9.52 208.979 9.52ZM220.771 26.05V1.35L218.491 0.779998V0.399998H223.811V26.05L226.091 26.62V27H218.491V26.62L220.771 26.05ZM238.436 17.69C236.232 17.69 234.598 18.184 233.534 19.172C232.495 20.1347 231.976 21.4773 231.976 23.2C231.976 24.34 232.255 25.2267 232.812 25.86C233.369 26.4933 233.977 26.81 234.636 26.81C235.244 26.81 235.776 26.6327 236.232 26.278C236.713 25.9233 237.119 25.5307 237.448 25.1C237.828 24.6187 238.157 24.0487 238.436 23.39V17.69ZM235.586 9.52C234.826 9.52 234.193 9.786 233.686 10.318C233.179 10.8247 232.926 11.5087 232.926 12.37C232.926 12.5727 232.926 12.75 232.926 12.902C232.951 13.054 232.977 13.1933 233.002 13.32C233.027 13.4467 233.065 13.5733 233.116 13.7L230.076 14.46C230.025 14.384 229.987 14.2827 229.962 14.156C229.937 14.0293 229.911 13.89 229.886 13.738C229.886 13.586 229.886 13.3833 229.886 13.13C229.886 12.598 230.013 12.0913 230.266 11.61C230.519 11.1033 230.887 10.66 231.368 10.28C231.875 9.87467 232.47 9.558 233.154 9.33C233.863 9.07667 234.674 8.95 235.586 8.95C237.41 8.95 238.841 9.46933 239.88 10.508C240.944 11.5467 241.476 12.9273 241.476 14.65V26.05L243.756 26.62V27H238.436V24.72C238.157 25.252 237.803 25.7333 237.372 26.164C237.017 26.5187 236.561 26.8353 236.004 27.114C235.472 27.418 234.826 27.57 234.066 27.57C232.242 27.57 230.861 27.1393 229.924 26.278C229.012 25.4167 228.556 24.264 228.556 22.82C228.556 22.1107 228.746 21.4013 229.126 20.692C229.531 19.9827 230.127 19.3493 230.912 18.792C231.723 18.2347 232.749 17.7913 233.99 17.462C235.231 17.1073 236.713 16.93 238.436 16.93V14.65C238.436 12.75 238.145 11.42 237.562 10.66C237.005 9.9 236.346 9.52 235.586 9.52ZM248.31 26.05V10.47L246.03 9.9V9.52H251.35V26.05L253.63 26.62V27H246.03V26.62L248.31 26.05ZM251.54 5.15C251.54 5.63133 251.338 6.07467 250.932 6.48C250.552 6.86 250.122 7.05 249.64 7.05C249.159 7.05 248.716 6.86 248.31 6.48C247.93 6.07467 247.74 5.63133 247.74 5.15C247.74 4.66867 247.93 4.238 248.31 3.858C248.716 3.45267 249.159 3.25 249.64 3.25C250.122 3.25 250.552 3.45267 250.932 3.858C251.338 4.238 251.54 4.66867 251.54 5.15Z" fill="white"/>
                          <line x1="265.5" y1="13" x2="360" y2="13" stroke="white"/>
                        </svg>
                      </div>
                      <div className='inline-flex items-center justify-center w-full'>
                        <hr class="w-36 h-px bg-[#9D7265] border-0 justify-center items-center text-center"></hr>
                      </div>
                    </div>

                    <div className='flex justify-start items-end col-span-12 text-center'>
                      <div className='w-full'>

                        <div className='mt-[40px] flex justify-start items-end col-span-12 text-center text-white'>
                        <div className="w-full">
                          <p className='font-Lateef text-[30px] mb-3'>
                            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيْمِ    
                          </p>
                          <p className='font-inter text-[11px] italic mb-3'>
                            Assalamu’alaikum warahmatullahi wabarakatuh,
                          </p>
                          <p className='font-inter text-[13px]'>
                            Dengan memohon rahmat dan ridho Allah SWT,<br></br> izinkan kami mengundang Bapak/Ibu/Saudara/i <br></br> untuk menghadiri pernikahan kami:
                          </p>
                        </div>
                        </div>

                        <div className={'text-2xl text-white pt-[80px] text-white'}>
                          <div 
                            className='justify-center items-center h-[132px] bg-contain bg-center bg-no-repeat mb-7'
                            style={{ backgroundImage: `url(${m_ImgS2_2.src})` }}
                          ></div>

                          <label className='text-[22pt] font-Oranienbaum leading-auto'>
                            Septia Maharani, S.Kom.
                          </label>
                        </div>
                        <div className='text-[12px] pb-5 leading-6 font-inter font-thin text-white'>
                          Anak dari Bapak Lorem Ipsum dan Ibu Lorem Ipsum
                        </div>
                        {/* button */}
                        <div className='flex justify-center items-center w-full'>
                        <motion.button 
                          type='button'
                          className={"flex flex-cols font-inter text-white bg-gradient-to-r from-[#9A9A9A] via-[#DADADA] to-[#9A9A9A] hover:cursor-pointer ring-2 ring-[#9A9A9A] ring-inset rounded-[43px] text-[8px] px-[11px] py-[6px] w-auto text-center tracking-widest"}
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

                        <div className={Playfair_Display_SC.className +' py-[40px] text-[38pt] text-white'}>
                          <p>&</p>
                        </div>

                        <div className={'text-2xl text-black pb-2'}>
                          <div 
                            className='justify-center items-center h-[132px] bg-contain bg-center bg-no-repeat mb-7'
                            style={{ backgroundImage: `url(${m_ImgS2_1.src})` }}
                          ></div>
                          <label className='text-[22pt] font-Oranienbaum leading-auto text-white'>
                            Arjuna Kertanegara, M.Si.
                          </label>
                        </div>
                        <div className='text-[12px] pb-5 leading-6 font-inter font-thin text-white'>
                          Anak dari Bapak Lorem Ipsum dan Ibu Lorem Ipsum
                        </div>
                        <div className='flex justify-center items-center w-full mb-[100px]'>
                        <motion.button 
                          type='button'
                          className={"flex flex-cols font-inter text-white bg-gradient-to-r from-[#9A9A9A] via-[#DADADA] to-[#9A9A9A]  ring-inset rounded-[43px] text-[8px] px-[11px] py-[6px] w-auto text-center tracking-widest"}
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
                )}
              />

              {/* Date */}
              <ScrollContainer 
                content = {(
                  <div 
                    className="w-full bg-cover bg-fixed bg-center h-auto flex flex-col"
                    style={{ backgroundImage: `url(${imgSolid1.src})` }}
                    id="waktu"
                  >
                    <div 
                      className="w-full grid grid-cols-12 py-[150px]"
                    >
                        <div className='relative col-span-12 mb-[80px] w-full h-full mt-[100px] flex justify-center'>
                          <svg width="360" height="28" viewBox="0 0 360 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="13.2483" x2="74" y2="13.2483" stroke="black"/>
                            <path d="M84.0448 1.02829V0.648289H92.0248V1.02829L89.7448 1.59829L95.2548 21.1683L100.765 0.0782897H101.335L107.567 21.1683L112.545 1.97829L110.075 1.02829V0.648289H115.775V1.02829L113.305 1.97829L106.655 27.8183H106.085L99.8148 6.53829L94.3048 27.8183H93.7348L86.3248 1.59829L84.0448 1.02829ZM125.661 17.9383C123.457 17.9383 121.823 18.4323 120.759 19.4203C119.72 20.383 119.201 21.7256 119.201 23.4483C119.201 24.5883 119.479 25.475 120.037 26.1083C120.594 26.7416 121.202 27.0583 121.861 27.0583C122.469 27.0583 123.001 26.881 123.457 26.5263C123.938 26.1716 124.343 25.779 124.673 25.3483C125.053 24.867 125.382 24.297 125.661 23.6383V17.9383ZM122.811 9.76829C122.051 9.76829 121.417 10.0343 120.911 10.5663C120.404 11.073 120.151 11.757 120.151 12.6183C120.151 12.821 120.151 12.9983 120.151 13.1503C120.176 13.3023 120.201 13.4416 120.227 13.5683C120.252 13.695 120.29 13.8216 120.341 13.9483L117.301 14.7083C117.25 14.6323 117.212 14.531 117.187 14.4043C117.161 14.2776 117.136 14.1383 117.111 13.9863C117.111 13.8343 117.111 13.6316 117.111 13.3783C117.111 12.8463 117.237 12.3396 117.491 11.8583C117.744 11.3516 118.111 10.9083 118.593 10.5283C119.099 10.123 119.695 9.80629 120.379 9.57829C121.088 9.32496 121.899 9.19829 122.811 9.19829C124.635 9.19829 126.066 9.71762 127.105 10.7563C128.169 11.795 128.701 13.1756 128.701 14.8983V26.2983L130.981 26.8683V27.2483H125.661V24.9683C125.382 25.5003 125.027 25.9816 124.597 26.4123C124.242 26.767 123.786 27.0836 123.229 27.3623C122.697 27.6663 122.051 27.8183 121.291 27.8183C119.467 27.8183 118.086 27.3876 117.149 26.5263C116.237 25.665 115.781 24.5123 115.781 23.0683C115.781 22.359 115.971 21.6496 116.351 20.9403C116.756 20.231 117.351 19.5976 118.137 19.0403C118.947 18.483 119.973 18.0396 121.215 17.7103C122.456 17.3556 123.938 17.1783 125.661 17.1783V14.8983C125.661 12.9983 125.369 11.6683 124.787 10.9083C124.229 10.1483 123.571 9.76829 122.811 9.76829ZM138.014 21.0543V26.2983L140.104 26.8683V27.2483H132.694V26.8683L134.974 26.2983V1.59829L132.694 1.02829V0.648289H138.014V20.0283L144.284 11.0983L141.814 10.1483V9.76829H147.514V10.1483L145.044 11.0983L141.358 16.3423L147.324 26.2983L149.604 26.8683V27.2483H141.814V26.8683L143.904 26.2983L139.496 18.9643L138.014 21.0543ZM160.052 9.76829V10.5283H155.682V22.6503C155.682 24.1956 155.961 25.323 156.518 26.0323C157.076 26.7163 157.684 27.0583 158.342 27.0583C159.204 27.0583 159.926 26.7416 160.508 26.1083C161.116 25.4496 161.471 24.4996 161.572 23.2583H162.142C162.041 24.7023 161.598 25.8296 160.812 26.6403C160.052 27.4256 159.102 27.8183 157.962 27.8183C156.341 27.8183 155.049 27.3496 154.086 26.4123C153.124 25.4496 152.642 24.2083 152.642 22.6883V10.5283H149.412V9.76829H152.642V5.39829L155.682 3.30829V9.76829H160.052ZM178.12 10.7183V26.2983L180.4 26.8683V27.2483H175.08V24.9683C174.801 25.5003 174.447 25.9816 174.016 26.4123C173.661 26.767 173.205 27.0836 172.648 27.3623C172.116 27.6663 171.47 27.8183 170.71 27.8183C169.95 27.8183 169.241 27.679 168.582 27.4003C167.949 27.1216 167.391 26.7416 166.91 26.2603C166.429 25.7536 166.049 25.1583 165.77 24.4743C165.517 23.765 165.39 22.9796 165.39 22.1183V10.7183L163.11 10.1483V9.76829H170.52V10.1483L168.43 10.7183V22.1183C168.43 23.917 168.709 25.1963 169.266 25.9563C169.849 26.691 170.52 27.0583 171.28 27.0583C171.888 27.0583 172.42 26.881 172.876 26.5263C173.357 26.1716 173.763 25.779 174.092 25.3483C174.472 24.867 174.801 24.297 175.08 23.6383V10.7183L172.99 10.1483V9.76829H180.4V10.1483L178.12 10.7183ZM203.584 19.4583H195.794L193.894 25.9183L196.364 26.8683V27.2483H190.664V26.8683L193.134 25.9183L200.544 0.0782897H201.114L209.094 26.2983L211.374 26.8683V27.2483H203.394V26.8683L205.674 26.2983L203.584 19.4583ZM195.984 18.7363H203.356L199.556 6.15829L195.984 18.7363ZM219.346 9.95829C218.864 9.95829 218.383 10.1103 217.902 10.4143C217.446 10.693 217.028 11.1616 216.648 11.8203C216.268 12.479 215.951 13.353 215.698 14.4423C215.47 15.5316 215.356 16.887 215.356 18.5083C215.356 20.1296 215.47 21.485 215.698 22.5743C215.951 23.6636 216.28 24.5503 216.686 25.2343C217.091 25.893 217.547 26.3616 218.054 26.6403C218.586 26.919 219.143 27.0583 219.726 27.0583C220.384 27.0583 221.005 26.9316 221.588 26.6783C222.17 26.425 222.69 26.083 223.146 25.6523C223.602 25.2216 223.969 24.7023 224.248 24.0943C224.552 23.4863 224.754 22.8276 224.856 22.1183H225.426C225.324 22.929 225.096 23.689 224.742 24.3983C224.412 25.0823 223.982 25.6776 223.45 26.1843C222.918 26.691 222.297 27.0836 221.588 27.3623C220.904 27.6663 220.156 27.8183 219.346 27.8183C218.358 27.8183 217.408 27.6156 216.496 27.2103C215.609 26.7796 214.824 26.1716 214.14 25.3863C213.456 24.5756 212.911 23.6003 212.506 22.4603C212.126 21.295 211.936 19.9776 211.936 18.5083C211.936 17.039 212.126 15.7343 212.506 14.5943C212.911 13.429 213.443 12.4536 214.102 11.6683C214.76 10.8576 215.508 10.2496 216.344 9.84429C217.18 9.41362 218.054 9.19829 218.966 9.19829C219.574 9.19829 220.106 9.29962 220.562 9.50229C221.043 9.70496 221.448 9.92029 221.778 10.1483C222.158 10.427 222.487 10.7436 222.766 11.0983C222.867 10.7183 223.07 10.3636 223.374 10.0343C223.703 9.70496 224.007 9.48962 224.286 9.38829H224.856C224.805 9.71762 224.767 10.0596 224.742 10.4143C224.716 10.7183 224.691 11.0476 224.666 11.4023C224.666 11.757 224.666 12.099 224.666 12.4283C224.666 12.8083 224.666 13.201 224.666 13.6063C224.691 13.9863 224.716 14.3283 224.742 14.6323C224.767 14.987 224.805 15.329 224.856 15.6583H224.286C223.804 13.8343 223.095 12.4283 222.158 11.4403C221.246 10.4523 220.308 9.95829 219.346 9.95829ZM237.954 17.9383C235.75 17.9383 234.116 18.4323 233.052 19.4203C232.013 20.383 231.494 21.7256 231.494 23.4483C231.494 24.5883 231.772 25.475 232.33 26.1083C232.887 26.7416 233.495 27.0583 234.154 27.0583C234.762 27.0583 235.294 26.881 235.75 26.5263C236.231 26.1716 236.636 25.779 236.966 25.3483C237.346 24.867 237.675 24.297 237.954 23.6383V17.9383ZM235.104 9.76829C234.344 9.76829 233.71 10.0343 233.204 10.5663C232.697 11.073 232.444 11.757 232.444 12.6183C232.444 12.821 232.444 12.9983 232.444 13.1503C232.469 13.3023 232.494 13.4416 232.52 13.5683C232.545 13.695 232.583 13.8216 232.634 13.9483L229.594 14.7083C229.543 14.6323 229.505 14.531 229.48 14.4043C229.454 14.2776 229.429 14.1383 229.404 13.9863C229.404 13.8343 229.404 13.6316 229.404 13.3783C229.404 12.8463 229.53 12.3396 229.784 11.8583C230.037 11.3516 230.404 10.9083 230.886 10.5283C231.392 10.123 231.988 9.80629 232.672 9.57829C233.381 9.32496 234.192 9.19829 235.104 9.19829C236.928 9.19829 238.359 9.71762 239.398 10.7563C240.462 11.795 240.994 13.1756 240.994 14.8983V26.2983L243.274 26.8683V27.2483H237.954V24.9683C237.675 25.5003 237.32 25.9816 236.89 26.4123C236.535 26.767 236.079 27.0836 235.522 27.3623C234.99 27.6663 234.344 27.8183 233.584 27.8183C231.76 27.8183 230.379 27.3876 229.442 26.5263C228.53 25.665 228.074 24.5123 228.074 23.0683C228.074 22.359 228.264 21.6496 228.644 20.9403C229.049 20.231 229.644 19.5976 230.43 19.0403C231.24 18.483 232.266 18.0396 233.508 17.7103C234.749 17.3556 236.231 17.1783 237.954 17.1783V14.8983C237.954 12.9983 237.662 11.6683 237.08 10.9083C236.522 10.1483 235.864 9.76829 235.104 9.76829ZM250.868 26.2983L253.148 26.8683V27.2483H245.548V26.8683L247.828 26.2983V10.7183L245.548 10.1483V9.76829H250.868V14.3283C251.197 13.391 251.59 12.5423 252.046 11.7823C252.451 11.1236 252.945 10.5283 253.528 9.99629C254.11 9.46429 254.807 9.19829 255.618 9.19829C255.896 9.19829 256.162 9.22362 256.416 9.27429C256.669 9.29962 256.897 9.33762 257.1 9.38829C257.328 9.46429 257.53 9.52762 257.708 9.57829L256.568 12.4283C256.416 12.3523 256.251 12.2636 256.074 12.1623C255.922 12.0863 255.732 12.023 255.504 11.9723C255.301 11.8963 255.086 11.8583 254.858 11.8583C254.199 11.8583 253.616 12.0356 253.11 12.3903C252.603 12.745 252.185 13.1376 251.856 13.5683C251.45 14.075 251.121 14.645 250.868 15.2783V26.2983ZM269.311 17.9383C267.107 17.9383 265.473 18.4323 264.409 19.4203C263.37 20.383 262.851 21.7256 262.851 23.4483C262.851 24.5883 263.13 25.475 263.687 26.1083C264.244 26.7416 264.852 27.0583 265.511 27.0583C266.119 27.0583 266.651 26.881 267.107 26.5263C267.588 26.1716 267.994 25.779 268.323 25.3483C268.703 24.867 269.032 24.297 269.311 23.6383V17.9383ZM266.461 9.76829C265.701 9.76829 265.068 10.0343 264.561 10.5663C264.054 11.073 263.801 11.757 263.801 12.6183C263.801 12.821 263.801 12.9983 263.801 13.1503C263.826 13.3023 263.852 13.4416 263.877 13.5683C263.902 13.695 263.94 13.8216 263.991 13.9483L260.951 14.7083C260.9 14.6323 260.862 14.531 260.837 14.4043C260.812 14.2776 260.786 14.1383 260.761 13.9863C260.761 13.8343 260.761 13.6316 260.761 13.3783C260.761 12.8463 260.888 12.3396 261.141 11.8583C261.394 11.3516 261.762 10.9083 262.243 10.5283C262.75 10.123 263.345 9.80629 264.029 9.57829C264.738 9.32496 265.549 9.19829 266.461 9.19829C268.285 9.19829 269.716 9.71762 270.755 10.7563C271.819 11.795 272.351 13.1756 272.351 14.8983V26.2983L274.631 26.8683V27.2483H269.311V24.9683C269.032 25.5003 268.678 25.9816 268.247 26.4123C267.892 26.767 267.436 27.0836 266.879 27.3623C266.347 27.6663 265.701 27.8183 264.941 27.8183C263.117 27.8183 261.736 27.3876 260.799 26.5263C259.887 25.665 259.431 24.5123 259.431 23.0683C259.431 22.359 259.621 21.6496 260.001 20.9403C260.406 20.231 261.002 19.5976 261.787 19.0403C262.598 18.483 263.624 18.0396 264.865 17.7103C266.106 17.3556 267.588 17.1783 269.311 17.1783V14.8983C269.311 12.9983 269.02 11.6683 268.437 10.9083C267.88 10.1483 267.221 9.76829 266.461 9.76829Z" fill="black"/>
                            <line x1="286" y1="13.2483" x2="360" y2="13.2483" stroke="black"/>
                          </svg>
                        </div>

                      <div className='mx-7 shadow-lg px-7 flex justify-center items-center col-span-12 bg-white rounded-[62px] text-center py-[60px]'>
                        <div className='w-full'>
                          <div className='text-[13px] tracking-normal font-inter font-thin'>
                            <label className='leading-[20px] '>
                            Pernikahan kami akan<br></br> diselenggarakan
                            pada waktu<br></br> dan keterangan berikut:
                            </label>
                          </div>

                          <div className={'font-Oranienbaum text-black text-[38px] py-[38px]'}>
                            <div className='leading-9'>
                              Rabu,
                            </div>
                            <div>
                              19 <label className={'font-Oranienbaum text-[37px]'}>Juni </label>2024
                            </div>
                          </div>

                          <div className='col-span-12 inline-flex items-center justify-center w-full mb-[40px]'>
                            <hr class="w-64 h-px bg-[#9D7265] border-0 justify-center items-center text-center"></hr>
                          </div>

                          <div className='justify-center items-center flex font-Oranienbaum py-[38px]'>
                            <label className='text-black flex flex-cols  text-[20px] leading-[20px]'>
                                Akad, 09:00 - 11:00 WIB
                            </label>
                          </div>

                          <div className='justify-center items-center flex font-Oranienbaum mb-7'>
                            <label className='text-black text-[20px] leading-[20px]'>
                                Resepsi, 09:00 - 11:00 WIB
                            </label>
                          </div>

                          <div className='col-span-12 inline-flex items-center justify-center w-full py-[38px]'>
                            <hr class="w-64 h-px bg-[#9D7265] border-0 justify-center items-center text-center"></hr>
                          </div>

                          <div className='w-full flex col-span-12 mb-[38px] justify-center items-center text-center'>
                            <Image
                              src={Bunga}
                              className='w-full bg-contain bg-no-repeat flex justify-center'
                              alt="."
                            />       
                          </div>

                          <div className='flex flex-col text-[13px] font-inter text-black'>
                            <p className='font-bold'>Lokasi:</p>
                            <p>The Krakatau Grand Ballroom</p>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                )} 
              />

              {/* Maps */}
              <ScrollContainer 
                content = {(
                  <div 
                    className="w-full bg-[#474747] bg-cover grid grid-cols-12 py-[150px] gap-5"
                    id="lokasi"
                  >
                    
                    <div className='col-span-12 w-full mb-[80px]'>
                        <Image
                        src={text3}
                        className='flex justify-center'
                        alt="."
                        />
                    </div>

                  <div className='justify-center items-center col-span-12 mt-3 bg-white rounded-[62px] h-[554pt] mx-7'>
                      <div className={'leading-[20px] text-black mt-[60pt] mb-8 font-inter font-bold flex justify-center text-center items-center col-span-12 text-[13px]'}>
                        The Krakatau Grand Ballroom
                      </div>
                      <div className='font-inter font-normal text-black justify-end items-end text-center mt-8'>
                        <p className='text-[13px] leading-[20px]'>Jl. Taman Mini Indonesia Indah Pintu 1 <br></br>Tmii, Ceger, Kec. Cipayung, Jakarta,<br></br> Daerah Khusus Ibukota Jakarta 13820</p>
                      </div>
                      <div className='col-span-12 inline-flex items-center justify-center w-full my-[38px]'>
                        <hr class="w-64 h-px bg-[#C4C4C4] border-0 justify-center items-center text-center"></hr>
                      </div>
                      <div className="max-w-screen-lg mx-auto shadow-md rounded-md">
                          <div className="relative w-full h-[193pt]">
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
                      <div className='flex justify-center items-center col-span-12 mt-[38px] mb-[60pt]'>
                      <motion.a 
                        type='button'
                        href='https://maps.app.goo.gl/TTs53xfK5SLTEBAZA'
                        target="_blank"
                        className={"flex flex-cols text-white font-inter bg-[#474747] hover:cursor-pointer rounded-[43px] px-[25px] py-[9px] text-center tracking-wide mt-[30px]"}
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

                  </div>
                )}
              />

              {/* Countdown*/}
              <div 
                    className="w-full bg-[url('/assets/Bnw/mobile/m_Bg_Countdown.png')] bg-cover bg-center items-center justify-center grid grid-cols-12 px-7 pt-[150px] pb-[180px] gap-5"
                    id="lokasi"
                  >
                  
                   <div className='flex justify-center text-center items-center col-span-12'>
                    <div className='justify-center items-center mt-3'>
                      <div className='justify-center items-center text-center mt-11'>
                        <Countdown 
                          project = 'Rully_Sabil_Mobile' 
                          target_date = '2024-10-10'
                          className=''
                        />  
                      </div>
                    </div>
                   </div>
                  </div>

              {/* Page Break */}
              <div className="w-full h-full bg-cover">
                <div className='relative w-full h-full'>
                  <Image
                    src={imgDecor1}
                    className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-[70px] w-[470px] flex justify-center'
                    alt="."
                  />
                  <Image
                    src={ImgS9}
                    className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-[85px] w-[470px] flex justify-center'
                    alt="."
                  />
                </div>
              </div>

              {/* Tanda Kasih */}
              <ScrollContainer
                content = {(
                  <div 
                    className="w-full bg-white grid grid-cols-12 pt-64 pb-20"
                    id="hadiah"
                  >
                    <div className='col-span-12'>
                      
                      <div className='col-span-12 w-full'>
                        <Image
                        src={text4}
                        className='flex justify-center'
                        alt="."
                        />
                      </div>

                      <div className='px-7 font-inter font-light text-black flex justify-center items-center w-full leading-[20px] text-[13px] pt-3 text-center mt-6'>
                        <p>Do’a restu Anda merupakan karunia<br></br> yang amat berarti bagi kami. Dan jika <br></br> memberi adalah ungkapantanda kasih<br></br> Anda, Anda dapat memberikan kado ke<br></br> alamat berikut atau mengirim amplop<br></br> secara <i>cashless/digital</i>.</p>
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

                {/* Page Break */}
                <div className="w-full h-full bg-cover">
                        <div className='relative w-full h-full'>
                          <Image
                            src={imgDecor4}
                            className='flex justify-center'
                            alt="."
                          />
                        </div>
                      </div>


              {/* Chat Form */}
              <ScrollContainer
                content = {(
                  <div 
                    className="w-full bg-cover bg-[url('/assets/Bnw/mobile/m_Bg_Ucapan.png')]  pt-[80px]"
                    id="ucapan"
                  >
                    
                    <div className='relative w-full h-full'>
                      <Image
                        src={text5}
                        className='flex justify-center'
                        alt="."
                          />
                    </div>

                    <div className='font-inter text-black text-center justify-center items-center w-full text-[12px] pt-3 mt-[30px] mb-6'>
                      <p>Tulis ucapan, do&apos;a, dan pesan sukacita untuk <br></br>mempelai melalui form di bawah ini.</p>
                    </div>

                    <form method="post" className='px-7'>
                        <input 
                          type='text' 
                          name="name" 
                          placeholder='Nama Pengirim '
                          className="w-full rounded-md py-2.5 px-4 border text-[12px] text-gray outline-[#000000] bg-white border-[#474747]" 
                          value={msgName}
                          onChange={(e) => {
                            setMsgName(e.target.value);
                          }}
                        />
                        <textarea 
                          rows="4"
                          name='message'
                          placeholder='Ucapan' 
                          className="w-full px-7 text-left rounded-md py-2.5 px-4 border text-[12px] outline-[#000000] bg-white border-[#474747] mt-4" 
                          value={msgText}
                          onChange={(e) => {
                            setMsgText(e.target.value);
                          }}
                        >
                        </textarea>

                        <div className='flex justify-center items-center col-span-12 mt-3'>
                          <motion.button
                            type='button'
                            className={"flex flex-cols text-[12px] mt-4 text-white justify-center items-center font-inter bg-[#474747] hover:cursor-pointer rounded-[43px] px-[25px] py-[9px] text-center tracking-wide"}
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
                          className="w-full h-[1090px]"
                        >
                          <div className="w-full px-7 py-24">

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
                  <div className="w-full bg-[url('/assets/choral-charm/mobile/m_Terimakasih.png')] bg-cover grid grid-cols-12 p-7 pb-16">
                    <div className='col-span-12'>
                      
                      <div className={'font-Dynalight text-[36px] text-[#9D7265] flex text-[53px] text-[#8F907E] leading-[60px] justify-center items-center col-span-5 text-right mt-[70px]'}>
                        <label className="mr-3">Terima kasih</label> 
                      </div>

                      <div className='inline-flex items-center justify-center w-full'>
                        <hr class="w-48 h-px bg-[#9D7265] border-0 justify-center items-center text-center"></hr>
                      </div>
                      
                      <div className='font-inter flex justify-center items-center w-full text-[12px] pt-[40px] text-center'>
                        <p>Merupakan suatu kebahagiaan dan kehormatan bagi<br></br> kami apabila Bapak/Ibu/Saudara/i berkenan hadir<b></b> dan memberikan do’a restu kepada kedua<b></b> mempelai.</p>
                      </div>

                      <div className='font-inter flex italic justify-center items-center w-full text-[10px] pt-7 text-center pb-[40px]'>
                        <i>Wassalamu’alaikum warahmatullahi wabarakatuh,</i>
                      </div>

                      <div className='bg-contain bg-no-repeat font-inter flex italic justify-center items-center w-full text-[10px] pt-7 pb-[70px] text-center'
                      style={{ backgroundImage: `url(${m_Name.src})` }}
                      >
                      </div>

                    </div>
                  </div>
                )}
              />

              {/* Footer */}
              <footer className="h-auto flex flex-col justify-center items-center pt-[37px] pb-32 text-black font-inter">
                <Image
                    src={ImgLH_IconWhite}
                    className='pt-6'
                    alt="."
                    width={200}
                    height={69}
                  />

                <div className={'flex justify-center items-center w-full text-[9.5px] pt-4 text-center font-regular tracking-wide'}>
                  <p className=''>
                    Mau undangan pernikahan seperti ini?<br></br>
                    Ayo pesan sekarang juga lewat sosial media kami:
                  </p>
                </div>

                <div className={'flex justify-center items-center w-full text-[10px] pt-4 text-center font-regular tracking-wide'}>
                  <p className='flex flex-cols'>
                    <svg className='mr-1' width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M9.21047 2.00432C8.22597 1.0187 6.91675 0.475669 5.52185 0.475098C2.64774 0.475098 0.308509 2.81414 0.307387 5.68914C0.306985 6.60819 0.547099 7.50523 1.00343 8.296L0.263657 10.9981L3.02791 10.273C3.78953 10.6884 4.64705 10.9073 5.51978 10.9076H5.52189C5.52172 10.9076 5.52206 10.9076 5.52189 10.9076C8.39571 10.9076 10.7351 8.56837 10.7363 5.69331C10.7368 4.29999 10.195 2.98991 9.21047 2.00432ZM5.52187 10.027H5.52011C4.74245 10.0267 3.97967 9.81775 3.31423 9.42289L3.15599 9.32897L1.51564 9.75925L1.95349 8.15994L1.85043 7.99594C1.4166 7.30591 1.18747 6.50835 1.18781 5.68943C1.18874 3.29985 3.13303 1.35578 5.52363 1.35578C6.68123 1.35614 7.76943 1.80756 8.58771 2.62677C9.40597 3.44598 9.85635 4.5349 9.85589 5.69295C9.85491 8.08272 7.9107 10.027 5.52187 10.027Z" fill="#E3457B"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M7.89918 6.78115C7.7689 6.71594 7.12831 6.40079 7.00889 6.35727C6.88947 6.31379 6.8026 6.29206 6.71575 6.42248C6.62891 6.55289 6.3792 6.84639 6.30319 6.93336C6.22721 7.02027 6.15118 7.03122 6.02092 6.96594C5.89064 6.90072 5.47082 6.76316 4.97317 6.31928C4.58582 5.97377 4.32435 5.54714 4.24832 5.41667C4.17233 5.28626 4.24023 5.21575 4.30547 5.15077C4.36408 5.09237 4.43577 4.9986 4.50092 4.92251C4.56605 4.84646 4.58777 4.79206 4.6312 4.70517C4.67463 4.6182 4.65294 4.5421 4.62034 4.47691C4.58777 4.4117 4.3272 3.77039 4.21864 3.50947C4.11285 3.25545 4.00545 3.28986 3.92546 3.28582C3.84958 3.28203 3.76261 3.28125 3.67576 3.28125C3.58891 3.28125 3.44773 3.31387 3.32833 3.44428C3.20891 3.57473 2.8723 3.88996 2.8723 4.5312C2.8723 5.17253 3.33917 5.79208 3.40432 5.87901C3.46945 5.966 4.32306 7.28198 5.63005 7.84634C5.94091 7.9806 6.1836 8.06076 6.37281 8.12079C6.68494 8.21998 6.96897 8.20596 7.19346 8.17241C7.4438 8.13501 7.96433 7.85724 8.07289 7.55293C8.18148 7.24855 8.18148 6.98765 8.14888 6.93334C8.11633 6.87901 8.02946 6.84639 7.89918 6.78115Z" fill="#E3457B"/>
                    </svg>
                  </p>
                  <p>+62 851-8300-3387</p>
                </div>

                <div className={'flex justify-center items-center w-full text-[10px] text-center font-regular tracking-wide'}>
                  <p className='flex flex-cols'>
                    <svg className='mr-1' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_150_2279)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.353516C3.03056 0.353516 0.616871 2.7672 0.616871 5.73664C0.616871 8.70608 3.03056 11.1198 6 11.1198C8.96943 11.1198 11.3831 8.70608 11.3831 5.73664C11.3831 2.7672 8.96943 0.353516 6 0.353516ZM7.86308 3.5332C7.62337 2.72196 7.25394 1.9341 6.74754 1.21261C8.16327 1.44509 9.35499 2.32073 10.0162 3.5332H7.86308ZM4.01621 3.5332H1.9841C2.62638 2.36406 3.75827 1.5067 5.11217 1.24275C4.61535 1.95358 4.24761 2.72416 4.01621 3.5332ZM7.03317 3.5332H4.84651C5.08726 2.79676 5.44927 2.09857 5.93984 1.45277C6.4304 2.09857 6.79242 2.79676 7.03317 3.5332ZM1.41437 5.73664C1.41437 5.24955 1.49467 4.77043 1.63959 4.3307H3.82843C3.6627 5.24894 3.6626 6.18215 3.82049 7.1001L1.6309 7.1165C1.48662 6.67811 1.41437 6.21562 1.41437 5.73664ZM4.63548 7.09932C4.45134 6.1814 4.45136 5.24043 4.63546 4.3307H7.24422C7.42829 5.24001 7.42864 6.17283 7.26056 7.08271L4.63548 7.09932ZM8.06804 7.07336C8.22532 6.16401 8.21721 5.23973 8.05137 4.3307H10.3604C10.5053 4.77043 10.5856 5.24955 10.5856 5.73664C10.5856 6.19755 10.5138 6.64281 10.3932 7.05693L8.06804 7.07336ZM6.7486 10.2601C7.27127 9.52159 7.64882 8.71564 7.88118 7.87102L10.0607 7.85481C9.40643 9.1091 8.19014 10.0182 6.7486 10.2601ZM5.93957 10.0204C5.44009 9.36507 5.07012 8.64998 4.83653 7.89657L7.05067 7.88047C6.80929 8.63444 6.43896 9.35727 5.93957 10.0204ZM5.11192 10.2306C3.74932 9.96572 2.60889 9.09218 1.96622 7.91357L3.99901 7.89744C4.23078 8.71548 4.6065 9.50974 5.11192 10.2306Z" fill="#E3457B"/>
                      </g>
                      <defs>
                      <clipPath id="clip0_150_2279">
                      <rect width="11" height="11" fill="white" transform="translate(0.499996 0.236816)"/>
                      </clipPath>
                      </defs>
                    </svg>
                  </p>
                  <p>Laungharmoni.com</p>
                </div>

                <div className={'flex justify-center items-center w-full text-[10px] text-center font-regular tracking-wide'}>
                  <p className='flex flex-cols'>
                    <svg className='mr-1' width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 3.00684C4.51852 3.00684 3.291 4.21319 3.291 5.71583C3.291 7.21848 4.49735 8.42483 6 8.42483C7.50264 8.42483 8.70899 7.19731 8.70899 5.71583C8.70899 4.23435 7.48148 3.00684 6 3.00684ZM6 7.45128C5.04762 7.45128 4.26455 6.66821 4.26455 5.71583C4.26455 4.76345 5.04762 3.98038 6 3.98038C6.95238 3.98038 7.73545 4.76345 7.73545 5.71583C7.73545 6.66821 6.95238 7.45128 6 7.45128Z" fill="#E3457B"/>
                      <path d="M8.81481 3.5571C9.15378 3.5571 9.42857 3.28231 9.42857 2.94335C9.42857 2.60438 9.15378 2.32959 8.81481 2.32959C8.47584 2.32959 8.20105 2.60438 8.20105 2.94335C8.20105 3.28231 8.47584 3.5571 8.81481 3.5571Z" fill="#E3457B"/>
                      <path d="M10.4021 1.35601C9.85185 0.784577 9.06878 0.488281 8.17989 0.488281H3.8201C1.97883 0.488281 0.75132 1.71579 0.75132 3.55706V7.89569C0.75132 8.80574 1.04762 9.58881 1.64021 10.1602C2.21164 10.7105 2.97354 10.9856 3.84127 10.9856H8.15873C9.06878 10.9856 9.83069 10.6893 10.3809 10.1602C10.9524 9.60997 11.2487 8.82691 11.2487 7.91685V3.55706C11.2487 2.66818 10.9524 1.90627 10.4021 1.35601ZM10.3175 7.91685C10.3175 8.57294 10.0847 9.10204 9.7037 9.46183C9.32275 9.82162 8.79365 10.0121 8.15873 10.0121H3.84127C3.20635 10.0121 2.67725 9.82162 2.29629 9.46183C1.91534 9.08087 1.72486 8.55177 1.72486 7.89569V3.55706C1.72486 2.92214 1.91534 2.39304 2.29629 2.01209C2.65608 1.6523 3.20635 1.46183 3.84127 1.46183H8.20106C8.83598 1.46183 9.36508 1.6523 9.74603 2.03325C10.1058 2.41421 10.3175 2.94331 10.3175 3.55706V7.91685Z" fill="#E3457B"/>
                    </svg>
                  </p>
                  <p>@laungharmoni</p>
                </div>

                <div className={'flex justify-center items-center w-full text-[9.5px] pt-4 text-center font-regular tracking-wide drop-shadow-2xl'}>
                  <p className=''>©2024 Laungharmoni.com ❤️ All rights reserved.</p>
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

