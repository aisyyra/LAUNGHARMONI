"use client";

import React from "react";
import { motion } from "framer-motion";
import "./style.css";

function VerticalScroll() {
   return (
    <main className="2xl:justify-center xl:justify-center lg:justify-center object-center bg-cover h-screen w-screen flex bg-undangan">
      {/* left content */}
      <div className="max-w-2xl w-7/12 flex flex-row items-center px-[100px] justify-center">
        <div>
          <h1 className="flex items-center font-medium text-[55px] leading-[77px]">Ragam Fitur <br></br>Undangan</h1>
            <p className="mt-5 mb-5 font-lora text-[22px] leading-[37px]">
            Kami memiliki beragam fitur yang bisa dipasangkan untuk memperkaya undangan Anda. Serta tool blast message bernama Invite Guest yang dapat mempermudah dalam proses pengiriman undangan ke tamu. Beberapa fitur utama sudah tersedia untuk semua jenis tema, jadi Anda tidak perlu merasa khawatir.
            </p>
        </div>
      </div>
      {/* right content */}
      <div className="max-w-2xl w-7/12 flex items-center justify-center px-[50px] pt-[25rem] pb-[3rem] flex overflow-y-scroll scrollbar-hide ">
        <div className="">
          <div className="flex flex-col pt-[100rem]">
              {/* card 1 */}
              <motion.div className="A rounded-[34px] bg-gradient-to-r from-[#303030] to-[#616161] shadow-md mt-[200px] "
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, threshold: 0.5}}
                transition={{ duration: 0.5, ease: "easeOut"}}>
                <div
                    className="kotak flex h-[92px] w-[92px] -translate-y-10 transform items-center justify-center rounded-[22px] mx-[45px]">
                    <svg  width="60" height="60" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div className="px-[45px] pb-[50px]">
                  <h1 className="text-white mb-2 text-[13px] font-bold ">Invite Guest</h1>
                  <p className="text-white text-xs text-xs font-lora ">Alat untuk mengirim pesan broadcast kepada tamu yang akan diundang ke acara (tidak perlu kirim satu persatu).</p>
                </div>
              </motion.div>
              {/* card 2 */}
              <motion.div className="A rounded-[34px] bg-white shadow-md mt-[70px]"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, threshold: 0.5}}
              transition={{ duration: 0.5, ease: "easeOut"}}>
                <div
                    className="kotak_2 flex h-[92px] w-[92px] -translate-y-10 transform items-center justify-center rounded-[22px] ml-[45px] shadow-lg shadow-pink-200">
                      <svg width="60" height="60" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_i_200_230)">
                        <rect y="0.245361" width="60.4277" height="60.4277" rx="9" fill="#FC7B91"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M20.4106 35.6559C21.8171 34.2494 23.7247 33.4592 25.7139 33.4592H34.7139C36.703 33.4592 38.6106 34.2494 40.0172 35.6559C41.4237 37.0625 42.2139 38.9701 42.2139 40.9592V43.9592C42.2139 44.7877 41.5423 45.4592 40.7139 45.4592C39.8854 45.4592 39.2139 44.7877 39.2139 43.9592V40.9592C39.2139 39.7658 38.7398 38.6212 37.8958 37.7772C37.0519 36.9333 35.9073 36.4592 34.7139 36.4592H25.7139C24.5204 36.4592 23.3758 36.9333 22.5319 37.7772C21.688 38.6212 21.2139 39.7658 21.2139 40.9592V43.9592C21.2139 44.7877 20.5423 45.4592 19.7139 45.4592C18.8854 45.4592 18.2139 44.7877 18.2139 43.9592V40.9592C18.2139 38.9701 19.004 37.0625 20.4106 35.6559Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2139 18.4592C27.7286 18.4592 25.7139 20.4739 25.7139 22.9592C25.7139 25.4445 27.7286 27.4592 30.2139 27.4592C32.6991 27.4592 34.7139 25.4445 34.7139 22.9592C34.7139 20.4739 32.6991 18.4592 30.2139 18.4592ZM22.7139 22.9592C22.7139 18.8171 26.0717 15.4592 30.2139 15.4592C34.356 15.4592 37.7139 18.8171 37.7139 22.9592C37.7139 27.1014 34.356 30.4592 30.2139 30.4592C26.0717 30.4592 22.7139 27.1014 22.7139 22.9592Z" fill="white"/>
                        </g>
                        <defs>
                        <filter id="filter0_i_200_230" x="-2" y="0.245361" width="62.4277" height="64.4277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="-2" dy="4"/>
                        <feGaussianBlur stdDeviation="7.05"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 1 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_200_230"/>
                        </filter>
                        </defs>
                      </svg>
                </div>
                <div className="px-[45px] pb-[50px]">
                  <h1 className="mb-2 text-sm font-bold text-[13px]">Personalized Invitation</h1>
                  <p className="text-gray-500 text-xs font-lora">
                    Penyebutan nama tamu pada halaman awal menjadikan undangan terkesan lebih personal dan istimewa.
                  </p>
                </div>
              </motion.div>
              {/* card 3 */}
              <motion.div className="A rounded-[34px] bg-white shadow-md mt-[70px]"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, threshold: 0.5}}
              transition={{ duration: 0.5, ease: "easeOut"}}>
                <div
                    className="kotak_2 flex h-[92px] w-[92px] -translate-y-10 transform items-center justify-center rounded-[22px] ml-[45px] shadow-lg shadow-pink-200">
                    <svg width="60" height="60" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_200_241)">
  <rect y="0.245361" width="60.4277" height="60.4277" rx="9" fill="#FC7B91"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9106 25.1559C17.3171 23.7494 19.2247 22.9592 21.2139 22.9592C24.454 22.9592 27.4466 24.8357 30.2139 28.0596C32.9812 24.8357 35.9737 22.9592 39.2139 22.9592C41.203 22.9592 43.1106 23.7494 44.5172 25.1559C45.9237 26.5624 46.7139 28.4701 46.7139 30.4592C46.7139 32.4484 45.9237 34.356 44.5172 35.7625C43.1106 37.1691 41.203 37.9592 39.2139 37.9592C35.9737 37.9592 32.9812 36.0827 30.2139 32.8588C27.4466 36.0827 24.454 37.9592 21.2139 37.9592C19.2247 37.9592 17.3171 37.1691 15.9106 35.7625C14.504 34.356 13.7139 32.4484 13.7139 30.4592C13.7139 28.4701 14.504 26.5625 15.9106 25.1559ZM28.3109 30.4592C25.688 27.2455 23.3136 25.9592 21.2139 25.9592C20.0204 25.9592 18.8758 26.4333 18.0319 27.2772C17.188 28.1212 16.7139 29.2658 16.7139 30.4592C16.7139 31.6527 17.188 32.7973 18.0319 33.6412C18.8758 34.4851 20.0204 34.9592 21.2139 34.9592C23.3136 34.9592 25.688 33.673 28.3109 30.4592ZM32.1168 30.4592C34.7397 33.673 37.1141 34.9592 39.2139 34.9592C40.4073 34.9592 41.5519 34.4851 42.3958 33.6412C43.2398 32.7973 43.7139 31.6527 43.7139 30.4592C43.7139 29.2658 43.2398 28.1212 42.3958 27.2772C41.5519 26.4333 40.4073 25.9592 39.2139 25.9592C37.1141 25.9592 34.7397 27.2455 32.1168 30.4592Z" fill="white"/>
  </g>
  <defs>
  <filter id="filter0_i_200_241" x="-2" y="0.245361" width="62.4277" height="64.4277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="-2" dy="4"/>
  <feGaussianBlur stdDeviation="7.05"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 1 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_200_241"/>
  </filter>
  </defs>
                    </svg>

                </div>
                <div className="px-[45px] pb-[50px]">
                  <h1 className="text-darken mb-2 text-sm font-bold text-[13px]">Unlimited Guest</h1>
                  <p className="text-gray-500 text-xs font-lora">Laungharmoni tidak membatasi jumlah tamu undangan, kamu bisa mengundang berapa pun tamu, tanpa batas!</p>
                </div>
              </motion.div>
              {/* card 4 */}
              <motion.div className="A rounded-[34px] bg-white shadow-md mt-[70px]"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, threshold: 0.5}}
              transition={{ duration: 0.5, ease: "easeOut"}}>
                <div
                    className="kotak_2 flex h-[92px] w-[92px] -translate-y-10 transform items-center justify-center rounded-[22px] ml-[45px] shadow-lg shadow-pink-200">
                    <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_200_251)">
  <rect y="0.245361" width="60.4277" height="60.4277" rx="9" fill="#FC7B91"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5319 18.2772C17.3758 17.4333 18.5204 16.9592 19.7139 16.9592H40.7139C41.9073 16.9592 43.0519 17.4333 43.8958 18.2772C44.7398 19.1212 45.2139 20.2658 45.2139 21.4592V23.7092C45.2139 24.5377 44.5423 25.2092 43.7139 25.2092C42.8854 25.2092 42.2139 24.5377 42.2139 23.7092V21.4592C42.2139 21.0614 42.0558 20.6799 41.7745 20.3986C41.4932 20.1173 41.1117 19.9592 40.7139 19.9592H19.7139C19.316 19.9592 18.9345 20.1173 18.6532 20.3986C18.3719 20.6799 18.2139 21.0614 18.2139 21.4592V42.4592C18.2139 42.8571 18.3719 43.2386 18.6532 43.5199C18.9345 43.8012 19.316 43.9592 19.7139 43.9592H24.9639C25.7923 43.9592 26.4639 44.6308 26.4639 45.4592C26.4639 46.2877 25.7923 46.9592 24.9639 46.9592H19.7139C18.5204 46.9592 17.3758 46.4851 16.5319 45.6412C15.688 44.7973 15.2139 43.6527 15.2139 42.4592V21.4592C15.2139 20.2658 15.688 19.1212 16.5319 18.2772Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.2139 13.9592C37.0423 13.9592 37.7139 14.6308 37.7139 15.4592V21.4592C37.7139 22.2877 37.0423 22.9592 36.2139 22.9592C35.3854 22.9592 34.7139 22.2877 34.7139 21.4592V15.4592C34.7139 14.6308 35.3854 13.9592 36.2139 13.9592Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2139 13.9592C25.0423 13.9592 25.7139 14.6308 25.7139 15.4592V21.4592C25.7139 22.2877 25.0423 22.9592 24.2139 22.9592C23.3854 22.9592 22.7139 22.2877 22.7139 21.4592V15.4592C22.7139 14.6308 23.3854 13.9592 24.2139 13.9592Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2139 27.4592C15.2139 26.6308 15.8854 25.9592 16.7139 25.9592H24.2139C25.0423 25.9592 25.7139 26.6308 25.7139 27.4592C25.7139 28.2877 25.0423 28.9592 24.2139 28.9592H16.7139C15.8854 28.9592 15.2139 28.2877 15.2139 27.4592Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.2139 31.9592C37.0423 31.9592 37.7139 32.6308 37.7139 33.4592V36.1883L39.4009 37.5379C40.0478 38.0554 40.1527 38.9994 39.6352 39.6463C39.1177 40.2932 38.1737 40.398 37.5268 39.8805L35.2768 38.0805C34.921 37.7959 34.7139 37.3649 34.7139 36.9092V33.4592C34.7139 32.6308 35.3854 31.9592 36.2139 31.9592Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.2139 28.9592C32.0717 28.9592 28.7139 32.3171 28.7139 36.4592C28.7139 40.6014 32.0717 43.9592 36.2139 43.9592C40.356 43.9592 43.7139 40.6014 43.7139 36.4592C43.7139 32.3171 40.356 28.9592 36.2139 28.9592ZM25.7139 36.4592C25.7139 30.6602 30.4149 25.9592 36.2139 25.9592C42.0129 25.9592 46.7139 30.6602 46.7139 36.4592C46.7139 42.2582 42.0129 46.9592 36.2139 46.9592C30.4149 46.9592 25.7139 42.2582 25.7139 36.4592Z" fill="white"/>
  </g>
  <defs>
  <filter id="filter0_i_200_251" x="-2" y="0.245361" width="62.4277" height="64.4277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="-2" dy="4"/>
  <feGaussianBlur stdDeviation="7.05"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 1 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_200_251"/>
  </filter>
  </defs>
                    </svg>
                </div>
                <div className="px-[45px] pb-[50px]">
                  <h1 className="text-darken mb-2 text-sm font-bold text-[13px]">Countdown</h1>
                  <p className="text-gray-500 text-xs font-lora">Hitung mundur menuju waktu pelaksanaan acara</p>
                </div>
              </motion.div>
              {/* card 5 */}
              <motion.div className="A rounded-[34px] bg-white shadow-md mt-[70px]"
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, threshold: 0.5}}
                transition={{ duration: 0.5, ease: "easeOut"}}>
                <div
                    className="kotak_2 flex h-[92px] w-[92px] -translate-y-10 transform items-center justify-center rounded-[22px] ml-[45px] shadow-lg shadow-pink-200">
                    <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_200_266)">
  <rect y="0.245361" width="60.4277" height="60.4277" rx="9" fill="#FC7B91"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2139 16.9592C28.9712 16.9592 27.9639 17.9666 27.9639 19.2092C27.9639 20.4519 28.9712 21.4592 30.2139 21.4592C31.4565 21.4592 32.4639 20.4519 32.4639 19.2092C32.4639 17.9666 31.4565 16.9592 30.2139 16.9592ZM24.9639 19.2092C24.9639 16.3097 27.3144 13.9592 30.2139 13.9592C33.1134 13.9592 35.4639 16.3097 35.4639 19.2092C35.4639 22.1087 33.1134 24.4592 30.2139 24.4592C27.3144 24.4592 24.9639 22.1087 24.9639 19.2092Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M28.5745 20.8485C29.1603 21.4343 29.1603 22.3841 28.5745 22.9698L22.7245 28.8198C22.1387 29.4056 21.1889 29.4056 20.6032 28.8198C20.0174 28.2341 20.0174 27.2843 20.6032 26.6985L26.4532 20.8485C27.0389 20.2627 27.9887 20.2627 28.5745 20.8485Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9639 28.2092C17.7212 28.2092 16.7139 29.2166 16.7139 30.4592C16.7139 31.7019 17.7212 32.7092 18.9639 32.7092C20.2065 32.7092 21.2139 31.7019 21.2139 30.4592C21.2139 29.2166 20.2065 28.2092 18.9639 28.2092ZM13.7139 30.4592C13.7139 27.5597 16.0644 25.2092 18.9639 25.2092C21.8634 25.2092 24.2139 27.5597 24.2139 30.4592C24.2139 33.3587 21.8634 35.7092 18.9639 35.7092C16.0644 35.7092 13.7139 33.3587 13.7139 30.4592Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2139 30.4592C21.2139 29.6308 21.8854 28.9592 22.7139 28.9592H37.7139C38.5423 28.9592 39.2139 29.6308 39.2139 30.4592C39.2139 31.2877 38.5423 31.9592 37.7139 31.9592H22.7139C21.8854 31.9592 21.2139 31.2877 21.2139 30.4592Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M41.4639 28.2092C40.2212 28.2092 39.2139 29.2166 39.2139 30.4592C39.2139 31.7019 40.2212 32.7092 41.4639 32.7092C42.7065 32.7092 43.7139 31.7019 43.7139 30.4592C43.7139 29.2166 42.7065 28.2092 41.4639 28.2092ZM36.2139 30.4592C36.2139 27.5597 38.5644 25.2092 41.4639 25.2092C44.3634 25.2092 46.7139 27.5597 46.7139 30.4592C46.7139 33.3587 44.3634 35.7092 41.4639 35.7092C38.5644 35.7092 36.2139 33.3587 36.2139 30.4592Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M39.8245 32.0985C40.4103 32.6843 40.4103 33.6341 39.8245 34.2198L33.9745 40.0698C33.3887 40.6556 32.4389 40.6556 31.8532 40.0698C31.2674 39.4841 31.2674 38.5343 31.8532 37.9485L37.7032 32.0985C38.2889 31.5127 39.2387 31.5127 39.8245 32.0985Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2139 39.4592C28.9712 39.4592 27.9639 40.4666 27.9639 41.7092C27.9639 42.9519 28.9712 43.9592 30.2139 43.9592C31.4565 43.9592 32.4639 42.9519 32.4639 41.7092C32.4639 40.4666 31.4565 39.4592 30.2139 39.4592ZM24.9639 41.7092C24.9639 38.8097 27.3144 36.4592 30.2139 36.4592C33.1134 36.4592 35.4639 38.8097 35.4639 41.7092C35.4639 44.6087 33.1134 46.9592 30.2139 46.9592C27.3144 46.9592 24.9639 44.6087 24.9639 41.7092Z" fill="white"/>
  </g>
  <defs>
  <filter id="filter0_i_200_266" x="-2" y="0.245361" width="62.4277" height="64.4277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="-2" dy="4"/>
  <feGaussianBlur stdDeviation="7.05"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 1 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_200_266"/>
  </filter>
  </defs>
                    </svg>

                </div>
                <div className="px-[45px] pb-[50px]">
                  <h1 className="text-darken mb-2 text-sm font-bold text-[13px]">Love Journey</h1>
                  <p className="text-gray-500 text-xs font-lora">Timeline terkait kisah dan perjalanan cinta mempelai.</p>
                </div>
              </motion.div>
              {/* card 6 */}
              <motion.div className="A rounded-[34px] bg-white shadow-md mt-[70px]"
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, threshold: 0.5}}
                transition={{ duration: 0.5, ease: "easeOut"}}>
                <div
                    className="kotak_2 flex h-[92px] w-[92px] -translate-y-10 transform items-center justify-center rounded-[22px] ml-[45px] shadow-lg shadow-pink-200">
                    <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_200_282)">
  <rect y="0.245361" width="60.4277" height="60.4277" rx="9" fill="#FC7B91"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2139 19.9592C16.0423 19.9592 16.7139 20.6308 16.7139 21.4592V42.4592C16.7139 42.8571 16.8719 43.2386 17.1532 43.5199C17.4345 43.8012 17.816 43.9592 18.2139 43.9592H39.2139C40.0423 43.9592 40.7139 44.6308 40.7139 45.4592C40.7139 46.2877 40.0423 46.9592 39.2139 46.9592H18.2139C17.0204 46.9592 15.8758 46.4851 15.0319 45.6412C14.188 44.7973 13.7139 43.6527 13.7139 42.4592V21.4592C13.7139 20.6308 14.3854 19.9592 15.2139 19.9592Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M37.0973 28.9544C38.0565 27.9953 39.3574 27.4565 40.7139 27.4565C42.0703 27.4565 43.3712 27.9953 44.3304 28.9544L44.3305 28.9545L46.2745 30.8985C46.8603 31.4843 46.8603 32.434 46.2745 33.0198C45.6887 33.6056 44.739 33.6056 44.1532 33.0198L42.2093 31.0759C41.8127 30.6793 41.2747 30.4565 40.7139 30.4565C40.153 30.4565 39.6151 30.6793 39.2184 31.0759L29.7745 40.5198C29.1887 41.1056 28.239 41.1056 27.6532 40.5198C27.0674 39.934 27.0674 38.9843 27.6532 38.3985L37.0972 28.9545L37.0973 28.9544Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2139 22.9592C29.3854 22.9592 28.7139 23.6308 28.7139 24.4592C28.7139 25.2877 29.3854 25.9592 30.2139 25.9592C31.0423 25.9592 31.7139 25.2877 31.7139 24.4592C31.7139 23.6308 31.0423 22.9592 30.2139 22.9592ZM25.7139 24.4592C25.7139 21.9739 27.7286 19.9592 30.2139 19.9592C32.6991 19.9592 34.7139 21.9739 34.7139 24.4592C34.7139 26.9445 32.6991 28.9592 30.2139 28.9592C27.7286 28.9592 25.7139 26.9445 25.7139 24.4592Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.2139 16.9592C23.3854 16.9592 22.7139 17.6308 22.7139 18.4592V36.4592C22.7139 37.2877 23.3854 37.9592 24.2139 37.9592H42.2139C43.0423 37.9592 43.7139 37.2877 43.7139 36.4592V18.4592C43.7139 17.6308 43.0423 16.9592 42.2139 16.9592H24.2139ZM19.7139 18.4592C19.7139 15.9739 21.7286 13.9592 24.2139 13.9592H42.2139C44.6992 13.9592 46.7139 15.9739 46.7139 18.4592V36.4592C46.7139 38.9445 44.6992 40.9592 42.2139 40.9592H24.2139C21.7286 40.9592 19.7139 38.9445 19.7139 36.4592V18.4592Z" fill="white"/>
  </g>
  <defs>
  <filter id="filter0_i_200_282" x="-2" y="0.245361" width="62.4277" height="64.4277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="-2" dy="4"/>
  <feGaussianBlur stdDeviation="7.05"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 1 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_200_282"/>
  </filter>
  </defs>
                    </svg>
                </div>
                <div className="px-[45px] pb-[50px]">
                  <h1 className="text-darken mb-2 text-sm font-bold text-[13px]">Galeri</h1>
                  <p className="text-gray-500 text-xs font-lora">Pada tema Premium dan Luxury, kami menyediakan fitur galeri yang bisa diisi foto-foto terkait acara.</p>
                </div>
              </motion.div>
              {/* card 7 */}
              <motion.div className="A rounded-[34px] bg-white shadow-md mt-[70px]"
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, threshold: 0.5}}
                transition={{ duration: 0.5, ease: "easeOut"}}>
                <div
                    className="kotak_2 flex h-[92px] w-[92px] -translate-y-10 transform items-center justify-center rounded-[22px] ml-[45px] shadow-lg shadow-pink-200">
                    <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_200_295)">
  <rect y="0.245361" width="60.4277" height="60.4277" rx="9" fill="#FC7B91"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2139 16.9592C28.2247 16.9592 26.3171 17.7494 24.9106 19.1559C23.504 20.5625 22.7139 22.4701 22.7139 24.4592C22.7139 27.2417 24.6196 30.2516 26.835 32.7439C27.9075 33.9505 28.9847 34.9608 29.7954 35.6702C29.9449 35.801 30.085 35.9213 30.2139 36.0303C30.3428 35.9213 30.4828 35.801 30.6324 35.6702C31.4431 34.9608 32.5202 33.9505 33.5928 32.7439C35.8082 30.2516 37.7139 27.2417 37.7139 24.4592C37.7139 22.4701 36.9237 20.5625 35.5172 19.1559C34.1106 17.7494 32.203 16.9592 30.2139 16.9592ZM30.2139 37.9592C29.3139 39.1592 29.3136 39.159 29.3132 39.1587L29.3123 39.1581L29.31 39.1563L29.3028 39.1509L29.2788 39.1327C29.2587 39.1173 29.2302 39.0955 29.1939 39.0674C29.1214 39.0112 29.0178 38.93 28.8876 38.8253C28.6271 38.616 28.2593 38.3125 27.8199 37.9279C26.9431 37.1607 25.7702 36.0617 24.5928 34.737C22.3082 32.1669 19.7139 28.4268 19.7139 24.4592C19.7139 21.6745 20.8201 19.0037 22.7892 17.0346C24.7584 15.0655 27.4291 13.9592 30.2139 13.9592C32.9986 13.9592 35.6694 15.0655 37.6385 17.0346C39.6076 19.0037 40.7139 21.6745 40.7139 24.4592C40.7139 28.4268 38.1196 32.1669 35.835 34.737C34.6575 36.0617 33.4847 37.1607 32.6079 37.9279C32.1684 38.3125 31.8006 38.616 31.5402 38.8253C31.4099 38.93 31.3063 39.0112 31.2338 39.0674C31.1975 39.0955 31.1691 39.1173 31.1489 39.1327L31.1249 39.1509L31.1178 39.1563L31.1154 39.1581L31.1145 39.1587C31.1142 39.159 31.1139 39.1592 30.2139 37.9592ZM30.2139 37.9592L31.1139 39.1592C30.5805 39.5592 29.8472 39.5592 29.3139 39.1592L30.2139 37.9592Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2139 22.9592C29.3854 22.9592 28.7139 23.6308 28.7139 24.4592C28.7139 25.2877 29.3854 25.9592 30.2139 25.9592C31.0423 25.9592 31.7139 25.2877 31.7139 24.4592C31.7139 23.6308 31.0423 22.9592 30.2139 22.9592ZM25.7139 24.4592C25.7139 21.9739 27.7286 19.9592 30.2139 19.9592C32.6991 19.9592 34.7139 21.9739 34.7139 24.4592C34.7139 26.9445 32.6991 28.9592 30.2139 28.9592C27.7286 28.9592 25.7139 26.9445 25.7139 24.4592Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6322 31.9615C19.6594 31.96 19.6866 31.9592 19.7138 31.9592H25.4663C26.2947 31.9592 26.9663 32.6308 26.9663 33.4592C26.9663 34.2877 26.2947 34.9592 25.4663 34.9592H19.7947L19.7868 34.9836L16.7949 43.9592H43.6327L40.6408 34.9836L40.6329 34.9592H34.9613C34.1329 34.9592 33.4613 34.2877 33.4613 33.4592C33.4613 32.6308 34.1329 31.9592 34.9613 31.9592H40.7138C40.741 31.9592 40.7682 31.96 40.7954 31.9615C41.4058 31.9947 41.9915 32.2136 42.474 32.5889C42.9522 32.9609 43.3065 33.4689 43.4905 34.0458L46.4109 42.8072C46.7171 43.2967 46.7147 43.7749 46.7139 43.9383C46.7138 43.946 46.7138 43.953 46.7138 43.9592C46.7138 44.7501 46.4436 45.5257 45.862 46.1074C45.2803 46.6891 44.5047 46.9592 43.7138 46.9592H16.7138C15.9229 46.9592 15.1473 46.6891 14.5656 46.1074C13.984 45.5257 13.7138 44.7501 13.7138 43.9592C13.7138 43.953 13.7138 43.946 13.7137 43.9383C13.7129 43.7749 13.7105 43.2967 14.0167 42.8072L16.9371 34.0459C17.121 33.4689 17.4753 32.9609 17.9536 32.5889C18.4361 32.2136 19.0218 31.9947 19.6322 31.9615ZM43.7132 43.9185C43.7132 43.9185 43.7133 43.9211 43.7135 43.9268L43.7132 43.9185ZM16.7144 43.9185C16.7145 43.9187 16.7144 43.9216 16.7141 43.9268L16.7144 43.9185Z" fill="white"/>
  </g>
  <defs>
  <filter id="filter0_i_200_295" x="-2" y="0.245361" width="62.4277" height="64.4277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="-2" dy="4"/>
  <feGaussianBlur stdDeviation="7.05"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 1 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_200_295"/>
  </filter>
  </defs>
                    </svg>
                </div>
                <div className="px-[45px] pb-[50px]">
                  <h1 className="text-darken mb-2 text-sm font-bold text-[13px]">Petunjuk Lokasi</h1>
                  <p className="text-gray-500 text-xs font-lora">Informasi maps terkait lokasi berlangsungnya acara.</p>
                </div>
              </motion.div>
              {/* card 8 */}
              <motion.div className="A rounded-[34px] bg-white shadow-md mt-[70px]"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, threshold: 0.5}}
              transition={{ duration: 0.5, ease: "easeOut"}}>
                <div
                    className="kotak_2 flex h-[92px] w-[92px] -translate-y-10 transform items-center justify-center rounded-[22px] ml-[45px] shadow-lg shadow-pink-200">
                    <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_200_307)">
  <rect y="0.245361" width="60.4277" height="60.4277" rx="9" fill="#FC7B91"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2139 25.9592C15.2139 24.3024 16.557 22.9592 18.2139 22.9592H42.2139C43.8707 22.9592 45.2139 24.3024 45.2139 25.9592V28.9592C45.2139 30.6161 43.8707 31.9592 42.2139 31.9592H18.2139C16.557 31.9592 15.2139 30.6161 15.2139 28.9592V25.9592ZM42.2139 25.9592H18.2139V28.9592H42.2139V25.9592Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2139 22.9592C31.0423 22.9592 31.7139 23.6308 31.7139 24.4592V43.9592C31.7139 44.7877 31.0423 45.4592 30.2139 45.4592C29.3854 45.4592 28.7139 44.7877 28.7139 43.9592V24.4592C28.7139 23.6308 29.3854 22.9592 30.2139 22.9592Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7139 28.9592C20.5423 28.9592 21.2139 29.6308 21.2139 30.4592V40.9592C21.2139 41.3571 21.3719 41.7386 21.6532 42.0199C21.9345 42.3012 22.316 42.4592 22.7139 42.4592H37.7139C38.1117 42.4592 38.4932 42.3012 38.7745 42.0199C39.0558 41.7386 39.2139 41.3571 39.2139 40.9592V30.4592C39.2139 29.6308 39.8854 28.9592 40.7139 28.9592C41.5423 28.9592 42.2139 29.6308 42.2139 30.4592V40.9592C42.2139 42.1527 41.7398 43.2973 40.8958 44.1412C40.0519 44.9851 38.9073 45.4592 37.7139 45.4592H22.7139C21.5204 45.4592 20.3758 44.9851 19.5319 44.1412C18.688 43.2973 18.2139 42.1527 18.2139 40.9592V30.4592C18.2139 29.6308 18.8854 28.9592 19.7139 28.9592Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.418 19.9774C25.4279 18.8772 24.4 18.4431 23.49 18.4589L23.4639 18.4592C22.8671 18.4592 22.2948 18.6962 21.8729 19.1182C21.4509 19.5401 21.2139 20.1124 21.2139 20.7092C21.2139 21.3059 21.4509 21.8782 21.8729 22.3002C22.2948 22.7221 22.8671 22.9592 23.4639 22.9592C24.2923 22.9592 24.9639 23.6307 24.9639 24.4592C24.9639 25.2876 24.2923 25.9592 23.4639 25.9592C22.0715 25.9592 20.7361 25.406 19.7516 24.4215C18.767 23.4369 18.2139 22.1015 18.2139 20.7092C18.2139 19.3168 18.767 17.9814 19.7516 16.9969C20.733 16.0154 22.063 15.4627 23.4507 15.4592C25.4297 15.429 27.233 16.3983 28.6479 17.9705C29.2384 18.6266 29.7619 19.3859 30.2139 20.224C30.6659 19.3859 31.1893 18.6266 31.7798 17.9705C33.1947 16.3983 34.9981 15.429 36.9771 15.4592C38.3647 15.4627 39.6947 16.0154 40.6762 16.9969C41.6607 17.9814 42.2139 19.3168 42.2139 20.7092C42.2139 22.1015 41.6607 23.4369 40.6762 24.4215C39.6916 25.406 38.3563 25.9592 36.9639 25.9592C36.1354 25.9592 35.4639 25.2876 35.4639 24.4592C35.4639 23.6307 36.1354 22.9592 36.9639 22.9592C37.5606 22.9592 38.1329 22.7221 38.5549 22.3002C38.9768 21.8782 39.2139 21.3059 39.2139 20.7092C39.2139 20.1124 38.9768 19.5401 38.5549 19.1182C38.1329 18.6962 37.5606 18.4592 36.9639 18.4592L36.9377 18.4589C36.0278 18.4431 34.9999 18.8772 34.0097 19.9774C33.0119 21.086 32.1714 22.7531 31.6716 24.8129C31.5083 25.4855 30.906 25.9592 30.2139 25.9592C29.5217 25.9592 28.9194 25.4855 28.7562 24.8129C28.2563 22.7531 27.4158 21.086 26.418 19.9774Z" fill="white"/>
  </g>
  <defs>
  <filter id="filter0_i_200_307" x="-2" y="0.245361" width="62.4277" height="64.4277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="-2" dy="4"/>
  <feGaussianBlur stdDeviation="7.05"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 1 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_200_307"/>
  </filter>
  </defs>
                    </svg>
                </div>
                <div className="px-[45px] pb-[50px]">
                  <h1 className="text-darken mb-2 text-sm font-bold text-[13px]">Hadiah</h1>
                  <p className="text-gray-500 text-xs font-lora">Memuat informasi rekening untuk keperluan amplop digital dan informasi nama serta alamat pengiriman kado/hadiah.</p>
                </div>
              </motion.div>
              {/* card 9 */}
              <motion.div className="A rounded-[34px] bg-white shadow-md mt-[70px]"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, threshold: 0.5}}
              transition={{ duration: 0.5, ease: "easeOut"}}>
                <div
                    className="kotak_2 flex h-[92px] w-[92px] -translate-y-10 transform items-center justify-center rounded-[22px] ml-[45px] shadow-lg shadow-pink-200">
                    <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_200_320)">
  <rect y="0.245117" width="60.4277" height="60.4277" rx="9" fill="#FC7B91"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7139 18.459C19.316 18.459 18.9345 18.617 18.6532 18.8983C18.3719 19.1796 18.2139 19.5612 18.2139 19.959V40.3377L21.6532 36.8983C21.9345 36.617 22.316 36.459 22.7139 36.459H40.7139C41.1117 36.459 41.4932 36.3009 41.7745 36.0196C42.0558 35.7383 42.2139 35.3568 42.2139 34.959V19.959C42.2139 19.5612 42.0558 19.1796 41.7745 18.8983C41.4932 18.617 41.1117 18.459 40.7139 18.459H19.7139ZM16.5319 16.777C17.3758 15.9331 18.5204 15.459 19.7139 15.459H40.7139C41.9073 15.459 43.0519 15.9331 43.8958 16.777C44.7398 17.6209 45.2139 18.7655 45.2139 19.959V34.959C45.2139 36.1525 44.7398 37.2971 43.8958 38.141C43.0519 38.9849 41.9073 39.459 40.7139 39.459H23.3352L17.7745 45.0196C17.3455 45.4486 16.7004 45.577 16.1398 45.3448C15.5793 45.1126 15.2139 44.5657 15.2139 43.959V19.959C15.2139 18.7655 15.688 17.6209 16.5319 16.777Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2139 24.459C21.2139 23.6306 21.8854 22.959 22.7139 22.959H31.7139C32.5423 22.959 33.2139 23.6306 33.2139 24.459C33.2139 25.2874 32.5423 25.959 31.7139 25.959H22.7139C21.8854 25.959 21.2139 25.2874 21.2139 24.459Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2139 30.459C21.2139 29.6306 21.8854 28.959 22.7139 28.959H37.7139C38.5423 28.959 39.2139 29.6306 39.2139 30.459C39.2139 31.2874 38.5423 31.959 37.7139 31.959H22.7139C21.8854 31.959 21.2139 31.2874 21.2139 30.459Z" fill="white"/>
  </g>
  <defs>
  <filter id="filter0_i_200_320" x="-2" y="0.245117" width="62.4277" height="64.4277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="-2" dy="4"/>
  <feGaussianBlur stdDeviation="7.05"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 1 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_200_320"/>
  </filter>
  </defs>
                    </svg>
                </div>
                <div className="px-[45px] pb-[50px]">
                  <h1 className="text-darken mb-2 text-sm font-bold text-[13px]">Ucapan</h1>
                  <p className="text-gray-500 text-xs font-lora">Tempat para tamu undangan memberikan ucapan selamat dan sukacita terhadap acara yang akan berlangsung.</p>
                </div>
              </motion.div>
              {/* card 10 */}
              <motion.div className="A rounded-[34px] bg-white shadow-md mt-[70px]"
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0, threshold: 0.5}}
                transition={{ duration: 0.5, ease: "easeOut"}}>
                <div
                    className="kotak_2 flex h-[92px] w-[92px] -translate-y-10 transform items-center justify-center rounded-[22px] ml-[45px] shadow-lg shadow-pink-200">
                    <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_200_332)">
  <rect y="0.245117" width="60.4277" height="60.4277" rx="9" fill="#FC7B91"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9639 16.959C21.3671 16.959 20.7948 17.196 20.3729 17.618C19.9509 18.04 19.7139 18.6122 19.7139 19.209V36.9656C20.4105 36.6351 21.1781 36.459 21.9639 36.459H40.7139V16.959H21.9639ZM43.7139 15.459C43.7139 14.6306 43.0423 13.959 42.2139 13.959H21.9639C20.5715 13.959 19.2361 14.5121 18.2516 15.4967C17.267 16.4812 16.7139 17.8166 16.7139 19.209V41.709C16.7139 43.1014 17.267 44.4367 18.2516 45.4213C19.2361 46.4059 20.5715 46.959 21.9639 46.959H42.2139C43.0423 46.959 43.7139 46.2874 43.7139 45.459V15.459ZM40.7139 39.459H21.9639C21.3671 39.459 20.7948 39.696 20.3729 40.118C19.9509 40.54 19.7139 41.1122 19.7139 41.709C19.7139 42.3057 19.9509 42.878 20.3729 43.3C20.7948 43.7219 21.3671 43.959 21.9639 43.959H40.7139V39.459Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.2139 22.959C29.3854 22.959 28.7139 23.6306 28.7139 24.459C28.7139 25.2874 29.3854 25.959 30.2139 25.959C31.0423 25.959 31.7139 25.2874 31.7139 24.459C31.7139 23.6306 31.0423 22.959 30.2139 22.959ZM25.7139 24.459C25.7139 21.9737 27.7286 19.959 30.2139 19.959C32.6991 19.959 34.7139 21.9737 34.7139 24.459C34.7139 26.9443 32.6991 28.959 30.2139 28.959C27.7286 28.959 25.7139 26.9443 25.7139 24.459Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M25.9712 27.7163C27.0964 26.5911 28.6226 25.959 30.2139 25.959C31.8052 25.959 33.3313 26.5911 34.4565 27.7163C35.5817 28.8416 36.2139 30.3677 36.2139 31.959C36.2139 32.7874 35.5423 33.459 34.7139 33.459C33.8854 33.459 33.2139 32.7874 33.2139 31.959C33.2139 31.1633 32.8978 30.4003 32.3352 29.8377C31.7726 29.2751 31.0095 28.959 30.2139 28.959C29.4182 28.959 28.6552 29.2751 28.0925 29.8377C27.5299 30.4003 27.2139 31.1633 27.2139 31.959C27.2139 32.7874 26.5423 33.459 25.7139 33.459C24.8854 33.459 24.2139 32.7874 24.2139 31.959C24.2139 30.3677 24.846 28.8416 25.9712 27.7163Z" fill="white"/>
  </g>
  <defs>
  <filter id="filter0_i_200_332" x="-2" y="0.245117" width="62.4277" height="64.4277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="-2" dy="4"/>
  <feGaussianBlur stdDeviation="7.05"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 1 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_200_332"/>
  </filter>
  </defs>
                    </svg>
                </div>
                <div className="px-[45px] pb-[50px]">
                  <h1 className="text-darken mb-2 text-sm font-bold text-[13px]">Konfirmasi Kehadiran</h1>
                  <p className="text-gray-500 text-xs font-lora">Tamu bisa memilih untuk hadir atau tidak, sehingga kamu dapat memantau data kehadiran tamu dalam acara.</p>
                </div>
              </motion.div>
              {/* card 11 */}
              <motion.div className="A rounded-[34px] bg-white shadow-md mt-[70px]"
              initial={{ opacity: 0, y: 150 }}
              whileInView={{ opacity: 1, y: 0, threshold: 0.5}}
              transition={{ duration: 0.5, ease: "easeOut"}}>
                <div
                    className="kotak_2 flex h-[92px] w-[92px] -translate-y-10 transform items-center justify-center rounded-[22px] ml-[45px] shadow-lg shadow-pink-200">
                  <svg width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_i_200_344)">
  <rect y="0.245117" width="60.4277" height="60.4277" rx="9" fill="#FC7B91"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M33.2139 34.959C32.3854 34.959 31.7139 35.6306 31.7139 36.459C31.7139 37.2874 32.3854 37.959 33.2139 37.959C34.0423 37.959 34.7139 37.2874 34.7139 36.459C34.7139 35.6306 34.0423 34.959 33.2139 34.959ZM28.7139 36.459C28.7139 33.9737 30.7286 31.959 33.2139 31.959C35.6991 31.959 37.7139 33.9737 37.7139 36.459C37.7139 38.9443 35.6991 40.959 33.2139 40.959C30.7286 40.959 28.7139 38.9443 28.7139 36.459Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2139 37.959C20.3854 37.959 19.7139 38.6306 19.7139 39.459C19.7139 40.2874 20.3854 40.959 21.2139 40.959C22.0423 40.959 22.7139 40.2874 22.7139 39.459C22.7139 38.6306 22.0423 37.959 21.2139 37.959ZM16.7139 39.459C16.7139 36.9737 18.7286 34.959 21.2139 34.959C23.6991 34.959 25.7139 36.9737 25.7139 39.459C25.7139 41.9443 23.6991 43.959 21.2139 43.959C18.7286 43.959 16.7139 41.9443 16.7139 39.459Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2139 16.959C20.816 16.959 20.4345 17.117 20.1532 17.3983C19.8719 17.6796 19.7139 18.0612 19.7139 18.459V31.059C19.7139 31.8874 19.0423 32.559 18.2139 32.559C17.3854 32.559 16.7139 31.8874 16.7139 31.059V18.459C16.7139 17.2655 17.188 16.1209 18.0319 15.277C18.8758 14.4331 20.0204 13.959 21.2139 13.959H33.9639C34.3617 13.959 34.7432 14.117 35.0245 14.3983L43.2745 22.6483C43.5558 22.9296 43.7139 23.3112 43.7139 23.709V42.459C43.7139 43.6525 43.2398 44.7971 42.3958 45.641C41.5519 46.4849 40.4073 46.959 39.2139 46.959H27.9639C27.1354 46.959 26.4639 46.2874 26.4639 45.459C26.4639 44.6306 27.1354 43.959 27.9639 43.959H39.2139C39.6117 43.959 39.9932 43.8009 40.2745 43.5196C40.5558 43.2383 40.7139 42.8568 40.7139 42.459V24.3303L33.3425 16.959H21.2139Z" fill="white"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M37.1857 24.8164C37.5208 25.1014 37.7139 25.5191 37.7139 25.959V36.459C37.7139 37.2874 37.0423 37.959 36.2139 37.959C35.3854 37.959 34.7139 37.2874 34.7139 36.459V27.7224L25.7139 29.1849V39.459C25.7139 40.2874 25.0423 40.959 24.2139 40.959C23.3854 40.959 22.7139 40.2874 22.7139 39.459V27.909C22.7139 27.1734 23.2472 26.5464 23.9733 26.4284L35.9733 24.4784C36.4074 24.4079 36.8507 24.5314 37.1857 24.8164Z" fill="white"/>
  </g>
  <defs>
  <filter id="filter0_i_200_344" x="-2" y="0.245117" width="62.4277" height="64.4277" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dx="-2" dy="4"/>
  <feGaussianBlur stdDeviation="7.05"/>
  <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0.890196 0 0 0 0 0.270588 0 0 0 0 0.482353 0 0 0 1 0"/>
  <feBlend mode="normal" in2="shape" result="effect1_innerShadow_200_344"/>
  </filter>
  </defs>
                  </svg>
                </div>
                <div className="px-[45px] pb-[50px]">
                  <h1 className="text-darken mb-2 text-sm font-bold text-[13px]">Backsound</h1>
                  <p className="text-gray-500 text-xs font-lora">Musik latar belakang untuk mendukung suasana undangan.</p>
                </div>
              </motion.div>
          </div> 
        </div>
      </div>
  </main>
   )
}

export default VerticalScroll;