"use client"
import Image from "next/image"
import Link from "next/link"
import link from "./data/link"




const Navbar = () => {

    const navLinks = link.navLinks;
    
    
    return (
        <>
            <nav className="w-full h-full px-4 mt-3 text-nowrap hidden lg:block">
                <div className="w-full h-[5rem] bg-[#ede6ff] rounded-lg px-10">
                    <div className="w-full h-full flex justify-between items-center">
                        <div className="linkLeftContainer w-full h-full flex justify-center items-center gap-6 xl:gap-10">
                           <Link className="w-[10rem] xl:w-[12rem] h-[10rem] xl:h-[12rem]" href={"/"}>
                            <div className="w-full h-full flex justify-center items-center">
                            <Image className="" src={"/logo/logo.png"} width={200} height={200} alt={"Logo"} />
                            </div>
                           </Link>
                            {navLinks.map((link, index) => {
                                return  index<=2 &&  <div key={index} className="w-fit h-fit">
                                    <div className="linkLeft w-full -full">
                                        {
                                           <Link className="flex justify-center items-center gap-1 xl:text-xl font-['Larken_DEMO'] hover:text-[#aa8cff] duration-300 transition-all" href={link.link}>{link.name}
                                                <i className="ri-add-line text-[1.2rem] font-bold text-[#aa8cff]"></i>
                                            </Link>
                                        }
                                    </div>
                                </div>
                            })}
                        </div>
                        <div className="linkRightContainer w-full h-full flex justify-center items-center gap-10">
                            {navLinks.map((link, index) => {
                                return <div key={index} className="w-full h-full">
                                    <div className="linkLeft w-full h-full flex justify-center items-center">
                                        {
                                            index > 2 ? <Link className="xl:text-xl font-['Larken_DEMO'] hover:text-[#aa8cff] duration-300 transition-all" href={link.link}> {link.name} </Link> : null
                                        }
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
