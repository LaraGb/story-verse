"use client"
import React,{useState} from 'react';
import {IconType} from 'react-icons';

type itemBarT = {
  Icon:IconType;
  label:string;
  path:string;
  subRoutes:Array<{label:string,path:string}>
}

export default function ItemBar({Icon,label,path,subRoutes}:itemBarT) {
   const [isOpen,setIsOpen] = useState(false);
   console.log(Icon)
  return (
    <>
     {
       subRoutes.length < 1? (
        <li>
          <a href={path} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
            <Icon className="w-6 h-6 text-gray-500 transition duration-75"/>
            <span className="ml-3">{label}</span>
          </a>
        </li>
       ): (
        <li>
           <button type='button' className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
              <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{label}</span>
              <svg sidebar-toggle-item className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
           </button>
           <ul className={`${isOpen?'block':'hidden'} py-2 space-y-2`}>
              {
                subRoutes.map(route =>              
                    <li>
                      <a href={path} className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">{label}</a>
                    </li>
                 )
              }
           </ul>
     </li>
       )
     }
    </>
  )
}
