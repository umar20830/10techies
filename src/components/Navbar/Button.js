"use client"
import Link from 'next/link'
import {useRef} from "react"

const Button = ({content,color,textColor,link}) => {

    const ref = useRef(null);
    const leftSide = useRef(null);
    const rightSide = useRef(null);
    const iFirst = useRef(null);
    const iSecond = useRef(null);

    const changeBtn = ()=>{
      leftSide.current.style.borderRadius = "60px";
      rightSide.current.style.borderRadius = "60px";
      rightSide.current.style.transform = "translateX(2px)"
      iFirst.current.style.right = "15px"
      iSecond.current.style.opacity = "0"
    }
    const normalBtn = ()=>{
      leftSide.current.style.borderRadius = "";
      rightSide.current.style.borderRadius = "";
      rightSide.current.style.transform = "translateX(0px)"
      iFirst.current.style.right = ""
      iSecond.current.style.opacity = "1"
    }

  return (
    <div className="w-fit h-fit" onMouseEnter={changeBtn} onMouseLeave={normalBtn}>
        <Link href={link} className="btn w-full h-full flex rounded-full">
        <span style={{background:color,color:textColor}} className={`span flex font-['Larken_DEMO'] text-[1.2rem] text-nowrap px-4 py-3 rounded-r-none rounded-full transition-all duration-300`} ref={leftSide}>{content}</span>
        <div style={{background:color,color:textColor}} className={`text-[1.2rem] px-4 py-3 bg-${color} rounded-l-none rounded-full transition-all duration-300 -translate-x-2 overflow-hidden`} ref={rightSide}>
          <i className="i ri-arrow-right-line absolute right-14 transition-all duration-700" ref={iFirst}></i>
          <i className="i ri-arrow-right-line transition-all duration-700" ref={iSecond}></i>
        </div>
    </Link>
    </div>
  )
}

export default Button
