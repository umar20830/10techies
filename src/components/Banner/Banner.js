import React from 'react'


const Banner = () => {

    return (
        <>
            <div className="w-full h-full mt-24 flex flex-col justify-center items-center gap-2 xl:gap-5">
                <div className="para">
                    <p className="text-lg xl:text-xl font-extrabold text-[#030326]">Award-winning marketing</p>
                </div>
                <div className="mainHeading overflow-hidden">
                    <h1 className="font-['Larken_DEMO'] font-extrabold text-[#030326] text-[3rem] sm:text-[5rem] md:text-[6rem] xl:text-[9rem] uppercase leading-[3.5rem] sm:leading-[5rem] md:leading-[6rem] xl:leading-[8.5rem] text-center">
                        A
                        <span className="text-[#aa8cff] transition-all duration-150 hover:text-[#030326] text-nowrap cursor-pointer"> people-led </span>
                    </h1>
                    <br />
                    <h1 className="font-['Larken_DEMO'] font-extrabold text-[#030326] text-[3rem] sm:text-[5rem] md:text-[6rem] xl:text-[9rem] uppercase leading-[3.5rem] sm:leading-[5rem] md:leading-[6rem] xl:leading-[8.5rem] text-center">
                        digital agency
                    </h1>
                </div>
                <div className="para2 mt-6 px-5 overflow-hidden">
                    <p className="text-lg xl:text-[1.3rem] text-center font-bold text-[#030326]">Transforming businesses and making a positive difference since 2016</p>
                </div>
            </div>
        </>
    )
}

export default Banner
