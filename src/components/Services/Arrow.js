import React from 'react'


const Arrow = () => {

    return (
        <>
            <div className="arr w-[1rem] md:w-[1.5rem] h-[1rem] md:h-[1.5rem] bg-[#030326] flex justify-center items-center transition-all duration-100 p-3 sm:p-4 md:p-6 rounded-full">
                <i className={`i ri-arrow-right-line md:text-[1.2rem] font-bold text-white`}></i>
            </div>
        </>
    )
}

export default Arrow
