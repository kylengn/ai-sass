'use client'

import { cn } from '@/lib/utils'
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon
} from 'lucide-react'
import { JetBrains_Mono } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

const jetbrains = JetBrains_Mono({
  weight: '600',
  subsets: ['latin']
})

const routes = [
  {
    label: 'Dashboard',
    href: '/dashboard',
    icon: LayoutDashboard,
    color: 'text-sky-500'
  },
  {
    label: 'Conversation',
    href: '/conversation',
    icon: MessageSquare,
    color: 'text-violet-500'
  },
  {
    label: 'Image Generation',
    href: '/image',
    icon: ImageIcon,
    color: 'text-pink-700'
  },
  {
    label: 'Video Generation',
    href: '/video',
    icon: VideoIcon,
    color: 'text-orange-700'
  },
  {
    label: 'Music Generation',
    href: '/music',
    icon: Music,
    color: 'text-emerald-500'
  },
  {
    label: 'Code Generation',
    href: '/code',
    icon: Code,
    color: 'text-green-700'
  },
  {
    label: 'Settings',
    href: '/settings',
    icon: Settings
  }
]

const Sidebar = () => {
  return (
    <div className='space-y-4 py-4 flex flex-col h-full bg-[#11827] text-white'>
      <div className='px-3 py-2 flex-1'>
        <Link href='/dashboard' className='flex items-center pl-3 mb-14'>
          <div className='relative w-8 h-8 mr-4'>
            <Image
              fill
              sizes='100%'
              alt='logo'
              src='/logo.png'
              placeholder='blur'
              blurDataURL={'/logo.png'}
            />
          </div>

          <h1 className={cn('text-3xl font-bold', jetbrains.className)}>
            Genius
          </h1>
        </Link>

        <div className='space-y-1'>
          {routes.map((route, i) => (
            <Link
              key={i}
              href={route.href}
              className='text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition'
            >
              <div className='flex items-center flex-1'>
                <route.icon className={cn('w-5 h-5 mr-3', route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
