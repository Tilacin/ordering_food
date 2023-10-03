import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='h-12 md:24 p-4 md:h-24 xl:px-20 lg:px-20 text-red-500 flex  items-center  justify-between bg-orange-100 border-t-2 border-t-red-500  '>
      <Link href="/" className='font-bolt text-xl font-bold'>Доставка еды</Link>
      <Link href="https://github.com/Tilacin">
      <Image  src="/tilacin.svg"  width={120} height={120} alt="cart"  />
      </Link>
     
    </div>
  )
}

export default Footer