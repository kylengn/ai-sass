'use client'

import { useEffect, useState } from 'react'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import Sidebar from '@/components/sidebar'

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <Sheet>
      <SheetTrigger aria-controls='radix-:R1mcq:'>
        <div className='md:hidden'>
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side='left' className='p-0 bg-gray-900 text-white'>
        <Sidebar />
      </SheetContent>
    </Sheet>
  )
}

export default MobileSidebar
