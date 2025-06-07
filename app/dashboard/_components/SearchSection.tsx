import { Search } from 'lucide-react'
import React from 'react'

export default function SearchSection() {
  return (
    <div className='p-10 bg-gradient-to-br from-purple-500 via-purple-700 to to-blue-600 flex flex-col justify-center items-center text-white'>
        <h2 className='text-white text-3xl font-bold'>WELCOME TO REMO </h2>
        <p className='font-bold'>An SA Projects Initiative</p>
      <div className='w-full flex justify-center'>
        {/* <div className='flex gap-2 items-center p-2 border rounded-md bg-white my-5 w-[50%]'>
            <Search className='text-primary'/>
            <input type='text' placeholder='Search' className='bg-transparent w-full outline-none text-black'/>
           
        </div> */}
        </div>
    </div>
  )
}
