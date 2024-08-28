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

import { io } from 'socket.io-client';
import pageStyle from "./index.module.css";

// #region images
  import ImgLH_Icon from "@/assets/laung-harmoni/Icon.svg";
  import ImgLH_IconWhite from "@/assets/laung-harmoni/IconWhite.svg";
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
  import imgDecor3 from "@/assets/rully-sabil/S3_Dec2.png";

  import imgSolid1 from "@/assets/template-A/Solid1.webp";
  import imgSolid2 from "@/assets/rully-sabil/Solid2.webp";
// #endregion

// #region mobile images
  import m_Front1 from "@/assets/rully-sabil/mobile/Front1.png";
  import m_Front2 from "@/assets/rully-sabil/mobile/Front2.png";
  import m_Front3 from "@/assets/rully-sabil/mobile/Front3.png";

  import m_BG from "@/assets/rully-sabil/mobile/BG.png";
  
  import m_ImgS1_Slider1A from "@/assets/rully-sabil/mobile/S1_Slider_1A.png";
  import m_ImgS1_Slider2A from "@/assets/rully-sabil/mobile/S1_Slider_2A.png";
  import m_ImgS1_Slider3A from "@/assets/rully-sabil/mobile/S1_Slider_3A.png";
  import m_ImgS1_Slider4A from "@/assets/rully-sabil/mobile/S1_Slider_4A.png";

  import m_ImgS1_Slider1B from "@/assets/rully-sabil/mobile/S1_Slider_1B.png";
  import m_ImgS1_Slider2B from "@/assets/rully-sabil/mobile/S1_Slider_2B.png";
  import m_ImgS1_Slider3B from "@/assets/rully-sabil/mobile/S1_Slider_3B.png";
  import m_ImgS1_Slider4B from "@/assets/rully-sabil/mobile/S1_Slider_4B.png";

  import m_ImgS2 from "@/assets/rully-sabil/mobile/S2.png";
  import m_ImgS2_1 from "@/assets/rully-sabil/mobile/S2_m1.png";
  import m_ImgS2_2 from "@/assets/rully-sabil/mobile/S2_m2.png";
  import m_ImgS5 from "@/assets/rully-sabil/mobile/S5.png";
  import m_ImgS6 from "@/assets/rully-sabil/mobile/S6_Mask.png";
  import m_ImgS7 from "@/assets/rully-sabil/mobile/S7.png";
  import m_ImgS8 from "@/assets/rully-sabil/mobile/S8.png";
  import m_imgDecor1 from "@/assets/rully-sabil/mobile/S1_Dec.png";

  import m_IcoBeranda from "@/assets/rully-sabil/icon/Beranda.svg";
  import m_IcoBeranda_Box from "@/assets/rully-sabil/icon/Beranda_Box.svg";
  import m_IcoGaleri from "@/assets/rully-sabil/icon/Galeri.svg";
  import m_IcoGaleri_Box from "@/assets/rully-sabil/icon/Galeri_Box.svg";
  import m_IcoHadiah from "@/assets/rully-sabil/icon/Hadiah.svg";
  import m_IcoHadiah_Box from "@/assets/rully-sabil/icon/Hadiah_Box.svg";
  import m_IcoLokasi from "@/assets/rully-sabil/icon/Lokasi.svg";
  import m_IcoLokasi_Box from "@/assets/rully-sabil/icon/Lokasi_Box.svg";
  import m_IcoMempelai from "@/assets/rully-sabil/icon/Mempelai.svg";
  import m_IcoMempelai_Box from "@/assets/rully-sabil/icon/Mempelai_Box.svg";
  import m_IcoUcapan from "@/assets/rully-sabil/icon/Ucapan.svg";
  import m_IcoUcapan_Box from "@/assets/rully-sabil/icon/Ucapan_Box.svg";
  import m_IcoWaktu from "@/assets/rully-sabil/icon/Waktu.svg";
  import m_IcoWaktu_Box from "@/assets/rully-sabil/icon/Waktu_Box.svg";

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

// #endregion

// #region components
  import Countdown from "@/components/countdown/index";
  // import Countdown from "../../../components/countdown/index";
  import ScrollContainer from "../../../components/scroll-container/index";
  import MobileMenu from "../../../components/mobile-menu/index";
  import MobileImgSlider from "../../../components/mobile-img-slider/index";
  import MobileImgSliderFull from "../../../components/mobile-img-slider-full-screen/index";
  import MobileImgGallery from "../../../components/mobile-img-galeri/index";
  import Accordion from "../../../components/accordion/index";
