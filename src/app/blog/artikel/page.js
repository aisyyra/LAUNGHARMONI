import React from "react";
import Image from 'next/image'
import Link from 'next/link'
import Header from "@/components/header";
import Artikel from "@/assets/laung-harmoni/1_Blog.jpg";
import Footer from "@/components/footer";
import { IoIosArrowForward } from "react-icons/io";


export default function tema() {
    return (
    <>
         <Header />
         {/* Header Page */}
            <main className="justify-center w-screen flex bg-undangan">
                <div className="mt-[150px] mb-[100px] w-12/12 flex flex-row">
                    <div className="flex flex-col justify-center px-[146px]">
                        <div class="rounded-[35px] overflow-hidden shadow-lg max-w-7xl  bg-white ">
                            <Image
                                className="object-cover w-[100%] h-[536px]"
                                    src={Artikel.src}
                                    alt="Next.js Logo"
                                    width={100}
                                    height={100}
                                    priority
                            />
                            <div class="px-[120px] py-[60px]">
                                <div class="leading-[62px] font-bold text-md text-[40px] font-medium">Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing Elit Sed Do Eiusmod Exercitation Ullamco Laboris</div>
                                <button className="my-[60px] px-[28px] py-[15px] text-[22px] text-white font-medium rounded-full font-lora bg-gradient-to-r from-[#303030] to-[#616161] ">
                                    Kamis, 18 Juli 2024
                                </button>
                                <div className="font-lora text-[22px] leading-[36px]">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <p className="my-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium volupta tum de leniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                    <div>
                                        <h3 className="font-bold text-[30px] my-7">1. Et harum quidem</h3>
                                        <p className="my-3">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[30px] my-7">2. Distinctio</h3>
                                        <p className="my-3">Etiusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occa ecati cupi ditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-[30px] my-7">3. Nam libero tempore</h3>
                                        <p className="my-3">Um soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis.
                                        </p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
                                        <p className="my-3">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occa ecati cupi ditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibu sdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
                                        <p>Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis</p>
                                    </div>

                                </div>
                            </div>
                            <div class="px-[120px] font-lora pb-[60px]">
                                <button className="mr-[19px] px-[23px] py-[12px]  font-thin text-black rounded-full bg-white border border-black ">
                                    Keyword
                                </button>
                                <button className="px-[23px] py-[12px] text-[17px] font-thin text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] ">
                                Pernikahan
                                </button>
                                <button className="mx-[19px] px-[23px] py-[12px] text-[17px] font-thin text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] ">
                                    Islam
                                </button>
                                <button className="px-[23px] py-[12px] text-[17px] font-thin text-white rounded-full bg-gradient-to-r from-[#E3457B] to-[#EF90A0] ">
                                    Budaya
                                </button>
                            </div>
                        </div>
                        <div className="my-[100px] justify-center">
                            <p className="mb-[60px]">Artikel lain nya</p>
                            <div className="flex flex-row ">
                                <div class="mr-[34px] max-w-[357px] rounded-[25px] overflow-hidden shadow-lg bg-white">
                                <Image
                                        className="w-[357px] h-[297px]"                                                          
                                        src={Artikel.src}
                                        alt="Next.js Logo"
                                        width={200}
                                        height={200}
                                        priority
                                />
                                <div class="px-[25px] py-[29px]">
                                    <button className="mb-[21px] px-[15px] py-[8px] text-[11px] text-white font-regular rounded-full bg-gradient-to-r from-[#303030] to-[#616161] ">
                                        Kamis, 18 Juli 2024
                                    </button>
                                    <Link href="/">
                                        <div class="text-[16px] mb-[21px] leading-[26px] ">Lorem Ipsum Dolor Sit Amet Consectetur Adispiscing Elit Sed do Eiusmod</div>
                                    </Link>
                                    <p class="font-lora text-[12px] font-regular">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    </p>
                                </div>
                                </div>
                                <div class="mr-[34px] max-w-[357px] rounded-[25px] overflow-hidden shadow-lg bg-white">
                                <Image
                                        className="w-[357px]  h-[297px]"                                                          
                                        src={Artikel.src}
                                        alt="Next.js Logo"
                                        width={200}
                                        height={200}
                                        priority
                                />
                                <div class="px-[25px] py-[29px]">
                                    <button className="mb-[21px] px-[15px] py-[8px] text-[11px] text-white font-regular rounded-full bg-gradient-to-r from-[#303030] to-[#616161] ">
                                        Kamis, 18 Juli 2024
                                    </button>
                                    <div class="text-[16px] mb-[21px] leading-[26px]">Lorem Ipsum Dolor Sit Amet Consectetur Adispiscing Elit Sed do Eiusmod</div>
                                    <p class="font-lora text-[12px] font-regular">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                    </p>
                                </div>
                                </div>
                                <div class=" max-w-[357px] rounded-[25px] overflow-hidden shadow-lg bg-white">
                                    <Image
                                            className="w-[357px] h-[297px]"                                                          
                                            src={Artikel.src}
                                            alt="Next.js Logo"
                                            width={200}
                                            height={200}
                                            priority
                                    />
                                    <div class="px-[25px] py-[29px]">
                                        <button className="mb-[21px] px-[15px] py-[8px] text-[11px] text-white font-regular rounded-full bg-gradient-to-r from-[#303030] to-[#616161] ">
                                            Kamis, 18 Juli 2024
                                        </button>
                                        <div class="text-[16px] mb-[21px] leading-[26px]">Lorem Ipsum Dolor Sit Amet Consectetur Adispiscing Elit Sed do Eiusmod</div>
                                        <p class="font-lora text-[12px] font-regular">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                        </p>
                                    </div>
                                </div>
                                <div>
                                <button className="z-10 -translate-x-8 mt-[15rem] px-[15px] py-[50px] text-[20px] text-white font-bold rounded-full bg-gradient-to-r from-[#303030] to-[#616161] ">
                                <IoIosArrowForward />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>
         {/* Header Page End */}
         <Footer />
    </>
    );
}