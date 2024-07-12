import Image from "next/image";
import mockup from "@/assets/laung-harmoni/Mokcup.png"
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { IoChevronDownSharp } from "react-icons/io5";
import { Playfair_Display, Playfair_Display_SC, Kapakana, Arapey, CourierPrime, PlusJakartaSans, Playwrite_CZ } from '../utils/fonts';


export default function Home() {
  return (
    <>
    <main className="justify-center justify-items-center content-center object-center">
      <Header />
      {/* header page */}
        <main className="object-center items-center bg-cover h-screen w-screen flex bg-[url('/assets/laung-harmoni/Header.png')]">
          <div className=" ml-11 mt-11 w-7/12 flex justify-center">
          <Image className="justify-center"
            alt="Mountains"
            src={mockup}
            sizes="100vw"
            quality={80}
            style={{
              width: '80%',
              height: 'auto',
            }}
          />
          </div> 
          <div className="w-6/12 flex flex-row justify-center">
            <div>
              <h1 className={Playwrite_CZ.className + 'flex items-center text-[40px]'}>Buat Undangan <br></br> Digital Untuk <br></br> Momen Spesialmu</h1>
                <p className="mt-5 mb-8 font-lora">
                  Pilih tema atau pesan desain custom undangan digital Anda. <br></br>
                  Hemat biaya tanpa perlu cetak, undangan dengan fitur tamu <br></br>tanpa batas, harga mulai dari 100 ribuan aja!
                </p>
                <button className="px-4 py-2 text-[10px] font-thin text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] shadow-inner drop-shadow shadow-warna hover:bg-pink-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-warna-600 focus:ring-offset-2">
                  Gratis Konsultasi
                </button>
            </div>
          </div>
        </main>
      {/* header page end */}

      {/* jenis tema */}
      <main className=" w-screen flex my-[65px] mx-auto justify-center object-center">
      <div className="flex justify-center justify-items-center mx-[100px]">
        <div className="w-5/12  justify-center justify-items-center">
        
          <p className="font-lora">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </div>

        <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-[#E3E3E3] sm:mt-0"></p>

        <div className=" w-3/12 flex flex-row items-center justify-center object-center">
          <div className="font-regular">
            <h1 className="text-warna text-4xl font-medium">520</h1>
            <p className="font-lora">Undangan Terpublikasi</p>
          </div>
        </div>

        <p className="sm:ml-2 sm:pl-2 sm:border-l sm:border-[#E3E3E3] sm:mt-0"></p>

        <div className="w-3/12 flex items-center justify-center">
        <div className="font-regular">
        <h1  className="text-warna text-4xl font-medium">29</h1>
        <p className="font-lora">Pilihan Tema</p>
        </div>
        </div>
        
        <p className="sm:ml-2 sm:pl-2 sm:border-l sm:border-[#E3E3E3] sm:mt-0"></p>

        <div className="w-3/12 flex items-center justify-center">
          <div className="font-regular">
          <h1  className="text-warna text-4xl font-medium">5</h1>
          <p className="font-lora">kategori Acara</p>
          </div>
        </div>
        </div>
      </main>
      {/* jenis tema end */}

      {/* jenis tema */}
      <main className="object-center h-screen w-screen bg-cover bg-[url('/assets/laung-harmoni/Jenis_tema.png')] flex">
        <div className="w-12/12 flex flex-row object-center text-center mx-auto text-header">
            <div className="text-center object-center items-center">
              <h1 className="mt-[100px] flex items-center font-medium text-[40px] justify-center object-center text-center">Tema Sesuai Kebutuhan</h1>
                <p className="my-[20px] mb-3 font-lora ">
                Kami menyediakan beberapa pilihan tema, sehingga kamu bisa menyesuaikannya dengan selera, budget, dan kebutuhanmu.
                </p>
                <button className="shadow-inner drop-shadow-md shadow-[#262626] my-[20px] bg-gradient-to-r from-[#303030] to-[#616161] border-1 border-[#000000] px-4 py-2 text-[10px] text-white font-thin rounded-[50px] hover:bg-abu hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                  Lihat Tema Undangan
                </button>
            </div>
        </div>
      </main>
      {/* jenis tema end */}

      {/* fitur */}
      <main className="object-center bg-cover h-screen w-screen flex bg-undangan">
            <div className="w-7/12 flex flex-row items-center px-[100px] justify-center">
              <div>
                <h1 className="flex items-center font-medium text-[40px]">Ragam Fitur <br></br>Undangan</h1>
                  <p className="mt-5 mb-5 font-lora">
                  Kami memiliki beragam fitur yang bisa dipasangkan untuk memperkaya undangan Anda. Serta tool blast message bernama Invite Guest yang dapat mempermudah dalam proses pengiriman undangan ke tamu. Beberapa fitur utama sudah tersedia untuk semua jenis tema, jadi Anda tidak perlu merasa khawatir.
                  </p>
              </div>
            </div>

            <div className="w-7/12 flex items-center px-[100px] flex overflow-y-scroll scrollbar-hide">
              <div class="">
                <div class="flex flex-col lg:ml-10 md:ml-10 ml-5 mt-40">
                  
                <div class="rounded-[34px] bg-gradient-to-r from-[#303030] to-[#616161] p-3 shadow-xl">
                  <div
                    class="flex h-11 w-11 -translate-y-6 transform items-center justify-center rounded-md bg-[#F9F9F9]">
                      <svg width="25" height="25" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_i_200_219)">
                          <rect y="0.245361" width="60.4277" height="60.4277" rx="9" fill="#FC7B91"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7191 15.8366C16.1689 15.4381 16.813 15.3464 17.3561 15.6036L45.8561 29.1036C46.3799 29.3518 46.7139 29.8796 46.7139 30.4593C46.7139 31.0389 46.3799 31.5667 45.8561 31.8149L17.3561 45.3149C16.813 45.5721 16.1689 45.4804 15.7191 45.0819C15.2694 44.6834 15.1009 44.055 15.2909 43.4849L19.6328 30.4593L15.2909 17.4336C15.1009 16.8635 15.2694 16.2351 15.7191 15.8366ZM19.2485 19.8196L22.637 29.9849C22.7396 30.2928 22.7396 30.6257 22.637 30.9336L19.2485 41.0989L41.71 30.4593L19.2485 19.8196Z" fill="white"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7139 30.4592C19.7139 29.6308 20.3854 28.9592 21.2139 28.9592H45.2139C46.0423 28.9592 46.7139 29.6308 46.7139 30.4592C46.7139 31.2877 46.0423 31.9592 45.2139 31.9592H21.2139C20.3854 31.9592 19.7139 31.2877 19.7139 30.4592Z" fill="white"/>
                          </g>
                          <defs>
                          <filter id="filter0_i_200_219" x="-2" y="0.245361" width="62.4277" height="64.4277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dx="-2" dy="4"/>
                          <feGaussianBlur stdDeviation="7.05"/>
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 1 0"/>
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_200_219"/>
                          </filter>
                          </defs>
                      </svg>
                </div>
                  <h1 class="text-white mb-2 text-[13px] px-4">Invite Guest</h1>
                  <p class="px-4 text-white text-xs font-lora">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                    modi
                    accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                </div>

                <div class="rounded-[34px] bg-white p-3 shadow-xl mt-8">
                  <div
                    class="flex h-11 w-11 -translate-y-8 transform items-center justify-center rounded-lg bg-transparant shadow-lg shadow-teal-500/40">
                        <svg width="25" height="25" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_i_200_219)">
                          <rect y="0.245361" width="60.4277" height="60.4277" rx="9" fill="#FC7B91"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7191 15.8366C16.1689 15.4381 16.813 15.3464 17.3561 15.6036L45.8561 29.1036C46.3799 29.3518 46.7139 29.8796 46.7139 30.4593C46.7139 31.0389 46.3799 31.5667 45.8561 31.8149L17.3561 45.3149C16.813 45.5721 16.1689 45.4804 15.7191 45.0819C15.2694 44.6834 15.1009 44.055 15.2909 43.4849L19.6328 30.4593L15.2909 17.4336C15.1009 16.8635 15.2694 16.2351 15.7191 15.8366ZM19.2485 19.8196L22.637 29.9849C22.7396 30.2928 22.7396 30.6257 22.637 30.9336L19.2485 41.0989L41.71 30.4593L19.2485 19.8196Z" fill="white"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7139 30.4592C19.7139 29.6308 20.3854 28.9592 21.2139 28.9592H45.2139C46.0423 28.9592 46.7139 29.6308 46.7139 30.4592C46.7139 31.2877 46.0423 31.9592 45.2139 31.9592H21.2139C20.3854 31.9592 19.7139 31.2877 19.7139 30.4592Z" fill="white"/>
                          </g>
                          <defs>
                          <filter id="filter0_i_200_219" x="-2" y="0.245361" width="62.4277" height="64.4277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dx="-2" dy="4"/>
                          <feGaussianBlur stdDeviation="7.05"/>
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 1 0"/>
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_200_219"/>
                          </filter>
                          </defs>
                      </svg>
                  </div>
                  <h1 class="text-darken mb-2 text-sm font-medium px-4 text-[13px]">Invite Guest</h1>
                  <p class="px-4 text-gray-500 text-xs font-lora">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                    modi
                    accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                </div>

                <div class="rounded-[34px] bg-white p-3 shadow-xl mt-8">
                  <div
                    class="flex h-11 w-11 -translate-y-8 transform items-center justify-center rounded-lg bg-transparant shadow-lg shadow-teal-500/40">
                        <svg width="25" height="25" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_i_200_219)">
                          <rect y="0.245361" width="60.4277" height="60.4277" rx="9" fill="#FC7B91"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7191 15.8366C16.1689 15.4381 16.813 15.3464 17.3561 15.6036L45.8561 29.1036C46.3799 29.3518 46.7139 29.8796 46.7139 30.4593C46.7139 31.0389 46.3799 31.5667 45.8561 31.8149L17.3561 45.3149C16.813 45.5721 16.1689 45.4804 15.7191 45.0819C15.2694 44.6834 15.1009 44.055 15.2909 43.4849L19.6328 30.4593L15.2909 17.4336C15.1009 16.8635 15.2694 16.2351 15.7191 15.8366ZM19.2485 19.8196L22.637 29.9849C22.7396 30.2928 22.7396 30.6257 22.637 30.9336L19.2485 41.0989L41.71 30.4593L19.2485 19.8196Z" fill="white"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7139 30.4592C19.7139 29.6308 20.3854 28.9592 21.2139 28.9592H45.2139C46.0423 28.9592 46.7139 29.6308 46.7139 30.4592C46.7139 31.2877 46.0423 31.9592 45.2139 31.9592H21.2139C20.3854 31.9592 19.7139 31.2877 19.7139 30.4592Z" fill="white"/>
                          </g>
                          <defs>
                          <filter id="filter0_i_200_219" x="-2" y="0.245361" width="62.4277" height="64.4277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dx="-2" dy="4"/>
                          <feGaussianBlur stdDeviation="7.05"/>
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 1 0"/>
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_200_219"/>
                          </filter>
                          </defs>
                      </svg>
                  </div>
                  <h1 class="text-darken mb-2 text-sm font-medium px-4 text-[13px]">Invite Guest</h1>
                  <p class="px-4 text-gray-500 text-xs font-lora">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                    modi
                    accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                </div>

                <div class="rounded-[34px] bg-white p-3 shadow-xl mt-8">
                  <div
                    class="flex h-11 w-11 -translate-y-8 transform items-center justify-center rounded-lg bg-transparant shadow-lg shadow-teal-500/40">
                        <svg width="25" height="25" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_i_200_219)">
                          <rect y="0.245361" width="60.4277" height="60.4277" rx="9" fill="#FC7B91"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7191 15.8366C16.1689 15.4381 16.813 15.3464 17.3561 15.6036L45.8561 29.1036C46.3799 29.3518 46.7139 29.8796 46.7139 30.4593C46.7139 31.0389 46.3799 31.5667 45.8561 31.8149L17.3561 45.3149C16.813 45.5721 16.1689 45.4804 15.7191 45.0819C15.2694 44.6834 15.1009 44.055 15.2909 43.4849L19.6328 30.4593L15.2909 17.4336C15.1009 16.8635 15.2694 16.2351 15.7191 15.8366ZM19.2485 19.8196L22.637 29.9849C22.7396 30.2928 22.7396 30.6257 22.637 30.9336L19.2485 41.0989L41.71 30.4593L19.2485 19.8196Z" fill="white"/>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7139 30.4592C19.7139 29.6308 20.3854 28.9592 21.2139 28.9592H45.2139C46.0423 28.9592 46.7139 29.6308 46.7139 30.4592C46.7139 31.2877 46.0423 31.9592 45.2139 31.9592H21.2139C20.3854 31.9592 19.7139 31.2877 19.7139 30.4592Z" fill="white"/>
                          </g>
                          <defs>
                          <filter id="filter0_i_200_219" x="-2" y="0.245361" width="62.4277" height="64.4277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dx="-2" dy="4"/>
                          <feGaussianBlur stdDeviation="7.05"/>
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 1 0"/>
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_200_219"/>
                          </filter>
                          </defs>
                      </svg>
                  </div>
                  <h1 class="text-darken mb-2 text-sm font-medium px-4 text-[13px]">Invite Guest</h1>
                  <p class="px-4 text-gray-500 text-xs font-lora">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iure inventore amet
                    modi
                    accusantium vero perspiciatis, incidunt dicta sed aspernatur!</p>
                </div>

              </div> 
           </div>
          </div>
      </main>
      {/* fitur end */}

      {/* testimoni */}
      <div className="object-center flex flex-col m-auto p-auto bg-[url('/assets/laung-harmoni/Testimoni.png')]">
        <div className="flex flex-col m-auto p-auto object-center items-center text-center ">
          <h1 class="flex pt-[50px] pb-[30px] lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-5 font-bold text-3xl text-gray-800 items-center">
            Apa Kata Mereka?
          </h1>
        </div>
          <div class="flex overflow-x-scroll pb-[50px] scrollbar-hide object-center">
            <div class="flex flex-nowrap lg:ml-10 md:ml-10 mx-auto ">

              <div class="inline-block px-2 object-center justify-center">
                <div class="w-[400px] h-[100px] max-w-lg overflow-hidden rounded-[34px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="flex py-5 px-2 space-x-2 ">
                    <Image
                          className="w-[15%] h-[15%] object-cover rounded-full text-center"
                          src={mockup.src}
                          alt="Next.js Logo"
                          width={600}
                          height={200}
                          priority
                      />
                    <div className="">
                      <p className="text-[10px] font-bold">Ahmad bajigur</p>
                      <span className="text-xs font-lora">“Adminnya ramah, kerjanya satset dan undanganku langsung jadi. Pokoknya recommended!”</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="inline-block px-2 object-center justify-center">
                <div class="w-[400px] h-[100px] max-w-lg overflow-hidden rounded-[34px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="flex py-5 px-2 space-x-2 ">
                    <Image
                          className="w-[15%] h-[15%] object-cover rounded-full text-center"
                          src={mockup.src}
                          alt="Next.js Logo"
                          width={600}
                          height={200}
                          priority
                      />
                    <div className="">
                      <p className="text-[10px] font-bold">Ahmad bajigur</p>
                      <span className="text-xs font-lora">“Adminnya ramah, kerjanya satset dan undanganku langsung jadi. Pokoknya recommended!”</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="inline-block px-2 object-center justify-center">
                <div class="w-[400px] h-[100px] max-w-lg overflow-hidden rounded-[34px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="flex py-5 px-2 space-x-2 ">
                    <Image
                          className="w-[15%] h-[15%] object-cover rounded-full text-center"
                          src={mockup.src}
                          alt="Next.js Logo"
                          width={600}
                          height={200}
                          priority
                      />
                    <div className="">
                      <p className="text-[10px] font-bold">Ahmad bajigur</p>
                      <span className="text-xs font-lora">“Adminnya ramah, kerjanya satset dan undanganku langsung jadi. Pokoknya recommended!”</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="inline-block px-2 object-center justify-center">
                <div class="w-[400px] h-[100px] max-w-lg overflow-hidden rounded-[34px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="flex py-5 px-2 space-x-2 ">
                    <Image
                          className="w-[15%] h-[15%] object-cover rounded-full text-center"
                          src={mockup.src}
                          alt="Next.js Logo"
                          width={600}
                          height={200}
                          priority
                      />
                    <div className="">
                      <p className="text-[10px] font-bold">Ahmad bajigur</p>
                      <span className="text-xs font-lora">“Adminnya ramah, kerjanya satset dan undanganku langsung jadi. Pokoknya recommended!”</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="inline-block px-2 object-center justify-center">
                <div class="w-[400px] h-[100px] max-w-lg overflow-hidden rounded-[34px] shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  <div className="flex py-5 px-2 space-x-2 ">
                    <Image
                          className="w-[15%] h-[15%] object-cover rounded-full text-center"
                          src={mockup.src}
                          alt="Next.js Logo"
                          width={600}
                          height={200}
                          priority
                      />
                    <div className="">
                      <p className="text-[10px] font-bold">Ahmad bajigur</p>
                      <span className="text-xs font-lora">“Adminnya ramah, kerjanya satset dan undanganku langsung jadi. Pokoknya recommended!”</span>
                    </div>
                  </div>
                </div>
              </div>

              


            

            </div>
          </div>
      </div>
      {/* testimoni end */}

      {/* fitur */}
      <main className="object-center justify-center h-screen w-screen mb-[90px]">
      <div class="flex flex-col m-auto p-auto bg-pricelist ">
        <div className="flex flex-col items-center text-center ">
          <h1 class="flex lg:px-20 md:px-10 px-5 lg:mx-40 md:mx-20 mx-11 my-11 font-bold text-3xl text-gray-800 items-center">
            Pricelist Undangan
          </h1>
        </div>
          <div class="flex pb-[50px] text-center items-center justify-center">
            <div class="flex flex-nowrap  ">
              
              <div class="inline-block px-3 ">
                <div class="w-[300px] h-[550px] max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex flex-row justify-center">
                  <div className=" justify-center">
                      <h1 className=" flex font-bold text-[13px] justify-center mt-6 font-Mustard">Fitur Basic</h1>
                         <p className=" flex mt-[20px] text-xs items-center text-center px-3 font-lora ">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Revisi Konten Sebanyak ?? Kali</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Akses tool Invite Guest</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Personalized Invitation</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Tidak Ada Batasan Tamu Undangan</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Petunjuk Lokasi</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Ucapan</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Backsound/Musik Latar</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Countdown Menuju Acara</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                         <AiOutlineClose /> 
                              <p className="ml-3">Galeri </p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                         <AiOutlineClose />
                              <p className="ml-3"> Love Journey</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                         <AiOutlineClose />
                              <p className="ml-3">Konfirmasi Kehadiran</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                         <AiOutlineClose /> 
                              <p className="ml-3">Amplop Digital dan Alamat Kado</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineClose />
                              <p className="ml-3">Personalized Invitation</p>
                         </p>
                         <button className="cursor-pointer mb-5 my-[20px] border border-warna px-10 py-3 text-sm bg-transparent text-warna font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                          Rp 100.000
                        </button>
                  </div>
                  </div>
                </div>
              </div>

              <div class="inline-block px-3">
                <div class="w-[300px] h-[550px] max-w-xs overflow-hidden rounded-xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex flex-row px-5">
                  <div className="">
                      <h1 className=" flex font-bold text-[13px] justify-center mt-6">Fitur Premium</h1>
                         <p className=" flex mt-[20px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Revisi Konten Sebanyak ?? Kali</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Akses tool Invite Guest</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Personalized Invitation</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Tidak Ada Batasan Tamu Undangan</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Informasi Acara</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Countdown Menuju Acara</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Petunjuk Lokasi</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Galeri (Maksimal 5 foto)</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                         <AiOutlineCheck/>
                              <p className="ml-3">Ucapan </p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                         <AiOutlineCheck/>
                              <p className="ml-3"> Backsound/Musik Latar</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                         <AiOutlineClose />
                              <p className="ml-3">Love Journey</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                         <AiOutlineClose /> 
                              <p className="ml-3">Konfirmasi Kehadiran</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineClose />
                              <p className="ml-3">Personalized Invitation</p>
                         </p>
                         <button className="cursor-pointer mb-5 my-[20px] border border-warna px-10 py-3 text-sm bg-transparent text-warna font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                          Rp 200.000
                        </button>
                  </div>
                  </div>
                </div>
              </div>

              <div class="inline-block px-3 ">
                <div class="w-[300px] h-[550px] max-w-xs overflow-hidden rounded-xl shadow-md bg-gradient-to-r from-[#E3457B] to-[#EF90A0] hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="flex flex-row px-5">
                  <div className="text-white">
                      <h1 className=" flex font-bold text-[13px] justify-center mt-6">Fitur Luxury</h1>
                         <p className=" flex mt-[20px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Revisi Konten Sebanyak ?? Kali</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Akses tool Invite Guest</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Personalized Invitation</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Tidak Ada Batasan Tamu Undangan</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Petunjuk Lokasi</p>
                         </p> 
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Ucapan</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Backsound/Musik Latar</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                            <AiOutlineCheck/> 
                              <p className="ml-3">Countdown Menuju Acara</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                         <AiOutlineCheck/>  
                              <p className="ml-3">Galeri </p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                         <AiOutlineCheck/> 
                              <p className="ml-3"> Love Journey</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                         <AiOutlineCheck/> 
                              <p className="ml-3">Konfirmasi Kehadiran</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                         <AiOutlineCheck/> 
                              <p className="ml-3">Amplop Digital dan Alamat Kado</p>
                         </p>
                         <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                         <AiOutlineCheck/> 
                              <p className="ml-3">Personalized Invitation</p>
                         </p>
                         <button className="cursor-pointer my-[20px] border border-white px-10 py-3 text-sm bg-transparent text-white font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                          Rp 300.000
                        </button>
                  </div>
                  </div>
                </div>
              </div>

              <div class="inline-block ">
                <div class=" w-[300px] h-[550px] max-w-xs overflow-hidden rounded-xl shadow-md bg-gradient-to-r from-[#303030] to-[#616161] hover:shadow-xl transition-shadow duration-300 ease-in-out  ">
                  <div className="flex flex-row px-5">
                    <div className=" text-white">
                        <h1 className=" flex font-bold text-[13px] justify-center mt-6">Desain Costum</h1>
                          <p className=" flex mt-[20px] text-xs items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Revisi Konten Sebanyak ?? Kali</p>
                          </p>
                          <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Konsep Desain sesuai Permintaan</p>
                          </p>
                          <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Akses seluruh fitur Luxury</p>
                          </p>
                          <p className=" flex mt-[15px] text-xs items-center text-center px-3 font-lora">
                              <AiOutlineCheck/> 
                                <p className="ml-3">Bisa request fitur baru</p>
                          </p>
                          <button className="cursor-pointer my-[300px] border border-white px-10 py-3 text-sm bg-transparent text-whte font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                            Rp 600.000
                          </button>
                    </div>
                  </div>
                </div>
              </div>
            
            </div>
          </div>
      </div>
      </main>
      {/* fitur end */}

      {/* faqs */}
      <main className="object-center content-center flex h-screen w-full bg-[url('/assets/laung-harmoni/FAQs.png')] bg-cover">
      <div className="w-6/12 flex flex-row items-center">
          <div className="ml-[100px] mr-[80px]">
              <h1 className="flex items-center font-medium text-[30px] text-white">Pertanyaan yang<br></br> sering di tanyakan</h1>
                <p className="font-lora mt-5 mb-8 text-white">
                  Berikut merupakan jawaban dari pertanyaan-pertanyaan yang sering orang tanyakan kepada kami:    
                </p>

                <div className="group w-[50%%] flex gap-2 rounded-xl bg-white py-3 px-5 shadow-md transition-all transition-shadow duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r from-[#303030] to-[#616161] ">
                    <div className="group flex-col items-center cursor-pointer ease-in-out">
                      <p className="items-center text-[12px] flex font-bold">Apa itu lorem ipsum?
                        <p className="items-center flex"><IoChevronDownSharp className="group-hover:rotate-180 transition-all ml-[270px]" /></p>
                      </p>
                      <div className="flex hidden transition-all group-hover:flex font-lora">
                       <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                </div>
                <div className="mt-3 group w-[50%%] flex gap-2 rounded-xl bg-white py-3 px-5 shadow-md transition-all transition-shadow duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r from-[#303030] to-[#616161] ">
                    <div className="group flex-col items-center cursor-pointer ease-in-out">
                      <p className="items-center text-[12px] flex font-bold">Apa itu lorem ipsum?
                        <p className="items-center flex"><IoChevronDownSharp className="group-hover:rotate-180 transition-all ml-[270px]" /></p>
                      </p>
                      <div className="flex hidden transition-all group-hover:flex font-lora">
                       <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                </div>
                <div className="mt-3 group w-[50%%] flex gap-2 rounded-xl bg-white py-3 px-5 shadow-md transition-all transition-shadow duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r from-[#303030] to-[#616161] ">
                    <div className="group flex-col items-center cursor-pointer ease-in-out">
                      <p className="items-center text-[12px] flex  font-bold">Apa itu lorem ipsum?
                        <p className="items-center flex"><IoChevronDownSharp className="group-hover:rotate-180 transition-all ml-[270px]" /></p>
                      </p>
                      <div className="flex hidden transition-all group-hover:flex font-lora">
                       <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                </div>
                <div className="mt-3 group w-[50%%] flex gap-2 rounded-xl bg-white py-3 px-5 shadow-md transition-all transition-shadow duration-300 ease-in-out hover:text-white hover:bg-gradient-to-r from-[#303030] to-[#616161] ">
                    <div className="group flex-col items-center cursor-pointer ease-in-out">
                      <p className="items-center text-[12px] flex  font-bold">Apa itu lorem ipsum?
                        <p className="items-center flex"><IoChevronDownSharp className="group-hover:rotate-180 transition-all ml-[270px]" /></p>
                      </p>
                      <div className="flex hidden transition-all group-hover:flex font-lora">
                       <p className="my-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                      </div>
                    </div>
                </div>


                <button className="my-8 shadow-inner drop-shadow-md shadow-[#262626] my-[20px] px-5 py-2 text-[10px] text-white font-regular rounded-full bg-gradient-to-r from-[#303030] to-[#616161] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Lihat Panduan Pengguna
         </button>
             

                
          </div>
      </div>
      </main>
      {/* faqs end */}

      {/* action */}
      <div className="object-center flex flex-col m-auto p-auto bg-bg">
        <div className="flex flex-col m-auto p-auto items-center font-medium text-center py-[65px] ">
          <h1 class="text-white flex justify-center font-medium text-3xl text-gray-800 items-center ">
            Tunggu Apa lagi?
          </h1>
          <h1 className="mt-2 justify-center text-white flex font-medium text-3xl text-gray-800 items-center">
          Ayo Pesan Sekarang juga
          </h1>
          <button className="text-center mt-[20px] border border-1 border-[#000000] shadow-inner drop-shadow-md shadow-[#262626] px-5 py-2 text-[10px] text-white font-regular rounded-full bg-gradient-to-r from-[#303030] to-[#616161] focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
              Pesan Melalui WhatsApp
         </button>

       
        </div>
      </div>
      {/* action end */}

      {/* footer */}
      <Footer />
      {/* footer end */}


    </main>

  
      
   

   </>
  );
}
