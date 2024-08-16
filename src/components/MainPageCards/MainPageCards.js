"use client"
import React from 'react'
import Link from 'next/link';
import data from "./data/cardData"


const MainPageCards = () => {

    const cardData = data.cardData;

    return (
        <>
            <div className="cardContainer w-full h-full mt-14 overflow-hidden">
                <div className="cards w-full h-full">
                    <div className="boxContainer w-full h-full p-10 sm:py-16 flex flex-wrap justify-evenly items-center gap-10">
                        {
                            cardData.map((data, index) => {
                                return <div key={index} className={`box w-[20rem] h-[20rem] sm:w-[24rem] sm:h-[24rem] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.1]`}>
                                    <Link href={data.link}>
                                        <div className={`content w-full h-full relative flex flex-col justify-center items-center gap-10 z-[-1] p-1 bg-cover ${index == 0 ? "bg-[url('/mainPageCard/card1.jpg')]" : index == 1 ? "bg-[url('/mainPageCard/card2.jpg')]" : "bg-[url('/mainPageCard/card3.webp')]"}`}>
                                            <div className='w-full h-full bg-black/40 z-[-2] absolute'></div>
                                            <h5 className="text-white text-2xl text-center uppercase font-bold font-['Larken_DEMO']">{data.title}</h5>
                                            <p className="text-center text-xl text-white">{data.para}</p>
                                        </div>
                                    </Link>

                                </div>
                            })
                        }
                    </div>
                </div>
            </div>


        </>
    )
}

export default MainPageCards
