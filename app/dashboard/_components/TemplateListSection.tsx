import Templates from '@/app/(data)/Templates'
import { Item } from '@radix-ui/react-accordion'
import React from 'react'
import TemplateCard from './TemplateCard'
export interface TEMPLATE{
    Name:string,
    desc:string,
    icon:string,
    category:string,
    slug:string,
    aiPrompt:string,
    form?:FORM[],
    
}
interface FORM {
  label?: string; // Optional
  field?: string; // Optional
  Name?: string; // Optional
  required?: boolean; // Optional
}

export default function TemplateListSection() {
  return (
    <div className='grid grid-cols-1 gap-5 p-5'>
      {Templates.map((item: TEMPLATE, index: number) => {
        return (
          <TemplateCard key={index} {...item} />
        );
      })}
    </div>
  );
}
