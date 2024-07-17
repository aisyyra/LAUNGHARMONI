import React from "react";
import Image from "next/image";
import Link from 'next/link'
import bg from "@/assets/laung-harmoni/IconName.svg";
import { IoChevronDownSharp } from "react-icons/io5";


function Header(){
    return(
      <main className="items-center justify-center mx-auto">
        <header className="fixed w-full h-[12%] flex justify-between items-center drop-shadow-lg bg-white z-20">
        <div className="flex items-center mx-auto">
          <div className="flex items-center space-x-12 2xl:space-x-20">
          <Image
              className=""
              src={bg.src}
              alt="Next.js Logo"
              width={240}
              height={69}
              priority
            />
            <nav className="cursor-pointer text-[15px]">
              <ul className="flex space-x-6 2xl:space-x-10 font-inter">
                <li>
                    <Link href="../" className="flex px-2 py-3 font-inter">Beranda</Link>
                </li>
                <li>
                    <a className="group flex items-center px-2 py-3 font-inter transition-all">Undangan Digital 
                      <p className="ml-2"><IoChevronDownSharp className="group-hover:rotate-180 transition-all" /></p>
                        {/* dropdown */}
                      <div className="text-[14px] absolute top-[60px] hidden w-[10%] flex-col gap-2 rounded-lg bg-white py-3 px-4 shadow-md transition-all group-hover:flex ">
                        <Link href="../tema_profile">Tema</Link>
                        <Link href="../portofolio/template">Portofolio</Link>
                      </div>
                    </a>
                </li>
                <li>
                    <Link href="/"className="flex px-2 py-3 font-inter">Wedding Planer</Link>
                </li>
                <li>
                    <Link href="/" className="flex px-2 py-3 font-inter">Panduan Pengguna</Link>
                </li>
                <li>
                    <Link href="/" className="flex px-2 mr-10 2xl:mr-20 py-3" >Blog</Link>
                </li>
              </ul>
            </nav>
          </div>
    
          <div className=" ">
            <ul className="flex text-[15px] ">
              <li>
              <button class="bg-transparent hover:bg-gradient-to-r from-[#E3457B] to-[#EF90A0] rounded-xl text-warna font-regular hover:text-white py-2 px-4 border border-warna hover:border-transparent rounded font-inter">Masuk</button>
              </li>
              <li>
                <button class="bg-gradient-to-r from-[#E3457B] to-[#EF90A0] text-center rounded-xl text-white hover:bg-warna-500 text-white-700 font-regular hover:text-white py-2 px-4 hover:border-transparent rounded ml-3 font-inter shadow-xl shadow-pink-100">Daftar</button>
              </li>
            </ul>
          </div>
        </div>
       </header>
       </main>
    )
}

export default Header;