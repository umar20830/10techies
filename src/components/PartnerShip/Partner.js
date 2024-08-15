import Image from 'next/image'
import React from 'react'
import Button from '../Navbar/Button'


const Partner = () => {

    return (
        <>
            <div className="w-full h-full flex flex-col justify-center items-center gap-36 px-10 py-24">
                <div className="firstContainer w-full h-full flex flex-col-reverse lg:flex-row justify-between items-center gap-16 md:gap-28">
                    <div className="leftSide w-full h-full flex flex-col gap-6">
                        <div className="para">
                            <p className="text-[#030326] text-[1rem] sm:text-[1.2rem] font-['Arial'] uppercase">Nurturing partnerships</p>
                        </div>
                        <div className="heading">
                            <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] text-[#030326] font-bold leading-none font-['Larken_DEMO'] uppercase">
                                For <br />
                                <span className="text-[#aa8cff]">
                                    SUSTAINABLE
                                </span> <br />
                                growth
                            </h2>
                        </div>
                        <div className="para2">
                            <p className="text-[#030326] text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] font-['Arial']">
                                We&#39;ve crafted our approach since 2009 and have always focused on nurturing long-lasting partnerships to drive meaningful results. Our experts take time to understand your unique business challenges and always offer a bespoke digital strategy that gets you the results that matter.
                            </p>
                        </div>
                        <div className="btn">
                            <Button content={"Your work expectations"} color={"#030326"} textColor={"white"} link={"/working-with-us"} />
                        </div>
                    </div>
                    <div className="rightSide w-full h-full rounded-2xl overflow-hidden">
                        <Image className="w-full h-full" src={"/partnership/first.png"} height={800} width={800} alt='Image' />
                    </div>
                </div>
                <div className="secondContainer w-full h-full flex flex-col lg:flex-row justify-between items-center gap-16 md:gap-28">
                    <div className="leftSide w-full h-full rounded-2xl overflow-hidden">
                        <Image className="w-full h-full" src={"/partnership/second.png"} height={800} width={800} alt='Image' />
                    </div>
                    <div className="rightSide w-full h-full flex flex-col gap-6">
                        <div className="para">
                            <p className="text-[#030326] text-[1rem] sm:text-[1.2rem] font-['Arial'] uppercase">Bristol-based</p>
                        </div>
                        <div className="heading">
                            <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] text-[#030326] font-bold leading-none font-['Larken_DEMO'] uppercase">
                                Digital marketing  <br />
                                <span className="text-[#aa8cff]">
                                    experts
                                </span>
                            </h2>
                        </div>
                        <div className="para2">
                            <p className="text-[#030326] text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] font-['Arial']">
                            We are proud to be home of one of the biggest specialist digital marketing teams in Bristol. Loom is made up of strategic, technical and creative marketing minds. With a diverse range of skills and a shared passion for performance marketing, we have a collective of specialists who know their craft inside out.
                            </p>
                        </div>
                        <div className="btn">
                            <Button content={"Meet the 10Techies"} color={"#030326"} textColor={"white"} link={"/working-with-us"} />
                        </div>
                    </div>
                </div>
                <div className="thirdContainer w-full h-full flex flex-col-reverse lg:flex-row justify-between items-center gap-16 md:gap-28">
                    <div className="leftSide w-full h-full flex flex-col gap-6">
                        <div className="para">
                            <p className="text-[#030326] text-[1rem] sm:text-[1.2rem] font-['Arial'] uppercase">Our commitment</p>
                        </div>
                        <div className="heading">
                            <h2 className="text-[2.5rem] sm:text-[3.5rem] md:text-[4.5rem] text-[#030326] font-bold leading-none font-['Larken_DEMO'] uppercase">
                            To making a  <br />
                                <span className="text-[#aa8cff]">
                                positive 
                                </span> <br />
                                difference
                            </h2>
                        </div>
                        <div className="para2">
                            <p className="text-[#030326] text-[1.2rem] sm:text-[1.3rem] md:text-[1.5rem] font-['Arial']">
                            As a B Corp-certified business, we&#39;re on a mission to ensure that Loom is a business that makes the world a better place. From prioritising people and the planet to donating 1% of our profits every year, we want to do everything we can to make Loom a force for good. Always supporting our local Bristol community and fellow businesses to strengthen the city we love.
                            </p>
                        </div>
                        <div className="btn">
                            <Button content={"Meet the 10Techies"} color={"#030326"} textColor={"white"} link={"/purpose"} />
                        </div>
                    </div>
                    <div className="rightSide w-full h-full rounded-2xl overflow-hidden">
                        <Image className="w-full h-full" src={"/partnership/third.jpeg"} height={800} width={800} alt='Image' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Partner
