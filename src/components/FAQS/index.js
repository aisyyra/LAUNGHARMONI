import { createContext, useContext, useRef, useEffect, useState } from "react"
import { IoChevronDownSharp } from "react-icons/io5";
const AccordianContext = createContext()

export default function Accordian({ children, value, onChange, ...props }) {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  )
}

export function AccordianItem({ children, value, trigger, ...props }) {
  const { selected, setSelected } = useContext(AccordianContext)
  const open = selected === value

  const ref = useRef(null)

  return (
    <li className="curor-pointer sm:max-w-[756px] max-w-[300px] bg-white hover:bg-gradient-to-r from-[#303030] to-[#616161] hover:text-white sm:my-[20px] my-[15px] rounded-[18px] sm:rounded-[24px] py-2 px-4 sm:py-3 sm:px-5 shadow-md " {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center sm:p-[15px] sm:text-[17px] p-[10px] text-[11px] font-bold font-mustard leading-[31px]"
      >
        {trigger}
        < IoChevronDownSharp
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </header>
      <div
        className="overflow-y-hidden transition-all font-lora font-regular sm:text-[15px] text-[10px]"
        style={{ height: open ? ref.current?.offsetHeight || 0 : 0 }}
      >
        <div className="pt-2 px-2 pb-4" ref={ref}>
          {children}
        </div>
      </div>
    </li>
  )
}

