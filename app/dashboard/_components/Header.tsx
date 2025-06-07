import { Search } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='p-5 shadow-sm border-2-b-2'>
     <div className='flex gap-2 items-center p-2 border rounded-md max-w-md'>
      <Search/>
      <input type='text' placeholder='Search...' className='outline-none'/>
     </div>
     {/* <div>
      ,<h2 className='bg-purple-700 p-1 rounded-full text-xs text-black px-2'>
      Welcome
      </h2>
     </div> */}
    </div>
  )
}
export default Header