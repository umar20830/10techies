"use client"
import React, { useRef, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';

const SmallNavbar = () => {

    const fLine = useRef(null);
    const sLine = useRef(null);

    const [rotate, setRotate] = useState(false);


    const changeHumburger = () => {
        if (rotate) {
            fLine.current.style.transform = "rotate(-45deg) translateX(-7px)"
            sLine.current.style.transform = "rotate(45deg) translateX(-7px)"
        }else{
               fLine.current.style.transform = ""
            sLine.current.style.transform = ""
        }

    }



    return (
        <>
            <nav className="w-full h-full px-4 mt-3 text-nowrap lg:hidden">
                <div className="w-full h-[5rem] bg-[#ede6ff] rounded-lg px-6 flex justify-between sm:justify-around items-center">
                    <div className="w-fit h-full flex justify-center items-center" onClick={() => setRotate(!rotate)}>
                        <div className="humburgerContainer w-fit h-fit flex flex-col gap-2" onClick={changeHumburger}>
                            <div className='w-[1.5rem] sm:w-[2rem] h-[2px] bg-black transition-all duration-300' ref={fLine}></div>
                            <div className='w-[1.5rem] sm:w-[2rem] h-[2px] bg-black transition-all duration-300' ref={sLine}></div>
                        </div>
                    </div>
                    <div className="imageContainer">
                        <Link href={"/"}>
                            <div className="w-full h-full">
                                <Image className="w-[8rem] sm:w-[12rem] h-full" src={"/logo/logo.svg"} width={100} height={100} alt={"Logo"} />
                            </div>
                        </Link>
                    </div>
                    <div className="contactContainerLink">
                        <Link href={"/contact"}>
                            <p className="font-['Larken_DEMO'] text-lg sm:text-2xl">Contact</p>
                        </Link>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default SmallNavbar
