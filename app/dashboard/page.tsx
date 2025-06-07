import React from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  return (
    <div>
      <SearchSection/>
      <TemplateListSection/>
      
    </div>
  )
}
