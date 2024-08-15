"use client"
import React, { useState } from 'react'
import reviews from "./data/reviews"

const Review = () => {

    const [count, setCount] = useState(1);
    
    const decrease = () => {
        if (count > 1) {
            setCount(count - 1)
        } else if (count == 1) {
            setCount(4)
        }
    }

    const increase = () => {
        if (count < 4) {
            setCount(count + 1)
        } else if (count == 4) {
            setCount(1)
        }
    }


    return (
        <>
            <div className="reviewContainer w-full h-full px-5 sm:px-10">
                <div className="head w-full">
                    <h4 className="text-[#030326] text-[2rem] sm:text-[3rem] font-bold font-['Larken_DEMO'] uppercase">what they say</h4>
                </div>
                <div className="reviews w-full h-full flex flex-col lg:flex-row justify-between mt-6">
                    <div className="leftSide w-full">
                        <div className="para  flex flex-col gap-6 font-['Arial']">
                            <p className="text-[#030326] text-[1.6rem]">
                                {reviews.reviews[count].review}
                            </p>
                            <div>
                                <p className="text-[#030326] text-[1.4rem] font-bold"> {reviews.reviews[count].name} </p>
                                <p className="text-[#030326] text-[1.2rem]"> {reviews.reviews[count].place} </p>
                            </div>
                        </div>
                    </div>
                    <div className="rightSide w-full lg:w-1/2 flex justify-center items-center lg:items-start mt-5 sm:mt-0">
                        <div className="reviewsCounter flex gap-6">
                            <div className="minus w-[3rem] h-[3rem] bg-[#030326] flex justify-center items-center rounded-full" onClick={decrease}><i class={`ri-arrow-left-line md:text-[1.5rem] font-bold text-white`}></i></div>
                            <div className="countContainer">
                                <p className="text-[2rem] font-['Arial']">{count}</p>
                            </div>
                            <div className="plus w-[3rem] h-[3rem] bg-[#030326] flex justify-center items-center rounded-full" onClick={increase}> <i className={`i ri-arrow-right-line md:text-[1.5rem] font-bold text-white`}></i></div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Review
