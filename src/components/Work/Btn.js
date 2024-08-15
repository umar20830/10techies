import Link from 'next/link'
import React from 'react'

const Btn = ({content,link}) => {

  return (
    <>
        <Link href={link}>
            <p className="border border-[#030326] text-[#030326da] font-['Arial'] font-[600] capitalize px-3 py-1 rounded-full hover:bg-[#030326] hover:text-white transition-all duration-300">{content}</p>
        </Link>
    </>
  )
}

export default Btn
