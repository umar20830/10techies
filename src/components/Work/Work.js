import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Navbar/Button'
import work from './data/work'
import Btn from './Btn'
import Review from './Review'


const Work = () => {

    const eCommerce = work.work;


    return (
        <>
            <div className="main w-full h-full bg-[#030326] rounded-t-[5rem]">
                <div className="w-full h-full bg-[#e7deff] px-5 sm:px-10 py-10 sm:pt-20 sm:pb-10 rounded-[4rem]">
                    <div className="headingContainer w-full h-full mt-5">
                        <h1 className="text-[3rem] sm:text-[8rem] text-[#030326] text-center font-bold font-['Larken_DEMO'] uppercase">
                            our work
                        </h1>
                    </div>
                    <div className="caseStudiesContainer w-full h-full flex flex-col gap-10 p-8 mt-6 sm:mt-0">
                        {eCommerce.map((data, index) => {
                            return <div className="bg-white p-10 rounded-3xl">
                                <div key={index} className="heading flex flex-col lg:flex-row gap-5 justify-between items-center">
                                    <div className="para">
                                        <p className="text-[1.5rem] text-[#030326] font-['Arial']"> {data.title} </p>
                                    </div>
                                    <div className="btn">
                                        <Button link={"#"} content={"More"} color={"#030326"} textColor={"white"} />
                                    </div>
                                </div>
                                <div className="w-full border-[1px] border-black/20 rounded-xl mt-6"></div>
                                <div className="content w-full flex flex-col lg:flex-row gap-10 lg:gap-20 mt-7 sm:mt-14">
                                    <div className="leftSide w-full lg:w-1/2 flex flex-col justify-center items-center">
                                        <div className="imageContainer w-[95%]">
                                            <Image className="w-full rounded-2xl" src={data.img} width={900} height={900} alt='Image' />
                                        </div>
                                        <div className="btnsContainer w-full gap-4 flex flex-wrap text-nowrap mt-4">
                                            {data.btn.map((btns, index) => {
                                                return <div key={index} className="btnContainer">
                                                    <Btn content={btns} link={"#"} />
                                                </div>
                                            })}
                                        </div>
                                        <div className="headings w-[95%] mt-6">
                                            <Link href={"#"}>
                                                <p className="text-[1.5rem] sm:text-[2rem] text-[#030326] font-['Larken_DEMO'] hover:underline"> {data.introHeading} </p>
                                            </Link>
                                            <p className="text-[1rem] sm:text-[1.5rem] text-[#05053f] font-['Arial'] leading-6 sm:leading-8 mt-3">
                                                {data.para}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="rightSide w-full lg:w-1/2 ">
                                        <div className="percentContainer w-full h-full flex flex-col sm:flex-row lg:flex-col justify-center lg:justify-normal items-center gap-10">
                                            {data.percent.map((info, index) => {
                                                return <div key={index} className="container flex flex-col lg:flex-row items-center gap-4">
                                                    <div className="w-[10rem] h-[6rem] bg-[#030326] rounded-lg text-white flex justify-center items-center text-[2.5rem] font-bold font-['Larken_DEMO']">
                                                        {info.value}
                                                    </div>
                                                    <div className="content text-[#030326d7] text-lg font-semibold">
                                                        {info.text}
                                                    </div>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                </div>


                            </div>
                        })}
                    </div>
                    <div className="btn-to-view-all-works flex justify-center">
                        <Button link={"#"} content={"View all work"} color={"#030326"} textColor={"white"} />
                    </div>
                    <div className="componentContainer mt-16">
                        <Review />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Work
