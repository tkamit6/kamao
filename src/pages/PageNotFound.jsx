import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div className='flex justify-center m-auto relative'> <span className='absolute top-[50vh] font-semibold text-center'> 404 | Page Not Found <br /> <Link to='/' className='mt-4 bg-[#FA6F2C] text-white px-4 py-1 hover:shadow-md'>Home</Link> </span>  </div>
  )
}
