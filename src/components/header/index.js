import React from "react";
import Image from "next/image";
import bg from "@/assets/laung-harmoni/IconName.svg";
import { IoChevronDownSharp } from "react-icons/io5";

function Header(){
    return(
      <main className="">
        <header className="fixed w-full h-[12%] flex justify-between items-center drop-shadow-lg bg-white z-10">
        <div className="flex items-center mx-[90px]">
          <div className="flex items-center space-x-11">
          <Image
              className=""
              src={bg.src}
              alt="Next.js Logo"
              width={200}
              height={69}
              priority
            />
            <nav className="ml-[50px] ">
              <ul className="flex space-x-7 font-inter">
                <li>
                    <a className="flex px-4 py-2 font-inter">Beranda</a>
                </li>
                <li>
                    <a className=" group flex items-center px-2 py-2 font-inter cursor-pointer transition-all">Undangan Digital 
                      <p className="space-x-2"><IoChevronDownSharp className="hover:rotate-180 transition-all" /></p>
                        {/* dropdown */}
                      <div className="absolute top-[60px] hidden w-[15%] flex-col gap-2 rounded-lg bg-white py-3 px-5 shadow-md transition-all group-hover:flex ">
                        <a>Tema</a>
                        <a>Portofolio</a>
                      </div>
                    </a>
                  
                </li>
                
                <li>
                    <a className="flex px-2 py-2 font-inter">Wedding Planer</a>
                </li>
                <li>
                    <a className="flex px-2 py-2 font-inter">Panduan Pengguna</a>
                </li>
                <li>
                    <a className="flex px-2 mr-10 py-2" >Blog</a>
                </li>
              </ul>
            </nav>
          </div>
    
          <div>
            <ul className="flex">
              <li>
              <button class="bg-transparent hover:bg-warna rounded-xl text-warna font-semibold hover:text-white py-2 px-4 border border-warna hover:border-transparent rounded font-inter">Masuk</button>
              </li>
              <li>
                <button class="bg-gradient-to-r from-[#E3457B] to-[#EF90A0] rounded-xl text-white hover:bg-warna-500 text-white-700 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded ml-3 font-inter">Daftar</button>
              </li>
            </ul>
          </div>
    
        </div>
       </header>
       </main>
    )
}

export default Header;