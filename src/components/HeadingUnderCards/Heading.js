"use client"
import React from 'react'
import Button from '../Navbar/Button'


const Heading = () => {

    return (
        <>
            <div className="w-full h-full">
                <div className="contentContainer w-full h-full flex flex-col lg:flex-row justify-between items-center gap-6 p-10">
                    <div className="heading w-full h-full">
                        <h2 className="text-[2.5rem] leading-[2.7rem] sm:text-[4.5rem] sm:leading-[4rem] text-[#030326] font-bold font-['Larken_DEMO'] uppercase">
                            CONSIDERED digital MARKETING 
                            <br /> for
                            <br />
                            <span className="text-[#aa8cff]"> long-term </span>
                            success
                        </h2>
                    </div>
                    <div className="para w-full h-full">
                        <p className="text-[#1d1d3c] text-[1.2rem] tracking-tighter sm:tracking-tight sm:text-[1.4rem] font-['Arial']">We&#39;re all about making performance marketing channels work for your business, for the long term.
                            <br />
                            <br />
                            Data, experience and expert thought fuels our full-funnel strategies. Our digital experts are skilled in achieving continued and sustainable growth and generating results that really impact your business. Our winning formula of digital excellence and solid client relationships has really cemented us as a leading performance marketing agency that you can trust.</p>
                            <div className="relative top-4">
                            <Button content={"Why we're different"} color={"#030326"} textColor={"#ffff"} link={"/difference"} />
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Heading
