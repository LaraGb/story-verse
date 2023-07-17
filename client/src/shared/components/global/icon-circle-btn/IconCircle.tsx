import React from 'react'
import { IconType } from 'react-icons'

type TIconCircleBtn = {
  icon:React.ReactNode;
  onClick?:(event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function IconCircleBtn({icon,onClick}:TIconCircleBtn) {
  return (
    <button 
      onClick={onClick}
     className="bg-gray-50 font-medium rounded-full text-xl p-2.5 text-center inline-flex items-center mr-2 hover:bg-gray-100">
       {icon}
    </button>
  )
}
