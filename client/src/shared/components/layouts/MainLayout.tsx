"use client"
import { useState } from 'react';
import TopBar from './components/top-bar/TopBar';
import SideBar from './components/side-bar/SideBar';

export default function MainLayout({children}:{children:React.ReactNode}) {
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  }; 
 
  return (
    <div className="flex h-screen bg-slate-50">

    <aside
       aria-label="sidebar"
       className={`h-full fixed left-0 top-0 transition-transform duration-300 ${
         isSideBarOpen ? '-translate-x-full' : 'translate-x-0'
       } md:translate-x-0 md:static md:w-auto`}
    >
      <SideBar/>
    </aside>

    <div className="flex flex-col flex-1">

      <TopBar
        setIsSideBarOpen={setIsSideBarOpen}
      />


      <main className="flex-1 p-4 overflow-y-auto">
          {children}
      </main>

    </div>

  </div>
  )
}

