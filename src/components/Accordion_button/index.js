import { createContext, useContext, useRef, useEffect, useState } from "react"
import { IoChevronDownSharp } from "react-icons/io5";
const AccordianContext = createContext()
import { motion } from "framer-motion";

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <div {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </div>
  )
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext)
  const open = selected === value

  const ref = useRef(null)

  return (
    <div className="curor-pointer flex justify-center items-center col-span-12 mt-3 rounded-[20px" {...props}>
      <motion.a 
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex flex-cols text-white font-inter bg-[#9D7265] hover:cursor-pointer rounded-[43px] px-[25px] py-[9px] text-center tracking-wide mt-[30px]"
      >
        {trigger}
        <svg className='mr-2' width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_603_241)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.20309 4.23222C7.69128 4.22372 8.24272 4.4566 8.77392 5.04682C9.13767 5.45099 9.46246 5.99351 9.71742 6.64648H7.1835C6.86538 6.64501 6.5606 6.518 6.33555 6.29295C6.10918 6.06658 5.982 5.75955 5.982 5.43942C5.982 5.11928 6.10918 4.81226 6.33555 4.58589C6.56192 4.35952 6.86894 4.23235 7.18908 4.23235L7.20309 4.23222ZM7.18055 8.25591C7.18339 8.25592 7.18624 8.25592 7.18908 8.25592C7.19061 8.25592 7.19214 8.25592 7.19368 8.25591H10.0056V9.86534H4.3726V8.25591H7.18055ZM4.64434 6.64648C4.46707 6.27275 4.37257 5.86096 4.37257 5.43942C4.37257 4.69244 4.66931 3.97605 5.19751 3.44785C5.72404 2.92132 6.43757 2.62479 7.18199 2.62293C8.24368 2.60676 9.21114 3.12677 9.9702 3.97017C10.287 4.32215 10.5678 4.72951 10.8103 5.17915C11.0528 4.72951 11.3336 4.32215 11.6504 3.97017C12.4095 3.12677 13.3769 2.60676 14.4386 2.62293C15.183 2.62479 15.8966 2.92132 16.4231 3.44785C16.9513 3.97605 17.248 4.69244 17.248 5.43942C17.248 5.86096 17.1535 6.27275 16.9763 6.64648H17.248C18.1369 6.64648 18.8575 7.36704 18.8575 8.25591V9.86534C18.8575 10.7542 18.1369 11.4748 17.248 11.4748H17.248V16.3031C17.248 16.9433 16.9937 17.5574 16.5409 18.0101C16.0882 18.4629 15.4741 18.7172 14.8339 18.7172H6.78672C6.14645 18.7172 5.5324 18.4629 5.07966 18.0101C4.62692 17.5574 4.37257 16.9433 4.37257 16.3031V11.4748C3.48372 11.4748 2.76317 10.7542 2.76317 9.86534V8.25591C2.76317 7.36704 3.48373 6.64648 4.3726 6.64648H4.64434ZM14.4269 8.25591C14.4284 8.25592 14.43 8.25592 14.4315 8.25592C14.4344 8.25592 14.4372 8.25592 14.44 8.25591H17.248V9.86534H11.6151V8.25591H14.4269ZM14.4371 6.64648C14.7552 6.64501 15.06 6.518 15.285 6.29295C15.5114 6.06658 15.6386 5.75955 15.6386 5.43942C15.6386 5.11928 15.5114 4.81226 15.285 4.58589C15.0587 4.35952 14.7516 4.23235 14.4315 4.23235L14.4175 4.23222C13.9293 4.22372 13.3779 4.4566 12.8467 5.04682C12.4829 5.45099 12.1581 5.99351 11.9032 6.64648H14.4371ZM5.982 16.3031V11.4748H10.0056V17.1078H6.78672C6.5733 17.1078 6.36861 17.023 6.2177 16.8721C6.06679 16.7212 5.982 16.5165 5.982 16.3031ZM14.8339 17.1078H11.6151V11.4748H15.6386V16.3031C15.6386 16.5165 15.5538 16.7212 15.4029 16.8721C15.252 17.023 15.0473 17.1078 14.8339 17.1078Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0_603_241">
            <rect width="20" height="20" fill="white" transform="translate(0.810318 0.669922)"/>
            </clipPath>
            </defs>
        </svg>
        <p className='mt-[2px] items-center justify-center text-[12px]'>Kirim Hadiah</p>                
      </motion.a >

      <motion.div
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
        }
      }}
      initial="hidden"
      animate="show"
      style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <motion.div className="pt-2 px-2 pb-4" ref={ref}>
          {/* Alamat */}
          <motion.div 
            className='flex justify-center items-center w-full mt-[20px]'
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: {
                delay: 0.8
              }}
            }}
          >
            <div className='text-center w-full'>

              <div className={' flex justify-center items-center w-full text-[14px]'}>
                Alamat Paket
              </div>
              
              <div className={' justify-center items-center w-full text-[9px] mt-5 leading-[18px]'}>
                <p>Rully Abdul Haq &nbsp; - &nbsp; 08567777766</p>
                <p>Jl.Raya Sukabumi Gg.Al-Falah 03/01 No.20 Desa Sukamaju<br /> Kec.Cianjur, Kabupaten Cianjur, Jawa Barat</p>
              </div>

    
            </div>
          </motion.div>
        </motion.div>

      </motion.div>

    </div>

  )
}