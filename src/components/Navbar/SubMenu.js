"use client"
import "@/app/globals.css"
import Link from "next/link"
import Button from "./Button"


const SubMenu = ({ btn, subMenu,premission}) => {

    console.log(premission);
    

    return (
        <>
            <div className="w-[18rem] h-full py-4 bg-[#353551] opacity-0 rounded-xl">
                <div className="w-full h-full flex flex-col gap-[0.5rem] px-5 text-[1.3rem] text-[white] font-['Larken_DEMO']">
                    {
                        subMenu.map((link, index) => {
                            return <div key={index} className="link w-full h-full px-2 py-2 rounded-full hover:bg-[#5a5a81] transition-all duration-100 flex justify-between items-center">
                                <Link href={link.link} className="text-nowrap w-full h-full px-2">{link.name}</Link>
                                <div className="arr w-[1.5rem] h-[1.5rem] bg-[#ffffffc4] hidden justify-center items-center transition-all duration-100 p-4 rounded-full">
                                    <i className={`${link.arrow} text-[1rem] font-bold text-black`}></i>
                                </div>
                            </div>
                        })
                    }
                    <Button content={btn} />
                </div>
            </div>
        </>
    )
}

export default SubMenu
