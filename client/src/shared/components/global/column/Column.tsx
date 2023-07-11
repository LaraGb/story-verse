import React from 'react';

export default function Column({children}:{children:React.ReactNode}) {
  return (
    <div className='flex flex-col space-y-4'>
      {children}
    </div>
  )
}
