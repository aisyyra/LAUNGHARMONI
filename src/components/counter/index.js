
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { fadeIn } from "@/components/variant"; 


function App() {
 
    const count = useMotionValue(0);
    const undangan = useTransform(count, Math.round);

    const count2 = useMotionValue(0);
    const tema = useTransform(count2, Math.round);

    const count3 = useMotionValue(0);
    const kategori = useTransform(count3, Math.round);

    let test = false;

    useEffect(() => {
      
        const animation = animate(count, 10, { duration: 10 });
        const kontrol = animate(count2, 29, { duration: 10 });
        const time = animate(count3, 5, { duration: 3 });

        return animation.stop;
        return kontrol.stop;
        return time.stop;

    }, []);
  
    return (
    <>
    <motion.main 
     variants={fadeIn("up", 0.1)}
     initial="hidden"
     whileInView={"show"}
     viewport={{ once: false, amount: 0.7 }}
    className="container hidden md:flex 2xl:justify-center w-screen flex py-[63px] mx-auto justify-center object-center">
      <div className="flex justify-center justify-items-center mx-[130px] lg:mx-[50px] md:mx-0">
        <div className="w-5/12 justify-center items-center justify-center object-center">
          <p className="font-lora text-[16px] px-9 2xl:px-11 leading-[26px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-[#E3E3E3] sm:mt-0"></p>

        <div className=" w-3/12 flex flex-row md:pt-7 lg:pt-0 items-center justify-center object-center">
          <div className="font-regular leading-[28px]">
            <motion.h1 className="num text-warna text-[64px] font-medium">{undangan}</motion.h1>
            <p className="font-lora text-[16px] pt-[18px]">Undangan Terpublikasi</p>
          </div>
        </div>

        <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-[#E3E3E3] sm:mt-0"></p>

        <div className="w-3/12 flex items-center justify-center">
            <div className="font-regular leading-[28px]">
                <motion.h1 className="num text-warna text-[64px] font-medium">{tema}</motion.h1>
                <p className="font-lora text-[16px]  pt-[18px]">Pilihan Tema</p>
            </div>
        </div>
        
        <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-[#E3E3E3] sm:mt-0"></p>

        <div className="w-3/12 flex items-center justify-center">
          <div className="font-regular leading-[28px]">
            <motion.h1 className="num text-warna text-[64px] font-medium">{kategori}</motion.h1>
            <p className="font-lora text-[16px]  pt-[18px]">kategori Acara</p>
            </div>
        </div>
      </div>
      {/* mobile version */}
    </motion.main>
    {/* mobile version */}
    </>
    );
  }

  export default App;