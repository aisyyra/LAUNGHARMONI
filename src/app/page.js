import Image from "next/image";
import bg from "@/assets/laung-harmoni/under_construction.png";
import { PlusJakartaSans } from '@/utils/fonts';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 sm:p-24 bg-[#F9D4D4]">

      <div className="mt-24 sm:mt-10 relative flex place-items-center z-[1]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src={bg.src}
          alt="Next.js Logo"
          width={447}
          height={74}
          priority
        />
      </div>

      <div className={PlusJakartaSans + " text-[13px] sm:text-[25px] font-bold mt-10 text-center"}>
        <p>Oopps, Our Website is Under Construction</p>
      </div>
      <div className={PlusJakartaSans + " text-[10px] sm:text-[18px] text-center mt-1"}>
        <p>We&apos;ll be back soon</p>
      </div>

    </main>
  );
}
