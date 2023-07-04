import Link from 'next/link'
import React from 'react'

export default function Index({children}:{children:React.ReactNode}) {
  return (
    <button className='shadow secondary_color p-2  text-sm text-white rounded-xl'>
      {children}
    </button>
  )
}

