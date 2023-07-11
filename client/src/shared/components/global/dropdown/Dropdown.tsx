'use client';
import React,{useState} from 'react'

type TDropDown = {
   children: React.ReactNode;
   visibleContent:React.ReactNode;
}

export default function Dropdown({children,visibleContent}:TDropDown) {
  const [isOpen,setIsOpen] = useState(true);

  return (
    <div>
      <button className={``} onClick={()=>setIsOpen(state => !state)}>
        {visibleContent}
      </button>
      {
        isOpen && (
            <div className='absolute top-100'>
              {children}
            </div>
        )
      }
    </div>
  )
}
