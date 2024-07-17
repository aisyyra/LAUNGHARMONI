'use client'
import React from "react";
import Link from 'next/link'
import { useSearchParams } from "next/navigation";

function Error(props) {
    const {
		data = "Halaman ini Error"	// custom by projects name
	} = props;

    console.log(data);

    return(
       <>
        <main className='h-screen w-screen bg-undangan place-content-center'>
        <div className='items-center text-center justify-center font-inter place-content-center '>
            <h2 className='text-3xl mb-3'>403 | Error</h2>
            <p>{data}</p>
            <Link href="/">
                <button className="cursor-pointer mt-4 border border-warna px-10 py-3 text-sm bg-transparent text-warna font-medium rounded-full hover:bg-gradient-to-r from-[#E3457B] to-[#EF90A0] hover:text-white">
                    Back to Home
                </button>
            </Link>
        </div>
    </main>
       </>
    )
}

export default Error;



