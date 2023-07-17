"use client"
import React,{useState} from 'react';
import { usePathname } from "next/navigation";
import { TRoutesData } from '@/data/route/routesData';
import Link from 'next/link';
import Center from '@/shared/components/global/center/Index';


export default function ItemBar({Icon,label,path,subRoutes}:TRoutesData) {
  const [isOpen,setIsOpen] = useState(false);
  const pathname = usePathname();
  const isActive = pathname === path || pathname.startsWith(path)


  return (
    <>
     {
       (!subRoutes || subRoutes.length < 1)?(
         <Link href={path} className={`py-4 px-4 font-semiBold rounded-md hover:bg-gray-50 ${isActive ? 'font-bold text-primary bg-gradient-to-r from-indigo-100 via-white to-white' : ''}`}>
           <Center>
           <Icon fontSize={'1.1rem'}/>
            <p>{label}</p>
          </Center>
         </Link>
       )
       :
       (
        <></>
       )
     }
    </>
  )
}
