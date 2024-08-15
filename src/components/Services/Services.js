import React from 'react'
import "@/app/globals.css"
import data from "./data/links"
import Link from 'next/link'
import Arrow from './Arrow'
import Button from '../Navbar/Button'


const Services = () => {

  const links = data.services


  return (
    <>
      <div className="w-full h-full mt-10 px-10 md:px-20 py-10 rounded-3xl bg-cover bg-[url('/service/servicesbackground.webp')]">
        <div className="heading w-full h-full">
          <h1 className="text-[3rem] lg:text-[7rem] text-center text-[#030326] font-bold font-['Larken_DEMO'] uppercase">Our services</h1>
        </div>
        <div className="linksContainer w-full h-full mt-10 md:mt-16 flex flex-col lg:flex-row justify-between items-center gap-14 md:gap-28 text-nowrap">
          <div className="leftLink w-full h-full flex flex-col">
            {
              links.map((link, index) => {
                if (index <= 2) {
                  return <Link key={index} href={link.link} className={`hoverLink flex justify-between items-center border-black/20 py-5 md:py-10 ${index==0 ? "border-y " : index==2 ? "border-y" :null}`}>
                    <div className="linkTitle flex justify-center items-center gap-2">
                      <div className="firstArrow -translate-x-4 opacity-0 transition-all duration-300">
                        <Arrow />
                      </div>
                      <p className="text-[1.2rem] md:text-[2rem] text-[#030326] font-['Arial']">{link.name}</p>
                    </div>
                    <div className="secondArrow transition-all duration-300">
                      <Arrow />
                    </div>
                  </Link>
                }
              })
            }
          </div>
          <div className="rightLink w-full h-full flex flex-col">
            {
              links.map((link, index) => {
                if (index >= 3) {
                  return <Link key={index} href={link.link} className={`hoverLink flex justify-between items-center border-black/20 py-5 md:py-10 ${index==3 ? "border-y " : index==5 ? "border-y" : null}`}>
                    <div className="linkTitle flex justify-center items-center gap-2">
                      <div className="firstArrow -translate-x-4 opacity-0 transition-all duration-300">
                        <Arrow />
                      </div>
                      <p className="text-[1.2rem] md:text-[2rem] text-[#030326] font-['Arial']">{link.name}</p>
                    </div>
                    <div className="secondArrow transition-all duration-300">
                      <Arrow />
                    </div>
                  </Link>
                }
              })
            }
          </div>
        </div>
        <div className="btn w-full h-full mt-10 mb-10 flex justify-center">
            <Button content={"All Services"} link={"/what-we-do"} color={"#030326"} textColor={"white"}/>
        </div>
      </div>
    </>
  )
}

export default Services