// #endregion


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
      icon: m_IcoBeranda,
      iconSelected: m_IcoBeranda_Box,
    },
    {
      id: "mempelai",
      icon: m_IcoMempelai,
      iconSelected: m_IcoMempelai_Box,
    },
    {
      id: "waktu",
      icon: m_IcoWaktu,
      iconSelected: m_IcoWaktu_Box,
    },
    {
      id: "lokasi",
      icon: m_IcoLokasi,
      iconSelected: m_IcoLokasi_Box,
    },
    {
      id: "galeri",
      icon: m_IcoGaleri,
      iconSelected: m_IcoGaleri_Box,
    },
    {
      id: "hadiah",
      icon: m_IcoHadiah,
      iconSelected: m_IcoHadiah_Box,
    },
    {
      id: "ucapan",
      icon: m_IcoUcapan,
      iconSelected: m_IcoUcapan_Box,
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

  const [expanded, setExpanded] = useState(-1);
  const isOpen = 0 === expanded;

  const accordionStructure = useMemo(
    () => [
      {
        name: "Tab_1",
        header: () => (

          <motion.div className='flex justify-center items-center w-full mt-[30px]'>
            <motion.button
              type='button'
              initial={false}
              className={Playfair_Display_SC.className + " text-white hover:bg-[#7c7d6a] hover:cursor-pointer rounded-md text-sm px-16 py-2.5 w-full text-center tracking-wide"}
              animate={{ backgroundColor: isOpen ? "#A0A381" : "#8F907E" }}
              onClick={() => setExpanded(isOpen ? false : 0)}
              whileTap={{ scale: 0.95 }}
            >
              kirim hadiah
            </motion.button>
          </motion.div>

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

      <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2024/02/01/audio_29160bb55d.mp3" type="audio/mpeg" volume={volume} loop />

      <AnimatePresence initial={true}>
        {!invActive && (
          <>
            {/* --- */}
            <motion.div className='lg:hidden'>
              {/* Mobile */}
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
            className="flex flex-col w-4/4 h-4/4 bg-cover bg-no-repeat bg-fixed bg-right justify-center items-center lg:hidden"
            style={{ backgroundImage: `url(${m_BG.src})` }}
          >

            <div className="items-center justify-center grid grid-cols-1 w-full px-0 sm:px-24 block">

              {/* Countdown + Slider */}
              <div 
                className="h-auto flex flex-col justify-center items-center bg-transparent"
                id="beranda"
              >
                <div className="w-full grid grid-cols-12">
                  
                  <div className='text-white justify-center items-center col-span-8'>
                    <MobileImgSlider
                      _data = {up_mobileSliderStructure}
                      _height={"h-[240px]"}
                      _direction={1}
                      _scrollStiffness={250}
                      _scrollDamping={50}
                      _scrollInterval={4000}
                      _scrollDuration={0.5}
                    />

                    <MobileImgSlider
                      _data = {down_mobileSliderStructure}
                      _height={"h-[240px]"}
                      _direction={-1}
                      _scrollStiffness={250}
                      _scrollDamping={50}
                      _scrollInterval={4000}
                      _scrollDuration={0.5}
                    />
                  </div>

                  <div className='col-span-4'>
                    <Countdown 
                      project = 'Rully_Sabil_Mobile' 
                      target_date = '2024-05-12'
                      className=''
                    />  
                  </div>

                </div>
              </div>

              {/* Header Decor */}
              <ScrollContainer
                content = {(
                  <div className="w-full bg-white grid grid-cols-12">
                    <div className='justify-center items-center col-span-12 bg-[#8F907E] w-full'>
                      <div className='w-full h-full flex justify-center items-start px-[62.18px] py-[10.29px]'>
                        {/* <div 
                          className='w-[389.3px] h-[15px] bg-cover drop-shadow-[3px_1.5px_rgba(0,0,0,0.05)] flex justify-center z-[20]'
                          style={{ backgroundImage: `url(${m_imgDecor1.src})` }}
                        >
                        </div> */}

                        <Image
                          src={m_imgDecor1}
                          alt="."
                        />
                      </div>
                    </div>
                  </div>
                )}
              />
              
              {/* Opening Name */}
              <ScrollContainer 
                content = {(
                  <div 
                    className="w-full bg-white grid grid-cols-12 px-7 pt-[45px] pb-[82px]"
                    id="mempelai"
                  >
                    
                    <div className='justify-center items-center col-span-12 text-center'>
                      <div className={Playfair_Display_SC.className + ' text-[10.5px] tracking-wider'}>
                        Undangan Pernikahan
                      </div>
                      <div className={Playfair_Display_SC.className + ' text-[30px] tracking-normal drop-shadow-[1.5px_1.5px_rgba(0,0,0,0.07)] mt-[-7px]'}>
                        Sabil <label className='text-[#8F8C7B]'>&</label> Rully
                      </div>
                    </div>

                    <div className='justify-center items-center col-span-12 pt-8'>
                      <div className='w-full h-full'>
                        <div 
                          className='w-4/4 h-[303px] bg-contain bg-center bg-no-repeat flex items-center justify-center'
                          style={{ backgroundImage: `url(${m_ImgS2.src})` }}
                        >
                        </div>
                      </div>
                    </div>

                    <div className='flex justify-start items-end col-span-12 text-center'>
                      <div className='w-full'>
                        <div className='text-[12.5px] tracking-normal pt-12'>
                          <label className='leading-6'>
                            <label className='italic tracking-wide'>Assalamu’alaikum warahmatullahi wabarakatuh.</label><br /> 
                            Dengan memohon rahmat dan ridho Allah SWT,<br /> izinkan kami mengundang Bapak/Ibu/Saudara/i <br />
                            untuk menghadiri pernikahan kami: <br />
                          </label>
                        </div>

                        <div className={Playfair_Display_SC.className + ' text-2xl text-[#8F8C7B] pt-10 pb-2'}>
                          <div 
                            className='justify-center items-center h-[132px] bg-contain bg-center bg-no-repeat mb-10'
                            style={{ backgroundImage: `url(${m_ImgS2_2.src})` }}
                          ></div>

                          <label className='text-[20px] leading-6'>
                            Salsabila Rifdah, S.E.
                          </label>
                        </div>
                        <div className='text-[13.5px] pb-5 leading-6'>
                          Anak pertama dari Bapak Japar, S.Pd., M.Ak. <br />dan Ibu E. Juniarti, S.Pd.
                        </div>

                        <div className={Kapakana.className + ' text-2xl text-[#8F8C7B]'}>
                          dengan
                        </div>

                        <div className={Playfair_Display_SC.className + ' text-2xl text-[#8F8C7B] pt-5 pb-2'}>
                          <div 
                            className='justify-center items-center h-[132px] bg-contain bg-center bg-no-repeat mb-10'
                            style={{ backgroundImage: `url(${m_ImgS2_1.src})` }}
                          ></div>
                          <label className='text-[20px] leading-6'>
                            Rully Abdul Haq, S.P<label className={Playfair_Display.className}>t</label>.
                          </label>
                        </div>
                        <div className='text-[13.5px] leading-6'>
                          Anak kedua dari Bapak Misbahudin <br />dan Ibu Wiwin Widiawati
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
                      className="w-full grid grid-cols-12 px-7 py-24 pt-[80px] pb-28"
                    >

                      <div className='justify-center items-center col-span-12'>
                        <div className='w-full h-full'>
                          <div 
                            className='w-4/4 h-[273px] bg-contain bg-center bg-no-repeat flex justify-center'
                            style={{ backgroundImage: `url(${ImgS3.src})` }}
                          >
                          </div>
                        </div>
                      </div>

                      <div className='flex justify-center items-center col-span-12 text-center pt-[42px]'>
                        <div className='w-full'>
                          <div className='text-[12.5px] tracking-normal'>
                            <label className='leading-6'>
                              Pernikahan kami akan dilaksanakan pada :
                            </label>
                          </div>

                          <div className={Playfair_Display_SC.className + ' text-[56px] text-[#838473] pt-[13px] pb-2'}>
                            <div className='leading-9'>
                              Minggu,
                            </div>
                            <div className={Arapey.className}>
                              12/<label className={Playfair_Display_SC.className + ' text-[50px]'}>Mei</label>/2024
                            </div>
                          </div>

                          <div className='text-sm text-[#838473] mb-7'>
                            <label className='bg-white rounded-full py-2 px-5'>
                              Akad Nikah : &nbsp;<label className={Arapey.className + ' text-[17px] tracking-wide'}>08.00 - 10.00</label> WIB
                            </label>
                          </div>

                          <div className='text-sm text-[#838473] mb-5'>
                            <label className='bg-white rounded-full py-2 px-5'>
                              Resepsi : &nbsp;<label className={Arapey.className + ' text-[17px] tracking-wide'}>11.00 - 14.00</label> WIB
                            </label>
                          </div>

                          <div className='text-[11px]'>
                            &nbsp;<FontAwesomeIcon icon={faLocationDot} className='text-[#838473]' />&nbsp;  Gedung KORPRI - Jl. Raya Bandung No.<label className={Arapey.className + ' text-[12px]'}>65</label> Sabandar Kabupaten Cianjur, Jawa Barat
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
                    className='absolute w-full h-[100px] -top-[45px] bg-contain bg-no-repeat flex justify-center'
                    style={{ backgroundImage: `url(${imgDecor3.src})` }}
                  >
                  </div>
                </div>
              </div>

              {/* Maps */}
              <ScrollContainer 
                content = {(
                  <div 
                    className="w-full bg-[#EDE9E7] grid grid-cols-12 px-7 py-16 gap-5"
                    id="lokasi"
                  >
                    
                    <div className={Playfair_Display_SC.className + ' flex justify-center items-center col-span-12 text-[25px]'}>
                      Petunjuk Lokasi
                    </div>

                    <div className='justify-center items-center col-span-12 mt-3'>
                      
                      <div className="max-w-screen-lg mx-auto bg-white p-2 shadow-md rounded-md">
                        <div className="relative w-full h-[250px]">
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

                      <div className='justify-end items-end text-center mt-8'>
                        <p className='pb-5 text-[15px]'> Gedung KORPRI Cianjur</p>
                        <p className='text-[11.5px]'>Jl. Raya Bandung No.65, Sabandar,<br/> Kec. Cianjur, Kabupaten Cianjur, Jawa Barat </p>
                      </div>

                      <motion.a 
                        type='button'
                        href='https://maps.app.goo.gl/TTs53xfK5SLTEBAZA'
                        target="_blank"
                        className={Playfair_Display_SC.className + " text-white bg-[#8F907E] hover:bg-[#7c7d6a] hover:cursor-pointer rounded-md text-sm px-4 py-2.5 w-full text-center tracking-wide mt-[30px]"}
                        whileTap={{ scale: 0.95 }}
                      >
                          buka petunjuk rute
                      </motion.a>

                    </div>
                  </div>
                )}
              />

              {/* Notes */}
              <div className='bg-white w-full h-full'>
                <Image
                  src={m_ImgS5}
                  className='w-full bg-contain bg-no-repeat flex justify-center shadow-[2px_2px_5px_2px_rgba(0,0,0,0.06)]'
                  alt="."
                />          
              </div>

              {/* Galery */}
              <ScrollContainer 
                content = {(
                  <div 
                    id="galeri"
                    className="relative w-full bg-cover bg-fixed bg-center grid grid-cols-12"
                    style={{ backgroundImage: `url(${imgSolid2.src})` }}
                  >
                    <div 
                      className="w-4/4 h-[700px] bg-cover bg-no-repeat bg-right-top col-span-12"
                      style={{ backgroundImage: `url(${m_ImgS6.src})` }}
                    ></div>

                    <div className='col-span-12 absolute top-0 right-0 left-0 h-full'>
                      <div className='w-full h-full inset-1/2 transform -translate-x-2/2 translate-y-1/3'>
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
                            className="w-[25px] h-[10px] bg-contain bg-no-repeat bg-center ml-[5px]"
                            style={{ backgroundImage: `url(${m_IcoArrow.src})` }}
                          ></motion.div>
                        </motion.div>

                        <MobileImgGallery 
                          _data={galeri_mobileSliderStructure}
                        />

                        <div className={Playfair_Display_SC.className + ' flex justify-end items-end w-full text-[20px] text-white px-[59px]'}>
                          Galeri Mempelai
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
                    className="w-full bg-white grid grid-cols-12 pt-20"
                    id="hadiah"
                  >
                    <div className='col-span-12 px-7'>
                      
                      <div className={Playfair_Display_SC.className + ' flex justify-center items-center w-full text-[25px]'}>
                        Tanda Kasih
                      </div>

                      <div className='flex justify-center items-center w-full text-[11.5px] pt-3 text-center mt-6'>
                        <p>Do’a restu Anda merupakan karunia yang amat berarti bagi kami. Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberikan kado di alamat berikut atau mengirim amplop secara <i>cashless</i>.</p>
                      </div>

                      <Accordion
                        _isOpen={isOpen}
                        _dataStructure={accordionStructure}
                      />
                    </div>
                    <div className='col-span-12'>
                      <div 
                        className='justify-center items-end w-full h-[277px] bg-cover bg-top-left bg-no-repeat mt-[50px]'
                        style={{ backgroundImage: `url(${m_ImgS7.src})` }}
                      >
                      </div>
                    </div>
                  </div>
                )}
              />

              {/* Chat Form */}
              <ScrollContainer
                content = {(
                  <div 
                    className="w-full bg-[#EDE9E7] px-7 pt-[80px]"
                    id="ucapan"
                  >
                    
                    <div className={Playfair_Display_SC.className + ' flex justify-center items-center w-full text-[25px]'}>
                      Ucapan dan Do&apos;a Restu
                    </div>

                    <div className='text-center justify-center items-center w-full text-[8px] pt-3 mt-[30px] mb-2'>
                      <p>Tulis ucapan, do&apos;a, dan pesan sukacita untuk mempelai melalui form di bawah ini.</p>
                    </div>

                    <form method="post">
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
                    id="ucapan"
                    className="w-full bg-cover bg-[center_top_-70px] h-[1090px]"
                    style={{ backgroundImage: `url(${m_ImgS8.src})` }}
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

              {/* Page Break */}
              <div className="w-full h-full bg-cover">
                <div className='relative w-full h-full'>
                  <div 
                    className='absolute w-full h-[200px] -top-[45px] bg-contain bg-no-repeat flex justify-center'
                    style={{ backgroundImage: `url(${imgDecor3.src})` }}
                  >
                  </div>
                  <Image
                    src={ImgS9}
                    className='absolute inset-1/2 transform -translate-x-1/2 -translate-y-[135px] w-[325px] flex justify-center'
                    alt="."
                  />
                </div>
              </div>

              {/* Thank You */}
              <ScrollContainer
                content = {(
                  <div className="w-full bg-[#EDE9E7] grid grid-cols-12 p-7 pb-16 rounded-b-[35px]">
                    <div className='col-span-12'>
                      
                      <div className={Kapakana.className + ' flex text-[53px] text-[#8F907E] leading-[60px] justify-center items-center col-span-5 text-right mt-20'}>
                        <label className="mr-3">Terima</label> kasih
                      </div>

                      <div className='flex justify-center items-center w-full text-[11.3px] pt-3 text-center'>
                        <p>Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan do’a restu kepada kedua mempelai.</p>
                      </div>

                      <div className='flex justify-center items-center w-full text-[11.3px] pt-7 text-center'>
                        <i>Wassalamu’alaikum warahmatullahi wabarakatuh,</i>
                      </div>

                    </div>
                  </div>
                )}
              />

              {/* Footer */}
              <footer className="h-auto flex flex-col justify-center items-center pt-40 pb-24 text-white">
                <div className={PlusJakartaSans.className + ' flex justify-center items-center w-full text-[9.5px] pt-4 text-center font-medium tracking-wide'}>
                  <p className='drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]'><b>Ingin undangan pernikahan yang keren dan kekinian?</b> <br/>Anda bisa memesannya melalui website <a className='' href='http://laungharmoni.com' target='_blank'>Laungharmoni.com</a></p>
                </div>

                <Image
                  src={ImgLH_IconWhite}
                  className='w-8 pt-6 opacity-80 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]'
                  alt="."
                />

                <div className={PlusJakartaSans.className + ' flex justify-center items-center w-full text-[9.5px] pt-4 text-center font-medium tracking-wide drop-shadow-2xl'}>
                  <p className='drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)]'>© 2024 <a className='' href='http://laungharmoni.com' target='_blank'>Laungharmoni</a> &nbsp;|&nbsp; All rights reserved.</p>
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
                    <div className={Kapakana.className + ' text-[55px] text-[#8F8C7B] leading-[60px] justify-center items-center col-span-5 text-right pr-6'}>
                      Feeling good when <br />
                      you are ready to
                    </div>

                    <div className='justify-center items-center col-span-7 text-[12.5px] text-justify pl-5 pt-3 '>
                    “Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan diantaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.” (QS. Ar-Rum : 21)
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

