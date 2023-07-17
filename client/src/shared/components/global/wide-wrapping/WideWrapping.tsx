import React from 'react'

export default function WideWrapping({children}:{children:React.ReactNode}) {
  return (
    <div className='max-w-screen-xl mx-auto px-4'>
     {children}
    </div>
  )
}
