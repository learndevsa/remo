import { Divide, FileClock, Home, Settings, Wallet, WalletCards } from 'lucide-react';
import { routeModule } from 'next/dist/build/templates/app-page';
import React from 'react'
import Dashboard from '../page';
import Link from 'next/link';
import { link } from 'fs/promises';

export default function SideNav() {

  const MenuList = [
   {  
     Name: 'Home',
     icon: Home,
     path:'./dashboard/home',
     

    
     
   },
  //  { 
  //   Name: 'Settings',
  //   icon: Settings,
  //   path:'/dashboard/Settings'
  //  },
   { 
    Name: 'History',
    icon: FileClock,
    path:'/dashboard/History'
   },
  // { 
  //   Name: 'Billing',
  //   icon: WalletCards,
  //   path:'/dashboard/Billing'
  // },
  ]
  return (
    <div className='h-screen p-5 shadow-sm border'>
      <div className='flex justify-center '>
      <img src="SA.svg" alt="logo" width={150} height={100}/>
      </div>    
     <div className='mt-10'>
      {MenuList.map((menu,index)=>
        <div className='flex gap-5  mb-5 p-3
        hover:bg-primary hover:text-white rounded-lg
        cursor-pointer'>
          <menu.icon/>
          <h2>{menu.Name}</h2>
        
        </div>
      )}
     </div>
    </div>

  );
}
