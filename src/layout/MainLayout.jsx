import { Navbar } from '@/components/Navbar'
import { Login } from '@/pages/Login'
import { HeroSection } from '@/pages/student/HeroSection'
import React from 'react'
import { Outlet } from 'react-router-dom'

export const MainLayout = () => {
  return (
    <div>
            <Navbar/>
        <main>
            <Outlet/>
        </main>
    </div>
  )
}
