import React from 'react';

export default function Bold({children}:{children:React.ReactNode}) {
  return (
    <div className='font-bold'>
      {children}
    </div>
  )
}
