
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";


function Counter() {
 
    const count = useMotionValue(0);
    const undangan = useTransform(count, Math.round);

    const count2 = useMotionValue(0);
    const tema = useTransform(count2, Math.round);

    const count3 = useMotionValue(0);
    const kategori = useTransform(count3, Math.round);


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
    {/* mobile version */}
    <motion.main className="md:hidden 2xl:justify-center w-[300px] flex pt-[70px] pb-[100px] mx-auto justify-center object-center">
      <div className="px-[30px] bg-white rounded-[42px] grid grid-rows-4 justify-center justify-items-center ">
        <div className="grid justify-center items-center">
          <div className="font-regular text-center mx-11">
            <p className="font-lora text-[11px] text-center">Lorem ipsum dolor sit ame
            Lorem ipsum dolor sit ame
            Lorem ipsum dolor sit ame
            </p>
          </div>
        </div>

        <div className="grid justify-center">
          <div className="font-regular text-center">
            <motion.h1 className="text-warna text-[42px] font-medium">{undangan}</motion.h1>
            <p className="font-lora text-[10px] text-center">Undangan Terpublikasi</p>
          </div>
        </div>

        <div className=" grid justify-center">
            <div className="font-regular text-center">
                <motion.h1 className="text-warna text-[42px] font-medium">{tema}</motion.h1>
                <p className="font-lora text-[10px] text-center">Pilihan Tema</p>
            </div>
        </div>

        <div className=" grid justify-center mb-[50px]">
          <div className="font-regular text-center">
            <motion.h1 className="text-warna text-[42px] font-medium">{kategori}</motion.h1>
            <p className="font-lora text-[10px] text-center ">kategori Acara</p>
            </div>
        </div>
      </div>
      {/* mobile version */}
    </motion.main>
    </>
    );
  }

  export default Counter;