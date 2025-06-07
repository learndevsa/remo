import React from 'react'
import { TEMPLATE } from './TemplateListSection'
import Link from 'next/link'
import { Item } from '@radix-ui/react-accordion'

export default function TemplateCard(Item:TEMPLATE) {
  return (
    <Link href={'/dashboard/content/'+Item?.slug}>
    <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer hover:scale-105 transition-all'>
        <img src={Item.icon} alt='icon' width={50} height={50}/>
        <h2 className='font-semibold text-lg'>{Item.Name}</h2>
        <p className='text-gray-500 line-clamp-3'>{Item.desc}</p>
    </div>
    </Link>
)
}
