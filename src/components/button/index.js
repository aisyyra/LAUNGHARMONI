import React from "react";
import "./style.css";

function button() {
    return (
    <>
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <div className="flex w-full divide-x divide-gray-800 row">
               <a href="/portofolio/template" className="button transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-[15px] py-[18px] px-[32px] rounded-[50px] bg-gradient-to-r from-[#E3457B] to-[#EF90A0] text-white focus:opacity-[0.5] focus:shadow-none active:opacity-[0.85] block w-full rounded-r-none border-r-0">
                    <button>
                       <p className="align-middle select-none text-center justify-center">Desain Template</p> 
                    </button>
                </a>
                <a href="/portofolio/custom" className="button_2 transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-[15px] py-[18px] px-[32px] rounded-[50px] bg-gradient-to-r from-[#303030] to-[#616161] text-white focus:opacity-[0.5] focus:shadow-none active:opacity-[0.85] block w-full rounded-l-none">
                    <button>
                        <p className="align-middle select-none text-center justify-center">Desain Costum</p>
                    </button>
                </a>
            </div>
        </div>
    </>
    );
}

export default button;

