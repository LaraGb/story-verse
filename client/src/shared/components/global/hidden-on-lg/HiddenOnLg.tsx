import React from 'react'

export default function HiddenOnLg({children}:{children:React.ReactNode}) {
  return (
    <div className='hidden lg:block'>
       {children}
    </div>
  )
}
