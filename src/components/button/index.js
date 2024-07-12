import React from "react";

function button() {
    return (
    <>
        <div class="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <div class="flex w-full divide-x divide-gray-800 row">
               <a href="/portofolio/template" className="transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-[50px] bg-gradient-to-r from-[#E3457B] to-[#EF90A0] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-warna-900/20 focus:opacity-[0.5] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full rounded-r-none border-r-0">
                    <button>
                       <p className="align-middle select-none ">Desain Template</p> 
                    </button>
                </a>
                <a href="/portofolio/custom" className="transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-[50px] bg-gradient-to-r from-[#303030] to-[#616161] text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-abu-900/20 focus:opacity-[0.5] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full rounded-l-none">
                    <button>
                        <p className="align-middle select-none text-center">Desain Costum</p>
                    </button>
                </a>
            </div>
        </div>
    </>
    );
}

export default button;

