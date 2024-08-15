import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '../Navbar/Button'

const Footer = () => {

    const link = [
        { name: "Digital Strategy", link: "/digital-strategy" },
        { name: "Paid Media", link: "/paid-media" },
        { name: "SEO", link: "/seo" },
        { name: "Content", link: "/content" },
        { name: "Data&Analytics", link: "/data-analytics" },
        { name: "CRO", link: "/cro" },
    ]

    const images = [
        { img: "/icons/instagram.svg", link: "#" },
        { img: "/icons/twitter.svg", link: "#" },
        { img: "/icons/linkedin.svg", link: "#" },
    ]

    const footerLinks = [
        { name: "Privacy Policy", link: "/policy" },
        { name: "Cookie Policy", link: "/cookie-policy" },
        { name: "Terms & Conditions", link: "terms-condition" }
    ]

    return (
        <>
            <div className="w-full h-full bg-[#030326] text-[#e7deff] px-10 py-5 sm:py-10">
                <div className="top w-full h-full flex flex-col lg:flex-row justify-center">
                    <div className="leftSide w-full lg:w-1/2">
                        <div className="heading">
                            <h2 className="text-[2rem] sm:text-[2.4rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.5rem] tracking-tight font-bold font-['Larken_DEMO']">
                                We Love Working with Ambitious Brands, Across Every Sector
                            </h2>
                        </div>
                        <div className="btnContainer flex flex-col sm:flex-row gap-5 mt-6">
                            <Button content={"Book a call"} link={"#"} textColor={"#030326"} color={"#e7deff"} />
                            <Button content={"Contant us"} link={"#"} textColor={"#030326"} color={"#e7deff"} />
                        </div>
                    </div>
                    <div className="rightSide w-full lg:w-1/2 mt-8 lg:p-8">
                        <div className="links">
                            <ul className="flex flex-wrap gap-6">
                                {link.map((l, index) => {
                                    return <li key={index} className="text-[1.5rem] underline transition-all duration-700 hover:no-underline text-nowrap font-bold">
                                        <Link href={l.link} > {l.name} </Link>
                                    </li>
                                })}
                            </ul>
                        </div>
                        <div className="info mt-14 flex flex-col xl:flex-row justify-between">
                            <div className="left">
                                <div className="para text-[1.2rem] font-bold">
                                    <p>hello@loolgigital.co.uk</p>
                                    <p>0117 923 2021</p>
                                </div>
                                <div className="icons flex gap-3 mt-10">
                                    {images.map((img, index) => {
                                        return <Link key={index} href={img.link} >
                                            <Image src={img.img} width={30} height={30} alt='icon' />
                                        </Link>
                                    })}
                                </div>
                            </div>
                            <div className="right mt-6 lg:mt-0">
                                <p className="text-[1.4rem] lg:mt-6 xl:mt-0">
                                    Unit 2.2 Temple Studios <br />
                                    Temple Gate   <br />
                                    Bristol, BS1 6QA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom w-full h-full flex flex-col md:flex-row justify-between mt-8 lg:mt-16">
                    <div className="left">
                        <div className="logo">
                            <Image className="w-[14rem] lg:w-[25rem]" src={"/logo/logo.png"} width={200} height={200} alt='logo' />
                        </div>
                        <div className="footerLinks flex flex-col md:flex-row gap-5 mt-6">
                            {footerLinks.map((l, index) => {
                                return <Link className="text-[1rem] lg:text-[1.2rem] text-nowrap" key={index} href={l.link} >
                                    {l.name}
                                </Link>
                            })}
                        </div>
                    </div>
                    <div className="right mt-6 lg:mt-0">
                        <h6 className="text-[1.2rem] text-nowrap lg:text-[2rem] font-bold font-['Larken_DEMO']">© 2024 Loom Digital Ltd</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
