import Link from 'next/link'
import React from 'react'

const Succes = () => {
  return (
    <div className="bg-white h-64 col-span-5 flex flex-col items-center justify-center py-5 rounded-lg shadow-lg">
    <h1 className="text-lg fornt-medium">Your order is complete</h1>
    <p className='text-xs text-gray-600 text-justify font-semibold p-2'>and is on the way to you</p>
    <Link href={"/"}>
      <button className='w-52 h-10 bg-amazon_blue text-white rounded-lg text-sm font-semibold hover:bg-amazon_yellow hover:text-black'>go back to shopping</button>
    </Link>
  </div>
  )
}

export default Succes